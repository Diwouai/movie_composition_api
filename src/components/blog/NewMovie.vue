<template>
  <div class="flex flex-wrap -mx-1 lg:-mx-4">
    <!-- Column -->
    <div class="my-1 px-1 w-full md:w-1/3 lg:my-4 lg:px-4 lg:w-1/5" v-for="movie in upcomingMovies" :key="movie.id">

      <!-- Article -->
      <article class="overflow-hidden rounded-lg shadow-lg">

        <router-link :to="`/movie/${movie.id}`">
          <img class="block h-auto w-full" :src="IMG_URL + movie.poster_path" :alt="movie.title">
        </router-link>

        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 class="text-lg">
            <router-link :to="`/movie/${movie.id}`" class="text-black hover:text-teal-400" style="text-decoration: none">{{ movie.title }}</router-link>
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
        upcomingMovies,
        fetchUpcomingMovie,
        IMG_URL
      } = useMovies();
      onMounted(() => fetchUpcomingMovie());

      return {
        upcomingMovies,
        IMG_URL
      };
    }
  }
</script>