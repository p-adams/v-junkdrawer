<script setup lang="ts"></script>
<template>
  <div class="page-template-wrapper">
    <header class="header">
      <slot name="header"></slot>
    </header>
    <!-- optional left side bar, ex:
        <nav class="nav">
            <ul>
                <li><router-link to="somePath">link</router-link></li>
            </ul>
        </nav>
    -->
    <aside class="left-side">
      <slot name="left-side"></slot>
    </aside>
    <article class="content">
      <slot name="main-content"> </slot>
    </article>
    <!-- optional left side bar and ad space, ex:
        <article class="ad-block">
            <section class="ad">
                <img .../>
            </section>
        </article>
    -->
    <aside class="right-side">
      <slot name="right-side"></slot>
    </aside>

    <footer class="footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<style lang="scss">
.page-template-wrapper {
  height: calc(100vh - 220px);
  display: grid;
  grid-template-areas:
    "header"
    "left-side"
    "content"
    "right-side"
    "footer";
  .header {
    grid-area: header;
  }
  .left-side {
    grid-area: left-side;
  }
  .content {
    grid-area: content;
  }
  .right-side {
    grid-area: right-side;
  }
  .footer {
    grid-area: footer;
    display: flex;
    justify-content: center;
    align-self: end;
  }
}
@media (min-width: 500px) {
  .page-template-wrapper {
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      "header header"
      "left-side left-side"
      "right-side content"
      "right-side footer";
  }
}

@media (min-width: 700px) {
  .page-template-wrapper {
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-areas:
      "header header header"
      "left-side content right-side"
      "left-side content right-side"
      "footer footer footer";
  }
}
</style>
