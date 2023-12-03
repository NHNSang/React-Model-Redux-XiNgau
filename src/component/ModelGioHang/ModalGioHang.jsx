import React, { Component } from "react";

export default class ModalGioHang extends Component {
  render() {
    const {gioHang , xoaGioHang , tangGiamSoLuong} = this.props
    console.log(tangGiamSoLuong)
    return (
      <div>
        <div>
          <div
            className="modal fade"
            id="modalId"
            tabIndex={-1}
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            role="dialog"
            aria-labelledby="modalTitleId"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="modalTitleId">
                   Giỏ hàng
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Mã sản phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {gioHang.map((spGH, index)=>{
                        return (
                          <tr key={index}>
                            <td>{spGH.maSP}</td>
                            <td><img src={spGH.hinhAnh} alt="" style={{width:'40%'}}/></td>
                            <td>{spGH.tenSP}</td>
                            <td>
                              <button onClick={()=>{
                                tangGiamSoLuong(spGH.maSP,true)
                              }}>+</button>
                              {spGH.soLuong}
                              <button onClick={()=>{
                                tangGiamSoLuong(spGH.maSP,false)
                              }}>-</button>

                            </td>
                            <td>{spGH.giaBan}</td>
                            <td>{spGH.giaBan * spGH.soLuong}</td>
                            <td>
                              <button 
                              onClick={()=>{
                                xoaGioHang(spGH.maSP)
                              }}
                              className="btn btn-danger">Xoá</button>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan='5'></td>
                        <td>Tổng tiền</td>
                        <td>
                          {this.props.gioHang.reduce((tongTien, spGioHang, index)=>{
                            return tongTien += spGioHang.soLuong * spGioHang.giaBan
                          },0).toLocaleString()}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Optional: Place to the bottom of scripts */}
        </div>
      </div>
    );
  }
}
