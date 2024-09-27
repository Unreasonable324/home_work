<script setup lang="ts">
import bgImageL from '@/assets/img/imageL.png';
import Arrow from '@/components/icons/arrow.vue';

/* пришли с бека */
const imageL = bgImageL;
const gradientDesk = "linear-gradient(180deg, rgba(173, 180, 148, 0) 0%, #aeb595 100%)";
const gradientMob = "linear-gradient(180deg, #aeb595 0%, rgba(173, 180, 148, 0) 100%)";
</script>
<template>
  <div
    class="flex-1 bg-no-repeat bg-cover md:rounded-[10px] rounded-t-[10px] overflow-hidden relative"
    :style="{ backgroundImage: `url(${imageL})` }"
  >
    <div
      class="w-full h-full md:min-h-none min-h-[400px] px-[30px] py-9 text-white flex flex-col md:justify-between gradient"
      :style="['--gradientDesk:' + gradientDesk, '--gradientMob:' + gradientMob]"
    >
      <div class="text-3xl">20-22 сентября</div>
      <a class="text-[40px] flex md:justify-between flex-col md:items-end items-start gap-5 md:flex-row" href="#">
        <div class="leading-none font-bold md:w-auto w-min">Фестиваль фермеских товаров</div>
        <div class=""><Arrow /></div>
      </a>
    </div>
  </div>
</template>
<style scoped>
.gradient {
  background: var(--gradientDesk);
}
@media screen and (max-width: 769px) {
  .gradient {
    background: var(--gradientMob);
  }
}
</style>
