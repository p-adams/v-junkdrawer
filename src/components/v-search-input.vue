<script setup lang="ts">
import { computed, ref } from "vue";
const { startSuggestionsAfter = 0, suggestions } = defineProps<{
  suggestions: Suggestions;
  startSuggestionsAfter: number;
}>();
const filteredSuggestions = computed(() => {
  return suggestions.filter((suggestion) =>
    suggestion.value.includes(query.value)
  );
});

function detectMatch(suggestion: { label: string; value: string }) {
  return suggestion.label.replaceAll(query.value, `<b>${query.value}</b>`);
}

const query = ref("");
const showSuggestions = computed(
  () => query.value.length > startSuggestionsAfter
);
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
