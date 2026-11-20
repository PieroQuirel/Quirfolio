/**
 * Traducción al inglés de src/data/habilidades.ts.
 * La clave es el `titulo` de la carta (igual que en los datos en español).
 * Solo se traducen los textos; colores, años, dominio, logos, etc. no se duplican.
 * `areas` y `conocimientos` reemplazan la lista completa (mismo orden que el original).
 */
export interface HabilidadEn {
	nombre?: string;
	descripcion: string;
	areas: string[];
	conocimientos: string[];
}

export const HABILIDADES_EN: Record<string, HabilidadEn> = {
	HTML: {
		descripcion:
			'The standard language that defines the structure and organizes all the content of a web page. It is the skeleton of every website, making sure it displays correctly in any browser and on any device.',
		areas: ['Web Development', 'Landing Pages', 'Web Applications', 'Responsive Interfaces'],
		conocimientos: ['Semantic HTML', 'Accessibility', 'Forms', 'Semantic SEO'],
	},
	CSS: {
		descripcion:
			'The language that styles a web page: colors, typography, spacing and the layout of its elements. It lets the same content adapt and look good on screens of any size.',
		areas: ['Web Design', 'Layout', 'Animations', 'Responsive Interfaces'],
		conocimientos: ['Flexbox and Grid', 'Animations and transitions', 'Container queries', 'CSS variables'],
	},
	JavaScript: {
		descripcion:
			'The programming language of the web. It makes pages interactive: it responds to user actions, updates content without reloading and communicates with servers and APIs.',
		areas: ['Web Interactivity', 'Validations', 'Data Storage'],
		conocimientos: ['DOM and events', 'Promises and fetch', 'ES6+', 'JS animations'],
	},
	Bootstrap: {
		descripcion:
			'A CSS framework with ready-to-use components and a grid system. It makes it quick to build responsive, consistent interfaces.',
		areas: ['Prototypes', 'Admin Panels', 'Responsive Interfaces'],
		conocimientos: ['Grid system', 'Components', 'Utilities'],
	},
	React: {
		descripcion:
			'A JavaScript library for building interfaces out of reusable components. It updates only what changes on screen, which makes it ideal for single-page applications.',
		areas: ['Web Applications', 'SPA', 'Reusable Components'],
		conocimientos: ['Hooks', 'Props and state', 'Components', 'React Router'],
	},
	Angular: {
		descripcion:
			'A TypeScript framework created by Google for building scalable web applications, with an architecture of modules, components and services.',
		areas: ['Web Applications', 'Admin Panels'],
		conocimientos: ['Components and modules', 'Services', 'RxJS', 'Routing'],
	},
	Tailwind: {
		descripcion:
			'A CSS framework based on utility classes. It lets you design directly in the markup, with a consistent design system and very lightweight styles in production.',
		areas: ['Web Design', 'Design Systems', 'Responsive Interfaces'],
		conocimientos: ['Utility classes', 'Theme configuration', 'Responsive design', 'Dark mode'],
	},
	Astro: {
		descripcion:
			'A performance-focused web framework: it builds fast sites by sending the minimum JavaScript to the browser. Ideal for portfolios, landing pages and content sites.',
		areas: ['Portfolios', 'Landing Pages', 'Content Sites'],
		conocimientos: ['.astro components', 'Islands', 'Image optimization', 'Routing'],
	},
	Java: {
		descripcion:
			'An object-oriented programming language, robust and widely used in the enterprise world. It runs on the JVM, so the same code works across different platforms.',
		areas: ['Enterprise Backend', 'REST APIs', 'Management Systems'],
		conocimientos: ['Object-oriented programming', 'Java JSF', 'Spring Boot', 'SQL Server queries'],
	},
	'Spring Boot': {
		descripcion:
			'A Java framework for building robust APIs and backend services with minimal configuration. Widely used in enterprise environments for its stability and ecosystem.',
		areas: ['REST APIs', 'Enterprise Backend'],
		conocimientos: ['DTOs', 'Spring Data JPA', 'REST controllers', 'Validations'],
	},
	Python: {
		descripcion:
			'A programming language with clear, readable syntax and great versatility: it is used in web development, automation, data analysis and artificial intelligence.',
		areas: ['Web Backend', 'REST APIs', 'Automation'],
		conocimientos: ['Python Essentials (Cisco)', 'Django', 'Flask', 'REST APIs'],
	},
	Django: {
		descripcion:
			'A Python framework for building backends quickly and securely, with an ORM, an admin panel and authentication built in.',
		areas: ['REST APIs', 'Backend for Mobile Apps'],
		conocimientos: ['ORM and migrations', 'Django REST Framework', 'Authentication'],
	},
	Flask: {
		descripcion:
			'A lightweight, flexible Python microframework designed for building APIs and small web applications without an imposed structure.',
		areas: ['Lightweight APIs', 'Prototypes'],
		conocimientos: ['Routing', 'Blueprints', 'Jinja templates'],
	},
	PHP: {
		descripcion:
			'A server-side programming language widely used on the web. It powers content management systems and online stores, and is the foundation of frameworks such as Laravel.',
		areas: ['Web Backend', 'E-commerce'],
		conocimientos: ['Object-oriented programming', 'Composer', 'PrestaShop'],
	},
	Laravel: {
		descripcion:
			'The most popular PHP framework. It offers elegant syntax and tools for routing, databases, authentication and queues, speeding up web application development.',
		areas: ['Web Backend', 'REST APIs', 'Administrative Systems'],
		conocimientos: ['Eloquent ORM', 'Migrations', 'Livewire', 'Middleware'],
	},
	'Node.js': {
		descripcion:
			'A runtime that lets you run JavaScript outside the browser, on the server. Thanks to its asynchronous model it is very efficient for building APIs and web services.',
		areas: ['REST APIs', 'Web Backend'],
		conocimientos: ['RESTful APIs', 'DTOs', 'Package management with npm', 'Next.js'],
	},
	Flutter: {
		descripcion:
			"Google's framework for building native Android and iOS apps from a single codebase, with fluid interfaces made of widgets.",
		areas: ['Cross-platform Apps', 'Mobile UI/UX'],
		conocimientos: ['Widgets', 'State management', 'API consumption'],
	},
	Swift: {
		descripcion:
			"Apple's language for building iOS and macOS applications. It is modern, safe and fast, and is paired with SwiftUI to build interfaces.",
		areas: ['iOS Apps'],
		conocimientos: ['Language fundamentals', 'SwiftUI'],
	},
	Kotlin: {
		descripcion:
			'A modern, concise language created by JetBrains and the official language for Android app development. It is compatible with Java and reduces boilerplate code.',
		areas: ['Android Apps'],
		conocimientos: ['Language fundamentals', 'Android'],
	},
	MySQL: {
		descripcion:
			'One of the most widely used relational database systems in the world. It organizes information in related tables and is queried with SQL.',
		areas: ['Relational Databases', 'E-commerce', 'Data Synchronization'],
		conocimientos: ['Relational modeling', 'Optimized queries', 'Joins', 'Stored procedures'],
	},
	PostgreSQL: {
		descripcion:
			'A powerful, extensible open-source relational database. It is the foundation of services such as Supabase.',
		areas: ['Relational Databases', 'Backend as a Service'],
		conocimientos: ['SQL queries', 'Relationships', 'Supabase'],
	},
	'SQL Server': {
		descripcion:
			"Microsoft's relational database system, widely used in enterprise environments alongside Java and .NET applications.",
		areas: ['Enterprise Systems'],
		conocimientos: ['T-SQL', 'Stored procedures', 'Query optimization'],
	},
	SQLite: {
		descripcion:
			'A lightweight database that lives in a single file, with no server. It is fast and effective for small projects and local applications.',
		areas: ['Lightweight Projects', 'Local Databases'],
		conocimientos: ['Embedded databases', 'SQL queries'],
	},
	Firebase: {
		descripcion:
			"Google's platform with ready-made services for apps: authentication, a real-time database, storage and hosting.",
		areas: ['Mobile Apps', 'Authentication'],
		conocimientos: ['Authentication', 'Firestore', 'Hosting'],
	},
	MongoDB: {
		descripcion:
			'A NoSQL database that stores information in flexible, JSON-like documents instead of tables.',
		areas: ['NoSQL Databases'],
		conocimientos: ['Documents and collections', 'CRUD operations'],
	},
	Git: {
		descripcion:
			'The most widely used version control system. It records every change to the code and lets teams work in parallel on branches without overwriting each other.',
		areas: ['Version Control', 'Teamwork'],
		conocimientos: ['Branches', 'Merge and rebase', 'Conflict resolution', 'Git Flow'],
	},
	GitHub: {
		descripcion:
			'The platform for hosting Git repositories and collaborating: code reviews, task management and deployment automation.',
		areas: ['Repositories', 'Collaboration', 'Deployments'],
		conocimientos: ['Pull requests', 'Issues', 'GitHub Actions', 'GitHub Pages'],
	},
	Docker: {
		descripcion:
			'A platform that packages an application with everything it needs into containers. This way it runs the same on any machine or server, and deployment becomes simpler.',
		areas: ['Containers', 'Deployment', 'Development Environments'],
		conocimientos: ['Containers', 'Images', 'Dockerfile'],
	},
	AWS: {
		descripcion:
			"Amazon's cloud services platform: servers, storage, databases and tools for deploying applications at scale.",
		areas: ['Cloud Deployment'],
		conocimientos: ['EC2', 'S3', 'Deployments'],
	},
	'Claude Code': {
		descripcion:
			"Anthropic's coding agent that works from the terminal: it reads the project's code, edits files and runs commands. It speeds up development, refactoring and task automation.",
		areas: ['AI-assisted Development', 'Automation'],
		conocimientos: ['AI-assisted development', 'AI automation', 'Refactoring', 'Code review'],
	},
};

