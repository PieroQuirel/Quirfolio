import type { ImageMetadata } from 'astro';
import cubexed from "../images/logoslaborales/cubexed logo.png";
import cegicap from "../images/logoslaborales/cegicap logo.png";
import corp from "../images/logoslaborales/corp magic system logo.png";
import corpBlanco from "../images/logoslaborales/corp magic system logo blanco.png";
import zeytol from "../images/logoslaborales/zeytol logo.png";
import pdr from "../images/logoslaborales/peru data recovery logo.png";

export interface Experiencia {
	nombre: string;
	roles: string;
	fecha: string;
	subtitulo: string;
	logo?: ImageMetadata;
	logoSobreBlanco?: ImageMetadata;
	logros: string[];
	stack: string[];
	herramientas?: string[];
	web?: string;
	linkedin?: string;
	gracias: string;
}

export const EXPERIENCIA: Experiencia[] = [
	{
		nombre: "CUBEXED",
		roles: "Fundador, Dev Full Stack, Designer",
		fecha: "Junio 2026 - Presente",
		subtitulo: "Estudio de Desarrollo y Diseño Digital",
		logo: cubexed,
		logros: [
			"Lideré la concepción, el diseño y el desarrollo técnico de soluciones web a medida para negocios, integrando frontend dinámico y backend robusto.",
			"Gestioné el ciclo completo (SDLC) de 3 proyectos, desde el estudio de requerimientos, diseño UI/UX hasta su despliegue. Adicional a esto realicé el diseño de identidad corporativa según lo solicitado.",
			"Establecí los estándares de identidad visual, optimización de interfaces y rendimiento web utilizando tecnologías modernas para potenciar la presencia digital de los clientes.",
		],
		stack: ["Astro", "Next.js", "Laravel", "Tailwind", "Supabase"],
		herramientas: ["Figma", "Gemini", "Claude Code", "Netlify", "Canva", "Adobe Premier"],
		gracias:
			"Muchisimas gracias a mi amada novia Bri por siempre creer en mi, TE AMO TANTO! (..◜ᴗ◝..) ♡",
	},
	{
		nombre: "CEGICAP",
		roles: "Desarrollador Full Stack",
		fecha: "Febrero 2026 - Abril 2026",
		subtitulo: "Institución educativa de capacitación",
		logo: cegicap,
		logros: [
			"Mejoré el diseño y rendimiento de módulos backend y frontend usando TALL Stack en el desarrollo de la plataforma educativa de Cegicap.",
			"Implementé módulos nuevos gestionando migraciones y consultas con Eloquent para mejorar la experiencia de usuario según el feedback recibido con una participación de +1000 usuarios.",
			"Presenté avances con oratoria, colaboré con los requerimientos de otras áreas de la empresa y contribuí al cumplimiento de los objetivos por medio de entregables y metodología ágil.",
		],
		stack: ["PHP", "Tailwind", "Alpine.js", "Laravel", "Livewire", "Firebase"],
		herramientas: ["Git/Github", "Postman", "Gemini", "Antigravity", "Claude Code", "Notion"],
		web: "https://cegicap.com/",
		linkedin: "https://www.linkedin.com/company/cegicap/",
		gracias:
			"Gracias a Diego y a Miguel por ser mis mentores y darme una oportunidad, los aprecio mucho!",
	},
	{
		nombre: "CORP MAGIC SYSTEM",
		roles: "Diseñador y Administrador Web",
		fecha: "Noviembre 2025 - Enero 2026",
		subtitulo: "Comercio de Equipos de cómputo",
		logo: corpBlanco,
		logoSobreBlanco: corp,
		logros: [
			"Diseñé estrategias publicitarias que impulsaron las ventas de equipos de cómputo en un 20% utilizando herramientas como Canva, CapCut y Photoshop, además de aplicar criterios de diseño e identidad visual.",
			"Mejoré módulos y componentes de la página web, personalizándolo con nuevas funciones en JavaScript. Realicé el mantenimiento del e-commerce en PrestaShop",
			"Diseñé y apliqué estrategias de contenido multimedia, produciendo imágenes y videos publicitarios de alta conversión. A su vez fui el encargado de diseñar la nueva mascota de la empresa.",
		],
		stack: ["PrestaShop", "CSS", "JavaScript"],
		herramientas: ["Canva", "CapCut", "Photoshop", "VS Code"],
		web: "https://corpmagicsystem.com/",
		gracias: "Gracias a Pamela, Kenny, Sebas, Aarón y a todo el equipo por recibirme con los brazos abiertos",
	},
	{
		nombre: "ZEYTOL",
		roles: "Desarrollador Full Stack",
		fecha: "Agosto 2024 - Febrero 2025",
		subtitulo: "Desarrollo de Sistemas Caqui Systems & Hns",
		logo: zeytol,
		logros: [
			"Diseñé APIs RESTful en Node.js y Spring Boot con DTO, reduciendo el tiempo de respuesta de las páginas en un 20%.",
			"Diseñé la lógica de negocio y conecté MySQL para una nueva base de datos, optimizando el rendimiento de la arquitectura en un 15%.",
			"Implementé con Laravel el backend de un módulo del proyecto 'Registro Civil', refactorizando el 10% del proyecto verificandolo con pruebas unitarias.",
			"Apoyé en el diseño y desarrollo frontend con Angular, con interfaces atractivas y responsivas.",
		],
		stack: ["Bootstrap", "Node.js", "Spring Boot", "Laravel", "MySQL", "Angular"],
		herramientas: ["Git/Github", "Postman", "MySQL Workbench", "VS Code"],
		web: "https://www.zeytoltech.com/",
		linkedin: "https://www.linkedin.com/company/zeytol/",
		gracias: "Gracias al señor Eleazar por compartir su conocimiento y paciencia durante mi aprendizaje",
	},
	{
		nombre: "PERÚ DATA RECOVERY",
		roles: "Desarrollador Backend",
		fecha: "Enero - Abril 2024",
		subtitulo: "Servicio de recuperación de datos y Desarrollo de software",
		logo: pdr,
		logros: [
			"Fui parte del proyecto 'ISO SMART', un software de gestión de incidentes para empresas donde desarrollé modulos asignados por parte del backend.",
			"Mejoré en un 20% el rendimiento de respuesta y la documentación de los módulos asignados con Java JSF, manejando consultas con SQL Server.",
			"Participé en la reestructuración del proyecto con un equipo nuevo de 6 integrantes, guiándolos durante la introducción al proyecto y el resto de progreso durante mi estadía.",
		],
		stack: ["Java JSF", "SQL Server"],
		herramientas: ["Figma", "SSMS", "VS Code"],
		web: "https://perudatarecovery.com.pe/",
		linkedin: "https://www.linkedin.com/company/peru-data-recovery-pe/",
		gracias: "Muchas gracias al ingeniero Grovert Leon por su ayuda y respaldo durante mi estadía, por sus consejos y palabras de aliento",
	},
];


/** Nombres válidos para referenciar una experiencia desde otros datos (ej: habilidades) */
export type NombreExperiencia = (typeof EXPERIENCIA)[number]['nombre'];
