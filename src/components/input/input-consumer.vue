<script lang="ts" setup>
import { ref } from "vue";
import VTextField from "./v-text-field.vue";
const textFieldValue = ref<string>("");
</script>
<template>
  <article>
    <section>
      <h3>Text Field</h3>
      <div class="text-field-wrapper">
        <div>Output: {{ textFieldValue }}</div>
        <v-text-field
          placeholder="type something..."
          @on-input="({ target }) => (textFieldValue = target.value)"
        />
      </div>
    </section>
  </article>
</template>
<style lang="scss" scoped>
.text-field-wrapper {
  display: flex;
  flex-direction: column;
}
</style>
