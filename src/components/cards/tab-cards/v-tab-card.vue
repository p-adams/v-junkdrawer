<script lang="ts" setup>
import { computed, defineAsyncComponent, ref } from "vue";
const props = defineProps<{ tabs: Tab[] }>();

const currentTab = ref(props.tabs[0]);

const currentTabComponent = computed(() => {
  const key = currentTab.value.label.toLocaleLowerCase();
  return defineAsyncComponent(() => import(`./tab-card/v-tab-${key}.vue`));
});
</script>
<template>
  <article class="v-tab-card-container">
    <header>
      <div v-for="tab in tabs" class="tab">
        <span class="navigation" @click="currentTab = tab"></span>
      </div>
    </header>
    <section>
      <component :is="currentTabComponent" />
    </section>
  </article>
</template>
<style lang="scss" scoped>
.v-tab-card-container {
  border: 1px solid gray;
  min-height: 275px;
  header {
    display: flex;
    padding: 5px;
  }
  .tab {
    display: flex;
    margin-right: 7px;
  }
  .navigation {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: gray;
    cursor: pointer;
  }
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
}
</style>
