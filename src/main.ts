import { fetchWeather } from './api/fetchWeather';
import { displayWeather } from './dom/ui';

async function loadWeather() {
  try {
    let texto = await fetchWeather("Barcelona");
    displayWeather(texto);
  } catch {
    displayWeather("No se pudo cargar el clima.");
  }
}

loadWeather();

