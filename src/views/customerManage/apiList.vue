<template>
    <div class="api">
      <a-card :bordered="false">
        账号：xuefm-总账号1
      </a-card>
      <a-form
        layout="inline"
        class="form"
        :form="form"
        @submit="handleSearch"
      >
        <a-row :gutter="48">
          <a-col :md="8" :sm="24">
            <a-form-item label="接口名称"><a-input placeholder=""/></a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="接口代码"><a-input placeholder=""/></a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="接口ID"><a-input placeholder=""/></a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="扩展码"><a-input placeholder=""/></a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="状态"><a-input placeholder=""/></a-form-item>
          </a-col>
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
            <a-button type="primary" html-type="submit">Search</a-button>
            <a-button :style="{ marginLeft: '8px' }" @click="handleReset">Clear</a-button>
          </a-col>
        </a-row>
      </a-form>
      <div class="table-list">
        <a-button type="primary" icon="plus">新增接口</a-button>
        <a-table :columns="columns" :dataSource="data" :scroll="{x:1300}">
          <a slot="action" slot-scope="text" href="javascript:;">
            <span>修改</span>
            <a-divider type="vertical" />
            <span>查看</span>
            <a-divider type="vertical" />
            <a-dropdown>
              <a-menu slot="overlay">
                <a-menu-item>
                  强制短链
                </a-menu-item>
                <a-menu-item>
                  全部短链
                </a-menu-item>
                <a-menu-item>
                  参数设置
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
          </a>
        </a-table>
      </div>
    </div>
</template>

<script>
const columns = [
  { title: 'ID', dataIndex: 'name', key: 'name'},
  { title: '接口代码', dataIndex: 'age', key: 'age'},
  { title: '接口名称', dataIndex: 'address', key: '1' },
  { title: '归属商务', dataIndex: 'address', key: '2' },
  { title: '归属客服组', dataIndex: 'address', key: '3' },
  { title: '模板', dataIndex: 'address', key: '4' },
  { title: '属性', dataIndex: 'address', key: '5' },
  { title: '单价（元）', dataIndex: 'address', key: '6' },
  { title: '余额（元）', dataIndex: 'address', key: '7' },
  { title: '可用短信条数', dataIndex: 'address', key: '8' },
  // { title: '财务数据', dataIndex: 'address', key: '9' },
  // { title: '过滤黑名单', dataIndex: 'address', key: '10' },
  // { title: '过滤敏感词', dataIndex: 'address', key: '11' },
  // { title: '状态', dataIndex: 'address', key: '12' },
  // { title: '创建时间', dataIndex: 'address', key: '13' },
  // { title: '最后更新日期', dataIndex: 'address', key: '14' },
  // { title: '扩展码', dataIndex: 'address', key: '15' },
  // { title: '备注', dataIndex: 'address', key: '16' },
  // { title: '携号转网', dataIndex: 'address', key: '17' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    scopedSlots: { customRender: 'action' }
  }
]
const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York Park'
}, {
  key: '2',
  name: 'Jim Green',
  age: 40,
  address: 'London Park'
}]
export default {
  data () {
    return {
      form: this.$form.createForm(this),
      data,
      columns
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
    }
  }
}
</script>

<style lang="scss" scoped>
  .api{
    .form{
      background:#ffffff;
      padding:20px 30px;
      margin-top:20px;
    }
    .table-list{
      background:#ffffff;
    }
  }
</style>
