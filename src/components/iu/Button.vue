<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div class="flex justify-center items-center w-full h-[54px] rounded-[10px] text-white tracking-wider border-2 border-white">
    {{ title }}
  </div>
</template>
<style></style>
