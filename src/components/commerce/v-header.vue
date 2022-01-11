<script setup lang="ts">
import VSearchInput from "../v-search-input.vue";
// replica suggestions data
defineProps<{ pageTitle: string }>();
const __suggestions: Array<{ label: string; value: string }> = [
  {
    label: "apples",
    value: "apples",
  },
  { label: "bananas", value: "bananas" },
  {
    label: "pears",
    value: "pears",
  },
  {
    label: "pears and cheese",
    value: "pears and cheese",
  },
  {
    label: "grapes",
    value: "grapes",
  },
  {
    label: "cherries",
    value: "cherries",
  },
];
function search(query: string) {
  console.log("search: ", query);
}
</script>
<template>
  <header>
    <div class="navbar">
      <div class="navbar-items">
        <router-link to="/v-commerce/storefront">{{ pageTitle }}</router-link>

        <v-search-input
          :suggestions="__suggestions"
          :start-suggestions-after="0"
          @search="(q: string) => search(q)"
        />
        <div>Account</div>
        <div>cart</div>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <router-link to="/v-commerce/storefront/fruits">Fruits</router-link>
        </li>
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
