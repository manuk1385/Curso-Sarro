/* =========================
   CONFIGURACIÓN GEMINI
   Pegá acá tu API key si querés que la guía consulte Gemini.
   Si lo dejás vacío, la guía responde igual con respuesta local.
========================= */

window.GUIA_VIRTUAL_GEMINI_API_KEY = "AIzaSyBLia3fb2N054UmUmf9w4Jno1GjPHfRNF0";

/*
La Guía virtual manda cada pregunta a Gemini agregando:
"sobre calefones ionizados"

Ejemplo:
Usuario: "cómo pruebo con el tester la carga de la pila"
Gemini recibe: "cómo pruebo con el tester la carga de la pila sobre calefones ionizados"

El resto de la lógica está en index.html para no tocar videos, material, PDF, Orbis ni progreso.
*/


/* Componentes cargados para que Gemini sepa qué existe en calefones ionizados del curso ASPE */
window.GUIA_VIRTUAL_COMPONENTES_ASPE = [
  "Alimentación: pilas, portapilas, fuente, contactos, polaridad, tensión, caída de tensión",
  "Módulo de encendido / placa electrónica / plaqueta / controlador",
  "Micro switch / microinterruptor",
  "Sensor de caudal / flow switch / flujostato / flujómetro / turbina / sensor Hall / reed switch",
  "Electrodo de encendido / bujía de chispa / cable de alta",
  "Electrodo de ionización / sensor de llama / cable de ionización / masa",
  "Sensor de temperatura / sonda NTC / termistor / vaina de sonda",
  "Termostato límite / bimetálico / sensor de sobretemperatura / seguridad térmica",
  "Display / pantalla / códigos de error / botonera / tablero de control",
  "Cableado / fichas / conectores / terminales / sulfato / humedad / falso contacto",
  "Válvula solenoide / electroválvula / bobina / válvula modulante",
  "Cuerpo de gas / quemador principal / piloto",
  "Serpentina / intercambiador",
  "Venturi / cámara de agua / diafragma / eje / vástago / palanca / filtro / o-ring / junta / retén",
  "Presostato de humo / sensor de monóxido / retorno de humos / forzador / extractor / mangueras de silicona",
  "Regulador de caudal / tornillo de registro",
  "Tester / multímetro: voltaje continuo, resistencia, continuidad, escala, puntas, valores"
];
