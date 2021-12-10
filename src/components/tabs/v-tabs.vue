<script setup lang="ts">
import { onMounted } from "vue";

const props = defineProps<{ tabs: Array<string> }>();
onMounted(() => {
  console.log(props.tabs);
});
</script>

<template>
  <h3>Tabs App</h3>
</template>

<style scoped></style>
