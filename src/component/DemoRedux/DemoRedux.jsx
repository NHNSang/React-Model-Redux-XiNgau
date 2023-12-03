import React, { Component } from 'react'
import {connect} from 'react-redux'
 class DemoRedux extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h2>Bài tập về Redux</h2>
        <p>{this.props.hoTen}</p>
        <button onClick={()=>{
          this.props.thayDoiHoTen('Sỹ')
        }}>Đổi tên thành Long</button>
      </div>
    )
  }
}

// Hàm giúp lấy dữ liệu từ store về component
const mapStateToProps = (state) =>{
  return {
    hoTen: state.hoTen
  }
};
// Hàm giúp tạo ra các phương thức dispatch để đưa dữ liệu lên store
const mapDispatchToProps = (dispatch)=>{
  return {
    thayDoiHoTen: (name)=>{
      dispatch({
        // type giúp định dạng ra dispatch gửi lên store
        type: 'CHANGE_NAME',
        // payload là định dạng gởi lên store
        payload: name,
      })
  }
  }
}
// Kết nối component với redux 
export default connect (mapStateToProps,mapDispatchToProps )(DemoRedux);