/** Frases de `proyectos[].detalle` (clave = texto original en español) */
export const DETALLES_EN: Record<string, string> = {
	'Desarrollo de interfaz web': 'Web interface development',
	'Estilos y maquetación': 'Styling and layout',
	'Lógica de la interfaz': 'Interface logic',
	'Interacción del frontend web': 'Web frontend interaction',
	'Enlaces dinámicos a WhatsApp': 'Dynamic WhatsApp links',
	'Lógica de la interfaz con Next.js': 'Interface logic with Next.js',
	'Maquetación de vistas': 'View layout',
	'Frontend responsivo': 'Responsive frontend',
	'Frontend con Next.js': 'Frontend with Next.js',
	'Frontend web': 'Web frontend',
	'Estilos de la interfaz': 'Interface styling',
	'Interfaz de alto contraste': 'High-contrast interface',
	'Sitio estático optimizado para SEO': 'Static site optimized for SEO',
	'Landing page ultrarrápida': 'Ultra-fast landing page',
	'Backend con Django': 'Backend with Django',
	'Backend y API': 'Backend and API',
	Backend: 'Backend',
	'Backend y protocolos': 'Backend and protocols',
	'Aplicación con Next.js': 'Application with Next.js',
	'App mobile multiplataforma': 'Cross-platform mobile app',
	'Base de datos en tiempo real': 'Real-time database',
	'Gestión de usuarios en tiempo real': 'Real-time user management',
	'Base de datos con Supabase': 'Database with Supabase',
	'Base de datos': 'Database',
	'Control de versiones en equipo': 'Team version control',
	'Control de versiones': 'Version control',
	'Repositorio del equipo': 'Team repository',
	Repositorio: 'Repository',
};

export const CARRILES_EN: Record<string, string> = {
	Frontend: 'Frontend',
	Backend: 'Backend',
	Mobile: 'Mobile',
	'Base de Datos': 'Databases',
	Tools: 'Tools',
};
