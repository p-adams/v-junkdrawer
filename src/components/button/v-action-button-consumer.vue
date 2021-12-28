<script setup lang="ts">
import VActionButton from "./v-action-button.vue";
const actionMap: any = {
  create: () => console.log("create"),
  read: () => console.log("read"),
  update: () => console.log("update"),
  ddelete: () => console.log("delete"),
};
function handleActionClick(actionKey: string) {
  return () => actionMap[actionKey]();
}
</script>
<template>
  <v-action-button
    ><template #action-list>
      <ul>
        <li @click="handleActionClick('create')()">create</li>
        <li @click="handleActionClick('read')()">read</li>
        <li @click="handleActionClick('update')()">update</li>
        <li @click="handleActionClick('ddelete')()">delete</li>
      </ul></template
    ></v-action-button
  >
</template>
<style lang="scss" scoped>
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
