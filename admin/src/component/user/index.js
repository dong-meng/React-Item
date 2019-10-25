import React,{Component} from 'react'
import { Input,Button,Table,Pagination} from 'antd';

import './user.less'
import UserModal from '../userModal'
const { Search } = Input;
const columns = [
  {
    title: '用户姓名',
    width:120,
    align:'center',
    dataIndex: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: '年龄',
    width:120,
    align:'center',
    dataIndex: 'age',
  },
  {
    title: '性别',
    width:120,
    align:'center',
    dataIndex: 'sex',
    // render(data){
    //   let arr =["保密",'男','女']
    //   return(
    //     <span>{arr[data]}</span>
    //   )
    // }
  },
  {
    title: '籍贯',
    width:120,
    align:'center',
    dataIndex: 'address',
  },
  {
    title: '兴趣爱好',
    width:120,
    align:'center',
    dataIndex: 'like',
  },

];

let data = [
  {
    
    name: 'John Brown',
    age: 32,
    sex:'保密',
    like:'打篮球',
    address: 'New York No. 1 Lake Park',
  },
  // {
  //   key: '2',
  //   name: 'Jim Green',
  //   age: 42,
  //   sex:'男',
  //   like:'打排球',
  //   address: 'London No. 1 Lake Park',
  // },
  // {
  //   key: '3',
  //   name: 'Joe Black',
  //   age: 32,
  //   sex:'女',
  //   like:'踢足球',
  //   address: 'Sidney No. 1 Lake Park',
  // },
  // {
  //   key: '4',
  //   name: 'Disabled User',
  //   age: 99,
  //   sex:'男',
  //   like:'打网球',
  //   address: 'Sidney No. 1 Lake Park',
  // },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

class User extends Component{
  constructor(props){
    super(props)
    this.state ={
      size: 'large',
      show:false,
      data : [
        {
          name: 'John Brown',
          age: 32,
          sex:'保密',
          like:'打篮球',
          address: 'New York No. 1 Lake Park',
        }]
    }
  }

  DataList=(params)=>{
    this.state.data.push(params)
    this.setState({data})
    return this.state.data
  }
  changeShow(){
    this.setState({show:true})
  }

  render(){
    console.log(this)
    const { size } = this.state;
    return(
      <div className="user">
        {!this.state.show || <UserModal  getValue={this.DataList} changeShow={this.changeShow}></UserModal>}
        <div className="top">
          <Search className="inputValue" placeholder="请输入关键字" onSearch={value => 
            console.log(value)} enterButton />
          <Button  className="option" icon="plus" size={size} onClick={()=>{
              this.setState({show:true})
          }} >添加</Button>
          <Button  className="option" icon="minus" size={size} >删除</Button>
        </div>
        <div className="middle">
          <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} pagination={false} />     
        </div>
        <div className="bottom">
           <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
    )
  }
}
export default  User