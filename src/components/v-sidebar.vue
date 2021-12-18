<script setup lang="ts">
import useRouteUtils from "../router/useRouteUtils";
const { mainCategories, toggleCategoryExpanded, getExpandableCategory } =
  useRouteUtils();
</script>
<template>
  <div class="sidebar">
    <ul class="category-list">
      <li class="category-item" v-for="route in mainCategories()">
        <div>
          <router-link :to="route.path">{{ route.name }}</router-link>
          <span
            v-if="route.children.length"
            :class="[
              'expand',
              [getExpandableCategory(route) ? 'active' : 'inactive'],
            ]"
            @click="toggleCategoryExpanded(route)"
          ></span>
        </div>
        <ul
          v-if="route.children.length && getExpandableCategory(route)"
          class="sub-category-list"
        >
          <li class="sub-category-item" v-for="child in route.children">
            <router-link :to="`${route.path}/${child.path}`">{{
              child.name
            }}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  height: 100vh;
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

    .expand {
      margin-left: 10px;
      font-size: 20px;
      cursor: pointer;
      &::after {
        vertical-align: middle;
      }
      &.active {
        &::after {
          content: "⌄";
          color: blue;
        }
      }

      &.inactive {
        &::after {
          display: inline-block;
          content: "⌄";
          transform: rotate(270deg);
        }
      }
    }
    .sub-category-list {
      margin-top: 10px;
      li {
        margin-bottom: 10px;
        a {
          font-size: 14px;
          margin-left: 12px;

          &.router-link-active {
            &.router-link-exact-active {
              color: blue;
            }
          }
        }
      }
    }
  }
}
</style>
