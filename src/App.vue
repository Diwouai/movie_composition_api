<template>
  <div class="flex flex-col min-h-screen">
    <Header /><!-- //height 32 -->
    <div class="flex-1 flex w-2/3 mx-auto p-4 text-lg bg-white h-full shadow-lg">
      <div class="w-3/5">
        <router-view :key="$route.fullPath" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/site/Header.vue";
export default {
  components: {
    Header
  }
};
</script>

<style></style>