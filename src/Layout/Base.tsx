import { Icon } from '@iconify/vue'
import { useMenu } from '@/store/menu'
import type { CSSProperties } from 'vue'
import Menu from './components/Menu'

const headerStyle: CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  backgroundColor: '#001529',
  zIndex: 10
}

const contentStyle: CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  backgroundColor: '#f0f0f0'
}

const siderStyle: CSSProperties = {
  textAlign: 'center',
  minHeight: '100vh',
  color: '#fff',
  backgroundColor: '#3ba0e9'
}
const state = reactive({
  collapsed: false,
  selectedKeys: ['1'],
  openKeys: ['sub1'],
  preOpenKeys: ['sub1']
})

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup(props, { slots }) {
    const { items } = useMenu(state)
    return () => (
      <a-layout>
        <a-layout-header style={headerStyle}>
          <a-row>
            <a-col
              span="6"
              text="20px"
              align={'center'}
              font="semibold"
              bg="transparent"
            >
              <span class="flex-center justify-start truncate">
                <Icon
                  icon="logos:nuxt-icon"
                  class={'mr-2'}
                  width={25}
                  height={25}
                  color="white"
                />
                <span>Mysql Manager</span>
              </span>
            </a-col>
            <a-col span="6"></a-col>
            <a-col span="6"></a-col>
            <a-col span="6" class="text-right">
              <a-space>
                <a-avatar
                  v-slots={{
                    icon: () => (
                      <Icon
                        icon="bxs:user"
                        class={'mr-2'}
                        width={25}
                        height={25}
                        color="white"
                      />
                    )
                  }}
                ></a-avatar>

                <span class={'font-semibold mr-2'}>
                  Admin
                </span>

                <a-button>退出登陆</a-button>
              </a-space>
            </a-col>
          </a-row>
        </a-layout-header>
        <a-layout class={'mt-64px'}>
          <a-layout-sider
            v-model:collapsed={state.collapsed}
            collapsible
            style={siderStyle}
          >
            <slot name="menu">
              <Menu state={state} items={items} />
            </slot>
          </a-layout-sider>
          <a-layout-content style={contentStyle}>
            <a-layout-header
              class="text-left flex items-center p-0 pl-10px"
              style="color: #000;background: #fff;"
            >
              <h3 class={'text-20px'}>
                {props.title || (slots && slots.title?.())}
              </h3>
            </a-layout-header>
            {slots && slots.default?.()}
          </a-layout-content>
        </a-layout>
      </a-layout>
    )
  }
})
