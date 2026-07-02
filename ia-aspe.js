/* =========================
   IA ASPE - MOTOR PROPIO
   No usa IA externa
========================= */

const IA_ASPE = {
  nombre: "IA Aspe",
  version: "1.0",
  descripcion: "Asistente propio del Curso Aspe sobre calefones ionizados.",

  seguridad: `
⚠️ Seguridad obligatoria:
Las reparaciones, instalaciones o modificaciones de gas deben ser realizadas por un gasista matriculado.
La ventilación y evacuación de gases es fundamental.
Si hay olor a gas, llama amarilla/naranja/roja, mala combustión o sospecha de monóxido, hay que cortar el uso y llamar a un profesional.
Esta IA es educativa y no reemplaza a un profesional.
`,

  clases: [
    {
      id: 1,
      titulo: "01 - Introducción",
      temas: ["calefón ionizado", "introducción", "curso", "principiante"],
      resumen: "Presenta la base del curso y explica qué es un calefón ionizado de forma simple."
    },
    {
      id: 2,
      titulo: "02 - Diferencias",
      temas: ["tradicional", "ionizado", "diferencia", "calefón común"],
      resumen: "Explica las diferencias entre un calefón tradicional y uno ionizado."
    },
    {
      id: 3,
      titulo: "03 - Detección",
      temas: ["ionización", "detección de llama", "llama ionizada", "sensor", "electrodo"],
      resumen: "Explica cómo el calefón detecta la llama mediante ionización y por qué corta si no la detecta."
    },
    {
      id: 4,
      titulo: "04 - Componentes 1",
      temas: ["componentes", "partes", "interno"],
      resumen: "Primera parte de los componentes internos del calefón."
    },
    {
      id: 5,
      titulo: "05 - Componentes 2",
      temas: ["componentes", "electrodo", "sensor"],
      resumen: "Continúa con componentes internos, sensores y partes relacionadas."
    },
    {
      id: 6,
      titulo: "06 - Componentes 3",
      temas: ["placa", "válvula", "componentes"],
      resumen: "Explica componentes como placa electrónica y válvula."
    },
    {
      id: 7,
      titulo: "07 - Componentes 4",
      temas: ["cuerpo de agua", "cuerpo de gas", "micro switch"],
      resumen: "Explica partes relacionadas al cuerpo de agua y cuerpo de gas."
    },
    {
      id: 8,
      titulo: "08 - Componentes 5",
      temas: ["quemador", "serpentina", "intercambiador"],
      resumen: "Explica quemador, serpentina e intercambio de calor."
    },
    {
      id: 9,
      titulo: "09 - Componentes 6",
      temas: ["cableado", "conectores", "componentes"],
      resumen: "Explica cableado, conectores y cierre de componentes."
    },
    {
      id: 10,
      titulo: "10 - Tipos",
      temas: ["tipos", "modelos", "calefones ionizados"],
      resumen: "Explica distintos tipos de calefones ionizados y su funcionamiento."
    },
    {
      id: 11,
      titulo: "11 - Fallas",
      temas: ["fallas", "mantenimiento", "diagnóstico", "problemas"],
      resumen: "Explica fallas comunes, mantenimiento y diagnóstico básico."
    },
    {
      id: 13,
      titulo: "13 - Final",
      temas: ["final", "repaso", "cierre"],
      resumen: "Cierre del curso y repaso general."
    }
  ],

  componentes: [
    {
      nombre: "Electrodo de encendido",
      palabras: ["electrodo de encendido", "chispa", "encendido"],
      funcion: "Genera la chispa para iniciar el encendido del calefón.",
      sintomas: "No hay chispa, chispa débil, chispa fuera de lugar o hace chispa pero no prende.",
      clase: "04 a 09 - Componentes y 11 - Fallas"
    },
    {
      nombre: "Electrodo o sensor de ionización",
      palabras: ["ionización", "ionizacion", "sensor de llama", "electrodo de ionización", "llama"],
      funcion: "Detecta si la llama está presente y envía señal a la placa.",
      sintomas: "Prende y se apaga, no detecta llama o corta rápido.",
      clase: "03 - Detección y 11 - Fallas"
    },
    {
      nombre: "Quemador",
      palabras: ["quemador", "llama amarilla", "llama naranja", "combustión"],
      funcion: "Distribuye la llama para calentar el agua.",
      sintomas: "Llama irregular, llama amarilla, explosiones pequeñas o bajo calentamiento.",
      clase: "08 - Componentes 5 y 11 - Fallas"
    },
    {
      nombre: "Válvula de gas",
      palabras: ["válvula", "valvula", "gas", "no pasa gas"],
      funcion: "Controla el paso de gas hacia el quemador.",
      sintomas: "Hace chispa pero no prende, no pasa gas o el calefón no enciende.",
      clase: "06 - Componentes 3 y 11 - Fallas"
    },
    {
      nombre: "Sensor de caudal o diafragma",
      palabras: ["caudal", "diafragma", "agua", "sensor de caudal"],
      funcion: "Detecta el paso de agua para activar el encendido.",
      sintomas: "No enciende al abrir el agua o necesita mucho caudal para prender.",
      clase: "07 - Componentes 4 y 11 - Fallas"
    },
    {
      nombre: "Micro switch",
      palabras: ["micro switch", "microswitch", "interruptor"],
      funcion: "Activa eléctricamente el sistema cuando hay paso de agua.",
      sintomas: "No hace chispa o no inicia el encendido.",
      clase: "07 - Componentes 4"
    },
    {
      nombre: "Placa electrónica",
      palabras: ["placa", "placa electrónica", "plaqueta"],
      funcion: "Controla encendido, sensores, seguridad, chispa y corte.",
      sintomas: "Fallas intermitentes, no hace chispa, no detecta llama o errores.",
      clase: "06 - Componentes 3 y 11 - Fallas"
    },
    {
      nombre: "Pilas o fuente",
      palabras: ["pilas", "batería", "bateria", "fuente", "energía"],
      funcion: "Alimenta el sistema electrónico del calefón.",
      sintomas: "No enciende, chispa débil o display apagado.",
      clase: "11 - Fallas"
    },
    {
      nombre: "Serpentina o intercambiador",
      palabras: ["serpentina", "intercambiador", "sarro", "calienta poco"],
      funcion: "Transfiere el calor de la llama al agua.",
      sintomas: "Poca agua caliente, calienta poco, bajo caudal o sarro.",
      clase: "08 - Componentes 5 y 11 - Fallas"
    }
  ],

  fallas: [
    {
      sintoma: "no enciende",
      palabras: ["no enciende", "no prende", "no arranca"],
      respuesta: `
Falla: el calefón no enciende.

Puede estar relacionado con:
- Pilas o fuente sin energía.
- Bajo caudal de agua.
- Sensor de caudal o diafragma.
- Micro switch.
- Electrodo de encendido.
- Chispero.
- Placa electrónica.
- Falta de paso de gas.

Revisión segura:
1. Verificar pilas o alimentación.
2. Revisar si al abrir el agua hace chispa.
3. Observar si hay buen caudal.
4. Ver si aparece error en display.
5. No desarmar conexiones de gas.

Clases recomendadas:
- 03 - Detección.
- 04 a 09 - Componentes.
- 11 - Fallas.
`
    },
    {
      sintoma: "hace chispa pero no prende",
      palabras: ["hace chispa pero no prende", "chispa pero no prende", "chispa y no enciende"],
      respuesta: `
Falla: hace chispa pero no prende.

Posibles causas:
- Falta de gas o llave cerrada.
- Electrodo de encendido mal ubicado.
- Quemador sucio.
- Válvula de gas con problema.
- Placa electrónica.
- Bajo caudal de agua.
- Conexión interna floja.

Revisión segura:
- Verificar visualmente si la chispa aparece.
- Verificar pilas o fuente.
- Revisar si hay buen caudal de agua.
- No intervenir la válvula de gas sin matrícula.

Clase recomendada:
- 04 a 09 - Componentes.
- 11 - Fallas y mantenimiento.
`
    },
    {
      sintoma: "prende y se apaga",
      palabras: ["prende y se apaga", "enciende y se apaga", "corta rápido", "corta rapido", "se apaga"],
      respuesta: `
Falla: prende y se apaga.

En un calefón ionizado suele estar relacionado con la detección de llama.

Posibles causas:
- Sensor/electrodo de ionización sucio.
- Electrodo mal posicionado.
- La llama no toca correctamente el sensor.
- Cable de ionización flojo.
- Mala combustión.
- Placa electrónica con falla.
- Quemador sucio o llama irregular.

Explicación simple:
El calefón prende, pero la placa necesita confirmar que hay llama. Si no recibe señal de ionización, corta el gas por seguridad.

Clases recomendadas:
- 03 - Detección de llama ionizada.
- 11 - Fallas y mantenimiento.
`
    },
    {
      sintoma: "poca agua caliente",
      palabras: ["poca agua caliente", "calienta poco", "no calienta", "sale tibia"],
      respuesta: `
Falla: sale poca agua caliente o calienta poco.

Posibles causas:
- Bajo caudal de agua.
- Serpentina con sarro.
- Quemador sucio.
- Regulación incorrecta.
- Presión de gas insuficiente.
- Sensor de caudal con problema.
- Mantenimiento pendiente.

Clases recomendadas:
- 08 - Componentes 5.
- 10 - Tipos.
- 11 - Fallas.
`
    },
    {
      sintoma: "explosiones pequeñas al encender",
      palabras: ["explosión", "explosion", "explosiones", "golpe al encender", "hace golpe"],
      respuesta: `
Falla: explosiones pequeñas o golpe al encender.

Esto puede ser peligroso.

Posibles causas:
- Encendido demorado.
- Acumulación de gas antes de prender.
- Electrodo mal ubicado.
- Quemador sucio.
- Problema de combustión.
- Válvula de gas con problema.

Recomendación:
No seguir probando el artefacto. Cortar el uso y llamar a un gasista matriculado.

Clase recomendada:
- 11 - Fallas y mantenimiento.
`
    }
  ]
};

