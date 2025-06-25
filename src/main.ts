import { fetchWeather } from './api/fetchWeather';
import { mostrarClima } from './dom/ui';
// import './scriptShare.ts';

async function cargarClima() {
  try {
    const texto = await fetchWeather("Barcelona");
    mostrarClima(texto);
  } catch {
    mostrarClima("No se pudo cargar el clima.");
  }
}

cargarClima();

console.log("main.ts load");
