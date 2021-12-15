<script setup lang="ts">
import VLoader from "./v-loader.vue";
</script>
<template>
  <div class="v-loader-consumer-wrapper">
    <v-loader />
  </div>
</template>
<style>
.v-loader-consumer-wrapper {
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
