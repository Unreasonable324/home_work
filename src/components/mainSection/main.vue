<script setup lang="ts">
import Left from '@/components/mainSection/left.vue';
import Right from '@/components/mainSection/right.vue';
</script>
<template>
  <div class="flex flex-col relative z-10 md:gap-6 md:flex-row circle1 circle2">
    <Left />
    <Right />
    <div class="circle3"></div>
  </div>
</template>
<style scoped>
.circle1 {
  @apply before:content-[''] before:absolute before:h-[98px] before:w-[98px] before:border-[4px] before:border-light-green before:rounded-full before:right-[-38px] before:top-[-38px] before:z-10;
}
.circle2 {
  @apply after:content-[''] after:absolute after:h-[36px] after:w-[36px] after:bg-light-green-2 after:rounded-full md:after:left-[488px] after:right-[19px] md:after:bottom-[-13px] after:bottom-[calc(167px-18px)] md:after:z-[-1];
}
.circle3 {
  @apply absolute before:content-[''] before:absolute before:h-[76px] before:w-[76px] before:bg-dark-green before:rounded-full before:left-[-38px] md:before:top-[191px] before:top-[241px];
}
</style>
