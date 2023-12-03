import React, { Component } from 'react'
import Detail from './Detail'
import ModalGioHang from '../ModelGioHang/ModalGioHang'

export default class DienThoai extends Component {
    state = {
        dienThoai:{ "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" , "soLuong": 1 }
    }
    arrSanPhamdt = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
      ]
    
    xemDetailDienThoai = (index) =>{
        this.setState({
            dienThoai: index
        })
    }
    
    
  render() {

    return (
      <div className='container'>
        <h2 className='text-center py-3'>Sản phẩm điện thoại</h2>

            <div className=' d-flex'>
            {this.arrSanPhamdt.map((index)=>{
                return (
                    <div className='col-4 mx-1' key={index} >
                    <div className="card" >
                        <img src={index.hinhAnh}   className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{index.tenSP}</h5>
                            <button
                            onClick={()=>{
                                this.xemDetailDienThoai(index)
                            }}
                             className="btn btn-primary">Xem chi tiết</button>
                        </div>
                    </div>
                    </div>
                )
            })}
            </div>
            <div>
                <Detail detail = {this.state.dienThoai}></Detail>
            </div>
    </div>
    )
  }
}
