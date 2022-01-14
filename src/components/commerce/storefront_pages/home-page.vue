<script setup lang="ts">
import pageTemplate from "./page-template.vue";
</script>
<template>
  <div>
    <page-template>
      <template v-slot:header>
        <h3>Storefront</h3>
      </template>
      <template v-slot:left-side> left sidebar </template>

      <template v-slot:main-content> main </template>

      <template v-slot:right-side> right sidebar </template>

      <template v-slot:footer> footer </template>
    </page-template>
  </div>
</template>
<style></style>
