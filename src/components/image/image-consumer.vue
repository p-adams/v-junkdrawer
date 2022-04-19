<script setup>
import ImageSlider from "./image-slider.vue";
</script>
<template>
  <article class="image-consumer-wrapper">
    <section>
      <h1>image consumer</h1>
      <div class="image-component">
        <h4>image slider</h4>
        <image-slider />
      </div>
    </section>
  </article>
</template>
<style scoped>
.image-consumer-wrapper {
  height: calc(100vh - 50px);
  border: 1px solid;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
.image-component {
  margin: 20px 0 20px 0;
}
</style>
