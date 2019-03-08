<template>
    <div class="customer">
      <a-form
        layout="inline"
        class="form"
        :form="form"
        @submit="handleSearch"
      >
        <a-row :gutter="48">
          <a-col :md="6" :sm="24">
            <a-form-item label="账号"><a-input placeholder=""/></a-form-item>
          </a-col>
          <a-col :md="6" :sm="24">
            <a-form-item label="昵称"><a-input placeholder=""/></a-form-item>
          </a-col>
          <a-col :md="6" :sm="24">
            <a-form-item label="类型"><a-input placeholder=""/></a-form-item>
          </a-col>
          <a-col :md="6" :sm="24">
            <a-form-item label="状态"><a-input placeholder=""/></a-form-item>
          </a-col>
          <a-col :md="6" :sm="24">
            <a-form-item label="所属总账号"><a-input placeholder=""/></a-form-item>
          </a-col>
          <a-col :md="6" :sm="24">
            <a-form-item label="归属商务"><a-input placeholder=""/></a-form-item>
          </a-col>
          <a-col :md="6" :sm="24">
            <a-button type="primary" html-type="submit">Search</a-button>
            <a-button :style="{ marginLeft: '8px' }" @click="handleReset">Clear</a-button>
          </a-col>
        </a-row>
      </a-form>
      <div class="table-list">
        <a-button type="primary" icon="plus" @click="showModal">新建账号</a-button>
        <a-table :columns="columns" :dataSource="data">
          <a slot="action" slot-scope="text" href="javascript:;">
            <span>修改</span>
            <a-divider type="vertical" />
            <router-link to="/customerManage/custDetail"><span>详情</span></router-link>
          </a>
        </a-table>
      </div>
      <a-modal
        title="新建账号"
        :visible="visible"
        @ok="handleOk"
        :confirmLoading="confirmLoading"
        @cancel="handleCancel"
      >
        <p>客户账号：</p>
        <p>客户密码：</p>
        <p>客户名称：</p>
        <p>商务：</p>
        <p>自主导黑：</p>
        <p>自主导白：</p>
      </a-modal>
    </div>
</template>

<script>
const columns = [
  { title: 'ID', dataIndex: 'name', key: 'name'},
  { title: '账号', dataIndex: 'age', key: 'age'},
  { title: '状态', dataIndex: 'address', key: '1' },
  { title: '账户类型', dataIndex: 'address', key: '2' },
  { title: '账单模板', dataIndex: 'address', key: '3' },
  { title: '手机', dataIndex: 'address', key: '4' },
  { title: '邮箱', dataIndex: 'address', key: '5' },
  { title: '商务', dataIndex: 'address', key: '6' },
  { title: '客户端登录', dataIndex: 'address', key: '7' },
  { title: '任务审核', dataIndex: 'address', key: '8' },
  { title: '创建时间', dataIndex: 'address', key: '9' },
  { title: '创建人', dataIndex: 'address', key: '10' },
  { title: '客服组', dataIndex: 'address', key: '11' },
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
  name: 'customet-list',
  data () {
    return {
      form: this.$form.createForm(this),
      data,
      columns,
      visible: false,
      confirmLoading: false
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
    showModal() {
      this.visible = true
    },
    handleOk(e) {
      this.ModalText = 'The modal will be closed after two seconds'
      this.confirmLoading = true
      setTimeout(() => {
        this.visible = false
        this.confirmLoading = false
      }, 2000)
    },
    handleCancel(e) {
      console.log('Clicked cancel button')
      this.visible = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .customer{
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
    .table-list{
      background:#ffffff;
    }
  }
</style>
