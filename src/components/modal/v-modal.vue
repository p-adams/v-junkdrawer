<script setup lang="ts">
const props = defineProps<{ mask: boolean; isOpen: boolean }>();
console.log(props);
</script>

<template>
  <div :class="['modal', { mask: mask }]">Modal App</div>
</template>

<style lang="scss" scoped></style>
