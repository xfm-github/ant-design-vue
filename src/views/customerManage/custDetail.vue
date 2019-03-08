<template>
  <page-layout title="总账号：xuefm-总账户">
    <detail-list slot="headerContent" size="small" :col="2" class="detail-layout">
      <detail-list-item term="状态">启用</detail-list-item>
      <detail-list-item term="账户类型">XX服务</detail-list-item>
      <detail-list-item term="账单模板">2018-08-07</detail-list-item>
      <detail-list-item term="手机"><a>12421</a></detail-list-item>
      <detail-list-item term="邮箱"><a>12421</a></detail-list-item>
      <detail-list-item term="商务"><a>12421</a></detail-list-item>
      <detail-list-item term="客户端登录"><a>12421</a></detail-list-item>
      <detail-list-item term="创建时间">2018-08-07 ~ 2018-12-11</detail-list-item>
      <detail-list-item term="备注">请于两个工作日内确认</detail-list-item>
    </detail-list>
    <!--<a-row slot="extra" class="status-list">-->
      <!--<a-col :xs="12" :sm="12">-->
        <!--<div class="text">状态</div>-->
        <!--<div class="heading">待审批</div>-->
      <!--</a-col>-->
      <!--<a-col :xs="12" :sm="12">-->
        <!--<div class="text">订单金额</div>-->
        <!--<div class="heading">¥ 568.08</div>-->
      <!--</a-col>-->
    <!--</a-row>-->
    <!-- actions -->
    <template slot="action">
      <a-button-group style="margin-right: 4px;">
        <a-button>修改</a-button>
        <a-button>新增接口</a-button>
      </a-button-group>
      <a-button type="primary" >新增子账户</a-button>
    </template>

    <!--<a-card :bordered="false" title="流程进度">-->
      <!--<a-steps :direction="isMobile() && 'vertical' || 'horizontal'" :current="1" progressDot>-->
        <!--<a-step title="创建项目">-->
        <!--</a-step>-->
        <!--<a-step title="部门初审">-->
        <!--</a-step>-->
        <!--<a-step title="财务复核">-->
        <!--</a-step>-->
        <!--<a-step title="完成">-->
        <!--</a-step>-->
      <!--</a-steps>-->
    <!--</a-card>-->

    <!--<a-card style="margin-top: 24px" :bordered="false" title="用户信息">-->
      <!--<detail-list>-->
        <!--<detail-list-item term="用户姓名">付晓晓</detail-list-item>-->
        <!--<detail-list-item term="会员卡号">32943898021309809423</detail-list-item>-->
        <!--<detail-list-item term="身份证">3321944288191034921</detail-list-item>-->
        <!--<detail-list-item term="联系方式">18112345678</detail-list-item>-->
        <!--<detail-list-item term="联系地址">浙江省杭州市西湖区黄姑山路工专路交叉路口</detail-list-item>-->
      <!--</detail-list>-->
      <!--<detail-list title="信息组">-->
        <!--<detail-list-item term="某某数据">725</detail-list-item>-->
        <!--<detail-list-item term="该数据更新时间">2018-08-08</detail-list-item>-->
        <!--<detail-list-item >&nbsp;</detail-list-item>-->
        <!--<detail-list-item term="某某数据">725</detail-list-item>-->
        <!--<detail-list-item term="该数据更新时间">2018-08-08</detail-list-item>-->
        <!--<detail-list-item >&nbsp;</detail-list-item>-->
      <!--</detail-list>-->
      <!--<a-card type="inner" title="多层信息组">-->
        <!--<detail-list title="组名称" size="small">-->
          <!--<detail-list-item term="负责人">林东东</detail-list-item>-->
          <!--<detail-list-item term="角色码">1234567</detail-list-item>-->
          <!--<detail-list-item term="所属部门">XX公司-YY部</detail-list-item>-->
          <!--<detail-list-item term="过期时间">2018-08-08</detail-list-item>-->
          <!--<detail-list-item term="描述">这段描述很长很长很长很长很长很长很长很长很长很长很长很长很长很长...</detail-list-item>-->
        <!--</detail-list>-->
        <!--<a-divider style="margin: 16px 0" />-->
        <!--<detail-list title="组名称" size="small" :col="1">-->
          <!--<detail-list-item term="学名">	Citrullus lanatus (Thunb.) Matsum. et Nakai一年生蔓生藤本；茎、枝粗壮，具明显的棱。卷须较粗..</detail-list-item>-->
        <!--</detail-list>-->
        <!--<a-divider style="margin: 16px 0" />-->
        <!--<detail-list title="组名称" size="small" :col="2">-->
          <!--<detail-list-item term="负责人">付小小</detail-list-item>-->
          <!--<detail-list-item term="角色码">1234567</detail-list-item>-->
        <!--</detail-list>-->
      <!--</a-card>-->

    <!--</a-card>-->

    <!--<a-card style="margin-top: 24px" :bordered="false" title="用户近半年来电记录">-->
      <!--<div class="no-data"><a-icon type="frown-o"/>暂无数据</div>-->
    <!--</a-card>-->

    <!-- 操作 -->
    <a-card
      style="margin-top: 24px"
      :bordered="false"
      :tabList="tabList"
      :activeTabKey="activeTabKey"
      @tabChange="(key) => {this.activeTabKey = key}"
    >
      <a-table
        v-if="activeTabKey === '1'"
        :columns="operationColumns"
        :dataSource="operation1"
      >
        <template
          slot="status"
          slot-scope="status">
          <a-badge :status="status | statusTypeFilter" :text="status | statusFilter"/>
        </template>
        <a slot="action" href="javascript:;">
          <span>修改</span>
          <a-divider type="vertical" />
          <span>查看</span>
          <a-divider type="vertical" />
          <span @click="showModal">新增接口</span>
        </a>
      </a-table>
      <a-table
        v-if="activeTabKey === '2'"
        :columns="operationColumns2"
        :dataSource="operation2"
      >
        <template
          slot="status"
          slot-scope="status">
          <a-badge :status="status | statusTypeFilter" :text="status | statusFilter"/>
        </template>
        <a slot="action" href="javascript:;">
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
    </a-card>
    <a-modal
      title="Title"
      :visible="visible"
      @ok="handleOk"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
    >
      <p>{{ModalText}}</p>
    </a-modal>
  </page-layout>
