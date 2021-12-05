<script setup lang="ts">
defineProps<{ mask: boolean; isOpen: boolean }>();
</script>

<template>
  <div :class="['modal', { isOpen, mask }]" @click="$emit('close-modal')">
    <div class="modal-container" @click.stop>
      <div class="dismiss">
        <div class="icon" @click="$emit('close-modal')">&times;</div>
      </div>
      <div class="modal-content">
        <h3>modal content</h3>
      </div>
      <div class="modal-actions">
        <div class="actions-group">
          <slot name="actions" />
        </div>
      </div>
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
      background-color: slategray;
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
      }
      .icon {
        cursor: pointer;
      }
      .modal-actions {
        display: grid;
        place-items: end;
      }
    }
  }
}
</style>
