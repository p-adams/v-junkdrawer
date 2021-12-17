<script setup lang="ts"></script>
<template>
  <div class="app-container">
    <div class="sidebar">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li>
          <router-link to="/counter">Counter</router-link>
        </li>
        <li><router-link to="/tabs">Tabs</router-link></li>
        <li><router-link to="/modal">Modal</router-link></li>
        <li><router-link to="/accordion">Accordion</router-link></li>
        <li>
          <router-link to="/rate-limit-button">Rate Limit Button</router-link>
        </li>
        <li><router-link to="/v-loader">Loader</router-link></li>
        <li>
          <router-link to="/v-commerce">
            <span>Commerce</span>
          </router-link>
          <ul class="sub-list">
            <li>
              <router-link to="/v-commerce/product-list"
                >Product List</router-link
              >
            </li>
            <li>
              <router-link to="/v-commerce/order-summary"
                >Order Summary</router-link
              >
            </li>
          </ul>
        </li>
      </ul>
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
ul {
  list-style: none;
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
    li {
      margin-top: 20px;
      margin-bottom: 33px;
      a {
        &.router-link-active {
          &.router-link-exact-active {
            color: blue;
          }
        }
      }
    }
  }
  main {
    padding: 18px;
  }
}
</style>
