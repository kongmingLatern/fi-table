interface StateType {
  collapsed?: boolean
  selectedKeys?: string[]
  openKeys?: string[]
  preOpenKeys?: string[]
}
export function useMenu(state: StateType) {
  watch(
    () => state.openKeys,
    (_val, oldVal) => {
      state.preOpenKeys = oldVal
    }
  )
  function toggleCollapsed() {
    state.collapsed = !state.collapsed
    state.openKeys = state.collapsed
      ? []
      : state.preOpenKeys
  }

  return {
    toggleCollapsed
  }
}
