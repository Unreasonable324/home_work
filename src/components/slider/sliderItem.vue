<script setup lang="ts">
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <a href="#" class="md:min-w-[160px] min-w-[40vw] bg-white rounded-[10px] shadow-[0_10px_10px_0_rgba(0,0,0,0.07)] flex flex-col">
    <div
      class="w-full rounded-[10px] bg-no-repeat bg-cover"
      :style="{ backgroundImage: `url(${item.image})` }"
      style="aspect-ratio: 1"
    ></div>
    <div class="p-4 text-primary-text flex flex-col gap-3 justify-between h-full">
      <div>{{ item.title }}</div>
      <div class="font-bold mt-auto">{{ item.price }}</div>
    </div>
  </a>
</template>
<style></style>
