import React, { Component } from 'react'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
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
    const { option = { } } = this.props //外部传入的data数据
    let myChart = echarts.init(this.ID) //初始化echarts

    //设置options
    myChart.setOption(option)
    window.onresize = function() {
      myChart.resize()
    }
  }
  
  componentDidMount() {
    this.initPie()
  }
  
  componentDidUpdate() {
    this.initPie()
  }
  
  render() {
    const { width="100%", height = '200px' } = this.props

    return (
        <div ref={ ID => this.ID = ID } style={{ width, height }} >
        </div>
    )
  }
}



