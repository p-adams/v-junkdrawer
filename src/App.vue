<script setup lang="ts">
import useRouteUtils from "./router/useRouteUtils";
const { sortedRoutes, routes } = useRouteUtils();
</script>
<template>
  <div class="app-container">
    <div class="sidebar">
      <ul class="category-list">
        <li class="category-item" v-for="route in sortedRoutes()">
          <router-link v-if="routes(route).length === 2" :to="route.path">{{
            route.name
          }}</router-link>
          <ul v-else class="sub-category-list">
            <li class="sub-category-item">
              <router-link :to="route.path"> {{ route.name }}</router-link>
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
    .category-item {
      margin-top: 20px;
      margin-bottom: 33px;
      a {
        &.router-link-active {
          &.router-link-exact-active {
            color: blue;
          }
        }
      }
      .sub-category-list {
        li {
          a {
            font-size: 14px;
            margin-left: 12px;
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
