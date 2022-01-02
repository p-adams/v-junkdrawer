<script setup lang="ts">
import VProductCard from "./v-product-card.vue";
import { products } from "./mock_data";
</script>
<template>
  <div class="product-list-consumer">
    <h3>product list consumer</h3>
    <div class="product-list">
      <div v-for="product in products" :key="product.id">
        <v-product-card :product="product" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.product-list-consumer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  h3 {
    margin-bottom: 10px;
  }
  .product-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }
}
</style>
