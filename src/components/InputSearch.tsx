import { defineComponent } from 'vue'
export default defineComponent({
  name: 'InputSearch',
  props: {
    onSearch: {
      type: Function,
      default: undefined
    },
    placeholder: {
      type: String,
      default: '请输入内容'
    }
  },
  setup(props) {
    const value = ref<string>('')
    const onSearch = (searchValue: string) => {
      console.log('use value', searchValue)
      console.log('or use this.value', value.value)
    }
    return () => {
      return (
        <a-input-search
          v-model:value={value.value}
          placeholder={props.placeholder}
          onSearch={props.onSearch || onSearch}
          enter-button
        />
      )
    }
  }
})
