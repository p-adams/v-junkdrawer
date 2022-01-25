<script setup lang="ts"></script>
<template>
  <article class="order-summary-container">
    <header><v-slot name="header" /></header>
    <section><v-slot name="section" /></section>
    <footer><v-slot name="footer" /></footer>
  </article>
</template>
<style lang="scss" scoped>
.order-summary-container {
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
