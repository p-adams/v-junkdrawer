<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { marked } from "marked";
const count = ref(0);
const snippetRef = ref();
const markup = `
      <template>
      <h3>Counter App</h3>
      <div class='counter-wrapper'>
        <p>{{ count }}</p>
        <div class='counter-actions'>
          <button @click='count--'>-</button>
          <button @click='count++'>+</button>
        </div>
      </div>
    </template>`;
onMounted(() => {
  snippetRef.value.innerText = snippetRef.value.innerHTML;
});
</script>

<template>
  <h3>Counter App</h3>
  <div class="counter-wrapper">
    <p>{{ count }}</p>
    <div class="counter-actions">
      <button @click="count--">-</button>
      <button @click="count++">+</button>
    </div>
  </div>
  <pre>
  <code ref="snippetRef">
    
    import { ref } from "@vue/reactivity";

    const count = ref(0);
      
    <div :v-html="markup"/>
    
     
   

  </code>
  </pre>
</template>

<style lang="scss" scoped>
h3 {
  text-transform: uppercase;
  margin-bottom: 20px;
}
.counter-wrapper {
  display: flex;
  flex-direction: column;

  p {
    text-align: center;
    font-size: 32px;
    margin-bottom: 20px;
  }
  .counter-actions {
    display: flex;
    width: 200px;
    button {
      margin: 10px;
      width: 130px;
    }
  }
}
</style>
