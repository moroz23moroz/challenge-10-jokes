window.addEventListener("DOMContentLoaded", () => {
  const jokeEl = document.getElementById("joke");
  const jokeBts = document.getElementById("jokeBts");

  //using then
  //   const generateJoke = () => {
  //     fetch("https://v2.jokeapi.dev/joke/Any?type=single").then((res) =>
  //       res.json().then((data) => {
  //         jokeEl.innerHTML = data.joke;
  //       })
  //     );
  //   };

  //using async/await
  const generateJoke = async () => {
    const res = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
    const data = await res.json();
    jokeEl.innerHTML = data.joke;
  };
  generateJoke();

  jokeBts.addEventListener("click", generateJoke);
});
