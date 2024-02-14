import React, { useEffect, useState, useRef } from "react";
import Dashboard from "./Dashboard";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import moment from "moment/moment";
import config from "../../config";
import { decodeToken } from "react-jwt";
import { Helmet } from "react-helmet";
import { addToCart, clearCart } from "../../features/cartSlice";

const Order = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const msgs = useRef(null);
  const { user: item } = useSelector((state) => state.user);
  const [showTrackNumber, setShowTrackNumber] = useState(false);
  let user = decodeToken(item);
  console.log(data);

  const fetchOrderData = async () => {
    try {
      const response = await axios.get(
        `${config}/api/auth/get/order/${user.id}`,
        {
          headers: { accessToken: user.accessToken },
        }
      );
      setData(response.data.orders);
      console.log(response);
    } catch (error) {
      console.error("Error fetching order data:", error);
    }
  };

  useEffect(() => {
    fetchOrderData();
  }, [user.id]);

  // useMountEffect(() => {
  //   msgs.current.show([
  //       {sticky: true, severity: 'info', summary: '', detail: 'No order ?', closable: false},
  //   ]);
  // });

  const remove = async (id, i) => {
    const result = await axios.delete(`${config}/api/auth/order/delete/${id}`);
    try {
      console.log(result);
      fetchOrderData();
    } catch (error) {
      console.log(error);
    }
  };

  const pay = (data) => {
    navigate("/checkout/order-pay", { state: data });
  };

  const view = (data) => {
    navigate("/view-order", { state: data });
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  const refillOrder = (order) => {
    try {
        dispatch(clearCart());
        localStorage.setItem("cartItems", JSON.stringify(order.orderItems)); // Serialize order.orderItems to JSON
        console.log(order.orderItems);
        navigate("/checkout")
        window.location.reload()
    } catch (error) {
        // Handle errors if needed
        console.error("Error refilling order:", error);
    }
};


  return (
    <div>
      <Helmet>
        <title>My Orders - Organic Essentials Hub</title>
        <meta name="description" content="" />
      </Helmet>
      <div className="bredcrum_org">
        <h1>Orders</h1>
      </div>
      <div className="my_account">
        <div className="container_sec">
          <div className="row_account">
            <div className="col-lg-4">
              <Dashboard />
            </div>
            <div className="col-lg-8">
              {!data ? (
                <div style={{ marginTop: "48px" }}>
                  {/* <Messages ref={msgs} /> */}
                </div>
              ) : (
                <div className="table_order">
                  <table className="order_table">
                    <tr>
                      <th>Order</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Total</th>
                      <th>Action</th>
                    </tr>
                    {data?.map((doc) => (
                      <tr key={doc._id}>
                        <td data-column="Order">
                          <a href="">#{doc.orderId}</a>
                        </td>
                        <td data-column="Date">
                          {moment(doc.createdAt).format("l")}
                        </td>
                        <td data-column="Status">{doc.orderStatus}</td>
                        <td data-column="Total">
                          {formatter.format(doc.totalPrice)} for{" "}
                          {doc.totalQuantity} items
                        </td>
                        <td data-column="Action" className="btn_or">
                          <button onClick={() => view(doc)}>View</button>
                          {doc.orderStatus === "Pending Payment" ? (
                            <button onClick={() => pay(doc)}>Pay</button>
                          ) : null}
                          {doc.trackingId ? (
                            <>
                            <button
                              onClick={() =>
                                setShowTrackNumber(!showTrackNumber)
                              }
                            >
                              Tracking
                            </button>
                            {doc.trackingId && showTrackNumber ? (
                            <span>Tracking Number: {doc.trackingId}</span>
                          ) : null}
                          </>
                          ) : null}
                          {doc.orderStatus === "Cancelled" ? null : (
                            <button onClick={() => remove(doc._id)}>
                              Cancel
                            </button>
                          )}
                          <button onClick={()=>refillOrder(doc)}>Refill Order</button>
                        </td>
                      </tr>
                    ))}
                    
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
