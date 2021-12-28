<script setup lang="ts">
import { ref } from "vue";
const expand = ref(false);
defineProps<{ actions?: Array<Action> }>();
</script>
<template>
  <div class="action-button">
    <div class="wrapper">
      <button
        :class="['label', { expanded: expand }]"
        @click.prevent="expand = !expand"
      >
        Actions
      </button>
      <div v-if="expand">
        <slot name="action-list" />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.action-button {
  .wrapper {
    display: inline-flex;
    flex-direction: column;
    border: 1px solid lightgrey;
    border-radius: 4px;
    cursor: pointer;

    .label {
      border: none;
      text-transform: uppercase;
      color: white;
      background-color: #2196f3;
      font-weight: 700;
      padding: 10px;
      &.expanded {
        &::after {
          content: ">";
          display: inline-block;
          transform: rotate(90deg);
        }
      }
      &::after {
        content: ">";
        margin-left: 10px;
        vertical-align: middle;
      }
    }
    ul {
      padding: 10px;
      text-align: right;

      li {
        margin-bottom: 10px;
        &:hover {
          background-color: lightgray;
        }
      }
    }
  }
}
</style>
