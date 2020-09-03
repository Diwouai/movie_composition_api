<template>
  <div class="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4">
  </div>
</template>

<script>
import useMovies from "@/composables/blog/movies";
import { onMounted } from "vue";

export default {
  setup() {
    const { movies, fetchTopMovie } = useMovies();
    onMounted(() => fetchTopMovie());

    return { movies };
  }
}
</script>