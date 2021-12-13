<script setup lang="ts">
import { ref } from "vue";
import VRateLimitButton from "./v-rate-limit-button.vue";
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const posts = ref<Post[]>();
const error = ref<Error>();
const start = ref<number>(0);
const limit = ref<number>(5);
const end = 99;

function onLoadMore() {
  fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=${start.value}&_limit=${limit.value}`
  )
    .then((response) => response.json())
    .then((json: Post[]) => {
      posts.value = json;
    })
    .catch((err) => {
      error.value = err;
    });
}
</script>
<template>
  <div class="v-rate-limit-button-consumer-container">
    <h3>Rate Limit Button Consumer</h3>
    <v-rate-limit-button title="Load More" @send-request="onLoadMore" />
    <ul>
      <li class="post-card" v-for="post in posts">
        <h4>{{ post.title }}</h4>
        <p>{{ post.body }}</p>
      </li>
    </ul>

    <div class="error-message">
      {{ error }}
    </div>
  </div>
</template>
<style lang="scss" scoped>
.v-rate-limit-button-consumer-container {
  ul {
    list-style: none;
    margin-top: 20px;

    .post-card {
      border-bottom: 1px solid gray;
      padding: 10px 0 10px 0;
    }
  }

  button {
    position: sticky;
    top: 0;
    width: 100%;
  }
}
</style>
