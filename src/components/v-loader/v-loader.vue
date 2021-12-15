<script setup lang="ts">
const props = defineProps<{ size: "sm" | "md" | "lg" }>();
console.log(props.size);
</script>
<template>
  <div :class="['loader', `${size}`]"></div>
</template>
<style lang="scss" scoped>
$sm-size: 40px;
$md-size: 80px;
$lg-size: 120px;
.loader {
  border: 14px solid grey;
  border-bottom: 14px solid lightgray;
  border-radius: 50%;
  animation: spin 2s linear infinite;

  &.sm {
    width: $sm-size;
    height: $sm-size;
  }

  &.md {
    width: $md-size;
    height: $md-size;
  }

  &.lg {
    width: $lg-size;
    height: $lg-size;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
