import React, { useEffect, useState } from 'react';
import { decodeToken } from 'react-jwt';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import paypal from "../assets/paypal.png";
import stripe from "../assets/stripe1.png";
import sezzle from "../assets/sezzle.png";
import echeck from "../assets/echeck1.png";
import { addToCart, cartDecrementCart, getTotals, removeFromCart } from '../features/cartSlice';
import { Link } from 'react-router-dom';
import Toast from './Toast';
import Alert from './Alert'
import axios from 'axios';
import config from '../config';
import { applyCoupon, removeCoupon } from '../features/couponSlice';
import {Helmet} from "react-helmet";
import CartRelatedProducts from './CartRelatedProducts';

const Cart = () => { 

  const { user: item } = useSelector((state) => state.user)
  const { coupon } = useSelector((state) => state.coupon);
 
  const user = decodeToken(item)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart)
  console.log(cart);
  const [couponName, setCouponName] = useState("")
  const [message, setMessage] = useState("")
  const [timer, setTimer] = useState(207);

useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });




  const apply = () => {
    if (couponName) {
      axios
        .post(`${config}/api/auth/apply/coupon`, {
          coupon: couponName,
          totalAmount: cart.cartTotalAmount,
          userId: user.id,
        })
        .then((response) => {
          console.log(response);
          if (response.data.coupon) {
            dispatch(applyCoupon(response.data.coupon));
          }
          setMessage({
            severity: response.data.type,
            text: response.data.message,
          });
        })
        .catch((error) => {
          console.log(error);
          setMessage({ severity: error, text: error.message });
        });
    } else {
      Toast({ title: "coupon not found", type: "error" });
    }
  };

  const checkout = () => {
    if (user) {
      navigate("/checkout");
    } else {
      navigate("/login");
    }
  };

  const increment = (doc) => {
    dispatch(addToCart(doc))
  }

  const decrement = (doc) => {
    dispatch(cartDecrementCart(doc))
  }

  const deleteProduct = (doc) => {
    dispatch(removeFromCart(doc))
  }

  const remove = () => {
    const formData = { userId: user.id, name: coupon.name };
    axios
      .post(`${config}/api/auth/remove/coupon`, formData)
      .then((res) => {
        dispatch(removeCoupon());
      })
      .catch((err) => {
        console.log(err);
      });
  };


// Format the timer as minutes and seconds
const minutes = Math.floor(timer / 60);
const seconds = timer % 60;

