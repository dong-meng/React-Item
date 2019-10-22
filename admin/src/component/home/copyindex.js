import React,{Component} from 'react'
import  {Card} from 'antd'
import ReactEcharts from 'echarts-for-react';
 

class Home extends Component{
  constructor(){
    super()
    this.state={
      option:{
        title : {
          text: '某站点用户访问来源',
          subtext: '纯属虚构',
          x:'center'
      },
      tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
          orient: 'vertical',
          left: 'left',
          data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
      },
      series : [
          {
              name: '访问来源',
              type: 'pie',
              radius : '55%',
              center: ['50%', '60%'],
              data:[
                  {value:335, name:'直接访问'},
                  {value:310, name:'邮件营销'},
                  {value:234, name:'联盟广告'},
                  {value:135, name:'视频广告'},
                  {value:1548, name:'搜索引擎'}
              ],
              itemStyle: {
                  emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
              }
          }
      ]
      }
    }
  }
  componentDidMount(){
    // console.log(this.$axios)
    this.$axios.get('/yapi/getPeiData')
    .then((data)=>{
      console.log((data))
      let  option =JSON.parse(JSON.stringify(this.state.option))
      option = data.data.data
      console.log(this.state.option)
      this.setState({option})

    })
  }
  render(){
    return(
      <Card className="home">
        <ReactEcharts option={this.state.option} />
      </Card>


    )
  }
}
export default  Home