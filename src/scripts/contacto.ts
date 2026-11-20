/**
 * Utilidades compartidas por los contactos de Presentacion.astro y Footer.astro:
 * unir el correo, copiar al portapapeles y limpiar un aviso pasado un tiempo.
 */

/** El correo no aparece completo en el HTML publicado (los bots lo recolectan): usuario y dominio van en data-* y se unen aquí */
export const unirCorreo = ({ usuario = '', dominio = '' }: DOMStringMap) => `${usuario}@${dominio}`;

/** Copia al portapapeles; devuelve false si el navegador lo impide */
export async function copiarTexto(texto: string): Promise<boolean> {
	try {
		await navigator.clipboard.writeText(texto);
		return true;
	} catch {
		return false;
	}
}

/** Temporizador reutilizable: cada llamada cancela la anterior, así un aviso nuevo no lo borra el anterior */
export function retardo(ms: number) {
	let id: number | undefined;
	return (accion: () => void) => {
		clearTimeout(id);
		id = window.setTimeout(accion, ms);
	};
}