return (
  <>
    {cart?.cartItems?.length > 0 ? (
      <>
        <Helmet>
        <title>Cart - Organic Essentials Hub</title>
        <meta name="description" content="" />
    </Helmet>

        <div className='checkout_header'>
          <div className='shopping_cart'>
            <span className='count'>1</span>
            <span className='title'>SHOPPING CART</span>
            <span className='checkout_line'></span>
          </div>
          <div className='shopping_cart'>
            <span className='count'>2</span>
            <span className='title'>CHECKOUT</span>
            <span className='checkout_line'></span>
          </div>
          <div className='shopping_cart'>
            <span className='count'>3</span>
            <span className='title'>ORDER STATUS</span>
            <span className='checkout_line'></span>
          </div>
        </div>
        <div className='checkout_header'>
          {timer > 0 ? (
            <p>
              Hurry up, {minutes}:{seconds} left for checkout!
            </p>
          ) : (
            <p>
              You are out of time! Checkout now to avoid losing your order!
            </p>
          )}
        </div>
        <div className="cart_page">
          <div className="container_sec">
            <div className='cart_main_panel'>
              <div className='cart_left'>

                <div className="mobile_cart">
                  <div className="jkgjgs">
                    <div className="row row_cart cart_head">
                      <div className="cart_r cart_wi">
                        x
                      </div>
                      <div className="cart_img cart_wi">
                        Image
                      </div>
                      <div className="cart_titl cart_wi">
                        Product
                      </div>
                      <div className="cart_pri cart_wi">
                        Price
                      </div>
                      <div className="cart_qt cart_wi">
                        Quantity
                      </div>
                      <div className="cart_subt cart_wi">
                        Subtotal
                      </div>
                    </div>
                  </div>
                  {cart.cartItems.map((doc) => (
                    <div key={doc._id} className="cart_data">

                      <div className="row row_cart">
                        <div className="cart_r cart_wi">

                          <button onClick={() => deleteProduct(doc)}
                            className="increment_button"

                          >X
                            <i className="pi pi-times-circle"></i>
                          </button>
                        </div>
                        <div className="cart_img cart_wi">
                          <img width={48} src={doc.image} alt="user" />
                        </div>
                        <div className="cart_titl cart_wi">
                          {doc?.name}
                        </div>
                        <div className="cart_pri cart_wi">
                          {formatter.format(doc.price)}
                        </div>
                        <div className="cart_qt cart_wi">

                          <button onClick={() => increment(doc)}
                            className="increment_button"

                          >
                            <i className="pi pi-minus-circle">
                              +
                            </i>
                          </button>
                          <input
                            className="input_quantity"
                            value={doc.quantity}
                            type="text"
                          />
                          <button onClick={() => decrement(doc)}
                            className="increment_button"

                          >
                            <i className="pi pi-plus-circle">
                              -
                            </i>
                          </button>
                        </div>
                        <div className="cart_subt cart_wi">
                          {formatter.format(doc.quantity * doc.price)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className='coupon_deta'>
                  <input
                    value={couponName}
                    onChange={(e) => setCouponName(e.target.value)}
                    placeholder="Coupon Code"
                    className="add_coupon"
                    type="text"
                  />
                  <button onClick={apply} className="add_coup ">
                    Apply coupon
                  </button>
                   
                </div>
                <div className='coupn_er' style={{width:"100%"}}>
                   {message && (
                  <Alert
                    severity={message.severity}
                    text={message.text}
                  />
                )}
                   </div>
                {/* <div>
                <button className="add_cart">Update Cart</button>
              </div> */}
              <div>
               <CartRelatedProducts category={cart.cartItems[0].category}/>
              </div>
              </div>
              
              <div className='view_cart_pnl'>

              <h3 className='cart_rttle'> Cart Totals</h3>

              <div className="col-lg-6">
                <div className="subtotal">
                  <table>
                    <tr>
                      <td className='parent_td'>SubTotal</td>
                      <td>
                        {formatter.format(cart.cartTotalAmount)}
                      </td>
                    </tr>
                    {coupon ? (
                      <tr>
                        <td className='parent_td'>Coupon</td>
                        <td onClick={remove}>{formatter.format(coupon.discountedPrice)} REMOVE</td>
                      </tr>
                    ) : null}
                    <tr>
                      <td className='parent_td'>Shipping</td>
                      <td>Shipping cost will be calculated in the checkout page</td>
                    </tr>
                    <tr>
                      <td className='parent_td'>Total</td>
                      <td>
                        {coupon
                          ? formatter.format(coupon.finalPrice)
                          : formatter.format(cart.cartTotalAmount)
                        }
                      </td>
                    </tr>
                  </table>

                  <a onClick={checkout}>
                    <button className="chekout_button">
                      Proceed to checkout
                    </button>
                  </a>
                  <Link to="/categories">
                  <button className="shiping_button">
                    CONTINUE SHOPPING
                  </button>
                  </Link>
                  

                  <div class="sales-booster-safe-checkout">
                    <fieldset>
                      <legend>Guaranteed <span class="highlight">safe</span> checkout</legend>
                      <span><img src={paypal} /></span>
                      <span><img src={stripe} /></span>
                      <span><img src={sezzle} /></span>
                      <span><img src={echeck} /></span>
                    </fieldset>
                  </div>
                  <span className='sec_pay'>Your Payment is 100% Secure</span>

                </div>
              </div>

            </div>
            </div>
            
            
          </div>
        </div>
        
      </>
    ) : (
      <div className='cart_emp' style={{ marginBottom: "24px" }}>
        <div className='container_sec'>
          <div className='retur_shop'>
        <h1>Your cart is currently empty.</h1>
        <Link to="/shop" >
          <button className="add_cart">Return to Shop</button>
        </Link>
        </div>
        </div>
      </div>
    )}
  </>
)

}

export default Cart