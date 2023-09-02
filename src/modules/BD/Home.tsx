import Card from '@/components/Card'
import InputSearch from '@/components/InputSearch'
import Select from '@/components/Select'
import { defineComponent } from 'vue'
import Base from '../../layout/Base'
export default defineComponent({
  name: 'Home',
  setup() {
    const value = ref('')
    return () => {
      return (
        <Base title="查询表格">
          <Card class={'w-full mt-24px'}>
            <a-row>
              <a-col span="8" class="flex flex-center">
                <span class={'truncate'}>搜索表名：</span>
                <InputSearch class={'w-300px'} />
              </a-col>
              <a-col span="8" class="flex flex-center">
                <span class={'truncate'}>筛选模块表：</span>
                <Select
                  cfg={{
                    value,
                    class: 'w-200px',
                    options: [
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
                    ]
                  }}
                />
              </a-col>

              <a-col span="8">
                <a-statistic
                  title="Active Users"
                  value={123123}
                  style={'margin-right: 50px'}
                />
              </a-col>
            </a-row>
          </Card>
        </Base>
      )
    }
  }
})
