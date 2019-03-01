<template>
  <div class="home">
    <a-row :gutter="24">
      <a-col :span="6">
        <a-card :bordered=false style="height:240px;">
          <div><span style="float:left;">总销售额</span><a-icon style="float:right;" type="info-circle" /></div>
          <div style="clear: both"></div>
          <h1>￥123,567</h1>
          <div>
            <span>周同比 12%</span><a-icon style="color:red;" type="caret-up" />
            <span style="margin-left:20px;">日同比 11%</span><a-icon style="color:green;" type="caret-down" />
          </div>
          <a-divider style="margin: 12px 0;"/>
          <div>日销售额  ￥12,435</div>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card :bordered=false style="height:240px;">
          <p>访问量</p>
          <h1>6,567</h1>
          <e-charts theme="line" :auto-resize="true" style="margin-top:-30px;height: 40px; width: 100%;background-color:#ffffff;margin:20px 0;" :options="option1"></e-charts>
          <a-divider style="margin: 12px 0;"/>
          <div>日访问量  2,435</div>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card title="支付笔数" :bordered=false style="height:240px;">
          <e-charts theme="bar" :auto-resize="true" style="height: 60px; width: 100%;background-color:#ffffff;margin:20px 0;" :options="option2"></e-charts>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card title="运营活动效果" :bordered=false style="height:240px;">
          <p>card content</p>
        </a-card>
      </a-col>
    </a-row>
    <div>
      <e-charts theme="bar" :auto-resize="true" style="height: 400px; width: 100%;background-color:#ffffff;margin:20px 0;" :options="echartOptionSend"></e-charts>
    </div>
    <a-list
      itemLayout="horizontal"
      :dataSource="data"
    >
      <a-list-item slot="renderItem" slot-scope="item" style="background-color:#ffffff;">
        <a-list-item-meta
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        >
          <a slot="title" href="https://vue.ant.design/">{{item.title}}</a>
          <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
// 手动引入 ECharts 各模块来减小打包体积
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import ECharts from 'vue-echarts/components/ECharts.vue'
const data = [
  {
    title: 'Ant Design Title 1'
  }, {
    title: 'Ant Design Title 2'
  }, {
    title: 'Ant Design Title 3'
  }, {
    title: 'Ant Design Title 4'
  }
]
export default {
  name: 'home',
  components: {
    ECharts
  },
  data () {
    return {
      data,
      option1: {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          show: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value',
          show: false
        },
        grid: {
          top: '0',
          left: '0',
          right: '0',
          bottom: '-40',
          containLabel: true
        },
        series: [{
          data: [80, 62, 51, 84, 90, 30, 80],
          type: 'line',
          color: 'rgb(151,95,228)',
          smooth: true,
          areaStyle: {}
        }]
      },
      option2: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          },
          textStyle: {
            align: 'left'
          }
        },
        legend: {
          data: ['访问'],
          top: 30,
          right: 90,
          bottom: 0
        },
        grid: {
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          containLabel: true
        },
        color: ['#7cb5ec', '#90ed7d', '#f15c80', '#f7a35c', '#434348'],
        xAxis: [
          {
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#909399'
              }
            },
            axisLabel: {
              align: 'right'
            },
            splitLine: {
              show: false
            },
            show: false,
            type: 'category',
            boundaryGap: false,
            data: [ '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '19月', '10月', '11月', '12月' ]
          }
        ],
        yAxis: [
          {
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#909399',
                type: 'dotted',
                opacity: 0.3
              }
            },
            show: false,
            type: 'value'
          }
        ],
        series: [
          {
            name: '访问',
            type: 'bar',
            barWidth: '10',
            areaStyle: { opacity: 0.1 },
            data: [50, 82, 53, 87, 98, 45, 67, 70, 67, 77, 56, 40]
          }
        ]
      },
      echartOptionSend: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          },
          textStyle: {
            align: 'left'
          }
        },
        legend: {
          data: ['访问'],
          top: 30,
          right: 90,
          bottom: 0
        },
        grid: {
          top: '25px',
          left: '20px',
          right: '50px',
          bottom: '30px',
          containLabel: true
        },
        color: ['#7cb5ec', '#90ed7d', '#f15c80', '#f7a35c', '#434348'],
        xAxis: [
          {
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#909399'
              }
            },
            axisLabel: {
              align: 'right'
            },
            splitLine: {
              show: false
            },
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '19月', '10月', '11月', '12月']
          }
        ],
        yAxis: [
          {
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#909399',
                type: 'dotted',
                opacity: 0.3
              }
            },
            type: 'value'
          }
        ],
        series: [
          {
            name: '访问',
            type: 'bar',
            barWidth: '40',
            areaStyle: { opacity: 0.1 },
            data: [100, 222, 333, 677, 988, 145, 567, 700, 567, 677, 456, 400]
          }
        ]
      }
    }
  }
}
</script>

<style>
  .home{
    width:100%;
    height:100%;
  }
</style>
