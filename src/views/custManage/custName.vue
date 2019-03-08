<template>
    <div class="cust-name">
      <a-form
        layout="inline"
        class="form"
        :form="form"
        @submit="handleSearch"
      >
        <a-row :gutter="48">
          <a-col :md="8" :sm="24">
            <a-form-item label="账号"><a-input placeholder=""/></a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="类型"><a-input placeholder=""/></a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="接口"><a-input placeholder=""/></a-form-item>
          </a-col>
          <template v-if="expand">
            <a-col :md="8" :sm="24">
              <a-form-item label="归属商务"><a-input placeholder=""/></a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="分配情况"><a-input placeholder=""/></a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="可用条数低于"><a-input placeholder=""/></a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="财务数据"><a-input placeholder=""/></a-form-item>
            </a-col>
          </template>
        </a-row>
        <a-row>
          <a-col :style="{ textAlign: 'right' }">
            <a-button type="primary" html-type="submit">Search</a-button>
            <a-button :style="{ marginLeft: '8px' }" @click="handleReset">Clear</a-button>
            <a :style="{ marginLeft: '8px', fontSize: '12px' }" @click="toggle">
              Collapse <a-icon :type="expand ? 'up' : 'down'" />
            </a>
          </a-col>
        </a-row>
      </a-form>
      <div class="search-result-list">
        <a-button type="primary" icon="plus">新建账号</a-button>
        <a-table :columns="columns" :dataSource="data" class="components-table-demo-nested">
          <span slot="operation" slot-scope="text">
            <a href="javascript:;">修改</a>
            <a-divider type="vertical" />
            <a href="javascript:;">新增接口</a>
            <a-divider type="vertical" />
            <a-dropdown>
              <a-menu slot="overlay">
                <a-menu-item>
                  查看
                </a-menu-item>
                <a-menu-item>
                  新增子账号
                </a-menu-item>
                <a-menu-item>
                  组织结构分配
                </a-menu-item>
              </a-menu>
              <a href="javascript:;">
                更多 <a-icon type="down" />
              </a>
            </a-dropdown>
          </span>
          <a-table
            slot="expandedRowRender"
            slot-scope="text"
            :columns="innerColumns"
            :dataSource="innerData"
            :pagination="false"
          >
            <span slot="status" slot-scope="text">
              <a-badge status="success" />Finished
            </span>
            <span slot="operation" slot-scope="text" class="table-operation">
            <a href="javascript:;">查看</a>
            <a-divider type="vertical" />
            <router-link to="/custManage/paramSet">参数设置</router-link>
            <a-divider type="vertical" />
            <a-dropdown>
              <a-menu slot="overlay">
                <a-menu-item>
                  修改接口
                </a-menu-item>
                <a-menu-item>
                  强制短链
                </a-menu-item>
                <a-menu-item>
                  全部短链
                </a-menu-item>
                <a-menu-item>
                  财务设置
                </a-menu-item>
                <a-menu-item>
                  充值
                </a-menu-item>
                <a-menu-item>
                  充值记录
                </a-menu-item>
                <a-menu-item>
                  错误日志
                </a-menu-item>
                <a-menu-item>
                  管理白名单
                </a-menu-item>
                <a-menu-item>
                  客户敏感词
                </a-menu-item>
              </a-menu>
              <a href="javascript:;">
                更多 <a-icon type="down" />
              </a>
            </a-dropdown>
            </span>
          </a-table>
        </a-table>
      </div>
    </div>
</template>

<script>
const columns = [
  { title: 'ID', dataIndex: 'name', key: 'name' },
  { title: '账号', dataIndex: 'platform', key: 'platform' },
  { title: '昵称', dataIndex: 'version', key: 'version' },
  { title: '状态', dataIndex: 'upgradeNum', key: 'upgradeNum' },
  { title: '账户类型', dataIndex: 'creator', key: 'creator' },
  { title: '账单模板', dataIndex: 'createdAt', key: 'createdAt' },
  { title: '操作', key: 'operation', scopedSlots: { customRender: 'operation' } }
]
const data = []
for (let i = 0; i < 3; ++i) {
  data.push({
    key: i,
    name: `xuefm-总账号${i}`,
    platform: 'iOS',
    version: '10.3.4.5654',
    upgradeNum: 500,
    creator: 'Jack',
    createdAt: '2014-12-24 23:12:00'
  })
}
const innerColumns = [
  { title: 'ID', dataIndex: 'date', key: 'date' },
  { title: '接口代码', dataIndex: 'name', key: 'name' },
  { title: '接口名称', key: 'state', scopedSlots: { customRender: 'status' } },
  { title: '归属商务', dataIndex: 'upgradeNum', key: 'upgradeNum' },
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    scopedSlots: { customRender: 'operation' }
  }
]
const innerData = []
for (let i = 0; i < 3; ++i) {
  innerData.push({
    key: i,
    date: '2014-12-24 23:12:00',
    name: 'This is production name',
    upgradeNum: 'Upgraded: 56'
  })
}
export default {
  data () {
    return {
      expand: false,
      form: this.$form.createForm(this),
      data,
      columns,
      innerColumns,
      innerData
    }
  },
  computed: {
    count () {
      return this.expand ? 11 : 7
    }
  },
  methods: {
    handleSearch (e) {
      e.preventDefault()
      this.form.validateFields((error, values) => {
        console.log('error', error)
        console.log('Received values of form: ', values)
      })
    },
    handleReset () {
      this.form.resetFields()
    },
    toggle  () {
      this.expand = !this.expand
    }
  }
}
</script>

<style lang="scss" scoped>
  .cust-name{
    .form{
      background:#ffffff;
      padding:20px 30px;
      .ant-form-item{
        display: flex;
      }
      .ant-form-item-control-wrapper {
        flex: 1;
      }
    }
    .search-result-list{
      background:#ffffff;
    }
  }
</style>
