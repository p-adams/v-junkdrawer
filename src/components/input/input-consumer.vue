<script lang="ts" setup>
import VTextField from "./v-text-field.vue";
function log(e: any) {
  console.log(e.target);
}
</script>
<template>
  <article>
    <section>
      <h3>Text Field</h3>
      <div>
        <v-text-field @on-input="(e) => log(e)" />
      </div>
    </section>
  </article>
</template>
