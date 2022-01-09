<script setup lang="ts">
import VSearchInput from "../v-search-input.vue";
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
        <li>
          <router-link to="/v-commerce/storefront/books">Books</router-link>
        </li>

        <li>
          <router-link to="/v-commerce/storefront/computers"
            >Computers</router-link
          >
        </li>
        <li>
          <router-link to="/v-commerce/storefront/gadgets">Gadgets</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
$navbarH: 70px;
header {
  display: flex;
  flex-direction: column;
  .navbar {
    height: $navbarH;
    background-color: #818589;
    border-bottom: 1px solid lightgray;
    margin-top: 10px;
    .navbar-items {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
      span,
      div {
        flex: 1;
      }
      .search-input {
        flex: 2;
      }
    }
  }
  nav {
    background-color: #d3d3d3;
    height: calc($navbarH / 2);
    ul {
      height: 100%;

      list-style: none;
      display: flex;
      justify-content: space-evenly;
      li {
        padding: 2px;
        a {
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          height: 100%;
        }
      }
    }
  }
}
</style>