</template>

<script>
// import { mixinDevice } from '@/utils/mixin.js'
import PageLayout from './components/page/PageLayout'
import DetailList from './components/tools/DetailList'

const DetailListItem = DetailList.Item

export default {
  components: {
    PageLayout,
    DetailList,
    DetailListItem
  },
  // mixins: [mixinDevice],
  data () {
    return {
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
      tabList: [
        {
          key: '1',
          tab: '子账户'
        },
        {
          key: '2',
          tab: '所有账户接口'
        }
      ],
      activeTabKey: '1',

      operationColumns: [
        { title: 'ID', dataIndex: 'key', key: 'key' },
        { title: '子账号', dataIndex: 'name', key: 'name' },
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
          title: '操作',
          key: 'operation',
          scopedSlots: { customRender: 'action' }
        }
      ],
      operation1: [
        {
          key: 'op1',
          type: '订购关系生效',
          name: '曲丽丽',
          status: 'agree',
          updatedAt: '2017-10-03  19:23:12',
          remark: '-'
        },
        {
          key: 'op2',
          type: '财务复审',
          name: '付小小',
          status: 'reject',
          updatedAt: '2017-10-03  19:23:12',
          remark: '不通过原因'
        },
        {
          key: 'op3',
          type: '部门初审',
          name: '周毛毛',
          status: 'agree',
          updatedAt: '2017-10-03  19:23:12',
          remark: '-'
        },
        {
          key: 'op4',
          type: '提交订单',
          name: '林东东',
          status: 'agree',
          updatedAt: '2017-10-03  19:23:12',
          remark: '很棒'
        },
        {
          key: 'op5',
          type: '创建订单',
          name: '汗牙牙',
          status: 'agree',
          updatedAt: '2017-10-03  19:23:12',
          remark: '-'
        }
      ],
      operationColumns2: [
        { title: 'ID', dataIndex: 'name', key: 'name' },
        { title: '接口代码', dataIndex: 'age', key: 'a' },
        { title: '接口名称', dataIndex: 'address', key: '1' },
        { title: '归属商务', dataIndex: 'address', key: '2' },
        { title: '归属客服组', dataIndex: 'address', key: '3' },
        { title: '模板', dataIndex: 'address', key: '4' },
        { title: '属性', dataIndex: 'address', key: '5' },
        { title: '单价（元）', dataIndex: 'address', key: '6' },
        { title: '余额（元）', dataIndex: 'address', key: '7' },
        { title: '可用短信条数', dataIndex: 'address', key: '8' },
        {
          title: '操作',
          key: 'operation',
          scopedSlots: { customRender: 'action' }
        }
      ],
      operation2: [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York Park'
        }, {
          key: '2',
          name: 'Jim Green',
          age: 40,
          address: 'London Park'
        }
      ]
    }
  },
  filters: {
    statusFilter (status) {
      const statusMap = {
        'agree': '成功',
        'reject': '驳回'
      }
      return statusMap[status]
    },
    statusTypeFilter (type) {
      const statusTypeMap = {
        'agree': 'success',
        'reject': 'error'
      }
      return statusTypeMap[type]
    }
  },
  methods: {
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
  .detail-layout {
    margin-left: 44px;
  }
  .text {
    color: rgba(0, 0, 0, .45);
  }
  .heading {
    color: rgba(0, 0, 0, .85);
    font-size: 20px;
  }
  .no-data {
    color: rgba(0, 0, 0, .25);
    text-align: center;
    line-height: 64px;
    font-size: 16px;
    i {
      font-size: 24px;
      margin-right: 16px;
      position: relative;
      top: 3px;
    }
  }
  .mobile {
    .detail-layout {
      margin-left: unset;
    }
    .text {
    }
    .status-list {
      text-align: left;
    }
  }
</style>
