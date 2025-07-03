import { getTodayISO } from "../utils/date";
import { reportJokes } from "../data/reportJokes";

let apis = [
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
  let apiIndex = callCount % apis.length;
  let selectedApi = apis[apiIndex];
  callCount++;

  try {
    let response = await fetch(selectedApi.url, selectedApi.options);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    let data = await response.json();
    let joke = selectedApi.extractJoke(data);

    reportJokes.push({
      joke,
      rating: null,
      date: getTodayISO(),
    });

    return joke;
  } catch (error: any) {
    
    return "Oops! No joke today. Try again later.";
  }
}
