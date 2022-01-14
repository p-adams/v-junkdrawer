<script setup lang="ts">
import pageTemplate from "./page-template.vue";
import VGrid from "../v-grid.vue";
</script>
<template>
  <div>
    <page-template>
      <template v-slot:header>
        <h3>Storefront</h3>
      </template>
      <template v-slot:left-side> left sidebar </template>

      <template v-slot:main-content>
        <v-grid :col="3">
          <div class="home-card">card a</div>
          <div class="home-card">card b</div>
          <div class="home-card">card c</div>
          <div class="home-card">card d</div>
          <div class="home-card">card e</div>
          <div class="home-card">card f</div>
        </v-grid>
      </template>

      <template v-slot:right-side> right sidebar </template>

      <template v-slot:footer> footer </template>
    </page-template>
  </div>
</template>
<style lang="scss" scoped>
.home-card {
  width: 200px;
  height: 300px;
}
</style>
