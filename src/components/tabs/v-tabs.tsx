import { defineComponent, useSlots, ref } from "vue";

export default defineComponent({
  setup() {
    const slots = useSlots();
    const $slots = slots.default! && slots.default();
    let activeTab = ref($slots[0].props?.label);
    return () => {
      return (
        <div class="v-tabs-container">
          <ul>
            {$slots.map((slot) => (
              <li
                class={slot.props?.label === activeTab.value ? "active" : ""}
                onClick={() => (activeTab.value = slot.props?.label)}
              >
                {slot.props?.label}
              </li>
            ))}
          </ul>
          <div class="v-tabs-content">
            {$slots.map((slot) => (
              <div>
                {slot.props?.label === activeTab.value ? slot.children : null}
              </div>
            ))}
          </div>
        </div>
      );
    };
  },
});
