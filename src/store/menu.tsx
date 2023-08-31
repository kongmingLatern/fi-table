import { Icon } from '@iconify/vue/dist/iconify.js'
export interface StateType {
  collapsed?: boolean
  selectedKeys?: string[]
  openKeys?: string[]
  preOpenKeys?: string[]
}
export function useMenu(state: StateType) {
  function getMenu() {
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
      }
    ])

    return items
  }

  function openWatch() {
    watch(
      () => state.openKeys,
      (_val, oldVal) => {
        state.preOpenKeys = oldVal
      }
    )
  }

  function toggleCollapsed() {
    state.collapsed = !state.collapsed
    state.openKeys = state.collapsed
      ? []
      : state.preOpenKeys
  }

  return {
    openWatch,
    toggleCollapsed,
    toggle: ref(state.collapsed),
    items: getMenu()
  }
}
