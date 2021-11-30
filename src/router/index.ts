import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";
import Counter from "../components/Counter.vue";
import Modal from "../components/Modal.vue";
import Tabs from "../components/Tabs.vue";
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
  ],
});

export default router;
