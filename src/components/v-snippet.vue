<script setup lang="ts">
import { marked } from "marked";
// component that receives code snippet string as props
const props = defineProps<{ snippet: string }>();
const markedSnippet = marked(props.snippet);
</script>
<template>
  <div class="code-snippet">
    <div v-html="markedSnippet" />
  </div>
</template>
<style lang="scss">
.code-snippet {
  border: 1px solid lightgray;
  border-radius: 8px;
  padding: 10px;
  margin-top: 10px;
}
</style>
