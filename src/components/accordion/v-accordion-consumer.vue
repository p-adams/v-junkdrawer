<script setup lang="ts">
import VAccordion from "../accordion/v-accordion.vue";
</script>
<template>
  <div class="wrapper">
    <h3>Accordion Consumer</h3>
    <v-accordion header="Item 0"> Item 1 content </v-accordion>
    <v-accordion header="Item 1" />
    <v-accordion header="Item 2">Item 2 content</v-accordion>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  height: 100%;
}
.accordion {
  width: 300px;
}
</style>
3
