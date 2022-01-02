<script setup lang="ts">
import VProductCard from "./v-product-card.vue";
import { products } from "./mock_data";
</script>
<template>
  <div>
    <h3>product list consumer</h3>
    <!-- TODO: layout so that product list is always entered -->
    <div class="product-list">
      <div v-for="product in products" :key="product.id">
        <v-product-card :product="product" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
</style>
