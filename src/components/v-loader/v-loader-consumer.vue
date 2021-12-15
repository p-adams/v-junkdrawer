<script setup lang="ts">
import VLoader from "./v-loader.vue";
</script>
<template>
  <div class="v-loader-consumer-wrapper">
    <div class="loader-container">
      <div>Small<v-loader size="sm" /></div>
      <div>Medium<v-loader size="md" /></div>
      <div>Large<v-loader size="lg" /></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.v-loader-consumer-wrapper {
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .loader-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
