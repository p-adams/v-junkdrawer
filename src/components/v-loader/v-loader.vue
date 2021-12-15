<script setup lang="ts"></script>
<template>
  <div class="loader"></div>
</template>
<style lang="scss" scoped>
$width: 120px;
.loader {
  border: 14px solid grey;
  border-bottom: 14px solid lightgray;
  border-radius: 50%;
  width: $width;
  height: $width;
  animation: spin 2s linear infinite;

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
