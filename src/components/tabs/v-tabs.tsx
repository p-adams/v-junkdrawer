import { defineComponent, useSlots, ref } from "vue";

export default defineComponent({
  setup() {
    const slots = useSlots();
    const $slots = slots.default! && slots.default();
    let activeTab = ref($slots[0].props?.label);
    const tabMatch = (slotLabel: string) => slotLabel === activeTab.value;
    return () => {
      return (
        <div class="v-tabs-container">
          <ul>
            {$slots.map(({ props }) => (
              <li
                class={tabMatch(props?.label) ? "active" : ""}
                onClick={() => (activeTab.value = props?.label)}
              >
                {props?.label}
              </li>
            ))}
          </ul>
          <div class="v-tabs-content">
            {$slots.map(({ children, props }) => (
              <div>{tabMatch(props?.label) ? children : null}</div>
            ))}
          </div>
        </div>
      );
    };
  },
});
