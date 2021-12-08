<script setup lang="ts">
import VAccordion from "../accordion/v-accordion.vue";
// demo recipe app using accordion cards for recipe
const recipes = [{ name: "", ingredients: [{}], step: [{}] }];
</script>
<template>
  <div class="wrapper">
    <h3>Accordion Consumer</h3>
    <v-accordion header="Tom Yum" />
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
