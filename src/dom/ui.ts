// --- METEO ---
export function mostrarClima(texto: string): void {
  const el = document.getElementById("clima");
  if (el) el.textContent = texto;
}

// --- CHISTES ---
import { fetchJoke } from "../api/fetchJoke";
import { reportJokes } from "../data/reportJokes";

const jokeContainer = document.querySelector(".joke-container")!;
const nextBtn = document.getElementById("nextBtn");
const voteButtons = document.querySelectorAll(".vote-btn");

// Mostrar chiste inicial
(async () => {
  jokeContainer.textContent = await fetchJoke();
})();

// Botón siguiente chiste
nextBtn?.addEventListener("click", async () => {
  jokeContainer.textContent = await fetchJoke();
  voteButtons.forEach(b => b.classList.remove("active"));
});

// Cambiar puntuación
voteButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    voteButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const rating = (btn as HTMLButtonElement).dataset.value;
    if (reportJokes.length > 0) {
      reportJokes[reportJokes.length - 1].rating = Number(rating ?? 0);
      console.log("Updated reportJokes:", reportJokes);
    }
  });
});
