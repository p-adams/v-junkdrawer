import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";
import Counter from "../components/Counter.vue";
import ModalConsumer from "../components/modal/v-modal-consumer.vue";
import TabsConsumer from "../components/tabs/v-tabs-consumer.vue";
import AccordionConsumer from "../components/accordion/v-accordion-consumer.vue";
import RateLimitButtonConsumer from "../components/button/v-rate-limit-button-consumer.vue";
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
      component: TabsConsumer,
    },
    {
      path: "/modal",
      component: ModalConsumer,
    },
    {
      path: "/accordion",
      component: AccordionConsumer,
    },
    {
      path: "/rate-limit-button",
      component: RateLimitButtonConsumer,
    },
  ],
});

export default router;
