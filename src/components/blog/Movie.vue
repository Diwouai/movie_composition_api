<template>
  <section class="container mx-auto px-6 p-10">
    <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
      {{ movie.title }}
    </h2>
    <div class="flex items-center flex-wrap mb-20">
      <div class="w-full md:w-1/2">
        <h4 class="text-base text-gray-800 font-bold mb-3">Release Date : {{ formatDate(movie.release_date) }}</h4>
        <h5 class="text-base text-gray-800 font-bold mb-3">Vote Average : {{ movie.vote_average }}</h5>
        <h5 class="text-base text-gray-800 font-bold mb-3">Duration : {{ timeConvert(movie.runtime) }}</h5>
        <h5 class="text-base text-gray-800 font-bold mb-3">
          Cast : <div>
            <span v-for="c in cast" :key="c.id">
              <b>{{ c.name }}</b> / <i>{{ c.character }}</i>&nbsp;
            </span>
          </div>
        </h5>
        <p class="text-gray-600 mb-8">
          {{ movie.overview }}
        </p>
      </div>

      <div class="w-full md:w-1/2">
        <img :src="IMG_URL + movie.poster_path" :alt="movie.title" />
      </div>
    </div>
  </section>
</template>

<script>
  import useMovies from "@/composables/blog/movies";
  import useUtils from "@/composables/utils";
  import router from "@/router";

  export default {
    setup() {
      const {
        currentRoute
      } = router;
      const {
        fetchMovieDetail,
        movie,
        fetchCasting,
        cast,
        IMG_URL
      } = useMovies();
      const {
        formatDate,
        timeConvert
      } = useUtils();

      fetchMovieDetail(currentRoute.value.params.id);
      fetchCasting(currentRoute.value.params.id);

      return {
        movie,
        IMG_URL,
        formatDate,
        timeConvert,
        cast
      }
    }
  }
</script>