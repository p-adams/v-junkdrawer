<script setup lang="ts">
import VProductCard from "./v-product-card.vue";
import { products } from "./mock_data";
</script>
<template>
  <div>
    <h3>product list consumer</h3>
    <div v-for="product in products">
      <v-product-card :product="product" />
    </div>
  </div>
</template>
<style></style>
