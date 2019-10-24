import React,{Component} from 'react'
import { Input,Button } from 'antd';
import './user.less'
const { Search } = Input;


class User extends Component{
  state = {
    size: 'large',
  }
  render(){
    const { size } = this.state;
    return(
      <div className="user">
        这里是用户的首页
        <div className="top">
          <Search className="inputValue" placeholder="请输入关键字" onSearch={value => console.log(value)} enterButton />
          <Button   icon="plus" size={size} > 添加</Button>
          <Button   icon="minus" size={size} >删除</Button>
        </div>
        
      </div>


    )
  }
}
export default  User