/* =========================
   FUNCIONES DEL MOTOR
========================= */

function normalizarTexto(texto){
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function contieneAlguna(texto, palabras){
  const limpio = normalizarTexto(texto);
  return palabras.some(p => limpio.includes(normalizarTexto(p)));
}

function respuestaConSeguridad(respuesta){
  return respuesta.trim() + "\n\n" + IA_ASPE.seguridad.trim();
}

function iaAspeResponder(preguntaOriginal){
  const pregunta = normalizarTexto(preguntaOriginal);

  if(!pregunta || pregunta.length < 2){
    return "Escribí una pregunta sobre calefones ionizados, fallas, componentes o clases del curso.";
  }

  if(
    pregunta.includes("olor a gas") ||
    pregunta.includes("monoxido") ||
    pregunta.includes("llama amarilla") ||
    pregunta.includes("llama naranja") ||
    pregunta.includes("llama roja") ||
    pregunta.includes("perdida de gas")
  ){
    return respuestaConSeguridad(`
Situación de riesgo.

Si hay olor a gas, llama amarilla/naranja/roja, mala combustión, pérdida de gas o sospecha de monóxido:

1. Cortá el uso del calefón.
2. Ventilá el ambiente.
3. No prendas ni apagues luces.
4. No sigas probando el artefacto.
5. Llamá a un gasista matriculado o servicio de emergencia correspondiente.
`);
  }

  if(pregunta.includes("diagnostico") || pregunta.includes("diagnóstico")){
    return respuestaConSeguridad(`
Modo diagnóstico de falla.

Decime cuál de estos síntomas tiene el calefón:

1. No enciende.
2. Enciende y se apaga.
3. No detecta llama.
4. Hace chispa pero no prende.
5. Prende pero corta rápido.
6. Sale poca agua caliente.
7. Sale muy caliente.
8. Hace explosiones pequeñas al encender.
9. Tiene error en display.
10. Problema con caudal de agua.
11. Problema con batería o fuente.
12. Problema con válvula de gas.
13. Problema con placa electrónica.
`);
  }

  for(const falla of IA_ASPE.fallas){
    if(contieneAlguna(pregunta, falla.palabras)){
      return respuestaConSeguridad(falla.respuesta);
    }
  }

  for(const componente of IA_ASPE.componentes){
    if(contieneAlguna(pregunta, componente.palabras)){
      return respuestaConSeguridad(`
${componente.nombre}

Para qué sirve:
${componente.funcion}

Síntomas cuando falla:
${componente.sintomas}

Clase recomendada:
${componente.clase}
`);
    }
  }

  if(pregunta.includes("diferencia") || pregunta.includes("tradicional")){
    return respuestaConSeguridad(`
Diferencia entre calefón tradicional e ionizado.

Un calefón tradicional puede trabajar con sistemas más simples de encendido o piloto, según el modelo.

Un calefón ionizado utiliza detección de llama por ionización. Esto significa que la placa electrónica necesita confirmar que la llama está presente. Si no recibe esa señal, corta el funcionamiento por seguridad.

Clases recomendadas:
- 02 - Diferencias.
- 03 - Detección.
`);
  }

  if(pregunta.includes("que es") && pregunta.includes("calefon ionizado")){
    return respuestaConSeguridad(`
Un calefón ionizado es un calefón que utiliza un sistema de detección de llama por ionización.

La idea principal es que el equipo no solo intenta encender, sino que también verifica si la llama realmente quedó encendida. Si la placa no detecta llama, corta el funcionamiento como medida de seguridad.

Clases recomendadas:
- 01 - Introducción.
- 02 - Diferencias.
- 03 - Detección.
`);
  }

  if(pregunta.includes("examen") || pregunta.includes("tomame") || pregunta.includes("preguntas")){
    return `
Modo examen del Curso Aspe.

Respondé estas 5 preguntas:

1. ¿Qué función cumple el electrodo de ionización?
2. ¿Qué pasa si la llama no toca correctamente el sensor?
3. ¿Qué diferencia hay entre chispa de encendido y detección de llama?
4. Nombrá 3 causas por las que un calefón prende y se apaga.
5. ¿Qué medidas de seguridad hay que respetar si hay olor a gas o mala combustión?

Cuando termines, escribí:
"Mis respuestas son..."
`;
  }

  if(pregunta.includes("mis respuestas son")){
    return `
Corrección guía:

1. El electrodo de ionización confirma que hay llama.
2. Si la llama no toca el sensor, la placa puede cortar el gas.
3. La chispa enciende; la ionización confirma que la llama quedó encendida.
4. Causas posibles: electrodo sucio, mal posicionado, cable flojo, mala combustión, placa o quemador sucio.
5. Seguridad: cortar uso, ventilar, no manipular gas y llamar a gasista matriculado.

Resultado orientativo:
- 4 o 5 bien: vas muy bien.
- 2 o 3 bien: repasá Clase 03 y Clase 11.
- Menos de 2: repasá Introducción, Detección y Fallas.
`;
  }

  if(pregunta.includes("resumen clase")){
    return buscarResumenClaseAspe(pregunta);
  }

  if(pregunta.includes("que clase") || pregunta.includes("donde") || pregunta.includes("buscar")){
    return buscarClaseAspe(pregunta);
  }

  return respuestaConSeguridad(`
Soy la IA Aspe creada para este curso.

Puedo ayudarte con:
- Qué es un calefón ionizado.
- Diferencias entre calefón tradicional e ionizado.
- Detección de llama por ionización.
- Componentes internos.
- Fallas comunes.
- Diagnóstico básico.
- Mantenimiento.
- Qué clase mirar.
- Exámenes de práctica.

Probá escribiendo:
"Mi calefón prende y se apaga"
"Hace chispa pero no prende"
"Qué es el electrodo de ionización"
"Tomame un examen"
`);
}

function buscarResumenClaseAspe(pregunta){
  const numero = pregunta.match(/\d+/);

  if(!numero){
    return "Decime qué clase querés resumir. Ejemplo: resumen clase 03.";
  }

  const id = parseInt(numero[0], 10);
  const clase = IA_ASPE.clases.find(c => c.id === id);

  if(!clase){
    return "No encontré esa clase. Probá con 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11 o 13.";
  }

  return `
Resumen de ${clase.titulo}

${clase.resumen}

Temas:
${clase.temas.map(t => "- " + t).join("\n")}
`;
}

function buscarClaseAspe(pregunta){
  let resultados = [];

  IA_ASPE.clases.forEach(clase => {
    if(contieneAlguna(pregunta, clase.temas)){
      resultados.push(clase.titulo);
    }
  });

  if(pregunta.includes("prende") && pregunta.includes("apaga")){
    resultados.push("03 - Detección");
    resultados.push("11 - Fallas");
  }

  if(pregunta.includes("componentes")){
    resultados.push("04 - Componentes 1");
    resultados.push("05 - Componentes 2");
    resultados.push("06 - Componentes 3");
    resultados.push("07 - Componentes 4");
    resultados.push("08 - Componentes 5");
    resultados.push("09 - Componentes 6");
  }

  resultados = [...new Set(resultados)];

  if(resultados.length === 0){
    return "No encontré una clase exacta. Probá preguntando por ionización, componentes, fallas, tradicional o mantenimiento.";
  }

  return `
Para esa consulta te recomiendo mirar:

${resultados.map(r => "- " + r).join("\n")}
`;
}