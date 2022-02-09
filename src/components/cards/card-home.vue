<script setup lang="ts"></script>
<template>
  <div class="card-home">
    Card Sanbox
    <router-view></router-view>
  </div>
</template>
<style lang="scss">
.card-home {
  display: flex;
  flex-direction: column;
}
</style>
