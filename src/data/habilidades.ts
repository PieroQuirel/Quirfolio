/**
 * Datos de la sección Habilidades
 * - `proyectos[].proyecto` debe ser un nombre de PROYECTOS_INFO (abajo).
 * - `experiencias` usa el `nombre` exacto de src/data/experiencia.ts.
 * Si una lista queda vacía, no aparece en el panel.
 */
import type { ImageMetadata } from 'astro';
import celleyesLogo from '../images/logosproyectos/CELLEYES logo.png';
import uywalkyLogo from '../images/logosproyectos/UyWalky logo.png';
import refugioLogo from '../images/logosproyectos/Refugio patitas logo.png';
import geotecniaLogo from '../images/logosproyectos/Geotecnia Jaen logo.png';
import romialiLogo from '../images/logosproyectos/Romiali logo.png';
import asiscapiLogo from '../images/logosproyectos/AsisCapi logo.png';

import HtmlIcon from '../components/icons/Html.astro';
import CssIcon from '../components/icons/Css.astro';
import JavaScriptIcon from '../components/icons/JavaScript.astro';
import TailwindIcon from '../components/icons/Tailwind.astro';
import BootstrapIcon from '../components/icons/Bootstrap.astro';
import ReactIcon from '../components/icons/React.astro';
import AngularIcon from '../components/icons/Angular.astro';
import AstroIcon from '../components/icons/Astro.astro';
import SpringBootIcon from '../components/icons/SpringBoot.astro';
import DjangoIcon from '../components/icons/Django.astro';
import FlaskIcon from '../components/icons/Flask.astro';
import PHPIcon from '../components/icons/PHP.astro';
import LaravelIcon from '../components/icons/Laravel.astro';
import FlutterIcon from '../components/icons/Flutter.astro';
import SwiftIcon from '../components/icons/Swift.astro';
import MySQLIcon from '../components/icons/MySQL.astro';
import PostgreSQLIcon from '../components/icons/PostgreSQL.astro';
import SQLServerIcon from '../components/icons/SQLServer.astro';
import SQLiteIcon from '../components/icons/SQLite.astro';
import FirebaseIcon from '../components/icons/Firebase.astro';
import MongoDBIcon from '../components/icons/MongoDB.astro';
import GitIcon from '../components/icons/Git.astro';
import GitHubIcon from '../components/icons/GitHub.astro';
import AWSIcon from '../components/icons/AWS.astro';
import JavaIcon from '../components/icons/Java.astro';
import PythonIcon from '../components/icons/Python.astro';
import NodeJSIcon from '../components/icons/NodeJS.astro';
import KotlinIcon from '../components/icons/Kotlin.astro';
import DockerIcon from '../components/icons/Docker.astro';
import ClaudeCodeIcon from '../components/icons/ClaudeCode.astro';

// ---------------------------------------------------------------- Tipos

export type Nivel = 'Teórico' | 'Básico' | 'Intermedio' | 'Avanzado' | 'Experto';

export interface AnioUso {
	anio: number; // p. ej. 2024
	rango: 1 | 2 | 3 | 4 | 5; // altura de la barra (frecuencia de uso)
	enProgreso?: boolean; // barra de color con el texto "En progreso..."
}

export interface Habilidad {
	titulo: string; // texto corto de la carta: "{ HTML }"
	icono: (props: any) => any; // componente SVG de src/components/icons
	nombre: string; // nombre completo
	descripcion: string;
	color: string; // color de acento: barra "en progreso" y gráfico dona
	anios: AnioUso[]; // "Experiencia: N Años" = cantidad de años de la lista
	areas: string[]; // tags de áreas de aplicación
	conocimientos: string[]; // lista de "Conocimiento Técnico"
	dominio: number; // porcentaje 0-100 del gráfico dona
	nivel: Nivel;
	proyectos: { proyecto: string; detalle: string }[];
	experiencias: string[]; // nombres de src/data/experiencia.ts
}

export interface Carril {
	nombre: string; // título del carril
	etiqueta: string; // tag que llevan sus cartas
	cartas: Habilidad[];
}

// ---------------------------------------------------------------- Proyectos

