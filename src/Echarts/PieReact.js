import React, { Component } from 'react'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/title'
import 'echarts/lib/chart/pie'



export default class PieReact extends Component {
  static get propTypes() {
        return {
           option: PropTypes.object,
           width: PropTypes.string,
           height: PropTypes.string,
        }
    }  
  
  constructor(props) {
    super(props)
    this.initPie = this.initPie.bind(this)
  }
  
  initPie() {
    if(this.myCharts) {
    /*  console.log(this.myCharts)*/
      echarts.dispose(this.myCharts)
    }
    const { option = { } } = this.props //外部传入的data数据
    this.myCharts = echarts.init(this.ID) //初始化echarts

    //设置options
    this.myCharts.setOption(option)
    window.onresize = () => {
      this.myCharts.resize()
    }
  }
  
  componentDidMount() {
    
    this.initPie()
  }
  
  componentDidUpdate() {
    this.initPie()
  }
  
  render() {
    const { width="100%", height = '500px' } = this.props

    return (
        <div ref={ ID => this.ID = ID } style={{ width, height }} >
        </div>
    )
  }
}



