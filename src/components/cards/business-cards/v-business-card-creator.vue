<script setup lang="ts">
import { ref } from "vue";
import VBusinessCard from "./v-business-card_default.vue";
const data = ref();
</script>
<template>
  <article class="business-card-creator-wrapper">
    <header class="creator-header">
      <h3>Digital Business Card Creator</h3>
    </header>
    <section class="creator-main">
      <header>Creator</header>
      <form></form>
    </section>
    <aside class="creator-sidebar">
      <v-business-card type="default" />
    </aside>
    <footer class="creator-footer">
      footer
      <!-- interactive links, etc -->
    </footer>
  </article>
</template>
<style lang="scss">
.business-card-creator-wrapper {
  height: calc(100vh - 60px);
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  .creator-header {
    grid-area: header;
  }
  .creator-main {
    border: 1px solid lightgray;
    grid-area: main;
  }
  .creator-sidebar {
    grid-area: sidebar;
  }
  .creator-footer {
    grid-area: footer;
  }
}
</style>
