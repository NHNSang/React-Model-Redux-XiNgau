import React, { Component } from 'react'
import XiNgau from './XiNgau'
import { connect } from 'react-redux'

class LuaChon extends Component {
  render() {
    console.log(this.props)
    return (
      <div className='d-flex justify-content-around'>
        <button className='btn btn-success' style={{width:'150px' , height: '150px', fontSize: '25px', border: '5px solid red'}}
        onClick={()=>{
          this.props.thayDoiDuLieuBanChon(true)
        }}>Tài</button>
        <XiNgau></XiNgau>
        <button className='btn btn-success' style={{width:'150px' , height: '150px', fontSize: '25px', border: '5px solid red'}}
        onClick={()=>{
          this.props.thayDoiDuLieuBanChon(false)
        }}>Xỉu</button>
      </div> 
     )
  }
}

// DÙng mapdispatch to Props để tạo 1 hàm chuyền cho 2 nút button để thay đỗi dữ liuej
const mapDispatchToProps=(dispatch)=>{
  return{
    // value có thể là true or false
    thayDoiDuLieuBanChon: (value)=>{
      const action = {
        type: "THAY_DOI_DU_LIEU_BAN_CHỌN",
        payload: value,
      };
      dispatch(action)
    }
  }
}
// component phải được kết nối với store
// mapStateToProps = > lấy giữ liệu từ store
// mapDispatchToProps = >tạo ra phương thức gởi dispatch lên store
// Lưu ý các component ko sử dụng mapStateToProps mà chỉ sử dụng mapDispatchToProps thì thêm null phía trước, nếu ko thêm sẽ bị sai cấu trúc 
export default connect(null,mapDispatchToProps)(LuaChon)

// trên component sẽ dùng prop để lấy hàm và truyền sự kiện onclick cho 2 nút tài và xỉu