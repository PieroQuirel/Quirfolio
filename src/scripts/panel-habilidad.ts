/**
 * Interacción de los dos listados que lleva el panel de una habilidad (PanelHabilidad.astro):
 * el carrusel de experiencias (eje X) y la lista de proyectos (eje Y).
 * Con ratón se arrastran con rebote en los extremos; en táctil usan el scroll nativo.
 */
import { arrastrable } from './arrastre';

/** Parte del exceso que cede el contenido al arrastrar más allá de un extremo */
const RESISTENCIA = 0.35;

/** Más allá del límite el contenido cede un poco (--rebote) y vuelve con un resorte al soltar */
const rebotar = (el: HTMLElement, objetivo: number, max: number) => {
	const exceso = objetivo < 0 ? objetivo : objetivo > max ? objetivo - max : 0;
	el.style.setProperty('--rebote', `${-exceso * RESISTENCIA}px`);
};
const sinRebote = (el: HTMLElement) => el.style.removeProperty('--rebote');

/** Un eje de scroll arrastrable con rebote */
function arrastrarConRebote(el: HTMLElement, eje: 'x' | 'y') {
	const vertical = eje === 'y';
	const leer = () => (vertical ? el.scrollTop : el.scrollLeft);
	let inicio = 0;
	arrastrable(el, {
		eje,
		umbral: 4,
		soloRaton: true,
		alPresionar: () => (inicio = leer()),
		alMover: (d) => {
			const max = vertical ? el.scrollHeight - el.clientHeight : el.scrollWidth - el.clientWidth;
			if (max <= 2) return;
			if (vertical) el.scrollTop = inicio - d;
			else el.scrollLeft = inicio - d;
			rebotar(el, inicio - d, max);
		},
		alSoltar: () => sinRebote(el),
	});
}

export function iniciarCarrusel(el: HTMLElement | null) {
	if (!el) return;
	el.addEventListener('scroll', () => el.classList.toggle('movido', el.scrollLeft > 2), { passive: true });
	arrastrarConRebote(el, 'x');
}

/** En táctil, hasta este número de proyectos la lista nunca se vuelve desplazable */
const MAX_SIN_DESPLAZAR_TACTIL = 5;

/**
 * La lista solo se acota y se vuelve desplazable (.acotada) si tiene más proyectos que los que caben
 * (--visibles) y, en táctil, más de MAX_SIN_DESPLAZAR_TACTIL. Con menos no captura el gesto: el dedo
 * sobre ella sigue desplazando la página.
 * Las clases mas-arriba / mas-abajo activan el difuminado solo cuando queda contenido en esa dirección,
 * y data-lenis-prevent deja que la rueda desplace la lista en vez de la página mientras desborda.
 */
export function iniciarLista(el: HTMLElement | null) {
	if (!el) return;
	const proyectos = el.children.length;
	const estado = () => {
		const visibles = Number.parseInt(getComputedStyle(el).getPropertyValue('--visibles'), 10) || 3;
		const tactil = matchMedia('(pointer: coarse)').matches;
		el.classList.toggle('acotada', proyectos > (tactil ? Math.max(visibles, MAX_SIN_DESPLAZAR_TACTIL) : visibles));
		const hay = el.scrollHeight - el.clientHeight > 2;
		el.classList.toggle('desplazable', hay);
		el.classList.toggle('mas-arriba', hay && el.scrollTop > 2);
		el.classList.toggle('mas-abajo', hay && el.scrollTop + el.clientHeight < el.scrollHeight - 2);
		el.toggleAttribute('data-lenis-prevent', hay);
	};
	el.addEventListener('scroll', estado, { passive: true });
	// --visibles cambia con el ancho del panel (container query): se observa el panel, no la lista,
	// porque el tamaño de la lista también cambia al acotarla
	new ResizeObserver(estado).observe(el.closest('.ph') ?? el);
	estado();
	arrastrarConRebote(el, 'y');
}
