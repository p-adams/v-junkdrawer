import { defineComponent, ref, useSlots } from "vue";

export default defineComponent({
  render() {
    const slots = useSlots();
    const $s = slots.default! && slots.default();
    const activeTab = ref($s[0].props?.label);
    console.log(activeTab);
    return (
      <div>
        <ul>
          {$s.map((d) => {
            return <li>{d.props?.label}</li>;
          })}
        </ul>
        <div>
          {$s.map((el) => {
            return <div>{el.children}</div>;
          })}
        </div>
      </div>
    );
  },
});
