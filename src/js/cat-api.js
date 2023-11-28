import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_yoBOBNyy7jzfl4OGADTaPZEi6BY0rlNaAfH9a2VOo3BB2nfgjhZguG2a1DjklnJF';

export async function fetchBreeds() {
  const response = await axios.get('https://api.thecatapi.com/v1/breeds');
  return response.data;
}

export async function fetchCatByBreed(breedId) {
  const response = await axios.get(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
  );
  return response.data;
}
