/* =========================
   CONFIGURACIÓN GEMINI
   Pegá acá tu API key si querés que la guía consulte Gemini.
   Si lo dejás vacío, la guía responde igual con respuesta local.
========================= */

window.GUIA_VIRTUAL_GEMINI_API_KEY = "AIzaSyDny5NRmRpDvHhbIKOqqbe0AM5JKQMHFzg";

/*
La Guía virtual manda cada pregunta a Gemini agregando:
"sobre calefones ionizados"

Ejemplo:
Usuario: "cómo pruebo con el tester la carga de la pila"
Gemini recibe: "cómo pruebo con el tester la carga de la pila sobre calefones ionizados"

El resto de la lógica está en index.html para no tocar videos, material, PDF, Orbis ni progreso.
*/
