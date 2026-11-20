/**
 * Correo de contacto, partido en dos para que NO aparezca escrito completo (usuario@dominio)
 * en el HTML publicado: los bots que recolectan correos buscan ese patrón en el código fuente.
 * El navegador lo une al cargar la página (ver Presentacion.astro y Footer.astro).
 */
export const CORREO = { usuario: 'contactosquirel', dominio: 'gmail.com' };
