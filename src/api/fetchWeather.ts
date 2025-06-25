export async function fetchWeather(city: string = "Barcelona"): Promise<string> {
  try {
    let response = await fetch(`https://wttr.in/${city}?format=3`);

    if (!response.ok) {
      throw new Error(`Weather API responded with status ${response.status}`);
    }

    let weather = await response.text();
    return weather;
  } catch (error) {
    console.error(`Failed to fetch weather for "${city}":`, error);
    throw error;
  }
}
