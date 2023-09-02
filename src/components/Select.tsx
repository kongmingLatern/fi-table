import { omit } from '@/utils'
import { SelectProps } from 'ant-design-vue'
import { PropType, defineComponent } from 'vue'
interface SelectType {
  value?: Ref<String>
  options?: SelectProps['options']
  onFocus?: () => void
  onChange?: () => void
}
export default defineComponent({
  name: 'Select',
  props: {
    value: {
      type: Object as PropType<Ref<string>>,
      default: undefined
    },
    options: {
      type: Array as PropType<SelectProps['options']>,
      default: []
    },
    onFocus: {
      type: Function,
      default: undefined
    },
    onChange: {
      type: Function,
      default: undefined
    },
    cfg: {
      type: Object as PropType<SelectType>,
      default: undefined
    }
  },
  setup(props) {
    const { cfg } = props
    const value = cfg?.value || props.value || ref('')

    const focus = () => {
      console.log('focus')
    }

    const handleChange = (val: string) => {
      value.value = val
      console.log(`selected ${val}`)
    }
    return () => (
      <a-select
        ref="select"
        v-model:value={value.value}
        onFocus={props.onFocus || focus}
        onChange={props.onChange || handleChange}
        options={props.options}
        {...omit(cfg!, ['value'])}
      />
    )
  }
})
