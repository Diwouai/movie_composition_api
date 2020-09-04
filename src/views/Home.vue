<template>
  <div class="home">
    <TopRated />
  </div>
</template>

<script>
// @ is an alias to /src
import TopRated from "@/components/blog/TopRated.vue"

export default {
  name: "Home",
  components: {
    TopRated
  }
};
</script>
