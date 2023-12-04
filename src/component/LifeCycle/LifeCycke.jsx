import axios from 'axios';
import React, { Component } from 'react'

export default class LifeCycke extends Component {
    state = {number:1};
    componentDidMount(){
        // Chỉ chạy 1 lần duy nhát sau lần render đầu tiên - dùng đê gọi api khi user load page
        // Tải thư viện axios (npm i axios)
        axios({
          url: 'https://api.tiki.vn/raiden/v2/menu-config?platform=desktop',
          method: 'GET'
        })
        .then((res)=>{
          console.log(res)
        }

        ).catch((err)=>{
          console.log(err) 
        })
        console.log('did mount')
    }
  render() {
    console.log('render')
    return (
      <div>
        <h2>LifeCycke</h2>
      <button onClick={()=>{
        this.setState({
            number: this.state.number + 1
        })
      }} 
      className="btn btn-dark">+</button>   
      <strong>{this.state.number}</strong>
      <button onClick={()=>{
        this.setState({
            number: this.state.number -  1
        })
      }} className="btn btn-danger">-</button>   

        </div>
    )
  }
  componentDidUpdate(){
    console.log('did update')
  }
}

