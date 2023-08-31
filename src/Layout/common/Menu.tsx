import { useMenu } from '@/store/menu'
import { Icon } from '@iconify/vue/dist/iconify.js'
const items = reactive([
  {
    key: '1',
    icon: () => <Icon icon="ph:table-fill" />,
    label: 'Option 1',
    title: 'Option 1'
  },
  {
    key: '2',
    icon: () => <Icon icon="ph:table-fill" />,
    label: 'Option 2',
    title: 'Option 2'
  },
  {
    key: '3',
    icon: () => <Icon icon="ph:table-fill" />,
    label: 'Option 3',
    title: 'Option 3'
  },
  {
    key: 'sub1',
    icon: () => <Icon icon="ph:table-fill" />,
    label: 'Navigation One',
    title: 'Navigation One',
    children: [
      {
        key: '5',
        label: 'Option 5',
        title: 'Option 5'
      },
      {
        key: '6',
        label: 'Option 6',
        title: 'Option 6'
      },
      {
        key: '7',
        label: 'Option 7',
        title: 'Option 7'
      },
      {
        key: '8',
        label: 'Option 8',
        title: 'Option 8'
      }
    ]
  },
  {
    key: 'sub2',
    icon: () => <Icon icon="ph:table-fill" />,
    label: 'Navigation Two',
    title: 'Navigation Two',
    children: [
      {
        key: '9',
        label: 'Option 9',
        title: 'Option 9'
      },
      {
        key: '10',
        label: 'Option 10',
        title: 'Option 10'
      },
      {
        key: 'sub3',
        label: 'Submenu',
        title: 'Submenu',
        children: [
          {
            key: '11',
            label: 'Option 11',
            title: 'Option 11'
          },
          {
            key: '12',
            label: 'Option 12',
            title: 'Option 12'
          }
        ]
      }
    ]
  }
])

export default defineComponent({
  setup() {
    const state = reactive({
      collapsed: false,
      selectedKeys: ['1'],
      openKeys: ['sub1'],
      preOpenKeys: ['sub1']
    })

    const { toggleCollapsed } = useMenu(state)

    return () => (
      <div class={'w-full h-full'}>
        <a-button
          class="absolute"
          type="primary"
          style="margin-bottom: 16px"
          onClick={toggleCollapsed}
        >
          {state.collapsed ? (
            <Icon icon="oi:collapse-left" />
          ) : (
            <Icon icon="oi:collapse-down" />
          )}
        </a-button>
        <aMenu
          class="h-full"
          v-model:openKeys={state.openKeys}
          v-model:selectedKeys={state.selectedKeys}
          mode="inline"
          theme="dark"
          inline-collapsed={state.collapsed}
          items={items}
        ></aMenu>
      </div>
    )
  }
})
