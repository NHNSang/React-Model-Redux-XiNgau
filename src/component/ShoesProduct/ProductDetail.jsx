import React, { Component } from "react";

export default class ProductDetail extends Component {
  render() {
    const { name, price, description, image } = this.props.detail;
    console.log(this.props.detail);
    return (
      <div>
        <div>
          {/* Modal trigger button */}
          {/* Modal Body */}
          {/* if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard */}
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
              <div className="modal-content text-dark">
                <div className="modal-header">
                  <h5 className="modal-title" id="modalTitleId">
                    Chi tiết sản phẩm
                  </h5>
                  {/* <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  /> */}
                </div>
                <div className="modal-body d-flex">
                  <div className="hinhAnh">
                    <img src={image} alt="" />
                  </div>
                  <div className="chiTiet">
                    <div className="header_hinhAnh">
                      <p>{name}</p>
                      <i class="fa-solid fa-heart"></i>
                    </div>
                    <div className="info_stars d-lex">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <div className="price_hinhANh">
                      <p>${price * 1.5}</p>
                      <p>${price}</p>
                    </div>
                    <p>{description}</p>
                    <button className="buy_it">BUY IT NOW</button>
                    <div className="product_sharebar d-flex align-items-center mt-4">
                      <div className="share">
                        <button>
                          <i className="fa-solid fa-share-nodes" />
                          <span>Share</span>
                        </button>
                      </div>
                      <div className="ask-a-question">
                        <button>
                          <i className="fa-solid fa-question" />
                          <span>ask a question</span>
                        </button>
                      </div>
                      <div className="faq">
                        <button>
                          <i className="fa-regular fa-message" />
                          <span>faq</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
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
