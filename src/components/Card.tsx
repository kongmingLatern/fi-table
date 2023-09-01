import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Card',
  props: {
    title: {
      type: String,
      default: '标题'
    },
    cardOptions: {
      type: Object,
      default: () => {}
    }
  },
  setup(props, { attrs, slots }) {
    const Slots = {
      title: () =>
        (slots && slots.title?.()) || (
          <a-typography-title {...props.cardOptions.title}>
            {props.title}
          </a-typography-title>
        ),

      extra: () =>
        (slots && slots.extra?.()) || <a href="#">more</a>,

      cover: () => slots && slots.cover?.(),

      customTab: () => slots && slots.customTab?.(),

      tabBarExtraContent: () =>
        slots && slots.tabBarExtraContent?.(),

      default: () => slots && slots.default?.()
    }

    return () => {
      return (
        <aCard
          title={props.title}
          v-slots={Slots}
          {...attrs}
        ></aCard>
      )
    }
  }
})
