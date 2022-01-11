<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
onMounted(() => {
  document.addEventListener("click", onClickOutside);
});
onUnmounted(() => {
  document.removeEventListener("click", onClickOutside);
});

const { startSuggestionsAfter = 0, suggestions } = defineProps<{
  suggestions: Suggestions;
  startSuggestionsAfter: number;
}>();

const emits = defineEmits(["search"]);

const query = ref<string>("");
const selectedSuggestion = ref<Suggestion>({ label: "", value: "" });
const showSuggestions = ref(false);
const suggestionRef = ref<HTMLDivElement>();
const inputRef = ref<HTMLInputElement>();
const filteredSuggestions = computed(() => {
  return suggestions.filter((suggestion) =>
    suggestion.value.includes(query.value)
  );
});

const selectedSuggestionIndex = computed(() =>
  filteredSuggestions.value.findIndex(
    (suggestion) => suggestion.label === selectedSuggestion?.value?.label
  )
);

function navigateSuggestions(direction: "prev" | "next") {
  const index =
    direction === "prev"
      ? selectedSuggestionIndex.value - 1
      : selectedSuggestionIndex.value + 1;
  const suggestion = filteredSuggestions.value[index];
  if (!suggestion) return;
  selectedSuggestion.value = suggestion;
}

function onClickOutside(e: MouseEvent) {
  if (e.target !== document.activeElement) {
    showSuggestions.value = false;
  }
}

function detectMatch(suggestion: { label: string; value: string }) {
  return suggestion.label.replaceAll(query.value, `<b>${query.value}</b>`);
}

function search(suggestion: Suggestion) {
  if (!suggestion) return;
  query.value = suggestion.value;
  emits("search", suggestion.value);
}
</script>
<template>
  <div class="search-input">
    <input
      v-model="query"
      @keyup.down="navigateSuggestions('next')"
      @keyup.up="navigateSuggestions('prev')"
      @keyup.enter="search(selectedSuggestion)"
      ref="inputRef"
    />
    <div
      class="suggestions-container"
      v-show="query.length > startSuggestionsAfter"
      ref="suggestionRef"
    >
      <ul>
        <li
          v-for="suggestion in filteredSuggestions"
          :class="suggestion.label === selectedSuggestion?.label && 'selected'"
          @click="search(suggestion)"
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
      &.selected,
      &:hover {
        background: lightgrey;
      }
    }
  }
}
</style>
