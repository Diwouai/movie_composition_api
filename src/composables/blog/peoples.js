import { AXIOS_API, API_KEY } from '@/services/api';
import {
  ref
} from 'vue';

export default function usePeoples() {
  let people = ref([]);

  const IMG_URL = 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/';

  function fetchPeopleDetail(peopleID) {
    AXIOS_API
      .get(`person/${peopleID}?api_key=${API_KEY}&language=en-USS`)
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