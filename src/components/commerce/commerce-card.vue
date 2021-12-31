<script lang="ts" setup></script>
<template>
  <div class="commerce-card">
    <div class="image-container"><slot name="image"> </slot></div>
    <div class="content-container">
      <slot name="content"> </slot>
    </div>
    <div class="action-container">
      <slot name="action"> </slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.commerce-card {
  width: 300px;
  height: 365px;
  border: 1px solid lightgray;
  padding: 6px;
  .image-container {
    outline: 1px solid gray;
    height: 65%;
  }
  .content-container {
    margin: 6px 0 6px 0;
  }
  .action-container {
    display: flex;
    justify-content: center;
  }
}
</style>
