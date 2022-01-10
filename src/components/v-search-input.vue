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

const queryInput = computed({
  // TODO: populate input with selected suggestion
  get: () => {
    return query.value;
  },
  set: (val: string) => {
    showSuggestions.value = query.value.length >= startSuggestionsAfter;
    query.value = val;
  },
});

function navigatePrev() {
  const prev = filteredSuggestions.value[selectedSuggestionIndex.value - 1];
  if (!prev) return;

  selectedSuggestion.value = prev;
}
function navigateNext() {
  const next = filteredSuggestions.value[selectedSuggestionIndex.value + 1];
  if (!next) return;
  selectedSuggestion.value = next;
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
      v-model="queryInput"
      @keyup.down="navigateNext"
      @keyup.up="navigatePrev"
      @keyup.enter="search(selectedSuggestion)"
      ref="inputRef"
    />
    <div
      class="suggestions-container"
      v-show="showSuggestions"
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
