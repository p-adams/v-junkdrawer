<script lang="ts" setup>
type Tab = { label: string; value: string; path?: string };
const tabs: Tab[] = [
  { value: "A", label: "A" },
  { value: "B", label: "B" },
];
</script>
<template>
  <div class="v-tab-card-container">
    <header>
      <div v-for="tab in tabs" class="tab">
        <span class="navigation"></span>
      </div>
    </header>
  </div>
</template>
<style lang="scss" scoped>
.v-tab-card-container {
  border: 1px solid gray;
  min-height: 275px;
  header {
    display: flex;
    padding: 5px;
  }
  .tab {
    display: flex;
    margin-right: 7px;
  }
  .navigation {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: gray;
    cursor: pointer;
  }
}
</style>
