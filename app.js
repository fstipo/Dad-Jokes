const jokeEl = document.querySelector('.joke');
const btn = document.querySelector('.btn');
const url = 'https://icanhazdadjoke.com';

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  const response = await fetch(url, config);
  const data = await response.json();
  jokeEl.innerHTML = data.joke;
}

btn.addEventListener('click', generateJoke);

generateJoke();
