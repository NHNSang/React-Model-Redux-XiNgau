import React, { Component } from 'react'

export default class 
 extends Component {
  render() {
    const {tenSP,manHinh,heDieuHanh,cameraTruoc,cameraSau,ram,rom,giaBan,hinhAnh } = this.props.detail;
    console.log(this.props.detail)
    return (
      <div>
        <div className='row border my-3'>
            <div className='col-7 text-center'>
                <h3 className='py-2'>{tenSP}</h3>
                <img src={hinhAnh} alt="" />
            </div>
            <div className='col-5'>
                <h3 className='py-2'>Thông số kĩ thuật</h3>
                <p className='border-top border-bottom'>Màn hình : {manHinh}</p>
                <p className='border-top border-bottom'>Hệ điều hành : {heDieuHanh}</p>
                <p className='border-top border-bottom'>Camera trước : {cameraTruoc}</p>
                <p className='border-top border-bottom'>Camera sau: {cameraSau}</p>
                <p className='border-top border-bottom'>Ram : {ram}</p>
                <p className='border-top border-bottom'>Rom : {rom}</p>
                <p className='border-top border-bottom'>Giá bán : {giaBan}</p>
            </div>
        </div>
      </div>
    )
  }
}
