<script setup lang="ts">
defineProps<{ mask: boolean; isOpen: boolean }>();
</script>

<template>
  <div :class="['modal', { isOpen, mask }]">
    <div class="modal-container">
      <div class="dismiss" @click="$emit('close-modal')">&times;</div>
      <h3>modal content</h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  &.isOpen {
    display: block;
    &.mask {
      background-color: black;
      opacity: 0.8;
    }
    .modal-container {
      display: flex;
      flex-direction: column;
      padding: 10px;
      background-color: white;
      margin: 15% auto;
      width: 75%;
      .dismiss {
        display: grid;
        place-items: end;
        cursor: pointer;
      }
    }
  }
}
</style>
