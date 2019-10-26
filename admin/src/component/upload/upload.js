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
    console.log(this.props,"props")
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
          <div onClick={()=>{
            // console.log(window.localStorage.token)
              let token=window.localStorage.token
              this.$axios.get('/dahai123456/admin/dahai/update/add',{
                token:token,
                name:this.state.name,
                price:this.state.price,
                type:this.state.type,
                desc:this.state.desc,
                imgPath:this.props.imageUrl,
              }).then((data)=>{
                console.log(data)
              })
          }}>上传</div>
      </div>

    )
  }
}



export default Production