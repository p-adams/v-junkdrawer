<script setup lang="ts">
import { __FRUIT_PRODUCTS } from "../mock_data";
import VProductCard from "../v-product-card.vue";
</script>
<template>
  <div class="page fruit-page">
    <h3>Fruits</h3>
    <div class="page-list">
      <div v-for="fruit in __FRUIT_PRODUCTS">
        <v-product-card :product="fruit" />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
/**
TODO: extract common '.page.*<some-page>-page' styling into shared stylesheet
*/
.fruit-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  h3 {
    margin-bottom: 10px;
  }
}
.page-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
</style>
