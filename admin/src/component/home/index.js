import React,{Component} from 'react'
import './index.less'
let firstData=[
  {name:'首页',path:'/admin/home'},
  {name:'用户管理',path:'/admin/user',},
  {name:'分类管理',path:'/admin/class'},
  {name:'产品管理',path:'/admin/production'},
  {name:'新闻管理',path:'/admin/new'},
  {name:'评论管理',path:'/admin/comment'},
  {name:'上传管理',path:'/admin/upload'},
  {name:'设置',path:'/admin/setting'},
]

class Home extends Component{
  renderList =(data)=>{
    return data.map((item,index)=>{
        return (<div onClick={this.jump.bind(this,item.path)} key={index}>{item.name}</div>)
    })
  }
  jump=(path)=>{
    this.props.history.push(path)
  }
  render(){
    console.log(this)
    return(
      <div className="home">
        <div> 
          这里是王海，翟科峰，姜凯，纪晓强的后台管理首页，
          <img src="http://img001.hc360.cn/m6/M03/34/D8/wKhQoVdKgEWEKrLEAAAAAOXEO8g217.jpg"/>
          <div className='homeFirst'>{this.renderList(firstData)}  </div>
         </div>
            
      </div>

    )
  }
}
export default  Home