<script setup lang="ts">
import VSearchInput from "./v-search-input.vue";
defineProps<{ pageTitle: string }>();
</script>
<template>
  <header>
    <div class="navbar">
      <div class="navbar-items">
        <span>{{ pageTitle }}</span>
        <v-search-input />
        <div>Account</div>
        <div>cart</div>
      </div>
    </div>
    <nav>
      <ul>
        <li>Books</li>
        <li>Computers</li>
        <li>Shoes</li>
      </ul>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: column;
  .navbar {
    border-bottom: 1px solid lightgray;
    margin: 10px 0 10px 0;
    .navbar-items {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
    }
  }
  nav {
    ul {
      list-style: none;
      display: flex;
      justify-content: space-evenly;
    }
  }
}
</style>
