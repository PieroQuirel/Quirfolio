/**
 * Arrastre con puntero (mouse, tacto o lápiz) en un eje, compartido por los carruseles del sitio.
 *
 * Resuelve lo que todos repetían:
 * - Solo botón principal del mouse; con `soloRaton` el tacto queda para el scroll nativo.
 * - Umbral antes de empezar (un toque o clic corto no es arrastre).
 * - Captura del puntero al empezar, para seguir recibiendo el movimiento fuera del elemento.
 * - Clase `arrastrando` en el elemento mientras dura (cursor "grabbing", sin transiciones…).
 * - Bloqueo del clic que llega al soltar tras un arrastre, y del arrastre nativo de imágenes.
 *
 * Cada componente decide qué hacer con el desplazamiento en `alMover` / `alSoltar`.
 */
export interface OpcionesArrastre {
	/** Eje del desplazamiento (por defecto 'x') */
	eje?: 'x' | 'y';
	/** px que hay que mover antes de considerar que es un arrastre (por defecto 6) */
	umbral?: number;
	/** Solo mouse: en táctil se deja el scroll nativo (por defecto false) */
	soloRaton?: boolean;
	/** Al presionar (aún no es arrastre) */
	alPresionar?: (e: PointerEvent) => void;
	/** En cada movimiento, ya superado el umbral. `d` = desplazamiento desde que se presionó */
	alMover: (d: number, e: PointerEvent) => void;
	/** Al soltar o cancelar; `arrastro` indica si llegó a superar el umbral */
	alSoltar?: (d: number, e: PointerEvent, arrastro: boolean) => void;
}

export interface Arrastre {
	/** Hay un puntero presionado sobre el elemento */
	readonly presionado: boolean;
	/** Se superó el umbral y el elemento se está arrastrando */
	readonly arrastrando: boolean;
}

export function arrastrable(el: HTMLElement, o: OpcionesArrastre): Arrastre {
	const { eje = 'x', umbral = 6, soloRaton = false } = o;
	const coord = (e: PointerEvent) => (eje === 'x' ? e.clientX : e.clientY);
	let id: number | null = null;
	let inicio = 0;
	let d = 0;
	let arrastrando = false;
	let bloquearClic = false;

	el.addEventListener('pointerdown', (e) => {
		if (e.pointerType === 'mouse' ? e.button !== 0 : soloRaton) return;
		id = e.pointerId;
		inicio = coord(e);
		d = 0;
		bloquearClic = false;
		o.alPresionar?.(e);
	});

	el.addEventListener('pointermove', (e) => {
		if (e.pointerId !== id) return;
		d = coord(e) - inicio;
		if (!arrastrando) {
			if (Math.abs(d) < umbral) return;
			arrastrando = bloquearClic = true;
			el.setPointerCapture(e.pointerId);
			el.classList.add('arrastrando');
		}
		o.alMover(d, e);
	});

	const soltar = (e: PointerEvent) => {
		if (e.pointerId !== id) return;
		const arrastro = arrastrando;
		id = null;
		arrastrando = false;
		el.classList.remove('arrastrando');
		o.alSoltar?.(arrastro ? d : 0, e, arrastro);
	};
	el.addEventListener('pointerup', soltar);
	el.addEventListener('pointercancel', soltar);

	// El clic que llega al soltar un arrastre no debe activar lo que quedó debajo del puntero
	el.addEventListener(
		'click',
		(e) => {
			if (!bloquearClic) return;
			e.preventDefault();
			e.stopPropagation();
			bloquearClic = false;
		},
		true,
	);
	el.addEventListener('dragstart', (e) => e.preventDefault());

	return {
		get presionado() {
			return id !== null;
		},
		get arrastrando() {
			return arrastrando;
		},
	};
}
