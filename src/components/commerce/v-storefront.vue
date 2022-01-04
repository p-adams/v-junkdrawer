<script lang="ts" setup>
import VHeader from "./v-header.vue";
import { useRouter } from "vue-router";
const route = useRouter();

route.onError((e) => {
  console.log("not found", e);
});
</script>
<template>
  <div>
    <v-header page-title="storefront" />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<style></style>
