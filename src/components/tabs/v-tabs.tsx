import { defineComponent, useSlots } from "vue";
const VTabs = defineComponent({
  setup() {
    const slots = useSlots();
    return () => (
      <div class="v-tabs-container">
        {slots.default ? slots.default() : null}
      </div>
    );
  },
});

export default VTabs;
