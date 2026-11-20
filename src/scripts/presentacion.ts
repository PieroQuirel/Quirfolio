/**
 * Selector de contactos de Presentacion.astro: cada botón (.boton-contacto) lleva sus datos en data-*
 * (data-texto, data-href; el correo, data-usuario y data-dominio; el CV, data-cv) y al elegirlo se
 * muestran en la barra con sus acciones: copiar el enlace o, en el CV, descargarlo.
 */
import { copiarTexto, retardo, unirCorreo } from './contacto';

interface Contacto {
	nombre: string;
	texto: string;
	href: string;
	copia: string;
	cv: boolean;
}

/** showSaveFilePicker solo existe en Chrome/Edge y no está en los tipos del DOM */
interface ConSelectorDeArchivos {
	showSaveFilePicker?: (opciones: {
		suggestedName: string;
		types: { description: string; accept: Record<string, string[]> }[];
	}) => Promise<{ createWritable(): Promise<{ write(datos: Blob): Promise<void>; close(): Promise<void> }> }>;
}

const $ = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T;

function leer(boton: HTMLElement): Contacto {
	const nombre = boton.getAttribute('aria-label') ?? '';
	if (boton.dataset.usuario) {
		const correo = unirCorreo(boton.dataset);
		return { nombre, texto: correo, href: `mailto:${correo}`, copia: correo, cv: false };
	}
	const { texto = '', href = '' } = boton.dataset;
	return { nombre, texto, href, copia: href, cv: boton.hasAttribute('data-cv') };
}

function descargarEnlace(href: string, nombre: string) {
	const a = document.createElement('a');
	a.href = href;
	a.download = nombre;
	a.click();
}

export function iniciarContactos(raiz: HTMLElement) {
	const botones = [...raiz.querySelectorAll<HTMLButtonElement>('.boton-contacto')];
	const nombre = $('contacto-nombre');
	const enlace = $<HTMLAnchorElement>('contacto-enlace');
	const aviso = $('contacto-aviso');
	const btnCopiar = $('contacto-copiar');
	const btnDescargar = $('contacto-descargar');
	const textos = raiz.dataset;

	const limpiarAviso = retardo(1800);
	const avisar = (mensaje: string) => {
		aviso.textContent = mensaje;
		limpiarAviso(() => (aviso.textContent = ''));
	};

	let actual: Contacto;
	const elegir = (boton: HTMLElement) => {
		actual = leer(boton);
		// El CV muestra el botón de descargar en vez del de copiar
		btnCopiar.hidden = actual.cv;
		btnDescargar.hidden = !actual.cv;
		botones.forEach((o) => o.setAttribute('aria-pressed', String(o === boton)));
		nombre.textContent = actual.nombre;
		enlace.textContent = actual.texto;
		enlace.href = actual.href;
		aviso.textContent = '';
	};
	botones.forEach((b) => b.addEventListener('click', () => elegir(b)));
	elegir(botones.find((b) => b.getAttribute('aria-pressed') === 'true') ?? botones[0]);

	// Descarga: si el navegador lo permite (Chrome/Edge) se abre "Guardar como…" para elegir la carpeta;
	// si no, se descarga directamente con el nombre del archivo.
	btnDescargar.addEventListener('click', async () => {
		const { href, texto: archivo } = actual;
		try {
			const blob = await (await fetch(href)).blob();
			const ventana = window as Window & ConSelectorDeArchivos;
			if (ventana.showSaveFilePicker) {
				const f = await ventana.showSaveFilePicker({
					suggestedName: archivo,
					types: [{ description: 'PDF', accept: { 'application/pdf': ['.pdf'] } }],
				});
				const w = await f.createWritable();
				await w.write(blob);
				await w.close();
			} else {
				const url = URL.createObjectURL(blob);
				descargarEnlace(url, archivo);
				setTimeout(() => URL.revokeObjectURL(url), 1000);
			}
			avisar(textos.tDescargado ?? '');
		} catch (e) {
			if ((e as Error)?.name === 'AbortError') return; // la persona canceló el cuadro de guardar
			descargarEnlace(href, archivo);
		}
	});

	btnCopiar.addEventListener('click', async () => {
		avisar((await copiarTexto(actual.copia)) ? (textos.tCopiado ?? '') : (textos.tNoCopiado ?? ''));
	});
}
