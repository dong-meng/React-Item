import React,{Component} from 'react'
import { PageHeader, Button} from 'antd';
import './index.less'
import Nav from '../customNav/index'
class Admin extends Component{
  render(){
    return(

    <div className="admin">
        <div className="admin-nav">
          <Nav ></Nav>
        </div>
        <div className="admin-content">
          <div
            style={{
              backgroundColor: '#F5F5F5',
              padding: 24,
            }}
          >
            <PageHeader
              avatar={{ src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' }}
              ghost={false}
              title="测试后台管理系统"
              extra={[
                <Button key="1" type="primary" onClick={()=>{
                  window.location.href=  'http://localhost:3000/#/login'
                }}>
                  退出系统
                </Button>
              ]}
            >
       
            </PageHeader>

            </div>
            <div className="admin-middle">
              {this.props.children}
            </div> 
            <div className="admin-footer" style={{position:'fixed',bottom:40}}>
              这里是我们团队的作品
            </div>
        </div>
      </div>

    )
  }
}
export default  Admin