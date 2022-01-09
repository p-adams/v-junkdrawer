<script setup lang="ts">
import { computed, ref } from "vue";

const query = ref("");
const showSuggestions = computed(() => query.value.length > 0);
</script>
<template>
  <div class="search-input">
    <input v-model="query" />
    <div class="suggestions-container" v-show="showSuggestions">
      <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Pears</li>
        <li>Grapes</li>
        <li>Cherries</li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.search-input {
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  input {
    width: 100%;
  }
  .suggestions-container {
    background: white;
    z-index: 1;
    li {
      padding: 8px;
    }
  }
}
</style>
