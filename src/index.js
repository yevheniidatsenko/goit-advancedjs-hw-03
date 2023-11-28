import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SlimSelect from 'slim-select';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api';

const body = document.querySelector('body');
const selectContainer = document.querySelector('.select');
const loader = document.querySelector('.loader');
const catInfo = document.querySelector('.cat-info');

selectContainer.style.display = 'none';

document.addEventListener('DOMContentLoaded', markupCreate);

async function markupCreate() {
  try {
    const breeds = await fetchBreeds();
    loader.style.display = 'none';
    renderBreeds(breeds);
    selectContainer.style.display = 'flex';
    initSlimSelect();
    selectContainer.addEventListener('change', selectionHandler);
  } catch (error) {
    handleError(error);
  }
}

function renderBreeds(breeds) {
  const markup = breeds
    .map(({ id, name }) => {
      return `<option value="${id}">${name}</option>`;
    })
    .join('');
  selectContainer.innerHTML = `<select class="breed-select" id="selectElement">${markup}</select>`; // Updated to selectContainer
}

function selectionHandler() {
  const selectedOption = getSelectedOptionValue();
  fetchCatInformation(selectedOption);
}

function getSelectedOptionValue() {
  const selectElement = document.getElementById('selectElement');
  return selectElement.options[selectElement.selectedIndex].value;
}

async function fetchCatInformation(selectedOption) {
  try {
    catInfo.style.display = 'none';
    loader.style.display = 'block';
    const breed = await fetchCatByBreed(selectedOption);
    loader.style.display = 'none';
    renderCatInfo(breed);
  } catch (error) {
    handleError(error);
  }
}

function renderCatInfo(breed) {
  catInfo.style.display = 'flex';
  const markup = `
    <img class="cat-img" src="${breed[0].url}" alt="${breed[0].breeds[0].name}" />
    <div class="breed-info">
      <h1 class="cat-name">${breed[0].breeds[0].name}</h1>
      <p class="description">${breed[0].breeds[0].description}</p>
      <h2 class="temperament">Temperament:</h2>
      <p class="temp-descr">${breed[0].breeds[0].temperament}</p>
    </div>
  `;
  catInfo.innerHTML = markup;
}

function initSlimSelect() {
  new SlimSelect('.breed-select');
}

function handleError(error) {
  body.innerHTML = 'Oops! Something went wrong! Try reloading the page!';
  body.style.color = '#ff0000';
  iziToast.error({
    message: 'Error fetching cat information! Try again!',
    position: 'topRight',
    color: '#ff0000',
  });
  console.log(error.message);
}
