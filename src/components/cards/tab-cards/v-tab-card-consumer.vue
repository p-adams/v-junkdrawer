<script lang="ts" setup>
import { ref } from "vue";
import VTabCard from "./v-tab-card.vue";
import { tabs as cardTabs } from "./tab-card/tabs";
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
        <div v-for="{ name, tabs } in cardTabs" :class="[name]">
          <div v-if="!flipped">
            <v-tab-card :tabs="tabs" :current-tab="tabs[0]" />
          </div>
          <div v-else>
            <v-tab-card :tabs="tabs" :current-tab="tabs[0]" />
            <v-tab-card :tabs="tabs" :current-tab="tabs[1]" />
          </div>
        </div>
      </div>
    </section>
  </article>
</template>
<style lang="scss" scoped>
.v-tab-card-consumer-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "tabA_ tabB_"
    "tabC_ tabD_";

  &.flip {
  }

  .tabA_ {
    grid-area: tabA_;
  }

  .tabB_ {
    grid-area: tabB_;
  }

  .tabC_ {
    grid-area: tabC_;
  }

  .tabD_ {
    grid-area: tabD_;
  }
}
</style>
