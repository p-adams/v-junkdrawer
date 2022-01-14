<script setup lang="ts"></script>
<template>
  <div class="page-template-wrapper">
    <header class="header">generic page template header</header>
    <nav class="nav">
      <ul>
        <li><a>a</a></li>
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
  height: calc(100vh - 220px);
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
@media (min-width: 500px) {
  .page-template-wrapper {
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      "header header"
      "nav nav"
      "side content"
      "ad footer";
  }
  .nav ul {
    display: flex;
    justify-content: space-between;
  }
}

@media (min-width: 700px) {
  .page-template-wrapper {
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-areas:
      "header header header"
      "nav content side"
      "nav content ad"
      "footer footer footer";
  }
}
</style>
