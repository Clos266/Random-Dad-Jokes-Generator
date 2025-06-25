// meteo
export function displayWeather(text: string): void {
  let weatherElement = document.getElementById("clima");
  if (weatherElement) {
    weatherElement.textContent = text;
  }
}

// jokes
import { fetchJoke } from "../api/fetchJoke";
import { reportJokes } from "../data/reportJokes";

let jokeContainer = document.querySelector(".joke-container")!;
let nextBtn = document.getElementById("nextBtn");
let voteButtons = document.querySelectorAll(".vote-btn");

// first joke
(async () => {
  jokeContainer.textContent = await fetchJoke();
})();

// next joke
nextBtn?.addEventListener("click", async () => {
  jokeContainer.textContent = await fetchJoke();
  voteButtons.forEach(button => button.classList.remove("active"));
});

// score 
voteButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    voteButtons.forEach(btn => btn.classList.remove("active"));
    btn.classList.add("active");

    let rating = (btn as HTMLButtonElement).dataset.value;
    if (reportJokes.length > 0) {
      reportJokes[reportJokes.length - 1].rating = Number(rating ?? 0);
      console.log("Updated reportJokes:", reportJokes);
    }
  });
});
