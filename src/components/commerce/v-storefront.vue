<script lang="ts" setup>
import VSearchInput from "../v-search-input.vue";
import { __fruits } from "./mock_data";
import VHeader from "./v-header.vue";
function search(query: string) {
  console.log("search: ", query);
}
</script>
<template>
  <div>
    <v-header page-title="storefront">
      <template v-slot:search>
        <div class="search-input-wrapper">
          <v-search-input
            :predictions="__fruits"
            :start-predictions-after="0"
            @search="(q: string) => search(q)"
          />
        </div>
      </template>
    </v-header>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<style lang="scss" scoped>
.search-input-wrapper {
  flex: 2;
}
</style>
