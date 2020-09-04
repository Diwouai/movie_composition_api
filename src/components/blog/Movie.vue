<template>
  <section class="container mx-auto px-6 p-10">
    <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
      {{ movie.title }}
    </h2>
    <div class="flex items-center flex-wrap mb-20">
      <div class="w-full md:w-1/2">
        <h4 class="text-3xl text-gray-800 font-bold mb-3">Release Date : {{ formatDate(movie.release_date) }}</h4>
        <p class="text-gray-600 mb-8">
          {{ movie.overview }}
        </p>
      </div>
      <div class="w-full md:w-1/2">
        <img :src="IMG_URL + movie.poster_path" />
      </div>
    </div>
  </section>
</template>

<script>
  import useMovies from "@/composables/blog/movies";
  import router from "@/router";

  export default {
    setup() {
      const {
        currentRoute
      } = router;
      const {
        fetchMovieDetail,
        movie,
        IMG_URL
      } = useMovies();

      fetchMovieDetail(currentRoute.value.params.id);

      function formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString('en', options);
      }

      return {
        movie,
        IMG_URL,
        formatDate
      }
    }
  }
</script>