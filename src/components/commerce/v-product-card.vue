<script setup lang="ts">
import VCommerceCard from "./commerce-card.vue";
defineProps<{ product: Product }>();
</script>
<template>
  <v-commerce-card>
    <template v-slot:content>
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
    </template>
    <template v-slot:action>
      <button>Add to Cart</button>
    </template>
  </v-commerce-card>
</template>
<style lang="scss" scoped></style>
