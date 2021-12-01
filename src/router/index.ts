import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";
import Counter from "../components/Counter.vue";
import Modal from "../components/modal/v-modal.vue";
import Tabs from "../components/tabs/v-tabs.vue";
import Accordion from "../components/accordion/v-accordion.vue";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/counter",
      component: Counter,
    },
    {
      path: "/tabs",
      component: Tabs,
    },
    {
      path: "/modal",
      component: Modal,
    },
    {
      path: "/accordion",
      component: Accordion,
    },
  ],
});

export default router;
