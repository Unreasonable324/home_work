<script setup lang="ts">
import image1 from '@/assets/img/slider/1.png';
import image2 from '@/assets/img/slider/2.png';
import image3 from '@/assets/img/slider/3.png';
import image4 from '@/assets/img/slider/4.png';
import image5 from '@/assets/img/slider/5.png';
import SliderItem from '@/components/slider/sliderItem.vue';

const items = [
  {
    title: "Тыква",
    price: 500,
    image: image1,
  },
  {
    title: "Цветная капуста",
    price: 350,
    image: image2,
  },
  {
    title: "Мята",
    price: 150,
    image: image3,
  },
  {
    title: "Базилик",
    price: 450,
    image: image4,
  },
  {
    title: "Кабачок",
    price: 50,
    image: image5,
  },
];
</script>
<template>
  <div class="flex flex-col gap-5">
    <div class="text-[40px] font-bold text-main-text"><h2>Что на прилавке</h2></div>
    <div class="relative circle">
      <div class="flex gap-3 overflow-x-auto w-[100%] pb-10 justify-between">
        <SliderItem v-for="item in items" :key="item.title" :item="item" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.circle {
  @apply before:content-[''] before:absolute before:h-[46px] before:w-[46px] before:bg-light-green-3 before:rounded-full before:right-[14px] before:bottom-[10px];
}
</style>
