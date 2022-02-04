<script lang="ts" setup>
import VTabCard from "./v-tab-card.vue";
</script>
<template>
  <div class="v-tab-card-consumer-container">
    <v-tab-card />
    <v-tab-card />
    <v-tab-card />
    <v-tab-card />
  </div>
</template>
<style lang="scss" scoped>
.v-tab-card-consumer-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
