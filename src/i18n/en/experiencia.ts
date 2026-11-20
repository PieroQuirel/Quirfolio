/**
 * Traducción al inglés de src/data/experiencia.ts.
 * La clave es el `nombre` de la experiencia (igual en ambos idiomas).
 * Los stacks y herramientas son nombres propios de tecnologías: no se traducen.
 */
export interface ExperienciaEn {
	roles: string;
	fecha: string;
	subtitulo: string;
	logros: string[];
	gracias: string;
}

export const EXPERIENCIA_EN: Record<string, ExperienciaEn> = {
	CUBEXED: {
		roles: 'Founder, Full Stack Dev, Designer',
		fecha: 'June 2026 - Present',
		subtitulo: 'Digital Development and Design Studio',
		logros: [
			'Led the conception, design and technical development of custom web solutions for businesses, combining a dynamic frontend with a robust backend.',
			'Managed the full lifecycle (SDLC) of 3 projects, from requirements gathering and UI/UX design through deployment. I also designed the corporate identity as requested.',
			'Set the standards for visual identity, interface optimization and web performance using modern technologies to strengthen clients’ digital presence.',
		],
		gracias:
			'Huge thanks to my beloved girlfriend Bri for always believing in me, I LOVE YOU SO MUCH! (..◜ᴗ◝..) ♡',
	},
	CEGICAP: {
		roles: 'Full Stack Developer',
		fecha: 'February 2026 - April 2026',
		subtitulo: 'Educational training institution',
		logros: [
			'Improved the design and performance of backend and frontend modules using the TALL Stack while developing the Cegicap educational platform.',
			'Implemented new modules, managing migrations and Eloquent queries to improve the user experience based on feedback from 1,000+ users.',
			'Presented progress to stakeholders, collaborated on requirements from other areas of the company and contributed to goals through deliverables and an agile methodology.',
		],
		gracias:
			'Thanks to Diego and Miguel for being my mentors and giving me an opportunity, I appreciate you both very much!',
	},
	'CORP MAGIC SYSTEM': {
		roles: 'Web Designer and Administrator',
		fecha: 'November 2025 - January 2026',
		subtitulo: 'Computer equipment retail',
		logros: [
			'Designed advertising strategies that boosted computer equipment sales by 20% using tools such as Canva, CapCut and Photoshop, applying design and visual identity principles.',
			'Improved website modules and components, customizing them with new JavaScript features. Maintained the PrestaShop e-commerce store.',
			'Designed and applied multimedia content strategies, producing high-converting advertising images and videos. I was also in charge of designing the company’s new mascot.',
		],
		gracias: 'Thanks to Pamela, Kenny, Sebas, Aarón and the whole team for welcoming me with open arms.',
	},
	ZEYTOL: {
		roles: 'Full Stack Developer',
		fecha: 'August 2024 - February 2025',
		subtitulo: 'Systems development at Caqui Systems & Hns',
		logros: [
			'Designed RESTful APIs in Node.js and Spring Boot with DTOs, reducing page response time by 20%.',
			'Designed the business logic and connected MySQL for a new database, improving architecture performance by 15%.',
			'Implemented the backend of a module of the ‘Registro Civil’ project with Laravel, refactoring 10% of the project and verifying it with unit tests.',
			'Supported frontend design and development with Angular, building attractive, responsive interfaces.',
		],
		gracias: 'Thanks to Mr. Eleazar for sharing his knowledge and patience during my learning.',
	},
	'PERÚ DATA RECOVERY': {
		roles: 'Backend Developer',
		fecha: 'January - April 2024',
		subtitulo: 'Data recovery service and software development',
		logros: [
			'Part of the ‘ISO SMART’ project, an incident management software for companies, where I developed the backend modules assigned to me.',
			'Improved response performance by 20% and the documentation of my assigned modules with Java JSF, handling queries with SQL Server.',
			'Took part in restructuring the project with a new team of 6 members, guiding them through the project introduction and the rest of the progress during my time there.',
		],
		gracias:
			'Many thanks to engineer Grovert Leon for his help and support during my time there, for his advice and words of encouragement.',
	},
};
