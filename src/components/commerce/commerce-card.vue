<script lang="ts" setup></script>
<template>
  <div class="commerce-card">
    <div class="image-container background"><slot name="image"> </slot></div>
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
    height: 65%;
    &.background {
      animation: shimmer 2s infinite;
      background: linear-gradient(
        to right,
        #eff1f3 4%,
        #e2e2e2 25%,
        #eff1f3 36%
      );
      background-size: 1000px 100%;
    }
  }
  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
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
