import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import { Menu} from 'antd';
const { SubMenu } = Menu;
let navData=[
  {name:'首页',path:'/admin/home'},
  {name:'用户管理',
   path:'/user',
   children:[
     {name:'用户列表',path:'/admin/user/list'},
     {name:'添加用户',path:'/admin/user/add'},
     {name:'删除用户',path:'/admin/user/del'},
    ]
  },
  {name:'分类管理',path:'/admin/user/class'},
  {name:'评论管理',path:'/admin/user/comment'},
  {name:'上传管理',path:'/admin/user/upload'},
  {name:'设置',path:'/admin/user/setting'},
]

class Nav extends Component{
  //这里面的递归函数可以学一下
  renderitem =(data)=>{
    return data.map((item,index)=>{
      if(item.children){
        return(
          <SubMenu title={item.name} key={index} onClick={()=>{

          }}>
            {this.renderitem(item.children)}
          </SubMenu>
        )
      } else{
        return (<Menu.Item onClick={this.jump.bind(this,item.path)} key={index}>{item.name}</Menu.Item>)
      }
    })
  }
  jump=(path)=>{
    this.props.history.push(path)
  }
  render(){
    console.log(this,'自定义导航')

    return(
      <div className="nav">
          <Menu  style={{ width: 200 }} mode="vertical">
            {this.renderitem(navData)}
          </Menu>
      </div>

    )
  }
}
export default  withRouter(Nav)