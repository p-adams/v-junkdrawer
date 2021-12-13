<script setup lang="ts">
defineProps<{ title: string }>();
</script>
<template>
  <button @click="$emit('send-request')">{{ title }}</button>
</template>
<style></style>
