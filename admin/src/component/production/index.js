import React,{Component} from 'react'
import {Button,Icon} from 'antd'
import './prod.less'
class Upload extends Component{
  constructor(){
    super()
    this.state={
      value:'',
      list:[]
    }
  }
  render(){
    return(
      <div className="user">
        <input placeholder='请输入查询关键字' onChange={(e)=>{
              this.setState({value:e.target.value})
          }}/><Button  onClick={()=>{
            let token=window.localStorage.token
             {this.$axios.get('/dahai123456/admin/dahai/update/get',{
                  token:token,
                  name:this.state.value
               }).then((data)=>{
                 console.log(data)
               })
            } 
          }}><Icon type="search"/></Button>

            {this.state.list.map((item,index)=>{
              return(
                <div key={index} className="prod">
                  <h4>{item.title}</h4>
                  <img src={item.imgPath}/>
                  <span>{item.desc}</span>
                  <span>{item.price}</span>
                </div>
              )
            })}
      </div>


    )
  }
}
export default  Upload