import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import config from "../config";

const TrackOrder = () => {

  const [email,setEmail] = useState("")
  const [orderId,setOrderId] = useState("")
  
  
  const data = JSON.parse(localStorage.getItem('orderDetails'))

  const [show,setShow] = useState(data)
  console.log(data);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);



  const trackOrder = async() => {
    try {
      const result = await axios.get(`${config}/api/auth/clinet/track/order`,
        {params: {email,orderId }}
      )
      localStorage.setItem('orderDetails', JSON.stringify(result.data));
      setEmail("")
      setOrderId("")
      setShow(true)
    } catch (error) {
      console.log(error);
    }

  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return (
    <>
      
        {show?<div className="container generalContainer">
          <div className="row">
            <div className="col-sm-12">
              <ul className="generalDetails">
                <li>
                  ID: <span>{data?.orderId}</span>
                </li>
                <li>
                  Status: <span>{data?.orderStatus}</span>
                </li>
                <li>
                  Date: <span>{moment(data?.createdAt).format('lll')}</span>
                </li>
                <li>
                  Tracking ID: <span>{data?.trackingId}</span>
                </li>
              </ul>
              <div className="orderDetails">
                <h2>Order Details</h2>
                <table>
                  <tbody>
                    <tr>
                      <th>Product</th>
                      <th>Total</th>
                    </tr>
                    {data.orderItems.map((doc)=>(
                      <tr>
                      <td>
                        <img
                          src={doc.image}
                          width={60}
                          alt="#"
                        />
                        {doc.name} x {doc.cartQuantity}
                      </td>
                      <td>{formatter.format(doc.price)}</td>
                    </tr>
                    ))
                    }
                    <tr>
                      <td>Shipping</td>
                      <td>Free Express Shipping (From India/SG)</td>
                    </tr>
                    <tr>
                      <td>Payment Method</td>
                      <td>
                        {data.paymentMethod}
                      </td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>
                        <span className="woocommerce-Price-amount amount">
                          <bdi>
                            <span className="woocommerce-Price-currencySymbol">
                            </span>
                            {formatter.format(data.totalPrice)}
                          </bdi>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>:null}
        <div className="container_track">
        <div className="input_trackflex">
        <div className="input_tra">
              <label htmlFor="">Order ID</label>
              <input onChange={(e)=>setOrderId(e.target.value)} className="billing_input" />
              </div>
              <div className="input_tra">
              <label htmlFor="">Billing Email</label>
              <input  onChange={(e)=>setEmail(e.target.value)} className="billing_input" />
              </div>
              </div>
              <div className="btn_tra">
              <button onClick={trackOrder} style={{ marginTop: "24px" }} className="add_cart">
                Submit
              </button>
              </div>
           </div>
      
    </>
  );
};

export default TrackOrder;
