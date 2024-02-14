import React from "react";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/userSlice";
import { decodeToken } from "react-jwt";
import orders from "./Order";
import {Helmet} from "react-helmet";

const MyAccount = () => {
  const dispatch = useDispatch();
  const { user:item } = useSelector((state) => state.user);
  let user = decodeToken(item);
  const cart = useSelector((state) => state.cart);


  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
         <Helmet>
        <title>My Account - Organic Essentials Hub</title>
        <meta name="description" content="" />
    </Helmet>

       <div className="bredcrum_org">
    <h1>My Account</h1>
  </div>
      <div className="my_account">
      <div className="container_sec">
        <div className="row_account">
          <div className="col-lg-4">
            <Dashboard />
          </div>
          <div className="col-lg-8">
            <div className="div_myaccou">
              <span className="wlcm">Welcome To Your Account Page</span>
              <span>
                Hi <b>{user.userName}</b> today is a great day to check your account page. You can check also:
              </span>
              <div className="option_user">
                <Link to="orders">
                <button className="add_cart-account">Recent Orders</button>
                </Link>
                <Link to="/my-account/edit-account/"><button className="add_cart-account">Account Details</button></Link>
                {cart.cartItems.length === 0 ? (
              <Link to="/shop">
                <button className="add_cart-account">Shop Now</button>
              </Link>
            ) : (
              <Link to="/checkout">
                <button className="add_cart-account pro_checkou">Process Checkout</button>
              </Link>
            )}
              </div>
            
            </div>
            <p></p>
            
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
