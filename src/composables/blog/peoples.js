import axios from 'axios';
import {
  ref
} from 'vue';

export default function usePeoples() {
  let people = ref([]);

  const API_KEY = 'ec6d53f8c6e364ecee8e6df9d9382d56';
  const IMG_URL = 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/';

  function fetchPeopleDetail(peopleID) {
    axios
      .get(`https://api.themoviedb.org/3/person/${peopleID}?api_key=${API_KEY}&language=en-USS`)
      .then(response => {
        people.value = response.data;
      })
      .catch(error => {
        console.log(error);
      })
  }

  return {
    IMG_URL,
    fetchPeopleDetail,
    people
  }
}