<script setup lang="ts">
import { ref } from "vue";
import VBusinessCard from "./v-business-card_default.vue";
const _DEFAULT = {
  name: { first: "", middle: "", last: "" },
  image: "",
  address: {
    address1: "",
    city: "",
    state: "",
    zip: 90210,
  },
  contact: {
    email: "",
  },
};
const data = ref<BusinessCardData>(_DEFAULT);

function update(key: string, e: HTMLElementEvent<HTMLInputElement>) {
  data.value.name[key] = e.target.value;
}
</script>
<template>
  <article class="business-card-creator-wrapper">
    <header class="creator-header">
      <h3>Digital Business Card Creator</h3>
    </header>
    <section class="creator-main">
      <header>Creator</header>
      <form>
        <section class="name-wrapper">
          <label for="first">
            First
            <input
              @input="(e: Event) => update('first', e as HTMLElementEvent<HTMLInputElement>)"
            />
          </label>
          <label for="middle">
            Middle
            <input
              @input="(e: Event) => update('middle', e as HTMLElementEvent<HTMLInputElement>)"
            />
          </label>
          <label for="last">
            Last
            <input
              @input="(e: Event) => update('last', e as HTMLElementEvent<HTMLInputElement>)"
            />
          </label>
        </section>
      </form>
    </section>
    <aside class="creator-sidebar">
      <v-business-card type="default" :card-data="data" />
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
