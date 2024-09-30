<script setup lang="ts">
import bgImageR from '@/assets/img/imageR.png';
import Button from '@/components/iu/Button.vue';

/* пришли с бека */
const imageR = bgImageR;
</script>
<template>
  <div
    class="md:min-h-[400px] h-[167px] px-[22px] md:py-[30px] py-4 bg-no-repeat bg-cover md:rounded-[10px] rounded-b-[10px] overflow-hidden md:w-[260px]"
    :style="{ backgroundImage: `url(${imageR})` }"
  >
    <div class="h-full flex flex-col">
      <div class="flex flex-col md:gap-3 text-white">
        <div class="md:text-3xl text-xl">А также:</div>
        <div class="md:text-3xl text-xl font-bold">Выставка тыкв</div>
        <div class="md:block hidden">
          Местные фермеры покажут свои самые большие тыквы. Посоревнуются чья тыква тяжелее и крепче.
        </div>
      </div>
      <a href="#" class="mt-auto">
        <Button title="ЕЩЕ О ВЫСТАВКЕ"></Button>
      </a>
    </div>
  </div>
</template>
<style></style>
