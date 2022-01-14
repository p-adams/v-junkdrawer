<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{ col: number; gap: number }>();

const gridStyles = computed(() => {
  return {
    gridTemplateColumns: `repeat(${props.col}, 1fr)`,
    gap: `${props.gap}px`,
  };
});
</script>
<template>
  <div class="v-grid" :style="{ ...gridStyles }">
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.v-grid {
  display: grid;
}
</style>
