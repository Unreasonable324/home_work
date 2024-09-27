<script setup lang="ts">
import Main from '@/components/mainSection/main.vue';
import Slider from '@/components/slider/main.vue';
</script>
<template>
  <div class="flex flex-col gap-[44px] mb-10 relative circle">
    <Main />
    <Slider />
  </div>
</template>
<style scoped>
.circle {
  @apply before:content-[''] before:absolute before:h-[36px] before:w-[36px] before:bg-dark-green2 before:rounded-full before:left-[45px] before:top-[546px] md:before:left-[142px] md:before:top-[646px];
}
</style>
