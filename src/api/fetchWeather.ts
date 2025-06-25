export async function fetchWeather(city: string = "Barcelona"): Promise<string> {
  try {
    const res = await fetch(`https://wttr.in/${city}?format=3`);
    return await res.text();
  } catch (err) {
    console.error("Error fetching weather", err);
    throw err;
  }
}