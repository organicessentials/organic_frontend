import React from "react";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/userSlice";
import { decodeToken } from "react-jwt";

const Download = () => {
  const dispatch = useDispatch();
  const { user:item } = useSelector((state) => state.user);
  let user = decodeToken(item);
  const cart = useSelector((state) => state.cart);

 console.log(user);
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
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
            <div className="div">
              <span>
                Hello <b>{user.userName}</b> (not
                <b>{user.userName}?</b>
                <Link onClick={handleLogout} href="">
                  Log out
                </Link>
                )
              </span>
              <p></p>
              <span>
                From your account dashboard you can view your recent orders,
                manage your shipping and billing addresses, and{" "}
                <Link to="/my-account/edit-account/">
                  edit your password and account details
                </Link>
                .
              </span>
              <p></p>
            {cart.cartItems.length === 0 ? (
              <Link to="/shop">
                <button className="add_cart">Shop Now</button>
              </Link>
            ) : (
              <Link to="/checkout">
                <button className="add_cart">Process Checkout</button>
              </Link>
            )}
            </div>
            
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Download;
