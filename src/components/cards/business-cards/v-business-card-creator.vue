<script setup lang="ts">
import { ref } from "vue";
import VBusinessCard from "./v-business-card_default.vue";
const _DEFAULT = {
  name: { first: "", middle: "", last: "" },
  styles: null,
  image: "",
  address: {
    address1: "",
    city: "",
    state: "",
    zip: -1,
  },
  company: {
    name: "",
    address1: {
      city: "",
      state: "",
      zip: -1,
    },
    number: -1,
  },
  contact: {
    email: "",
  },
};
const data = ref<BusinessCardData>(_DEFAULT);

function update(key: string, e: FormInputEvent) {
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
      <form class="business-card-information-form-container">
        <section class="form-section name-input-group">
          <label for="first">
            First
            <input
              autofocus
              @input="(e: Event) => update('first', e as FormInputEvent)"
            />
          </label>
          <label for="middle">
            Middle Initial
            <input
              @input="(e: Event) => update('middle', e as FormInputEvent)"
            />
          </label>
          <label for="last">
            Last
            <input @input="(e: Event) => update('last', e as FormInputEvent)" />
          </label>
        </section>
        <section class="form-section company-name-input-group">
          <label for="company"> Company name </label>
        </section>
      </form>
      <section class="business-card-layout-container">
        <div class="card-layout">
          <!-- default layout
          header header
          sidebar main
          footer footer
          -->
          <v-business-card type="default" />
        </div>
      </section>
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
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .business-card-information-form-container {
      .form-section {
        margin-bottom: 10px;
      }
      .name-input-group {
        display: flex;
        justify-content: space-between;
        label {
          display: flex;
          flex-direction: column;
          font-weight: 600;
          color: black;
          padding: 10px;
          &:nth-child(1),
          &:nth-child(3) {
            flex: 3;
          }
          &:nth-child(2) {
            flex: 1;
          }
        }
      }
    }
    .business-card-layout-container {
    }
  }
  .creator-sidebar {
    grid-area: sidebar;
  }
  .creator-footer {
    grid-area: footer;
  }
}
</style>
