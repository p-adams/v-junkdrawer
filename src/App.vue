<script setup lang="ts">
import VSidebar from "./components/v-sidebar.vue";
</script>
<template>
  <div class="app-container">
    <v-sidebar />
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
  height: 100vh;
}
ul {
  list-style: none;
}
.app-container {
  display: grid;
  grid-template-columns: 200px auto;

  height: 100%;

  main {
    padding: 18px;
  }
}
</style>
