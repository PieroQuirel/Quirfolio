import { iniciarCarrusel, iniciarLista } from './panel-habilidad';

/**
 * Arrastre de cartas estilo Balatro: la carta sigue al puntero con un poco de
 * retraso y se inclina según la velocidad; las demás del carril se apartan para
 * dejarle sitio. Al soltar (en cualquier parte de la pantalla) vuelve a su
 * carril, al hueco más cercano según su posición horizontal (primero o último
 * si quedó fuera por los lados).
 */
export function iniciarCartas(raiz: HTMLElement) {
	type Carril = { el: HTMLElement; cartas: HTMLElement[] };
	type Pos = { x: number; y: number };

	const reducido = matchMedia('(prefers-reduced-motion: reduce)');
	const carriles: Carril[] = [...raiz.querySelectorAll<HTMLElement>('.carril')].map((el) => ({
		el,
		cartas: [...el.querySelectorAll<HTMLElement>('.mov')],
	}));
	const carrilDe = new Map<HTMLElement, Carril>();
	carriles.forEach((c) => c.cartas.forEach((m) => carrilDe.set(m, c)));
	const pos = new WeakMap<HTMLElement, Pos>();

	// ---- Cuadro de información ----
	const zona = raiz.querySelector<HTMLElement>('.zona')!;
	const destino = zona.querySelector<HTMLElement>('.zona-panel')!;
	let abierta: HTMLElement | null = null; // carta cuyo panel está abierto
	let espera: number | undefined;

	const sobreZona = (x: number, y: number) => {
		const r = zona.getBoundingClientRect();
		return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;
	};

	const mostrar = (m: HTMLElement) => {
		const t = raiz.querySelector<HTMLTemplateElement>(
			`template[data-panel="${CSS.escape(m.dataset.carta ?? '')}"]`,
		);
		if (!t) return;
		clearTimeout(espera);
		zona.classList.remove('cerrando');
		destino.replaceChildren(t.content.cloneNode(true));
		zona.dataset.estado = 'panel';
		abierta = m;
		document.dispatchEvent(new Event('inclinar:escanear')); // activa la inclinación de la carta grande
		iniciarCarrusel(destino.querySelector<HTMLElement>('.ph-carrusel'));
		iniciarLista(destino.querySelector<HTMLElement>('.p-lista'));
		destino.querySelector<HTMLElement>('.nombre-hab')?.focus({ preventScroll: true });
		// en pantallas angostas el cuadro está debajo de los carriles: llevarlo a la vista
		const r = zona.getBoundingClientRect();
		if (r.top > innerHeight * 0.6 || r.bottom < 0)
			zona.scrollIntoView({ behavior: reducido.matches ? 'auto' : 'smooth', block: 'start' });
	};

	const cerrar = () => {
		const volver = abierta;
		abierta = null;
		const fin = () => {
			destino.replaceChildren();
			zona.classList.remove('cerrando');
			zona.dataset.estado = 'vacio';
		};
		if (reducido.matches) fin();
		else {
			zona.classList.add('cerrando');
			espera = window.setTimeout(fin, 180);
		}
		volver?.focus({ preventScroll: true });
	};

	destino.addEventListener('click', (e) => {
		if ((e.target as Element).closest('[data-cerrar]')) cerrar();
	});
	zona.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && zona.dataset.estado === 'panel') cerrar();
	});

	// Huecos del carril: cartas centradas; si no caben, se solapan (como una mano de cartas)
	const medidas = (c: Carril) => {
		const W = c.el.clientWidth;
		const H = c.el.clientHeight;
		const n = c.cartas.length;
		const cw = c.cartas[0].offsetWidth;
		const ch = c.cartas[0].offsetHeight;
		const margen = cw * 0.3;
		const paso = n > 1 ? Math.min(cw * 1.16, (W - 2 * margen - cw) / (n - 1)) : 0;
		const x0 = (W - (cw + paso * (n - 1))) / 2;
		return { x0, paso, y: (H - ch) / 2, n };
	};

	const pintar = (m: HTMLElement, p: Pos, rot = 0) => {
		pos.set(m, p);
		m.style.transform = `translate3d(${p.x.toFixed(1)}px, ${p.y.toFixed(1)}px, 0) rotate(${rot.toFixed(2)}deg)`;
	};

	// Coloca cada carta en su hueco (menos la que se está arrastrando)
	const colocar = (c: Carril, salvo?: HTMLElement) => {
		if (c.el.clientWidth < 2) return; // sección aún oculta (reveal)
		const s = medidas(c);
		c.cartas.forEach((m, i) => {
			m.style.setProperty('--z', String(i + 1));
			if (m !== salvo) pintar(m, { x: s.x0 + i * s.paso, y: s.y });
		});
	};

	const ro = new ResizeObserver((entradas) => {
		for (const e of entradas) {
			const c = carriles.find((k) => k.el === e.target);
			if (c) colocar(c, arr?.m);
		}
		// la primera colocación no se anima; después sí
		requestAnimationFrame(() => raiz.classList.add('listo'));
	});
	carriles.forEach((c) => ro.observe(c.el));

	// ---- Arrastre ----
	let arr: {
		m: HTMLElement;
		c: Carril;
		id: number;
		sx: number; // punto de inicio (para el umbral)
		sy: number;
		ox: number; // dónde se agarró la carta
		oy: number;
		cx: number; // último puntero
		cy: number;
		x: number; // posición suavizada
		y: number;
		rot: number;
		t: number;
		activo: boolean;
		origen: number; // posición en el carril al empezar (se restaura si se suelta en el cuadro)
	} | null = null;
	let cuadro = 0;

	const reordenar = (a: NonNullable<typeof arr>) => {
		const s = medidas(a.c);
		const centro = a.x; // borde izquierdo de la carta arrastrada
		const idx = s.paso
			? Math.max(0, Math.min(s.n - 1, Math.round((centro - s.x0) / s.paso)))
			: 0;
		const actual = a.c.cartas.indexOf(a.m);
		if (idx !== actual) {
			a.c.cartas.splice(actual, 1);
			a.c.cartas.splice(idx, 0, a.m);
			colocar(a.c, a.m);
		}
	};

	const bucle = () => {
		cuadro = 0;
		const a = arr;
		if (!a || !a.activo) return;
		const t = performance.now();
		const dt = Math.max(0.001, Math.min(0.05, (t - a.t) / 1000));
		a.t = t;
		const r = a.c.el.getBoundingClientRect();
		const tx = a.cx - r.left - a.ox;
		const ty = a.cy - r.top - a.oy;
		const k = reducido.matches ? 1 : 1 - Math.exp(-dt / 0.006); // Velocidad de arrastre de carta
		const px = a.x;
		a.x += (tx - a.x) * k;
		a.y += (ty - a.y) * k;
		// inclinación según la velocidad horizontal (se relaja sola al frenar)
		const vx = (a.x - px) / dt;
		const objetivo = reducido.matches ? 0 : Math.max(-14, Math.min(14, vx * 0.018));
		a.rot += (objetivo - a.rot) * (1 - Math.exp(-dt / 0.06));
		pintar(a.m, { x: a.x, y: a.y }, a.rot);
		reordenar(a);
		zona.classList.toggle('encima', sobreZona(a.cx, a.cy));
		cuadro = requestAnimationFrame(bucle);
	};

	const soltar = (e: PointerEvent) => {
		const a = arr;
		if (!a || e.pointerId !== a.id) return;
		arr = null;
		cancelAnimationFrame(cuadro);
		cuadro = 0;
		a.m.classList.remove('arrastrando');
		raiz.classList.remove('con-arrastre');
		zona.classList.remove('esperando', 'encima');
		// un toque/clic sin arrastrar también abre su panel
		if (!a.activo) {
			if (e.type === 'pointerup') mostrar(a.m);
			return;
		}
		if (sobreZona(a.cx, a.cy)) {
			// soltada en el cuadro: muestra su panel y la carta vuelve a su sitio original del carril
			a.c.cartas.splice(a.c.cartas.indexOf(a.m), 1);
			a.c.cartas.splice(a.origen, 0, a.m);
			colocar(a.c);
			mostrar(a.m);
			return;
		}
		// el hueco final se decide por dónde está el puntero al soltar (no por la posición con retraso)
		a.x = a.cx - a.c.el.getBoundingClientRect().left - a.ox;
		reordenar(a);
		colocar(a.c); // vuelve a su hueco con rebote (transición CSS)
	};

	raiz.addEventListener('pointerdown', (e) => {
		const m = (e.target as Element).closest<HTMLElement>('.mov');
		if (!m || arr || (e.pointerType === 'mouse' && e.button !== 0)) return;
		const c = carrilDe.get(m)!;
		const p = pos.get(m) ?? { x: 0, y: 0 };
		const r = c.el.getBoundingClientRect();
		arr = {
			m,
			c,
			id: e.pointerId,
			sx: e.clientX,
			sy: e.clientY,
			ox: e.clientX - r.left - p.x,
			oy: e.clientY - r.top - p.y,
			cx: e.clientX,
			cy: e.clientY,
			x: p.x,
			y: p.y,
			rot: 0,
			t: performance.now(),
			activo: false,
			origen: c.cartas.indexOf(m),
		};
		try {
			m.setPointerCapture(e.pointerId); // sigue recibiendo el movimiento aunque salga de la sección
		} catch {}
	});

	raiz.addEventListener('pointermove', (e) => {
		const a = arr;
		if (!a || e.pointerId !== a.id) return;
		a.cx = e.clientX;
		a.cy = e.clientY;
		if (!a.activo) {
			if (Math.hypot(a.cx - a.sx, a.cy - a.sy) < 5) return;
			a.activo = true;
			a.t = performance.now();
			a.m.classList.add('arrastrando');
			raiz.classList.add('con-arrastre');
			zona.classList.add('esperando'); // el cuadro se ilumina mientras haya una carta en el aire
		}
		if (!cuadro) cuadro = requestAnimationFrame(bucle);
	});
	raiz.addEventListener('pointerup', soltar);
	raiz.addEventListener('pointercancel', soltar);
	raiz.addEventListener('dragstart', (e) => e.preventDefault());

	// Teclado: flechas izquierda/derecha mueven la carta enfocada dentro de su carril
	raiz.addEventListener('keydown', (e) => {
		const m = (e.target as Element).closest<HTMLElement>('.mov');
		if (m && (e.key === 'Enter' || e.key === ' ')) {
			e.preventDefault();
			mostrar(m);
			return;
		}
		if (!m || (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight')) return;
		e.preventDefault();
		const c = carrilDe.get(m)!;
		const i = c.cartas.indexOf(m);
		const j = Math.max(0, Math.min(c.cartas.length - 1, i + (e.key === 'ArrowLeft' ? -1 : 1)));
		if (i === j) return;
		c.cartas.splice(i, 1);
		c.cartas.splice(j, 0, m);
		colocar(c);
	});
}
