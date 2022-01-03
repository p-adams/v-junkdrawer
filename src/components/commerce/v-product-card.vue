<script setup lang="ts">
import VCard from "./v-card.vue";
defineProps<{ product: Product }>();
</script>
<template>
  <v-card>
    <template v-slot:content>
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
    </template>
    <template v-slot:action>
      <button>Add to Cart</button>
    </template>
  </v-card>
</template>
<style lang="scss" scoped></style>
