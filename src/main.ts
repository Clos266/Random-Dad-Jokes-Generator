import { fetchWeather } from './api/fetchWeather';
import { displayWeather } from './dom/ui';
// import './scriptShare.ts';

async function loadWeather() {
  try {
    let texto = await fetchWeather("Barcelona");
    displayWeather(texto);
  } catch {
    displayWeather("No se pudo cargar el clima.");
  }
}

loadWeather();

console.log("main.ts load");
