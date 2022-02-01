const jokeEl = document.querySelector('.joke');
const btn = document.querySelector('.btn');

function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => (jokeEl.innerHTML = data.joke));
}

btn.addEventListener('click', generateJoke);

generateJoke();
