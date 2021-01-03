<template>
  <div class="flex flex-col min-h-screen">
    <Header /><!-- //height 32 -->
    <div class="container my-12 mx-auto px-4 md:px-12">
      <router-view :key="$route.fullPath" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/site/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style></style>
