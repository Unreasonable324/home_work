<script setup lang="ts">
import Left from '@/components/mainSection/left.vue';
import Right from '@/components/mainSection/right.vue';
</script>
<template>
  <div class="flex flex-col relative z-10 md:gap-6 md:flex-row">
    <Left />
    <Right />
    <!-- decorations -->
    <div
      class="w-full h-full absolute before:content-[''] before:absolute before:h-[76px] before:w-[76px] before:bg-dark-green before:rounded-full before:left-[-38px] md:before:top-[191px] before:top-[241px]"
    ></div>
    <div
      class="w-full h-full absolute before:content-[''] before:absolute before:h-[36px] before:w-[36px] before:bg-light-green-2 before:rounded-full md:before:left-[488px] before:right-[19px] md:before:bottom-[-13px] before:bottom-[calc(167px-18px)] md:before:z-[-1]"
    ></div>
    <div
      class="w-full h-full absolute before:content-[''] before:absolute before:h-[98px] before:w-[98px] before:border-[4px] before:border-light-green before:rounded-full before:right-[-38px] before:top-[-38px]"
    ></div>
  </div>
</template>
<style></style>
