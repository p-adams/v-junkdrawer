<script setup lang="ts">
import { ref } from "vue";
defineProps<{ type: string; cardData: BusinessCardData }>();
</script>
<template>
  <article :class="['business-card', type]">
    <header class="header">header</header>
    <section class="main">
      main
      <div>{{ cardData.name.first }}</div>
    </section>
    <aside class="sidebar">sidebar</aside>
    <footer class="footer">
      footer
      <!-- interactive links, etc -->
    </footer>
  </article>
</template>
<style lang="scss">
.business-card {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  .header {
    grid-area: header;
  }
  .main {
    grid-area: main;
  }
  .sidebar {
    grid-area: sidebar;
  }
  .footer {
    grid-area: footer;
  }
}
</style>
