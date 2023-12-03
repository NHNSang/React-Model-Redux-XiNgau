import React, { Component } from "react";
import ModalGioHang from "./ModalGioHang";

export default class HienThiGioHang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gioHang: [
        {
          maSP: 1,
          tenSP: "VinSmart Live",
          giaBan: 5700000,
          hinhAnh: "./img/vsphone.jpg",
          soLuong: 1,
        },
      ],
    };
  }

  arrSanPhamdt = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];

  //   Lấy dữ liệu từ component HIenThiGioHang
  themGioHang = (sanPhamChon) => {
    // console.log(sanPhamChon)
    // b1: từ sp được chọn tạo ra sp giỏ hàng
    let spGioHang = {
      maSP: sanPhamChon.maSP,
      tenSP: sanPhamChon.tenSP,
      giaBan: sanPhamChon.giaBan,
      hinhAnh: sanPhamChon.hinhAnh,
      soLuong: 1,
    };
    let gioHangCapNhap = [...this.state.gioHang];
    let index = gioHangCapNhap.findIndex((sp) => sp.maSP === spGioHang.maSP);
    if (index !== -1) {
      // Sản phẩm được click đã có trong this.state.gioHang
      gioHangCapNhap[index].soLuong += 1;
    } else {
      // Sản phẩm được click chưa có trong this.state.gioHang
      gioHangCapNhap.push(spGioHang);
    }
    this.setState({
      gioHang: gioHangCapNhap,
    });
  };

//   Sự kiện xoá giỏ hàng
    xoaGioHang = (maSP)=>{
        // TÌm trong giỏ hàng có sp chứa maSP được click thì xoá
        // Cách 1
        // let gioHangCapNhap = [...this.state.gioHang]
        // let index = gioHangCapNhap.findIndex(sp=>sp.maSP === maSP);
        // if(index !== -1){
        //     gioHangCapNhap.splice(index,1)
        // }
        // Cách 2
        let gioHangCapNhap = this.state.gioHang.filter(sp=>sp.maSP !== maSP )
        // Cập nhập lại giỏ hàng và render
        this.setState({
            gioHang: gioHangCapNhap
        })
    }

    // tăng giảm số lượng
    tangGiamSoLuong =(maSP,tangGiam)=>{
        let gioHangCapNhap = [...this.state.gioHang]
        let index = gioHangCapNhap.findIndex(sp=>sp.maSP === maSP)
        // Xử lí tăng giảm
        if(tangGiam){
            gioHangCapNhap[index].soLuong += 1
        }else{
            if(gioHangCapNhap[index].soLuong > 1){
                gioHangCapNhap[index].soLuong -= 1
            }
        }
        // Câph nhập và render
        this.setState({
            gioHang: gioHangCapNhap
        })
    }
  render() {
     // tạo hàm tăng giảm số lượng khi người dùng click vào thêm giỏ hàng
    let tongSoLuong = this.state.gioHang.reduce((tsl, spGH, index) => {
      return (tsl += spGH.soLuong);
    }, 0);
    return (
      <div>
        <h1 className="text-center py-3">Bài tập thêm giỏ hàng vào model</h1>
        <ModalGioHang 
        tangGiamSoLuong = {this.tangGiamSoLuong}
        xoaGioHang = {this.xoaGioHang}
        gioHang={this.state.gioHang}></ModalGioHang>
        <div className="py-3">
          <span
            className="text-danger"
            style={{ cursor: "pointer", fontSize: "17px", fontWeight: "bold" }}
            data-bs-toggle="modal"
            data-bs-target="#modalId"
          >
            Giỏ hàng ({tongSoLuong})
          </span>
        </div>
        <div className="d-flex">
          {this.arrSanPhamdt.map((sp, index) => {
            return (
              <div className="col-4 mx-1" key={index}>
                <div className="card">
                  <img src={sp.hinhAnh} className="card-img-top" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">{sp.tenSP}</h5>
                    <button
                      onClick={() => {
                        this.themGioHang(sp);
                      }}
                      className="btn btn-primary"
                    >
                      Thêm giỏ hàng
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
