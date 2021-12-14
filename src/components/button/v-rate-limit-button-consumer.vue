<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import VRateLimitButton from "./v-rate-limit-button.vue";
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const posts = ref<Post[]>([]);
const error = ref<Error>();
const start = ref<number>(0);
const LIMIT = 5;
const END = 100;
const currentStart = computed(() => {
  return start.value * LIMIT;
});

onMounted(() => loadPosts());

function loadPosts() {
  if (currentStart.value <= END) {
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_start=${currentStart.value}&_limit=${LIMIT}`
    )
      .then((response) => response.json())
      .then((json: Post[]) => {
        posts.value.push(...json);
        start.value++;
      })
      .catch((err) => {
        error.value = err;
      });
  }
}
</script>
<template>
  <div class="v-rate-limit-button-consumer-container">
    <h3>Rate Limit Button Consumer</h3>
    <v-rate-limit-button
      title="Load More"
      @send-request="loadPosts"
      :disabled="currentStart === END"
    />
    <ul>
      <li class="post-card" v-for="post in posts">
        <h4>{{ post.title }}</h4>
        <span>ID: {{ post.id }}</span>
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
