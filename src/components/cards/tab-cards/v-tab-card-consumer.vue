<script lang="ts" setup>
import VTabCard from "./v-tab-card.vue";

const tabsA: Tab[] = [
  { value: "A", label: "A" },
  { value: "Aa", label: "Aa" },
];
const tabsB: Tab[] = [
  { value: "B", label: "B" },
  { value: "Bb", label: "Bb" },
];
const tabsC: Tab[] = [
  { value: "C", label: "C" },
  { value: "Cc", label: "Cc" },
];
const tabsD: Tab[] = [
  { value: "D", label: "D" },
  { value: "Dd", label: "Dd" },
];
</script>
<template>
  <div class="v-tab-card-consumer-container">
    <v-tab-card :tabs="tabsA" />
    <v-tab-card :tabs="tabsB" />
    <v-tab-card :tabs="tabsC" />
    <v-tab-card :tabs="tabsD" />
  </div>
</template>
<style lang="scss" scoped>
.v-tab-card-consumer-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
