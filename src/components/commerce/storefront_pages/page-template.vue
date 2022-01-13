<script setup lang="ts"></script>
<template>
  <div class="page-template-wrapper">
    <header class="header">generic page template header</header>
    <nav class="nav">
      <ul>
        <li><a></a></li>
      </ul>
    </nav>
    <article class="content">
      <h1>main</h1>
    </article>
    <aside class="side">sidebar</aside>
    <div class="ad">ads</div>
    <footer class="footer">footer</footer>
  </div>
</template>
<style lang="scss">
.page-template-wrapper {
  display: grid;
  grid-template-areas:
    "header"
    "nav"
    "content"
    "side"
    "ad"
    "footer";
  .header {
    grid-area: header;
  }
  .nav {
    grid-area: nav;
  }
  .content {
    grid-area: content;
  }
  .side {
    grid-area: side;
  }
  .ad {
    grid-area: ad;
  }
  .footer {
    grid-area: footer;
  }
}
</style>
