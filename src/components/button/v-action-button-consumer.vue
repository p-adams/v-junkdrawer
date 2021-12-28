<script setup lang="ts">
import VActionButton from "./v-action-button.vue";
const actionMap: any = {
  create: () => console.log("create"),
  read: () => console.log("read"),
  update: () => console.log("update"),
  ddelete: () => console.log("delete"),
};
function handleActionClick(actionKey: string) {
  return () => {
    return { fn: actionMap[actionKey] };
  };
}
</script>
<template>
  <v-action-button
    ><template #action-list>
      <ul>
        <li @click="handleActionClick('create')().fn()">create</li>
        <li @click="handleActionClick('read')().fn()">read</li>
        <li @click="handleActionClick('update')().fn()">update</li>
        <li @click="handleActionClick('ddelete')().fn()">delete</li>
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
