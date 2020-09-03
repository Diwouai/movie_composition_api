<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
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
