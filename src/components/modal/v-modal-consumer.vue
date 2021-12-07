<script setup lang="ts">
import { ref } from "@vue/reactivity";
import VModal from "../modal/v-modal.vue";
const isModalOpen = ref(false);
function confirm() {
  alert("confirm");
  isModalOpen.value = false;
}
</script>
<template>
  <button @click="isModalOpen = !isModalOpen">Open Modal</button>
  <v-modal
    :isOpen="isModalOpen"
    :mask="true"
    @close-modal="isModalOpen = false"
  >
    <template v-slot>
      <h3>modal content</h3>
    </template>
    <template v-slot:actions>
      <button @click="isModalOpen = false">Cancel</button>
      <button @click="confirm()">Confirm</button>
    </template>
  </v-modal>
</template>
<style lang="scss">
.modal {
  &.isOpen {
    .modal-container {
      width: 600px;
      .modal-actions {
        button {
          margin-right: 4px;
        }
      }
    }
  }
}
</style>
