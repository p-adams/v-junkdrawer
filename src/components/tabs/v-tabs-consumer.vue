<script setup lang="ts">
import VTabs from "../tabs/v-tabs.vue";
const tabs = ["Home", "About", "Contact"];
</script>
<template>
  <h3>Tabs Consumer</h3>
  <VTabs :tabs="tabs" />
</template>
<style lang="scss" scoped></style>
