'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/

const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response failed!`);
  }
  return response.json();
};

const fetchAndPopulatePokemons = async () => {
  try {
    const API_URL = 'https://pokeapi.co/api/v2/pokemon?offset=151&limit=151';
    const pokemonData = await fetchData(API_URL);
    const selectElement = document.createElement('select');
    pokemonData.results.forEach((pokemon) => {
      const optionElement = document.createElement('option');
      optionElement.text = pokemon.name;
      optionElement.value = pokemon.url;
      selectElement.appendChild(optionElement);
    });
    document.body.appendChild(selectElement);
    selectElement.addEventListener('change', () =>
      fetchImage(selectElement.value)
    );
  } catch (error) {
    console.log(error);
  }
};

const fetchImage = async (pokemonUrl) => {
  try {
    const pokemonImg = await fetchData(pokemonUrl);
    let imgElement = document.querySelector('img');
    if (!imgElement) {
      imgElement = document.createElement('img');
      document.body.appendChild(imgElement);
    }
    imgElement.src = pokemonImg.sprites.front_default;
  } catch (error) {
    console.log(error);
  }
};

const main = () => {
  const buttonElement = document.createElement('button');
  buttonElement.type = 'submit';
  buttonElement.textContent = 'Get Pokemon!';
  document.body.appendChild(buttonElement);
  buttonElement.addEventListener('click', () => {
    fetchAndPopulatePokemons();
    buttonElement.disabled = true;
  });
};
window.addEventListener('load', main);
