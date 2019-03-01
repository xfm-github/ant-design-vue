<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
      :width="256">
      <div class="logo"></div>
      <!--<a-menu theme="dark" mode="inline">-->
        <!--<a-sub-menu key="sub1">-->
          <!--<span slot="title"><a-icon type="appstore" /><span>仪表盘</span></span>-->
          <!--<a-menu-item key="1"><router-link to="/home"><span>分析页</span></router-link></a-menu-item>-->
          <!--<a-menu-item key="2"><router-link to="/about"><span>列表页</span></router-link></a-menu-item>-->
        <!--</a-sub-menu>-->
      <!--</a-menu>-->
      <a-menu
        :defaultSelectedKeys="['1']"
        :defaultOpenKeys="['2']"
        mode="inline"
        theme="dark"
        :inlineCollapsed="collapsed"
      >
        <template v-for="item in list">
          <a-menu-item v-if="!item.children" :key="item.key">
            <a-icon type="pie-chart" />
            <span>{{item.title}}</span>
          </a-menu-item>
          <sub-menu v-else :menu-info="item" :key="item.key"/>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0;">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"/>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px', height: 'calc(100vh - 112px)' }">
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import SubMenu from './SubMenu'
export default {
  name: 'layout',
  components: {
    SubMenu
  },
  data () {
    return {
      collapsed: false,
      list: [
        {
          key: '1',
          title: '工作台'
        }, {
          key: '2',
          title: 'Navigation 2',
          children: [
            {
              key: '2.1',
              title: 'Navigation 3',
              children: [
                {
                  key: '2.1.1',
                  title: 'Option 2.1.1'
                }
              ]
            }
          ]
        }, {
          key: '3',
          title: 'Option 3'
        }, {
          key: '4',
          title: 'Navigation 4',
          children: [
            {
              key: '4.1',
              title: 'Navigation 4'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color .3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255,255,255,.2);
    margin: 16px;
  }
</style>
