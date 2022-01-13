<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
onMounted(() => {
  document.addEventListener("click", onClickOutside);
});
onUnmounted(() => {
  document.removeEventListener("click", onClickOutside);
});

const { startPredictionsAfter = 0, predictions } = defineProps<{
  predictions: Predictions;
  startPredictionsAfter: number;
}>();

const emits = defineEmits(["search"]);

const query = ref<string>("");
const selectedPrediction = ref<Prediction>({ label: "", value: "" });
const showPredictions = ref(false);
const filteredPredictions = computed(() => {
  return predictions.filter((prediction) =>
    prediction.value.includes(query.value)
  );
});

const selectedPredictionIndex = computed(() =>
  filteredPredictions.value.findIndex(
    (prediction) => prediction.label === selectedPrediction?.value?.label
  )
);

function navigatePredictions(direction: "prev" | "next") {
  const index =
    direction === "prev"
      ? selectedPredictionIndex.value - 1
      : selectedPredictionIndex.value + 1;
  const prediction = filteredPredictions.value[index];
  if (!prediction) return;
  selectedPrediction.value = prediction;
}

function onClickOutside(e: MouseEvent) {
  if (e.target !== document.activeElement) {
    showPredictions.value = false;
  }
}

function detectMatch(prediction: Prediction) {
  return prediction.label.replaceAll(query.value, `<b>${query.value}</b>`);
}

function search(prediction: Prediction) {
  if (!prediction) return;
  query.value = prediction.value;
  emits("search", prediction.value);
}
</script>
<template>
  <div class="search-input">
    <input
      v-model="query"
      @keyup.down="navigatePredictions('next')"
      @keyup.up="navigatePredictions('prev')"
      @keyup.enter="search(selectedPrediction)"
      ref="inputRef"
    />
    <div
      class="suggestions-container"
      v-show="query.length > startPredictionsAfter"
      ref="suggestionRef"
    >
      <ul>
        <li
          v-for="prediction in filteredPredictions"
          :class="prediction.label === selectedPrediction?.label && 'selected'"
          @click="search(prediction)"
        >
          <span v-html="detectMatch(prediction)"></span>
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
