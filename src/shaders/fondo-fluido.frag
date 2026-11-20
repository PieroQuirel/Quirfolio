precision highp float;
uniform vec2 uRes;
uniform float uTime;

// Paleta en grises casi negros: nada sale de este rango
const vec3 OSCURO = vec3(0.004, 0.004, 0.005); // #010101
const vec3 MEDIO  = vec3(0.030, 0.030, 0.034); // #080809
const vec3 CLARO  = vec3(0.290, 0.290, 0.302); // #4A4A4D

// Ruido sin estructura (Dave Hoskins, hash13). La z es el fotograma del grano:
// cada uno es independiente, así el grano no se desplaza ni forma franjas
float hash(vec3 p) {
	p = fract(p * 0.1031);
	p += dot(p, p.zyx + 31.32);
	return fract((p.x + p.y) * p.z);
}

void main() {
	vec2 uv = (gl_FragCoord.xy - 0.5 * uRes) / min(uRes.x, uRes.y);
	float t = uTime * 0.09 + 23.0; // muy lento

	// Cáusticas de agua (luz de piscina): hilos de luz que se conectan como telaraña
	vec2 p = uv * 6.2832 * 0.9 - 250.0;
	vec2 i = p;
	float c = 1.0;
	const float inten = 0.0075;
	for (int n = 0; n < 5; n++) {
		float tt = t * (1.0 - (3.5 / float(n + 1)));
		i = p + vec2(cos(tt - i.x) + sin(tt + i.y), sin(tt - i.y) + cos(tt + i.x));
		c += 1.0 / length(vec2(p.x / (sin(i.x + tt) / inten), p.y / (cos(i.y + tt) / inten)));
	}
	c /= 5.0;
	c = 1.17 - pow(c, 1.4);
	float luz = pow(abs(c), 6.0); // exponente menor = hilos más suaves y difusos

	// Intensidad: 0 = color más oscuro, 1 = más claro
	float sc = 0.02 + 0.98 * smoothstep(0.0, 1.1, luz);
	sc += 0.06 * smoothstep(0.0, 0.6, luz);          // resplandor suave alrededor de los hilos
	sc -= 0.14 * smoothstep(0.5, 1.3, length(uv));   // viñeta

	// Grano fino: una capa que se renueva ~15 veces por segundo y otra fija, más gruesa
	float n1 = hash(vec3(gl_FragCoord.xy, mod(floor(uTime * 15.0), 64.0)));
	float n2 = hash(vec3(floor(gl_FragCoord.xy * 0.5), 91.0));
	sc += ((n1 * 0.65 + n2 * 0.35) - 0.5) * 0.12;
	sc = clamp(sc, 0.0, 1.0);

	vec3 col = mix(OSCURO, MEDIO, smoothstep(0.0, 0.55, sc));
	col = mix(col, CLARO, smoothstep(0.55, 1.0, sc));

	gl_FragColor = vec4(col, 1.0);
}
