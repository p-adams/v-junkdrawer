<script lang="ts" setup>
import { onMounted } from "vue";

onMounted(() => {
  console.log("foo");
});
</script>
<template>
  <div class="commerce-card">
    <div class="image-container"><slot name="image"> </slot></div>
    <div class="content-container">
      <slot name="content">
        <h3>Lorem ipsum dolor sit amet</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </slot>
    </div>
    <div class="action-container">
      <slot name="action">
        <button>Add to Cart</button>
      </slot>
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
}
</style>
