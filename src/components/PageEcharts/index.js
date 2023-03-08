import baseEchart from './src/base-echarts.vue'
import PieEchart from './src/pie-echarts.vue'
import LineEchart from './src/line-echarts.vue'
import KLineEchart from './src/kline-echarts.vue'
import MapEchart from './src/map-echarts.vue'
import BarStackEchart from './src/bar-stack-echarts.vue'

export { baseEchart, PieEchart, LineEchart, MapEchart, KLineEchart, BarStackEchart }

/**
 * 封装思路
 * 		echart 配置太多
 *      1、创建基本配置，初始化的 base-echarts 组件，监听 options的变化
 *      2、安装图形类型，封装多个组件，从每个类型组件传入 option 配置参数
 *      3、替换可视化数据，根据 computed 计算属性实时更新
 */
