import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";
import Counter from "../components/Counter.vue";
import ModalConsumer from "../components/modal/v-modal-consumer.vue";
import TabsConsumer from "../components/tabs/v-tabs-consumer.vue";
import AccordionConsumer from "../components/accordion/v-accordion-consumer.vue";
import RateLimitButtonConsumer from "../components/button/v-rate-limit-button-consumer.vue";
import VLoaderConsumer from "../components/v-loader/v-loader-consumer.vue";
import VCommerceHome from "../components/commerce/commerce-home.vue";
import VProductListConsumer from "../components/commerce/v-product-list-consumer.vue";
import VOrderSummaryConsumer from "../components/commerce/v-order-summary-consumer.vue";
import VStorefront from "../components/commerce/v-storefront.vue";
import ButtonHome from "../components/button/button-home.vue";
import ActionButtonConsumer from "../components/button/v-action-button-consumer.vue";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      name: "Home",
    },
    {
      path: "/counter",
      component: Counter,
      name: "Counter",
    },
    {
      path: "/tabs",
      component: TabsConsumer,
      name: "Tabs",
    },
    {
      path: "/modal",
      component: ModalConsumer,
      name: "Modal",
    },
    {
      path: "/accordion",
      component: AccordionConsumer,
      name: "Accordion",
    },
    {
      path: "/button",
      component: ButtonHome,
      name: "Button",
      children: [
        {
          path: "rate-limit-button",
          component: RateLimitButtonConsumer,
          name: "Rate Limit Button",
        },
        {
          path: "action-button",
          component: ActionButtonConsumer,
          name: "Action Button",
        },
      ],
    },
    {
      path: "/v-loader",
      component: VLoaderConsumer,
      name: "Loader",
    },
    {
      path: "/v-commerce",
      component: VCommerceHome,
      name: "Commerce",
      children: [
        {
          path: "storefront",
          component: VStorefront,
          name: "Storefront",
        },
        {
          path: "product-list",
          component: VProductListConsumer,
          name: "Product List",
        },
        {
          path: "order-summary",
          component: VOrderSummaryConsumer,
          name: "Order Summary",
        },
      ],
    },
  ],
});

export default router;
