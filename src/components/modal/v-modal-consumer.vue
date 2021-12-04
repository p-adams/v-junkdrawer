<script setup lang="ts">
import { ref } from "@vue/reactivity";
import VModal from "../modal/v-modal.vue";
const isModalOpen = ref(false);
</script>
<template>
  <button @click="isModalOpen = !isModalOpen">Open Modal</button>
  <VModal
    :isOpen="isModalOpen"
    :mask="true"
    @close-modal="isModalOpen = false"
  />
</template>
<style lang="scss"></style>
