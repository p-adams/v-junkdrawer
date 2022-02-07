<script lang="ts" setup>
import { ref } from "vue";
import VTabCard from "./v-tab-card.vue";
import { tabs } from "./tab-card/tabs";
const [tabA_, tabB_, tabC_, tabD_] = tabs;
const flipped = ref(false);
</script>
<template>
  <article>
    <header>
      <nav>
        <ul>
          <li>
            <label for="flipTabs">
              Flip
              <input type="checkbox" v-model="flipped" />
            </label>
          </li>
        </ul>
      </nav>
    </header>
    <section>
      <div class="v-tab-card-consumer-container">
        <div v-for="tab in tabs">
          <v-tab-card :tabs="tab.tabs" />
        </div>
      </div>
    </section>
  </article>
</template>
<style lang="scss" scoped>
.v-tab-card-consumer-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
