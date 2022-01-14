<script setup lang="ts">
defineProps<{ col: number }>();
</script>
<template>
  <!-- TODO: make props more flexible -->
  <div class="v-grid" :style="{ gridTemplateColumns: `repeat(${col}, 1fr)` }">
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.v-grid {
  display: grid;
}
</style>
