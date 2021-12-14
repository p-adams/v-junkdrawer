<script setup lang="ts">
import { ref } from "vue";
const props = defineProps<{
  title: string;
  disabled: boolean;
  bucketSize: number;
  timeout: number;
}>();
const emits = defineEmits(["send-request"]);
const _fillBucket = () => new Array(props.bucketSize).fill("_tk");
const bucket = ref([..._fillBucket()]);
const hasTokens = ref(true);

function onButtonClick() {
  const token = bucket.value.pop();
  // no more tokens, set waiting period
  if (!token) {
    hasTokens.value = false;
    setTimeout(() => {
      hasTokens.value = true;
      // refill bucket
      bucket.value.push(..._fillBucket());
    }, props.timeout);
  } else {
    emits("send-request");
  }
}
</script>
<template>
  <button @click="onButtonClick" :disabled="disabled || !hasTokens">
    {{ !hasTokens ? "Please Wait..." : title }}
  </button>
</template>
<style></style>
