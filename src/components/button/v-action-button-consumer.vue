<script setup lang="ts">
import VActionButton from "./v-action-button.vue";
</script>
<template>
  <v-action-button
    ><template #action-list>
      <ul>
        <li>create</li>
        <li>read</li>
        <li>update</li>
        <li>delete</li>
      </ul></template
    ></v-action-button
  >
</template>
<style lang="scss">
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
</style>
