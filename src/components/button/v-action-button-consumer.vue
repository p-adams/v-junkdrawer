<script setup lang="ts">
import VActionButton from "./v-action-button.vue";
const create = () => console.log("create");
const read = () => console.log("read");
const update = () => console.log("update");
const ddelete = () => console.log("delete");
</script>
<template>
  <v-action-button
    ><template #action-list>
      <ul>
        <li @click="create">create</li>
        <li @click="read">read</li>
        <li @click="update">update</li>
        <li @click="ddelete">delete</li>
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
