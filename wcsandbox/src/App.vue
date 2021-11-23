<script setup lang="ts"></script>
<template>
  <div class="app-container">
    <header>
      <router-link to="/">Home</router-link>
    </header>
    <sidebar>
      <router-link to="/counter">Counter</router-link>
      <router-link to="/tabs">Tabs</router-link>
      <router-link to="/modal">Modal</router-link>
    </sidebar>
    <main>
      <router-view />
    </main>
    <footer></footer>
  </div>
</template>

<style>
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
  outline: 1px solid red;
  height: 100vh;
  padding: 0;
  margin: 0;
}
</style>
