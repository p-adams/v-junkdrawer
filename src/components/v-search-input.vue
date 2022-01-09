<script setup lang="ts">
import { computed, ref } from "vue";
// replica suggestions data
const _suggestions: Array<{ label: string; value: string }> = [
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
    label: "grapes",
    value: "grapes",
  },
  {
    label: "cherries",
    value: "cherries",
  },
];

const filteredSuggestions = computed(() => {
  return _suggestions.filter((suggestion) =>
    suggestion.value.includes(query.value)
  );
});

function detectMatch(suggestion: { label: string; value: string }) {
  return suggestion.label.replaceAll(query.value, `<b>${query.value}</b>`);
}

const query = ref("");
const showSuggestions = computed(() => query.value.length > 0);
</script>
<template>
  <div class="search-input">
    <input v-model="query" />
    <div class="suggestions-container" v-show="showSuggestions">
      <ul>
        <li v-for="suggestion in filteredSuggestions">
          <span v-html="detectMatch(suggestion)"></span>
        </li>
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
