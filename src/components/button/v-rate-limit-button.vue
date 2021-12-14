<script setup lang="ts">
defineProps<{ title: string; disabled: boolean }>();
</script>
<template>
  <button @click="$emit('send-request')" :disabled="disabled">
    {{ title }}
  </button>
</template>
<style></style>
