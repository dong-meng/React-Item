import React,{Component,Fragment} from  'react'
import './userModal.less'
import {
  Form,
  Input,
  Button
} from 'antd';

class userModal extends Component{
    submit=()=>{
      let result = this.props.form.getFieldsValue()
      this.props.getValue(result)
    }
    render(){
      const { getFieldDecorator } = this.props.form;
      return (
        <Fragment> 
        <div className="userModal">
              <Form.Item label="姓名">
              {getFieldDecorator('name', {
                rules: [
                  {
                    required: true,
                    message: '请输入你的名字!',
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="年龄"   >
              {getFieldDecorator('age', {
                rules: [{required: true,message: '请输入你的年龄!'}],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="性别">
              {getFieldDecorator('sex', {
                rules: [{required: true,message: '请输入你的性别!'}],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="籍贯">
              {getFieldDecorator('address', {
                rules: [{ required: true,message: '请填入你的籍贯!'},
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="兴趣">
              {getFieldDecorator('like', {
                rules: [
                  {
                    required: true,
                    message: '请写入你的兴趣!',
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="btn-bottom" onClick={this.submit}>
                登录
              </Button>
            </Form.Item>
              
            </div>
            </Fragment>

      )
    }



}
export default  Form.create({name:'userModal'})(userModal) 