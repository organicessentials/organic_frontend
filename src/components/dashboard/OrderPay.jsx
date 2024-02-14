import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../config";
import { useSelector } from "react-redux";
import { decodeToken } from "react-jwt";
import LoadingOverlay from "react-loading-overlay-ts";
import paypal from "../../assets/paypal.png";
import stripe from "../../assets/stripe1.png";
import sezzle from "../../assets/sezzle.png";
import echeck from "../../assets/echeck1.png";
import { clearCart } from "../../features/cartSlice";

const OrderPay = () => {
  const location = useLocation()
  const data = location?.state
  const navigate = useNavigate()
  const [num, setNum] = useState(data?.paymentMethod);
  const [approveToken, setApproveToken] = useState("");
  const [agreement, setAgreement] = useState(false);
  const { user:item } = useSelector((state) => state.user);
  const [preLoader, setPreLoader] = useState(false);
  const [eCheck, setECheck] = useState({
    routingNumber: "",
    accountNumber: "",
    checkNo: "",
  });
  
  const user = decodeToken(item)

  console.log(num);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  

  useEffect(() => {
    const getData = async() => {
      const result = await axios.get(`${config}/api/auth/billing/${user.id}`)
      setBillingData(result.data);
    }
    getData()
  }, [])



  


  const handleChange = (event) => {
    setAgreement(event.target.checked);
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  const handleChangeOption = (e) => {
    setNum(e.target.value);
    setPreLoader(true);
    setTimeout(() => {
      setPreLoader(false);
    }, 1000);
  };



  const handleChangeECheck=(e)=> {
    setECheck({ ...eCheck, [e.target.name]: e.target.value });
  }
  

  const payment = () => {
    if (num === "E-Check") {
      axios.post(`${config}/api/auth/create-transaction`, {
        data,
        routingNumber:eCheck.routingNumber,
        accountNumber: eCheck.accountNumber,
        checkNo: eCheck.checkNo,
        accessToken: approveToken,
        amount:renderPaymentAmount()
      })
      .then((result) => {
        createOrder("Pending Payment")
        navigate("/my-account/orders")
        dispatch(clearCart());
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
    }  
    if (num === "Sezzle") {
      axios.post(`${config}/api/auth/create-sezzle-checkout`, {
        data,
        userId:user.id,
        accessToken:approveToken,
        amount:renderPaymentAmount()
      })
      .then((result) => {
        createOrder("Pending Payment")
        navigate("/my-account/orders")
        dispatch(clearCart());
        window.open(result.data.checkout_url);
      })
      .catch((err) => {
        console.log(err);
      });
    }  
    if (num === "PayPal") {
      axios.post(`${config}/api/auth/create/paypal/payment`, {
        data,
        amount:renderPaymentAmount()
      })
      .then((result) => {
        createOrder("Pending Payment")
        navigate("/my-account/orders")
        dispatch(clearCart());
        window.open(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
    } 
    if (num === "Card") {
      axios.post(`${config}/api/auth/stripe-payment`, {
        data,
        amount:renderPaymentAmount()
      })
      .then((result) => {
        createOrder("Pending Payment")
        navigate("/my-account/orders")
        dispatch(clearCart());
        window.open(result.data.url)
      })
      .catch((err) => {
        console.log(err);
      });
    }           
  }
  

  return (

    <LoadingOverlay active={preLoader} spinner text="Loading...">
    <div className="container_sec">
      <div className="table_order">
        <table className="tabel_aff">
          <thead>
          <tr>
            <td>Product</td>
            <td>Qty</td>
            <td>Total</td>
          </tr>
          </thead>
          <tbody>
          {data?.orderItems.map((doc)=>(
            <tr>
            <td>
              <Link>{doc.name}</Link>
            </td>
            <td>
              <b>{doc.quantity}</b>
            </td>
            <td>{formatter.format(doc.price)}</td>
          </tr>
          ))}
          <tr>
            <td>Subtotal:</td>
            <td></td>
            <td>{formatter.format(data.totalPrice)}</td>
          </tr>
          <tr>
            <td>Shipping:</td>
            <td></td>
            {data?.shippingPrice?<td>$8.90 via Free Shipping over USD 35</td>:
            <td>Free Express Shipping (From India/SG)</td>}
          </tr>
          <tr>
            <td>Payment method:</td>
            <td></td>
            <td>
             {num?num:data?.paymentMethod}
            </td>
          </tr>
          <tr>
            <td>Total:</td>
            <td></td>
            <td>{formatter.format(data.totalPrice)}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div>
    
      </div>

      <div className="geateways">
                <div className="check_ldbfd">
                  <input
                    checked={num === "E-Check"}
                    value="E-Check"
                    type="radio"
                    onChange={handleChangeOption}
                  />
                  <span>E-Check</span>
                  {num === "E-Check" ? (
                    <div className="e-check">
                      <label htmlFor="">Routing Number *</label>
                      <input onChange={handleChangeECheck}
                        value={eCheck.routingNumber}
                        name="routingNumber"
                        type="text"
                      />
                      <label htmlFor="">Account Number *</label>
                      <input onChange={handleChangeECheck}
                        value={eCheck.accountNumber}
                        name="accountNumber"
                        type="text"
                      />
                      <label htmlFor="">Check Number *</label>
                      <input onChange={handleChangeECheck}
                        value={eCheck.checkNo}
                        name="checkNo"
                        type="text"
                      />
                    </div>
                  ) : null}
                </div>
                <div className="check_ldbfd">
                  <input
                    name="fav_language"
                    checked={num === "Sezzle"}
                    value="Sezzle"
                    type="radio"
                    onChange={handleChangeOption}
                  />
                  <span>Buy Now and Pay Later</span>
                  <img className="sezzle" src="https://d34uoa9py2cgca.cloudfront.net/branding/sezzle-logos/png/sezzle-logo-sm-100w.png" alt="" />
                </div>
                <div className="check_ldbfd">
                  <input
                    name="fav_language"
                    checked={num === "Card"}
                    value="Card"
                    type="radio"
                    onChange={handleChangeOption}
                  />
                  <span> Credit or Debit Card</span>
                  {/* <img src={stripe} alt="" /> */}
                </div>
                <div className="check_ldbfd">
                  <input
                    name="fav_language"
                    checked={num === "PayPal"}
                    value="PayPal"
                    type="radio"
                    onChange={handleChangeOption}
                  />
                  <span>Paypal</span>
                </div>
                <div className="check_ldbfd">
                  <input
                    name="agreement"
                    onChange={handleChange}
                    type="checkbox"
                  />
                  <span className="data_policy">
                    <span>I have read and agree to the website *</span>
                    <Link to="/shipping-payment">
                      Shipping and Payment Terms
                    </Link>
                    
                  </span>
                </div>
                <div className="check_ldbfd">
                    <button
                      onClick={payment}
                      value={agreement}
                      // disabled={!agreement}
                      className="chekout_button"
                    >
                      Place Order
                    </button>
                </div>

                <div class="sales-booster-safe-checkout">
                  <fieldset>
                    <legend>
                      Guaranteed <span class="highlight">safe</span> checkout
                    </legend>
                    <span>
                      <img src={paypal} />
                    </span>
                    <span>
                      <img src={stripe} />
                    </span>
                    <span>
                      <img src={sezzle} />
                    </span>
                    <span>
                      <img src={echeck} />
                    </span>
                  </fieldset>
                </div>
                <span className="sec_pay">Your Payment is 100% Secure</span>
              </div>
    </div>
    </LoadingOverlay>
  );
};

export default OrderPay;
