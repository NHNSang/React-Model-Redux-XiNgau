import React, { Component } from 'react'

import { connect } from 'react-redux'

class XiNgau extends Component {
  render() {
    console.log(this.props)
    const styleXiNgau = {width: '50px', height: '50px'}
    return (
      <div className='d-flex'>
        {/* <img style={styleXiNgau} src={'./img/xiNgau/1.png'} alt="" />
        <img style={styleXiNgau} src={'./img/xiNgau/3.png'} alt="" />
        <img style={styleXiNgau} src={'./img/xiNgau/6.png'} alt="" /> */}
        {this.props.listXiNGau.map((item,index)=>{
          return <img key={index} style={styleXiNgau} src={`./img/xiNgau/${item.xiNgau}.png`} alt="" />
        })}
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return{
    listXiNGau: state.gameDoXiNgau.listXiNgau,
  };
}

export default connect(mapStateToProps)(XiNgau)