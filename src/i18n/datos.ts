/**
 * Datos de contenido ya "traducidos": en español devuelven los originales y en inglés
 * les superponen los textos de src/i18n/en/*. Los datos estructurales (colores, años,
 * logos, stack…) se comparten entre idiomas.
 */
import { EXPERIENCIA, type Experiencia } from '../data/experiencia';
import { PROYECTOS, type Proyecto } from '../data/proyectos';
import { CARRILES, type Carril } from '../data/habilidades';
import { EXPERIENCIA_EN } from './en/experiencia';
import { PROYECTOS_EN } from './en/proyectos';
import { HABILIDADES_EN, DETALLES_EN, CARRILES_EN } from './en/habilidades';
import type { Lang } from './ui';

const falta = (que: string, clave: string): never => {
	throw new Error(`[i18n] Falta la traducción al inglés de ${que} "${clave}"`);
};

/** Nombres largos (CORP MAGIC SYSTEM…) llevan la tipografía más pequeña en las tarjetas */
export const nombreLargo = (nombre: string) => nombre.length > 10;

export const getExperiencia = (lang: Lang): Experiencia[] =>
	lang === 'es'
		? EXPERIENCIA
		: EXPERIENCIA.map((e) => ({ ...e, ...(EXPERIENCIA_EN[e.nombre] ?? falta('la experiencia', e.nombre)) }));

export const getProyectos = (lang: Lang): Proyecto[] =>
	lang === 'es'
		? PROYECTOS
		: PROYECTOS.map((p) => ({ ...p, ...(PROYECTOS_EN[p.titulo] ?? falta('el proyecto', p.titulo)) }));

export const getCarriles = (lang: Lang): Carril[] =>
	lang === 'es'
		? CARRILES
		: CARRILES.map((c) => ({
				...c,
				nombre: CARRILES_EN[c.nombre] ?? falta('el carril', c.nombre),
				cartas: c.cartas.map((h) => {
					const t = HABILIDADES_EN[h.titulo] ?? falta('la habilidad', h.titulo);
					return {
						...h,
						...t,
						nombre: t.nombre ?? h.nombre,
						proyectos: h.proyectos.map((p) => ({
							...p,
							detalle: DETALLES_EN[p.detalle] ?? falta('el detalle', p.detalle),
						})),
					};
				}),
			}));
