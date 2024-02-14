import React from "react";

const OrderComplate = () => {
  return (
    <>
      <div className="order_complate_section">
        <div className="thaxu_details">
          <div className="border_thaxs">
            <span>Thank you. Your order has been received.</span>
          </div>
        </div>
        <div className="thaxu_details">
          <div className="order_details">
            <h4>ORDER DETAILS</h4>
            <div className="order_row_se">
              <h5>PRODUCT</h5>
              <h5>TOTAL</h5>
            </div>
            <div className="order_row_se">
              <span>Name :</span>
              <span>$12.5</span>
            </div>
            <div className="order_row_se">
              <span>Subtotal :</span>
              <span>TOTAL</span>
            </div>
            <div className="order_row_se">
              <span>Shipping :</span>
              <span>TOTAL</span>
            </div>
            <div className="order_row_se">
              <span>Payment Method :</span>
              <span>TOTAL</span>
            </div>
            <div className="order_row_se">
              <h5>TOTAL</h5>
              <h5>$16.02</h5>
            </div>
            <div>
              <button className="re_order_com">RE-ORDER</button>
            </div>
          </div>
        </div>
        <div className="thaxu_details">
          <div className="order_details">
            <h4>BILLING ADDRESS</h4>
            <span>Name Adess</span>
            <span>Name Adess</span>
            <span>Name Adess</span>
            <span>Name Adess</span>
            <span>Name Adess</span>
            <span>Name Adess</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderComplate;
