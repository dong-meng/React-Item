import React,{Component} from 'react'

class Production extends Component{
  constructor(){
    super()
    this.state={
      name:'',
      price:'',
      type:'',
      desc:'',
      imgpath:''
    }
  }
  render(){
    console.log(this.$axios,'axios')
    return(
      <div className="production">
          <input placeholder='请输入名称' onChange={(e)=>{
              this.setState({name:e.target.value})
          }}/>
          <input placeholder='请输入价格' onChange={(e)=>{
              this.setState({price:e.target.value})
          }}/>
          <input placeholder='请输入类型' onChange={(e)=>{
              this.setState({type:e.target.value})
          }}/>
          <input placeholder='请输入描述' onChange={(e)=>{
              this.setState({desc:e.target.value})
          }}/>
          <input placeholder='请输入图片地址' onChange={(e)=>{
              this.setState({imgpath:e.target.value})
          }}/>
          <div onClick={()=>{
            console.log(1111)
              this.$axios.get('/admin/user/reg',{
                us:"asd",
                ps:123
                // name:this.state.name,
                // price:this.state.price,
                // type:this.state.type,
                // desc:this.state.desc,
                // imgpath:this.state.imgpath,
              }).then((data)=>{
                console.log(data)
              })
          }}>上传</div>
      </div>

    )
  }
}



export default Production