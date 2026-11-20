import type { ImageMetadata } from 'astro';

export interface Proyecto {
	titulo: string;
	fecha: string;
	imagenes: ImageMetadata[];
	color: string;
	rol: string;
	descripcion: string;
	stack: string[];
	web?: string;
	github?: string;
}

/** Datos de la sección Proyectos (en español). La traducción al inglés está en src/i18n/en/proyectos.ts */
import geotecnia1 from '../images/proyectos/geotecniajaen.png';
import geotecnia2 from '../images/proyectos/geotecnia2.png';
import geotecnia3 from '../images/proyectos/geotecnia3.png';
import geotecnia4 from '../images/proyectos/geotecnia4.png';
import asiscapi from '../images/proyectos/asiscapi.png';
import asiscapi2 from '../images/proyectos/asiscapi2.png';
import asiscapi3 from '../images/proyectos/asiscapi3.png';
import romiali from '../images/proyectos/romiali.png';
import romiali2 from '../images/proyectos/romiali2.png';
import romiali3 from '../images/proyectos/romiali3.png';
import celleyes from '../images/proyectos/celleyes-app.png';
import celleyes2 from '../images/proyectos/celleyes2.png';
import uywalky from '../images/proyectos/Uywalky.png';
import patitas1 from '../images/proyectos/patitas.png';
import patitas2 from '../images/proyectos/patitas2.png';
import patitas3 from '../images/proyectos/patitas3.png';
import patitas4 from '../images/proyectos/patitas4.png';
import patitas5 from '../images/proyectos/patitas5.png';

export const PROYECTOS: Proyecto[] = [
	{
		titulo: 'Geotécnica Jaén',
		fecha: 'Junio - Septiembre 2026',
		imagenes: [geotecnia1, geotecnia2, geotecnia3, geotecnia4],
		color: '#2D3237',
		rol: 'Diseñador de Marca, Desarrollador FullStack',
		descripcion:
			'Lideré la creación de la identidad visual y la plataforma web corporativa para Geotecnia Jaén S.A.C., una firma especializada en ingeniería de suelos, concreto y asfalto para los sectores minero y de construcción. Diseñé el logotipo corporativo y prototipé la interfaz en Figma bajo un enfoque B2B que transmite rigor técnico y solidez. Desarrollé el frontend desde cero utilizando Astro y Tailwind CSS, priorizando una arquitectura estática de carga instantánea, escalable y optimizada para SEO técnico (Open Graph y Sitemaps). Finalmente, implementé un flujo de despliegue continuo (CI/CD) con GitHub y Netlify, entregando una solución digital de alto rendimiento lista para competir por contratos industriales.',
		stack: ['Astro', 'Tailwind', 'JavaScript', 'Figma', 'Gemini'],
		web: "https://geotecnia-jaen.netlify.app/",
	},
	{
		titulo: 'AsisCapi',
		fecha: 'Julio - Agosto 2026',
		imagenes: [asiscapi, asiscapi2, asiscapi3],
		color: '#0F2340',
		rol: 'Desarrollador FullStack',
		descripcion:
			'Desarrollé AsisCapi, una plataforma cerrada de gestión de asistencia y control comunitario diseñada a medida de los requerimientos de la capilla Cristo Rey con Next.js y Supabase. Planifiqué y construí una base de datos relacional escalable blindada con políticas de seguridad a nivel de fila (RLS), roles jerárquicos granulares y sincronización en tiempo real mediante WebSockets. Logré digitalizar y optimizar el flujo operativo completo de eventos y registros familiares, garantizando alta concurrencia, integridad de datos y una interfaz intuitiva orientada a resultados.',
		stack: ['Next.js', 'Tailwind', 'TypeScript', 'Supabase', 'Gemini'],
		web: "https://www.facebook.com/jvpcapillacristorey/",
	},
	{
		titulo: 'Romiali',
		fecha: 'Mayo 2026',
		imagenes: [romiali, romiali2, romiali3],
		color: '#F26522',
		rol: 'Desarrollador FullStack',
		descripcion:
			'Diseñé y desarrollé a presencia digital de ROMIALI, un servicio local de estructuras metálicas y automatización en Lima. Diseñé una interfaz de alto contraste en Astro y Tailwind CSS, integrando ilustraciones personalizadas y optimización de gráficos vectoriales. Estructuré la experiencia de usuario enfocada en la conversión rápida, eliminando fricciones mediante enlaces dinámicos directos a WhatsApp para cotizaciones al instante. El resultado es una landing page ultrarrápida, ligera y pensada para transmitir confianza y profesionalismo en el mercado local.',
		stack: ['Astro', 'Tailwind', 'JavaScript', 'Figma', 'Gemini'],
		web: "https://romiali.netlify.app/",
	},
	{
		titulo: 'Celleyes',
		fecha: 'Abril - Diciembre 2024',
		imagenes: [celleyes, celleyes2],
		color: '#0077FF',
		rol: 'Desarrollador Mobile',
		descripcion:
			'En el equipo Hello Code, desarrollé la app mobile con Flutter para asegurar compatibilidad entre Android y iOS a partir de un código base, encargándome de diseñar tanto la interfaz (UI) como la experiencia de usuario (UX). Utilicé MySQL como BD para sincronización en tiempo real. Realicé el testing manual y apliqué feedback de los usuarios. También colaboré en el backend con Django para mayor rapidez con gran volumen de datos, y el frontend con Angular por su escalabilidad.',
		stack: ['Flutter', 'Django', 'Angular', 'MySQL'],
	},
	{
		titulo: 'UyWalky',
		fecha: 'Noviembre - Diciembre 2023',
		imagenes: [uywalky],
		color: '#FEE7C5',
		rol: 'Desarrollador Frontend',
		descripcion:
			'UyWalky es una plataforma donde conectamos a dueños de mascotas con paseadores responsables. Este proyecto supuso crear un sistema multiplataforma compuesto de aplicaciones web, una móvil y backend centralizado para gestión de usuarios en tiempo real. Realicé el frontend responsivo con React, optimizando la experiencia de usuario y el diseño de componentes. Proyecto presentado en la Feria Tecnológica de TECSUP.',
		stack: ['React', 'MySQL', 'Figma', 'Trello'],
		github: 'https://github.com/CarlitosMikhaelTP/PROJECT_2023-II',
	},
		{
		titulo: 'Refugio de Patitas',
		fecha: 'Julio 2023',
		imagenes: [patitas1, patitas2, patitas3, patitas4, patitas5],
		color: '#20C9C0',
		rol: 'Desarrollador Backend',
		descripcion:
			'Refugio de Patitas es una plataforma de adopción y tienda de productos de mascotas con datos ficticios. Realicé el backend y sus protocolos con Laravel para un alto rendimiento. Utilicé SQLite para la BD, por su rapidez y efectividad. Proyecto de fin de curso en TECSUP.',
		stack: ['PHP', 'Laravel', 'JavaScript', 'SQLite'],
		github: 'https://github.com/PieroQuirel/RefugioPatitas',
	},
];
