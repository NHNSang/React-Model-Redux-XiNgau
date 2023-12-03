import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQua extends Component {
  render() {
    console.log(this.props)
    // destructuring
    const {soBanThang,banChon,tongSoBanChoi  } = this.props
    return (
      <div>
        <p style={{fontSize: '50px'}}>
          Bạn chòn: <span className='bg-violet-700' style={{color:'red'}}>{banChon? 'Tài' : 'Xỉu'}</span>
        </p>
        <p style={{fontSize: '50px'}}>
          Số bàn thắng: <span style={{color:'blue'}}>{soBanThang}</span>
        </p>
        <p style={{fontSize: '50px'}}>
          Tổng số bàn chơi: <span style={{color:'yellow'}}>{tongSoBanChoi}</span>
        </p>
      </div>

    )
  }
}
const mapStateToProps =(state)=>{
  return{
    soBanThang: state.gameDoXiNgau.soBanThang,
    banChon: state.gameDoXiNgau.banChon,
    tongSoBanChoi: state.gameDoXiNgau.tongSoBanChoi,

  }
}
export default connect(mapStateToProps)(KetQua)