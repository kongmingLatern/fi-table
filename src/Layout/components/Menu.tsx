export default defineComponent({
  props: {
    state: {
      type: Object,
      default: () => {}
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    return () => (
      <div class={'w-full h-full'}>
        <aMenu
          class="h-full"
          v-model:openKeys={props.state.openKeys}
          v-model:selectedKeys={props.state.selectedKeys}
          mode="inline"
          theme="dark"
          inline-collapsed={props.state.collapsed}
          items={props.items}
        ></aMenu>
      </div>
    )
  }
})
