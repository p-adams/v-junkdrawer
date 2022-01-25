<script setup lang="ts">
import VOrderSummary from "./v-order-summary.vue";
</script>
<template>
  <div>
    <h3>order summary consumer</h3>
    <div class="order-summary-consumer-wrapper">
      <v-order-summary />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.order-summary-consumer-wrapper {
  width: 300px;
  height: 500px;
}
</style>
