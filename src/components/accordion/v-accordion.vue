<script setup lang="ts">
import { ref } from "@vue/reactivity";

const expand = ref(false);
defineProps<{ header: string }>();
</script>
<template>
  <div class="accordion">
    <div class="header-container" @click="expand = !expand">
      <h3>{{ header }}</h3>
      <span :class="['expand-content-icon', { expand }]" />
    </div>
    <div v-if="expand" class="content-container">
      <slot>default content</slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.accordion {
  .header-container {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background: #55adee;
    color: white;
    &:hover {
      background: #4867aa;
    }
    .expand-content-icon {
      &::after {
        color: white;
        content: "⌄";
      }

      &.expand::after {
        content: "⌃";
      }
    }
  }
  .content-container {
    padding: 10px;
    overflow: hidden;
  }
}
</style>
