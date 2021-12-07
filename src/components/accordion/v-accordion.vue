<script setup lang="ts">
import { ref } from "@vue/reactivity";

const expand = ref(false);
defineProps<{ header: string }>();
</script>
<template>
  <div class="accordion">
    <div class="header-container">
      <h3>{{ header }}</h3>
      <span
        @click="expand = !expand"
        :class="['expand-content-icon', { expand }]"
      />
    </div>
    <div v-show="expand" class="content-container">content</div>
  </div>
</template>
<style lang="scss" scoped>
.accordion {
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  .header-container {
    border-bottom: 1px solid lightgray;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background: #55adee;
    color: white;
    .expand-content-icon {
      &::after {
        color: white;
        content: "⬇";
      }

      &.expand::after {
        content: "⬆";
      }
    }
  }
  .content-container {
    padding: 10px;
  }
}
</style>
