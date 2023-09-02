import { SelectProps } from 'ant-design-vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Select',
  setup() {
    const value = ref('')
    const options = ref<SelectProps['options']>([
      {
        value: 'jack',
        label: 'Jack'
      },
      {
        value: 'lucy',
        label: 'Lucy'
      },
      {
        value: 'disabled',
        label: 'Disabled',
        disabled: true
      },
      {
        value: 'yiminghe',
        label: 'Yiminghe'
      }
    ])
    const focus = () => {
      console.log('focus')
    }

    const handleChange = (value: string) => {
      console.log(`selected ${value}`)
    }
    return () => (
      <a-select
        ref="select"
        v-model:value={value.value}
        style="width: 120px"
        onFocus={focus}
        onChange={handleChange}
        options={options.value}
      />
    )
  }
})
