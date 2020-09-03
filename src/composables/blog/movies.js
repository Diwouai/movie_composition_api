import axios from 'axios';
import { ref } from 'vue';

export default function useMovies() {
  let movies = ref([]);

  const API_KEY = 'ec6d53f8c6e364ecee8e6df9d9382d56';
  const IMG_URL = 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/';

  function fetchTopMovie() {
    axios
    .get("https://api.themoviedb.org/3/movie/top_rated?api_key=" + API_KEY + "&language=en-US&page=1")
    .then(response => {
      movies.value = response.data.results;
    })
    .catch(error => {
      console.log(error);
    })
  }

  return {
    IMG_URL,
    fetchTopMovie,
    movies
  }
}