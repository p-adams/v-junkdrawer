<script setup lang="ts"></script>
<template>
  <div class="app-container">
    <div class="sidebar">
      <router-link to="/">Home</router-link>
      <router-link to="/counter">Counter</router-link>
      <router-link to="/tabs">Tabs</router-link>
      <router-link to="/modal">Modal</router-link>
      <router-link to="/accordion">Accordion</router-link>
      <router-link to="/rate-limit-button">Rate Limit Button</router-link>
      <router-link to="/v-loader">Loader</router-link>

      <router-link to="/v-commerce">Commerce</router-link>

      <router-link to="/v-commerce/product-list">Product List</router-link>
      <router-link to="/v-commerce/order-summary">Order Summary</router-link>
    </div>
    <main>
      <router-view />
    </main>
    <footer></footer>
  </div>
</template>

<style lang="scss">
:root * {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.app-container {
  display: grid;
  grid-template-columns: 200px auto;
  padding: 10px;
  height: 100vh;
  margin-top: 47px;
  .sidebar {
    display: flex;
    flex-direction: column;

    align-items: center;
    background-color: lightgray;
    a {
      margin-top: 20px;
      margin-bottom: 33px;
      &.router-link-active {
        &.router-link-exact-active {
          color: blue;
        }
      }
    }
  }
  main {
    padding: 18px;
  }
}
</style>
