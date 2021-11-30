<script setup lang="ts">
import { ref } from "@vue/reactivity";

const count = ref(0);
</script>

<template>
  <h3>Counter App</h3>
  <div>
    <span>{{ count }}</span>
    <button @click="count--">-</button>
    <button @click="count++">+</button>
  </div>
</template>

<style scoped></style>
