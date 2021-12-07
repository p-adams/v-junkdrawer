import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";
import Counter from "../components/Counter.vue";
import ModalConsumer from "../components/modal/v-modal-consumer.vue";
import Tabs from "../components/tabs/v-tabs.vue";
import AccordionConsumer from "../components/accordion/v-accordion-consumer.vue";
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
      component: ModalConsumer,
    },
    {
      path: "/accordion",
      component: AccordionConsumer,
    },
  ],
});

export default router;
