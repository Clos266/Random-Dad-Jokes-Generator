const button = document.querySelector('button');
const jokeContainer = document.querySelector('.joke-container');

if (!button || !jokeContainer) {
  throw new Error('No se encontró el botón o el contenedor de chistes');
}

async function traerChiste(): Promise<void> {
  try {
    const res = await fetch('https://icanhazdadjoke.com', {
      headers: {
        'Accept': 'application/json',
      },
    });
    if (!res.ok) throw new Error('Respuesta no OK');
    const data: { joke: string } = await res.json();
    jokeContainer.innerHTML = `<p>${data.joke}</p>`;

  } catch (error) {
    console.error('Error al traer el chiste:', error);
    jokeContainer.textContent = 'No se pudo cargar un chiste.';
  }
}

traerChiste();

button.addEventListener('click', traerChiste);
