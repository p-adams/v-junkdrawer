<script setup lang="ts">
import { ref } from "vue";
const expand = ref(false);
</script>
<template>
  <div class="action-button">
    <div class="wrapper" @click="expand = !expand">
      <button class="label">Actions</button>
      <ul v-if="expand">
        <li>create</li>
        <li>read</li>
        <li>update</li>
        <li>delete</li>
      </ul>
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
