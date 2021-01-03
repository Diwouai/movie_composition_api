<template>
  <div class="upcoming">
    <NewMovie />
  </div>
</template>

<script>
// @ is an alias to /src
import NewMovie from "@/components/blog/NewMovie.vue";

export default {
  name: "Upcoming",
  components: {
    NewMovie,
  },
};
</script>
