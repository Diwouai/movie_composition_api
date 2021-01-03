import { AXIOS_API, API_KEY } from "@/services/api";
import { ref } from "vue";

export default function useMovies() {
  let movies = ref([]);
  let upcomingMovies = ref([]);
  let movie = ref([]);
  let cast = ref([]);

  const IMG_URL = "https://image.tmdb.org/t/p/w370_and_h556_bestv2/";

  function fetchTopMovie() {
    AXIOS_API.get(
      `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    )
      .then((response) => {
        movies.value = response.data.results;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function fetchUpcomingMovie() {
    AXIOS_API.get(`movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
      .then((response) => {
        upcomingMovies.value = response.data.results;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function fetchMovieDetail(movieID) {
    AXIOS_API.get(`movie/${movieID}?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        movie.value = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function fetchCasting(movieID) {
    AXIOS_API.get(`movie/${movieID}/credits?api_key=${API_KEY}`)
      .then((response) => {
        cast.value = response.data.cast;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return {
    IMG_URL,
    fetchTopMovie,
    movies,
    fetchUpcomingMovie,
    upcomingMovies,
    fetchMovieDetail,
    movie,
    fetchCasting,
    cast,
  };
}
