export async function fetchWeather(city: string = "Barcelona"): Promise<string> {
  try {
    const res = await fetch(`https://wttr.in/${city}?format=3`);
    return await res.text();
  } catch (err) {
    console.error("Error al obtener el clima:", err);
    throw err;
  }
}