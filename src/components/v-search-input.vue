<script setup lang="ts">
import { computed, ref } from "vue";

const { startSuggestionsAfter = 0, suggestions } = defineProps<{
  suggestions: Suggestions;
  startSuggestionsAfter: number;
}>();

const query = ref<string>("");
const selectedSuggestion = ref<Suggestion>();
const focusSuggestionContainer = ref<-1 | 0>(-1);
const suggestionRef = ref<HTMLDivElement>();
const inputRef = ref<HTMLInputElement>();
const filteredSuggestions = computed(() => {
  return suggestions.filter((suggestion) =>
    suggestion.value.includes(query.value)
  );
});

const showSuggestions = computed(
  () => query.value.length > startSuggestionsAfter
);

const selectedSuggestionIndex = computed(() =>
  suggestions.findIndex(
    (suggestion) => suggestion.label === selectedSuggestion?.value?.label
  )
);

const queryInput = computed({
  get: () => {
    if (selectedSuggestion.value) {
      return selectedSuggestion.value.value;
    }
    return query.value;
  },
  set: (val: string) => {
    query.value = val;
  },
});

function focusSuggestions() {
  // set focus on suggestions container
  inputRef.value?.blur();
  suggestionRef.value?.focus();
  focusSuggestionContainer.value = 0;
  // default first suggestion as selected
  selectedSuggestion.value = suggestions[0];
}
function navigatePrev() {
  selectedSuggestion.value = suggestions[selectedSuggestionIndex.value - 1];
}
function navigateNext() {
  selectedSuggestion.value = suggestions[selectedSuggestionIndex.value + 1];
}

function detectMatch(suggestion: { label: string; value: string }) {
  return suggestion.label.replaceAll(query.value, `<b>${query.value}</b>`);
}
</script>
<template>
  <div class="search-input">
    <input v-model="queryInput" @keyup.down="focusSuggestions" ref="inputRef" />
    <div
      class="suggestions-container"
      v-show="showSuggestions"
      ref="suggestionRef"
      :tabindex="focusSuggestionContainer"
      @keyup.down="navigateNext"
      @keyup.up="navigatePrev"
    >
      <ul>
        <li
          v-for="suggestion in filteredSuggestions"
          :class="suggestion.label === selectedSuggestion?.label && 'selected'"
        >
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
      &.selected {
        background: lightgrey;
      }
    }
  }
}
</style>
