import React,{Component} from 'react'
import ComponentImport from './utils/componentImport'
import {HashRouter,Switch,Redirect,Route} from 'react-router-dom'

// import Login from './component/login/load'
// import Admin from './component/admin'
// import User from './component/user'
// import Home from './component/home'

const Reg = ComponentImport(()=>import('./component/reg'))
const Login = ComponentImport(()=>import('./component/login'))
const Admin = ComponentImport(()=>import('./component/admin'))
const Home = ComponentImport(()=>import('./component/home'))
//用户管理
const User = ComponentImport(()=>import('./component/user'))
const UserList = ComponentImport(()=>import('./component/user/userList'))
const UserDel = ComponentImport(()=>import('./component/user/userDel'))
const UserAdd = ComponentImport(()=>import('./component/user/userAdd'))

const Class = ComponentImport(()=>import('./component/class'))
const Comments = ComponentImport(()=>import('./component/comment'))
const Upload = ComponentImport(()=>import('./component/upload'))
const Setting = ComponentImport(()=>import('./component/setting'))

class RootRouter extends Component{
    render(){
      return(
        <HashRouter>
          {/* 路由渲染   以及导航 */}
        <Switch>
          <Redirect exact from="/" to="/login">  </Redirect>
          <Route path="/login" component={Login}></Route>
          <Route path="/reg" component={Reg}></Route>
          <Route path="/admin" render={()=>{
           return(
            <Admin>
              <Route path="/admin/home" component={Home}></Route>
              <Route path="/admin/user" render={()=>{
                return(
                  <div>
                    <Route path="/admin/user/list" component={UserList} ></Route>
                    <Route path="/admin/user/del" component={UserDel} ></Route>
                    <Route path="/admin/user/add" component={UserAdd} ></Route> 
                    <Route exact path='/admin/user/class' component={Class}></Route>
                    <Route exact path='/admin/user/comment' component={Comments}></Route>
                    <Route exact path='/admin/user/upload' component={Upload}></Route>
                    <Route exact path='/admin/user/setting' component={Setting}></Route>
                  </div>
                )
              }}></Route>
            </Admin>
           )
          }}></Route>
        </Switch>

        </HashRouter>
      )
    }
}
export default RootRouter 