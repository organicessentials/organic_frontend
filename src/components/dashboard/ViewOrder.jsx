import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import { useLocation } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import config from "../../config";
import { useSelector } from "react-redux";
import { decodeToken } from "react-jwt";
import {Helmet} from "react-helmet";
const ViewOrder = () => {

  const location = useLocation()
  const data = location.state
  const { user:item } = useSelector((state) => state.user);
  const user = decodeToken(item)
  const [billing,setBilling] = useState("")
  console.log(data);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const billingData = async() => {
      const result = await axios.get(`${config}/api/auth/billing/${user.id}`)
      setBilling(result.data);
    }
    billingData()
  }, [])

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return (
    <div>
        <Helmet>
        <title>Order Details - Organic Essentials Hub</title>
        <meta name="description" content="" />
    </Helmet>
      <div className="bredcrum_org">
    <h1>My Order</h1>
  </div>
      <div className="my_account">
      <div className="container_sec">
        <div className="row_account">
          <div className="col-lg-4">
            <Dashboard />
          </div>
          <div className="col-lg-8">
            <span className="order_data">
              Order <b>#{data?.orderId}</b> was placed on <b>{moment(data?.createdAt).format('l')}</b> and is currently <b>On hold</b>.
            </span>
            <div className="table_order">
              <table className="view_orderoeh">
                <tr>
                  <th>Product</th>
                  <th>Total</th>
                </tr>
                {data?.orderItems?.map((doc)=>(
                  <tr>
                  <td>
                    <a href="">{doc.name} × 1</a>
                  </td>
                  <td>{formatter.format(doc.price*1)}</td>
                </tr>
                ))}
                <tr>
                  <td>Subtotal:</td>
                  <td>{formatter.format(data?.totalPrice)}</td>
                </tr>
                <tr>
                  <td>Shipping:</td>
                  {data?.shippingPrice?<td>$8.90 via Free Shipping over USD 35</td>:
            <td>Free Express Shipping (From India/SG)</td>}
                </tr>
                <tr>
                  <td>Payment method:</td>
                  <td>
                   {data?.paymentMethod}
                  </td>
                </tr>
                <tr>
                  <td>Total:</td>
                  <td>{formatter.format(data?.totalPrice)}</td>
                </tr>
              </table>
            </div>
            <div className="row_oeh_oder">
              <div className="col-lg-6">
                <table className="view_addressbill">
                  <tr>
                    <td className="bil_addre">Billing address</td>
                  </tr> 
                  <tr>
                  <td>
                    <span>{billing?.apartment}  {billing?.street}</span><br />
                    <span>{billing?.country}  {billing?.state}</span><br />
                    <span>{billing?.city}  {billing?.zipCode}</span><br />
                    <span>{billing?.phone}  </span><br />
                    <span>{billing?.email} </span><br />
                    </td>
                  </tr>
                </table>
              </div>
              <div className="col-lg-6">
                <table className="view_address">
                  <tr>
                    <td className="bil_addre">Shipping address</td>
                  </tr>
                  <tr>
                  <td>
                    <span>{billing?.apartment}  {billing?.street}</span><br />
                    <span>{billing?.country}  {billing?.state}</span><br />
                    <span>{billing?.city}  {billing?.zipCode}</span><br />
                    <span>{billing?.phone}  </span><br />
                    <span>{billing?.email} </span><br />
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ViewOrder;
