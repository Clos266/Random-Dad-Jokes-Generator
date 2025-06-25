import { getTodayISO } from "../utils/date";
import { reportJokes } from "../data/reportJokes";

// List of joke APIs with instructions on how to extract the joke from each response
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

// Fetch a joke from one of the APIs and save it to the report
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

    // Store the joke with a null rating and today's date
    reportJokes.push({
      joke,
      rating: null,
      date: getTodayISO(),
    });

    return joke;
  } catch (error: any) {
    console.error("Error fetching joke:", error.message);
    return "Oops! No joke today. Try again later.";
  }
}
