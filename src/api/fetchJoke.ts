import { getTodayISO } from "../utils/date";
import { reportJokes } from "../data/reportJokes";

const apis = [
  {
    url: "https://api.chucknorris.io/jokes/random",
    extractJoke: (data: any) => data.value,
  },
  {
    url: "https://icanhazdadjoke.com/",
    options: { headers: { Accept: "application/json" } },
    extractJoke: (data: any) => data.joke,
  },
];

let callCount = 0;

export async function fetchJoke(): Promise<string> {
  const apiIndex = callCount % apis.length;
  const api = apis[apiIndex];
  callCount++;

  try {
    const response = await fetch(api.url, api.options);
    if (!response.ok) throw new Error(`Status: ${response.status}`);

    const data = await response.json();
    const joke = api.extractJoke(data);
    reportJokes.push({ joke, rating: null, date: getTodayISO() });
    return joke;
  } catch (error: any) {
    console.error("Error fetching joke:", error.message);
    return "Oops! no joke today.";
  }
}
