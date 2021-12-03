<script setup lang="ts">
import VModal from "../modal/v-modal.vue";
</script>
<template>
  <button>Open Modal</button>
  <VModal :isOpen="true" :mask="false" />
</template>
<style lang="scss"></style>