/** Logos de los proyectos de la sección Proyectos (la clave es el nombre que se muestra) */
export const PROYECTOS_INFO: Record<string, { logo: ImageMetadata }> = {
	Celleyes: { logo: celleyesLogo },
	UyWalky: { logo: uywalkyLogo },
	'Refugio de Patitas': { logo: refugioLogo },
	'Geotécnica Jaén': { logo: geotecniaLogo },
	Romiali: { logo: romialiLogo },
	AsisCapi: { logo: asiscapiLogo },
};

// ---------------------------------------------------------------- Carriles

export const CARRILES: Carril[] = [
	{
		nombre: 'Frontend',
		etiqueta: 'Frontend',
		cartas: [
			{
				titulo: 'HTML',
				icono: HtmlIcon,
				nombre: 'HyperText Markup Language',
				descripcion:
					'Es el lenguaje estándar que define la estructura y organiza todo el contenido de una página web. Es el esqueleto de los sitios en internet para garantizar que se vea correctamente en cualquier navegador y dispositivo.',
				color: '#E34F26',
				anios: [
					{ anio: 2022, rango: 4 },
					{ anio: 2023, rango: 5 },
					{ anio: 2024, rango: 5 },
					{ anio: 2025, rango: 5 },
					{ anio: 2026, rango: 5, enProgreso: true },
				],
				areas: ['Desarrollo Web', 'Landing Page', 'Aplicaciones Web', 'Interfaces responsive'],
				conocimientos: ['HTML semántico', 'Accesibilidad', 'Formularios', 'SEO semántico'],
				dominio: 96,
				nivel: 'Experto',
				proyectos: [
					{ proyecto: 'Celleyes', detalle: 'Desarrollo de interfaz web' },
					{ proyecto: 'UyWalky', detalle: 'Desarrollo de interfaz web' },
					{ proyecto: 'Refugio de Patitas', detalle: 'Desarrollo de interfaz web' },
					{ proyecto: 'Geotécnica Jaén', detalle: 'Desarrollo de interfaz web' },
					{ proyecto: 'Romiali', detalle: 'Desarrollo de interfaz web' },
					{ proyecto: 'AsisCapi', detalle: 'Desarrollo de interfaz web' },
				],
				experiencias: ['CUBEXED', 'CEGICAP', 'CORP MAGIC SYSTEM', 'ZEYTOL'],
			},
			{
				titulo: 'CSS',
				icono: CssIcon,
				nombre: 'Cascading Style Sheets',
				descripcion:
					'Es el lenguaje que da estilo a una página web: colores, tipografías, espaciados y la distribución de los elementos. Permite que un mismo contenido se adapte y se vea bien en pantallas de cualquier tamaño.',
				color: '#1572B6',
				anios: [
					{ anio: 2023, rango: 4 },
					{ anio: 2023, rango: 4 },
					{ anio: 2024, rango: 5 },
					{ anio: 2025, rango: 5 },
					{ anio: 2026, rango: 4, enProgreso: true },
				],
				areas: ['Diseño Web', 'Maquetación', 'Animaciones', 'Interfaces responsive'],
				conocimientos: ['Flexbox y Grid', 'Animaciones y transiciones', 'Container queries', 'Variables CSS'],
				dominio: 92,
				nivel: 'Experto',
				proyectos: [
					{ proyecto: 'Celleyes', detalle: 'Estilos y maquetación' },
					{ proyecto: 'UyWalky', detalle: 'Estilos y maquetación' },
					{ proyecto: 'Refugio de Patitas', detalle: 'Estilos y maquetación' },
					{ proyecto: 'Geotécnica Jaén', detalle: 'Estilos y maquetación' },
					{ proyecto: 'Romiali', detalle: 'Estilos y maquetación' },
					{ proyecto: 'AsisCapi', detalle: 'Estilos y maquetación' },
				],
				experiencias: ['CUBEXED', 'CEGICAP', 'CORP MAGIC SYSTEM', 'ZEYTOL'],
			},
			{
				titulo: 'JavaScript',
				icono: JavaScriptIcon,
				nombre: 'JavaScript',
				descripcion:
					'Es el lenguaje de programación de la web. Da interactividad a las páginas: responde a las acciones del usuario, actualiza el contenido sin recargar y se comunica con servidores y APIs.',
				color: '#F7DF1E',
				anios: [
					{ anio: 2023, rango: 5 },
					{ anio: 2024, rango: 5 },
					{ anio: 2024, rango: 3 },
					{ anio: 2025, rango: 2 },
				],
				areas: ['Interactividad Web', 'Validaciones', 'Almacenamiento de datos'],
				conocimientos: ['DOM y eventos', 'Promesas y fetch', 'ES6+', 'Animaciones con JS'],
				dominio: 80,
				nivel: 'Avanzado',
				proyectos: [
					{ proyecto: 'UyWalky', detalle: 'Lógica de la interfaz' },
					{ proyecto: 'Celleyes', detalle: 'Interacción del frontend web' },
					{ proyecto: 'Geotécnica Jaén', detalle: 'Lógica de la interfaz' },
					{ proyecto: 'Romiali', detalle: 'Enlaces dinámicos a WhatsApp' },
					{ proyecto: 'AsisCapi', detalle: 'Lógica de la interfaz con Next.js' },
				],
				experiencias: ['CUBEXED', 'CORP MAGIC SYSTEM', 'ZEYTOL', 'CEGICAP'],
			},
			{
				titulo: 'Bootstrap',
				icono: BootstrapIcon,
				nombre: 'Bootstrap',
				descripcion:
					'Es un framework de CSS con componentes y un sistema de grillas listos para usar. Permite construir interfaces responsive y consistentes con rapidez.',
				color: '#7952B3',
				anios: [
					{ anio: 2023, rango: 4 },
					{ anio: 2024, rango: 5 },
				],
				areas: ['Prototipos', 'Paneles administrativos', 'Interfaces responsive'],
				conocimientos: ['Sistema de grillas', 'Componentes', 'Utilidades'],
				dominio: 70,
				nivel: 'Avanzado',
				proyectos: [{ proyecto: 'Refugio de Patitas', detalle: 'Maquetación de vistas' }],
				experiencias: ['ZEYTOL'],
			},
			{
				titulo: 'React',
				icono: ReactIcon,
				nombre: 'React',
				descripcion:
					'Es una biblioteca de JavaScript para construir interfaces a partir de componentes reutilizables. Actualiza solo lo que cambia en pantalla, ideal para aplicaciones de una sola página.',
				color: '#61DAFB',
				anios: [
					{ anio: 2023, rango: 2 },
					{ anio: 2024, rango: 4 },
					{ anio: 2025, rango: 5 },
				],
				areas: ['Aplicaciones Web', 'SPA', 'Componentes reutilizables'],
				conocimientos: ['Hooks', 'Props y estado', 'Componentes', 'React Router'],
				dominio: 75,
				nivel: 'Avanzado',
				proyectos: [
					{ proyecto: 'UyWalky', detalle: 'Frontend responsivo' },
					{ proyecto: 'AsisCapi', detalle: 'Frontend con Next.js' },
				],
				experiencias: ['CUBEXED'],
			},
			{
				titulo: 'Angular',
				icono: AngularIcon,
				nombre: 'Angular',
				descripcion:
					'Es un framework de TypeScript creado por Google para construir aplicaciones web escalables, contando con una arquitectura de módulos, componentes y servicios.',
				color: '#DD0031',
				anios: [
					{ anio: 2024, rango: 4 },
					{ anio: 2025, rango: 3 },
				],
				areas: ['Aplicaciones Web', 'Paneles administrativos'],
				conocimientos: ['Componentes y módulos', 'Servicios', 'RxJS', 'Routing'],
				dominio: 60,
				nivel: 'Intermedio',
				proyectos: [{ proyecto: 'Celleyes', detalle: 'Frontend web' }],
				experiencias: ['ZEYTOL'],
			},
			{
				titulo: 'Tailwind',
				icono: TailwindIcon,
				nombre: 'Tailwind CSS',
				descripcion:
					'Es un framework de CSS basado en clases utilitarias. Permite diseñar directamente en el marcado, con un sistema de diseño consistente y estilos muy livianos en producción.',
				color: '#38BDF8',
				anios: [
					{ anio: 2025, rango: 4 },
					{ anio: 2026, rango: 5, enProgreso: true },
				],
				areas: ['Diseño Web', 'Sistemas de diseño', 'Interfaces responsive'],
				conocimientos: ['Clases utilitarias', 'Configuración del tema', 'Responsive', 'Modo oscuro'],
				dominio: 90,
				nivel: 'Avanzado',
				proyectos: [
					{ proyecto: 'Geotécnica Jaén', detalle: 'Estilos de la interfaz' },
					{ proyecto: 'Romiali', detalle: 'Interfaz de alto contraste' },
					{ proyecto: 'AsisCapi', detalle: 'Estilos de la interfaz' },
				],
				experiencias: ['CUBEXED', 'CEGICAP'],
			},
			{
				titulo: 'Astro',
				icono: AstroIcon,
				nombre: 'Astro',
				descripcion:
					'Es un framework web enfocado en el rendimiento: genera sitios rápidos enviando el mínimo de JavaScript al navegador. Ideal para portafolios, landing pages y sitios de contenido.',
				color: '#FF5D01',
				anios: [
					{ anio: 2025, rango: 5 },
					{ anio: 2026, rango: 5, enProgreso: true },
				],
				areas: ['Portafolios', 'Landing Page', 'Sitios de contenido'],
				conocimientos: ['Componentes .astro', 'Islas', 'Optimización de imágenes', 'Rutas'],
				dominio: 85,
				nivel: 'Avanzado',
				proyectos: [
					{ proyecto: 'Geotécnica Jaén', detalle: 'Sitio estático optimizado para SEO' },
					{ proyecto: 'Romiali', detalle: 'Landing page ultrarrápida' },
				],
				experiencias: ['CUBEXED'],
			},
		],
	},
	{
		nombre: 'Backend',
		etiqueta: 'Backend',
		cartas: [
			{
				titulo: 'Java',
				icono: JavaIcon,
				nombre: 'Java',
				descripcion:
					'Es un lenguaje de programación orientado a objetos, robusto y muy usado en el mundo empresarial. Corre sobre la JVM, por lo que el mismo código funciona en distintas plataformas.',
				color: '#E76F00',
				anios: [
					{ anio: 2022, rango: 4 },
					{ anio: 2023, rango: 3 },
					{ anio: 2024, rango: 4 },
					{ anio: 2025, rango: 3 },
				],
				areas: ['Backend empresarial', 'APIs REST', 'Sistemas de gestión'],
				conocimientos: ['Programación orientada a objetos', 'Java JSF', 'Spring Boot', 'Consultas con SQL Server'],
				dominio: 75,
				nivel: 'Avanzado',
				proyectos: [],
				experiencias: ['ZEYTOL', 'PERÚ DATA RECOVERY'],
			},
			{
				titulo: 'Spring Boot',
				icono: SpringBootIcon,
				nombre: 'Spring Boot (Java)',
				descripcion:
					'Es un framework de Java para crear APIs y servicios backend robustos con poca configuración. Muy usado en entornos empresariales por su estabilidad y ecosistema.',
				color: '#6DB33F',
				anios: [
					{ anio: 2023, rango: 4 },
					{ anio: 2024, rango: 4 },
					{ anio: 2025, rango: 3 },
				],
				areas: ['APIs REST', 'Backend empresarial'],
				conocimientos: ['DTO', 'Spring Data JPA', 'Controladores REST', 'Validaciones'],
				dominio: 75,
				nivel: 'Avanzado',
				proyectos: [],
				experiencias: ['ZEYTOL'],
			},
			{
				titulo: 'Python',
				icono: PythonIcon,
				nombre: 'Python',
				descripcion:
					'Es un lenguaje de programación de sintaxis clara y legible, muy versátil: se usa en desarrollo web, automatización, análisis de datos e inteligencia artificial.',
				color: '#3776AB',
				anios: [
					{ anio: 2022, rango: 3 },
					{ anio: 2023, rango: 4 },
					{ anio: 2024, rango: 4 },
					{ anio: 2025, rango: 3 },
				],
				areas: ['Backend Web', 'APIs REST', 'Automatización'],
				conocimientos: ['Python Essentials (Cisco)', 'Django', 'Flask', 'APIs REST'],
				dominio: 70,
				nivel: 'Avanzado',
				proyectos: [{ proyecto: 'Celleyes', detalle: 'Backend con Django' }],
				experiencias: [],
			},
			{
				titulo: 'Django',
				icono: DjangoIcon,
				nombre: 'Django (Python)',
				descripcion:
					'Es un framework de Python para desarrollar backends de forma rápida y segura, con ORM, panel de administración y autenticación incluidos.',
				color: '#44B78B',
				anios: [
					{ anio: 2023, rango: 4 },
					{ anio: 2024, rango: 4 },
					{ anio: 2025, rango: 3 },
				],
				areas: ['APIs REST', 'Backend para apps móviles'],
				conocimientos: ['ORM y migraciones', 'Django REST Framework', 'Autenticación'],
				dominio: 70,
				nivel: 'Avanzado',
				proyectos: [{ proyecto: 'Celleyes', detalle: 'Backend y API' }],
				experiencias: [],
			},
			{
				titulo: 'Flask',
				icono: FlaskIcon,
				nombre: 'Flask (Python)',
				descripcion:
					'Es un microframework de Python, ligero y flexible, pensado para crear APIs y aplicaciones web pequeñas sin estructura impuesta.',
				color: '#3BABC3',
				anios: [
					{ anio: 2022, rango: 3 },
					{ anio: 2023, rango: 4 },
				],
				areas: ['APIs ligeras', 'Prototipos'],
				conocimientos: ['Rutas', 'Blueprints', 'Plantillas Jinja'],
				dominio: 55,
				nivel: 'Intermedio',
				proyectos: [],
				experiencias: [],
			},
			{
				titulo: 'PHP',
				icono: PHPIcon,
				nombre: 'PHP: Hypertext Preprocessor',
				descripcion:
					'Es un lenguaje de programación del lado del servidor muy usado en la web. Impulsa gestores de contenido y tiendas en línea, y es la base de frameworks como Laravel.',
				color: '#777BB4',
				anios: [
					{ anio: 2023, rango: 5 },
					{ anio: 2024, rango: 3 },
					{ anio: 2025, rango: 5 },
					{ anio: 2026, rango: 4, enProgreso: true },
				],
				areas: ['Backend Web', 'E-commerce'],
				conocimientos: ['Programación orientada a objetos', 'Composer', 'PrestaShop'],
				dominio: 78,
				nivel: 'Avanzado',
				proyectos: [{ proyecto: 'Refugio de Patitas', detalle: 'Backend' }],
				experiencias: ['CEGICAP', 'CORP MAGIC SYSTEM', 'ZEYTOL', 'CUBEXED'],
			},
			{
				titulo: 'Laravel',
				icono: LaravelIcon,
				nombre: 'Laravel (PHP)',
				descripcion:
					'Es el framework de PHP más popular. Ofrece una sintaxis elegante y herramientas para rutas, base de datos, autenticación y colas, acelerando el desarrollo de aplicaciones web.',
				color: '#FF2D20',
				anios: [
					{ anio: 2023, rango: 4 },
					{ anio: 2024, rango: 4 },
					{ anio: 2025, rango: 5 },
					{ anio: 2026, rango: 5, enProgreso: true },
				],
				areas: ['Backend Web', 'APIs REST', 'Sistemas administrativos'],
				conocimientos: ['Eloquent ORM', 'Migraciones', 'Livewire', 'Middleware'],
				dominio: 88,
				nivel: 'Avanzado',
				proyectos: [{ proyecto: 'Refugio de Patitas', detalle: 'Backend y protocolos' }],
				experiencias: ['CUBEXED', 'CEGICAP', 'ZEYTOL'],
			},
			{
				titulo: 'Node.js',
				icono: NodeJSIcon,
				nombre: 'Node.js',
				descripcion:
					'Es un entorno que permite ejecutar JavaScript fuera del navegador, en el servidor. Gracias a su modelo asíncrono es muy eficiente para crear APIs y servicios web.',
				color: '#5FA04E',
				anios: [
					{ anio: 2023, rango: 3 },
					{ anio: 2024, rango: 5 },
					{ anio: 2025, rango: 3 },
					{ anio: 2026, rango: 3 },
				],
				areas: ['APIs REST', 'Backend Web'],
				conocimientos: ['APIs RESTful', 'DTO', 'Gestión de paquetes con npm', 'Next.js'],
				dominio: 70,
				nivel: 'Avanzado',
				proyectos: [{ proyecto: 'AsisCapi', detalle: 'Aplicación con Next.js' }],
				experiencias: ['ZEYTOL', 'CUBEXED'],
			},
		],
	},
	{
		nombre: 'Mobile',
		etiqueta: 'Mobile',
		cartas: [
			{
				titulo: 'Flutter',
				icono: FlutterIcon,
				nombre: 'Flutter (Dart)',
				descripcion:
					'Es el framework de Google para crear apps nativas para Android e iOS desde un solo código base, con interfaces fluidas construidas a partir de widgets.',
				color: '#02569B',
				anios: [
					{ anio: 2024, rango: 5 },
					{ anio: 2025, rango: 4 },
				],
				areas: ['Apps multiplataforma', 'UI/UX móvil'],
				conocimientos: ['Widgets', 'Gestión de estado', 'Consumo de APIs'],
				dominio: 80,
				nivel: 'Avanzado',
				proyectos: [{ proyecto: 'Celleyes', detalle: 'App mobile multiplataforma' }],
				experiencias: [],
			},
			{
				titulo: 'Swift',
				icono: SwiftIcon,
				nombre: 'Swift',
				descripcion:
					'Es el lenguaje de Apple para desarrollar aplicaciones de iOS y macOS. Es moderno, seguro y rápido, y se combina con SwiftUI para construir interfaces.',
				color: '#F05138',
				anios: [
					{ anio: 2024, rango: 3 },
					{ anio: 2025, rango: 4 },
				],
				areas: ['Apps iOS'],
				conocimientos: ['Fundamentos del lenguaje', 'SwiftUI'],
				dominio: 40,
				nivel: 'Básico',
				proyectos: [],
				experiencias: [],
			},
			{
				titulo: 'Kotlin',
				icono: KotlinIcon,
				nombre: 'Kotlin',
				descripcion:
					'Es un lenguaje moderno y conciso creado por JetBrains, y el lenguaje oficial para el desarrollo de apps Android. Es compatible con Java y reduce el código repetitivo.',
				color: '#7F52FF',
				anios: [
					{ anio: 2023, rango: 3 },
					{ anio: 2024, rango: 2 },
					{ anio: 2025, rango: 3 },
				],
				areas: ['Apps Android'],
				conocimientos: ['Fundamentos del lenguaje', 'Android'],
				dominio: 30,
				nivel: 'Básico',
				proyectos: [],
				experiencias: [],
			},
		],
	},
	{
		nombre: 'Base de Datos',
		etiqueta: 'Data Base',
		cartas: [
			{
				titulo: 'MySQL',
				icono: MySQLIcon,
				nombre: 'MySQL',
				descripcion:
					'Es uno de los sistemas de bases de datos relacionales más usados del mundo. Organiza la información en tablas relacionadas y se consulta con SQL.',
				color: '#4479A1',
				anios: [
					{ anio: 2022, rango: 3 },
					{ anio: 2023, rango: 3 },
					{ anio: 2024, rango: 5 },
					{ anio: 2025, rango: 4 },
					{ anio: 2026, rango: 3, enProgreso: true },
				],
				areas: ['Bases relacionales', 'E-commerce', 'Sincronización de datos'],
				conocimientos: ['Modelado relacional', 'Consultas optimizadas', 'Joins', 'Procedimientos almacenados'],
				dominio: 85,
				nivel: 'Avanzado',
				proyectos: [
					{ proyecto: 'Celleyes', detalle: 'Base de datos en tiempo real' },
					{ proyecto: 'UyWalky', detalle: 'Gestión de usuarios en tiempo real' },
				],
				experiencias: ['ZEYTOL'],
			},
			{
				titulo: 'PostgreSQL',
				icono: PostgreSQLIcon,
				nombre: 'PostgreSQL',
				descripcion:
					'Es una base de datos relacional de código abierto, potente y extensible. Es la base de servicios como Supabase.',
				color: '#4169E1',
				anios: [
					{ anio: 2025, rango: 3 },
					{ anio: 2026, rango: 3, enProgreso: true },
				],
				areas: ['Bases relacionales', 'Backend como servicio'],
				conocimientos: ['Consultas SQL', 'Relaciones', 'Supabase'],
				dominio: 65,
				nivel: 'Avanzado',
				proyectos: [{ proyecto: 'AsisCapi', detalle: 'Base de datos con Supabase' }],
				experiencias: ['CUBEXED'],
			},
			{
				titulo: 'SQL Server',
				icono: SQLServerIcon,
				nombre: 'Microsoft SQL Server',
				descripcion:
					'Es el sistema de bases de datos relacionales de Microsoft, muy usado en entornos empresariales junto a aplicaciones Java y .NET.',
				color: '#CC2927',
				anios: [{ anio: 2024, rango: 4 }],
				areas: ['Sistemas empresariales'],
				conocimientos: ['T-SQL', 'Procedimientos almacenados', 'Optimización de consultas'],
				dominio: 70,
				nivel: 'Avanzado',
				proyectos: [],
				experiencias: ['PERÚ DATA RECOVERY'],
			},
			{
				titulo: 'SQLite',
				icono: SQLiteIcon,
				nombre: 'SQLite',
				descripcion:
					'Es una base de datos ligera que vive en un solo archivo, sin servidor. Es rápida y efectiva para proyectos pequeños y aplicaciones locales.',
				color: '#0F80CC',
				anios: [{ anio: 2023, rango: 3 }],
				areas: ['Proyectos ligeros', 'Bases locales'],
				conocimientos: ['Bases embebidas', 'Consultas SQL'],
				dominio: 60,
				nivel: 'Intermedio',
				proyectos: [{ proyecto: 'Refugio de Patitas', detalle: 'Base de datos' }],
				experiencias: [],
			},
			{
				titulo: 'Firebase',
				icono: FirebaseIcon,
				nombre: 'Firebase',
				descripcion:
					'Es la plataforma de Google con servicios listos para apps: autenticación, base de datos en tiempo real, almacenamiento y hosting.',
				color: '#FFCA28',
				anios: [
					{ anio: 2024, rango: 2 },
					{ anio: 2025, rango: 2 },
					{ anio: 2026, rango: 3 },
				],
				areas: ['Apps móviles', 'Autenticación'],
				conocimientos: ['Authentication', 'Firestore', 'Hosting'],
				dominio: 50,
				nivel: 'Intermedio',
				proyectos: [],
				experiencias: ['CEGICAP'],
			},
			{
				titulo: 'MongoDB',
				icono: MongoDBIcon,
				nombre: 'MongoDB',
				descripcion:
					'Es una base de datos NoSQL que guarda la información en documentos flexibles, similares a JSON, en lugar de tablas.',
				color: '#47A248',
				anios: [
					{ anio: 2023, rango: 3 },
					{ anio: 2024, rango: 2 },
					{ anio: 2026, rango: 3 }
				],
				areas: ['Bases NoSQL'],
				conocimientos: ['Documentos y colecciones', 'Operaciones CRUD'],
				dominio: 40,
				nivel: 'Básico',
				proyectos: [],
				experiencias: [],
			},
		],
	},
	{
		nombre: 'Tools',
		etiqueta: 'Tools',
		cartas: [
			{
				titulo: 'Git',
				icono: GitIcon,
				nombre: 'Git',
				descripcion:
					'Es el sistema de control de versiones más usado. Registra cada cambio del código y permite trabajar en equipo con ramas sin pisarse el trabajo.',
				color: '#F05032',
				anios: [
					{ anio: 2023, rango: 4 },
					{ anio: 2024, rango: 5 },
					{ anio: 2025, rango: 5 },
					{ anio: 2026, rango: 5, enProgreso: true },
				],
				areas: ['Control de versiones', 'Trabajo en equipo'],
				conocimientos: ['Ramas', 'Merge y rebase', 'Resolución de conflictos', 'Git Flow'],
				dominio: 90,
				nivel: 'Avanzado',
				proyectos: [
					{ proyecto: 'Celleyes', detalle: 'Control de versiones en equipo' },
					{ proyecto: 'UyWalky', detalle: 'Control de versiones en equipo' },
					{ proyecto: 'Refugio de Patitas', detalle: 'Control de versiones' },
					{ proyecto: 'Romiali', detalle: 'Control de versiones' },
					{ proyecto: 'Geotécnica Jaén', detalle: 'Control de versiones' },
					{ proyecto: 'AsisCapi', detalle: 'Control de versiones' },
				],
				experiencias: ['CUBEXED', 'CEGICAP', 'ZEYTOL', 'PERÚ DATA RECOVERY'],
			},
			{
				titulo: 'GitHub',
				icono: GitHubIcon,
				nombre: 'GitHub',
				descripcion:
					'Es la plataforma para alojar repositorios Git y colaborar: revisiones de código, gestión de tareas y automatización de despliegues.',
				color: '#8957E5',
				anios: [
					{ anio: 2023, rango: 4 },
					{ anio: 2024, rango: 5 },
					{ anio: 2025, rango: 5 },
					{ anio: 2026, rango: 5, enProgreso: true },
				],
				areas: ['Repositorios', 'Colaboración', 'Despliegues'],
				conocimientos: ['Pull requests', 'Issues', 'GitHub Actions', 'GitHub Pages'],
				dominio: 88,
				nivel: 'Avanzado',
				proyectos: [
					{ proyecto: 'Celleyes', detalle: 'Repositorio del equipo' },
					{ proyecto: 'UyWalky', detalle: 'Repositorio del equipo' },
					{ proyecto: 'Refugio de Patitas', detalle: 'Repositorio' },
					{ proyecto: 'Romiali', detalle: 'Repositorio' },
					{ proyecto: 'Geotécnica Jaén', detalle: 'Repositorio' },
					{ proyecto: 'AsisCapi', detalle: 'Repositorio' },
				],
				experiencias: ['CUBEXED', 'CEGICAP', 'ZEYTOL', 'PERÚ DATA RECOVERY'],
			},
			{
				titulo: 'Docker',
				icono: DockerIcon,
				nombre: 'Docker',
				descripcion:
					'Es una plataforma que empaqueta una aplicación con todo lo que necesita en contenedores. Así funciona igual en cualquier equipo o servidor, y simplifica el despliegue.',
				color: '#1D63ED',
				anios: [
					{ anio: 2024, rango: 1 },
					{ anio: 2025, rango: 2 },
				],
				areas: ['Contenedores', 'Despliegue', 'Entornos de desarrollo'],
				conocimientos: ['Contenedores', 'Imágenes', 'Dockerfile'],
				dominio: 35,
				nivel: 'Básico',
				proyectos: [],
				experiencias: [],
			},
			{
				titulo: 'AWS',
				icono: AWSIcon,
				nombre: 'Amazon Web Services',
				descripcion:
					'Es la plataforma de servicios en la nube de Amazon: servidores, almacenamiento, bases de datos y herramientas para desplegar aplicaciones a escala.',
				color: '#FF9900',
				anios: [
					{ anio: 2024, rango: 2 },
					{ anio: 2025, rango: 2 },
				],
				areas: ['Despliegue en la nube'],
				conocimientos: ['EC2', 'S3', 'Despliegues'],
				dominio: 25,
				nivel: 'Básico',
				proyectos: [],
				experiencias: [],
			},
			{
				titulo: 'Claude Code',
				icono: ClaudeCodeIcon,
				nombre: 'Claude Code (Anthropic)',
				descripcion:
					'Es el agente de programación de Anthropic que trabaja desde la terminal: lee el código del proyecto, edita archivos y ejecuta comandos. Acelera el desarrollo, la refactorización y la automatización de tareas.',
				color: '#D97757',
				anios: [{ anio: 2026, rango: 5, enProgreso: true }],
				areas: ['Desarrollo asistido por IA', 'Automatización'],
				conocimientos: ['Desarrollo asistido por IA', 'Automatización con IA', 'Refactorización', 'Revisión de código'],
				dominio: 85,
				nivel: 'Avanzado',
				proyectos: [],
				experiencias: ['CUBEXED', 'CEGICAP'],
			},
		],
	},
];
