<template>
  <div class="flex flex-wrap -mx-1 lg:-mx-4">
    <!-- Column -->
    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" v-for="movie in movies" :key="movie.id">

      <!-- Article -->
      <article class="overflow-hidden rounded-lg shadow-lg">

        <img class="block h-auto w-full" :src="IMG_URL + movie.poster_path">

        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 class="text-lg">
            {{ movie.title }}
          </h1>
        </header>

      </article>
      <!-- END Article -->

    </div>
    <!-- END Column -->
  </div>
</template>

<script>
  import useMovies from "@/composables/blog/movies";
  import {
    onMounted
  } from "vue";

  export default {
    setup() {
      const {
        movies,
        fetchTopMovie,
        IMG_URL
      } = useMovies();
      onMounted(() => fetchTopMovie());

      return {
        movies,
        IMG_URL
      };
    }
  }
</script>