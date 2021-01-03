<template>
  <section class="container mx-auto px-6 p-10">
    <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
      {{ people.name }}
    </h2>
    <div class="flex items-center flex-wrap mb-20">
      <div class="w-full md:w-1/2">
        <h5 class="text-base text-gray-800 font-bold mb-3">
          Birthday : {{ formatDate(people.birthday) }}
        </h5>
        <h5 class="text-base text-gray-800 font-bold mb-3">
          Place of birth : {{ people.place_of_birth }}
        </h5>
        <p class="text-gray-600 mb-8">
          {{ people.biography }}
        </p>
      </div>

      <div class="w-full md:w-1/2">
        <img :src="IMG_URL + people.profile_path" :alt="people.name" />
      </div>
    </div>
  </section>
</template>

<script>
import usePeoples from "@/composables/blog/peoples";
import useUtils from "@/composables/utils";
import router from "@/router";

export default {
  setup() {
    const { currentRoute } = router;
    const { fetchPeopleDetail, people, IMG_URL } = usePeoples();
    const { formatDate } = useUtils();

    fetchPeopleDetail(currentRoute.value.params.id);

    return {
      people,
      IMG_URL,
      formatDate,
    };
  },
};
</script>
