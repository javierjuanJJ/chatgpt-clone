// Importación dentro del worker [43]
import { MLCWorkerHandler, MLCEngine } from 'https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm@0.2.49/dist/web-llm.js'; 

// Creación del motor LLM dentro del worker [36]
const engine = new MLCEngine(); 

// Creación del handler que gestionará los mensajes recibidos (onmessage) [36]
const handler = new MLCWorkerHandler(engine);

// El worker escucha mensajes del hilo principal y los pasa al handler [36]
self.onmessage = (e) => {
    handler.onmessage(e);
};