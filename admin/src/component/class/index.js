import React,{Component} from 'react'
import { Card} from 'antd';
import './index.less'
var data =[
  {title:'行政',
  content:[
    {msg:'今天六点开会'},
    {msg:'今天八点总经理需要前往应酬'},
  ]},
  {title:'业务',
  content:[
    {msg:'今天销售为XXX万'},
    {msg:'业务组织人员开会'},
  ]},
  {title:'人事',
  content:[
    {msg:'今天需要招收5人'},
    {msg:'哈哈哈,本次活动十分精彩'},
  ]},
  {title:'财务',
  content:[
    {msg:'今天发放工资'},
    {msg:'营收平衡'},
  ]},
]
class Classify extends Component{
  renderContent(data){
     return  data.map((item,index)=>{
        return(
          <p >{item.msg}</p>
        )
      })
  }
  renderList(){
    return data.map((item,index)=>{
        switch(item.title){
            case '行政':
              return(
                <Card  key="1" title="行政" bordered={false} style={{ width: 300,height:200}}>
                    {this.renderContent(item.content)}
                </Card> 
              )
            break;
            case '业务':
                return(
                  <Card  key="2" title="业务" bordered={false} style={{ width: 300,height:200}}>
                      {this.renderContent(item.content)}
                  </Card> 
                )
            break;
            case '人事':
                return(
                  <Card  key="3" title="人事" bordered={false} style={{ width: 300,height:200}}>
                      {this.renderContent(item.content)}
                  </Card> 
                )
            break;
            case '财务':
                return(
                  <Card  key="4" title="财务" bordered={false} style={{ width: 300,height:200}}>
                      {this.renderContent(item.content)}
                  </Card> 
                )
            break;
            default:
              break;
        }
    })
  }
  render(){
    return(
      <div className="userClass">
        <div className="userList">
         {this.renderList(data)}
        </div>
       
      </div>
    )
  }
}
export default  Classify