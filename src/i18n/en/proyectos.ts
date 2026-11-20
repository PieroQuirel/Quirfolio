/**
 * Traducción al inglés de src/data/proyectos.ts. La clave es el `titulo` del proyecto (marca: no se traduce).
 */
export interface ProyectoEn {
	fecha: string;
	rol: string;
	descripcion: string;
}

export const PROYECTOS_EN: Record<string, ProyectoEn> = {
	'Geotécnica Jaén': {
		fecha: 'June - September 2026',
		rol: 'Brand Designer, Full Stack Developer',
		descripcion:
			'I led the creation of the visual identity and the corporate web platform for Geotecnia Jaén S.A.C., a firm specialized in soil, concrete and asphalt engineering for the mining and construction sectors. I designed the corporate logo and prototyped the interface in Figma with a B2B approach that conveys technical rigor and reliability. I built the frontend from scratch with Astro and Tailwind CSS, prioritizing a static, instant-loading, scalable architecture optimized for technical SEO (Open Graph and Sitemaps). Finally, I set up a continuous deployment (CI/CD) workflow with GitHub and Netlify, delivering a high-performance digital solution ready to compete for industrial contracts.',
	},
	AsisCapi: {
		fecha: 'July - August 2026',
		rol: 'Full Stack Developer',
		descripcion:
			'I developed AsisCapi, a closed attendance management and community control platform tailored to the requirements of the Cristo Rey chapel, built with Next.js and Supabase. I planned and built a scalable relational database protected by row-level security (RLS) policies, granular hierarchical roles and real-time synchronization through WebSockets. I digitized and streamlined the entire operational flow of events and family records, ensuring high concurrency, data integrity and an intuitive, results-oriented interface.',
	},
	Romiali: {
		fecha: 'May 2026',
		rol: 'Full Stack Developer',
		descripcion:
			'I designed and developed the digital presence of ROMIALI, a local metal structures and automation service in Lima. I designed a high-contrast interface in Astro and Tailwind CSS, integrating custom illustrations and vector graphics optimization. I structured the user experience around fast conversion, removing friction with direct dynamic WhatsApp links for instant quotes. The result is an ultra-fast, lightweight landing page built to convey trust and professionalism in the local market.',
	},
	Celleyes: {
		fecha: 'April - December 2024',
		rol: 'Mobile Developer',
		descripcion:
			'On the Hello Code team, I developed the mobile app with Flutter to ensure Android and iOS compatibility from a single codebase, designing both the interface (UI) and the user experience (UX). I used MySQL as the database for real-time synchronization. I ran manual testing and applied user feedback. I also helped with the backend in Django for faster handling of large data volumes, and the frontend in Angular for its scalability.',
	},
	UyWalky: {
		fecha: 'November - December 2023',
		rol: 'Frontend Developer',
		descripcion:
			'UyWalky is a platform that connects pet owners with responsible dog walkers. The project meant building a cross-platform system made up of web applications, a mobile app and a centralized backend for real-time user management. I built the responsive frontend with React, optimizing the user experience and component design. Project presented at the TECSUP Technology Fair.',
	},
	'Refugio de Patitas': {
		fecha: 'July 2023',
		rol: 'Backend Developer',
		descripcion:
			'Refugio de Patitas is a pet adoption platform and pet supplies store with fictional data. I built the backend and its protocols with Laravel for high performance. I used SQLite for the database, for its speed and effectiveness. End-of-course project at TECSUP.',
	},
};
