<script setup lang="ts">
import VAccordion from "../accordion/v-accordion.vue";
// demo recipe app using accordion cards for recipe
const recipes = [{ name: "", ingredients: [{}], step: [{}] }];
</script>
<template><v-accordion header="Tom Yum" /></template>
<style lang="scss" scoped>
.accordion {
  width: 300px;
}
</style>
3
