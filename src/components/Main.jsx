import { PublicRoute, UserRoute, AffilateRoute } from "../PublicRoute";
import MyAccount from "./dashboard/MyAccount";
import React, { useEffect, useState } from 'react'
import { useLocation, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import LostPassword from './LostPassword';
import Contact from './Contact';
import Suggest from './Suggest';
import ProductDetails from './ProductDetails';
import InnerHeader from './InnerHeader';
import Checkout from './Checkout';
import About_Us from './About_Us';
import Cart from "./Cart";
import Shipping from './Shipping';
import Footer from './Footer';
import Privacy from './Privacy';
import Guarantee from './Guarantee';
import Terms from './Terms';
import Affiliate from './Affiliate';
import BestProducts from './BestProducts';
import Categories from './Categories';
import Deal from './Deal';
import Order from "./dashboard/Order";
import Address from "./dashboard/Address";
import Billing from "./dashboard/Billing";
import ProductCategory from "./ProductCategory";
import Shop from "./Shop";
import Download from "./dashboard/Download";
import Account from "./dashboard/Account";
import PaymentMethod from "./dashboard/PaymentMethod";
import Register from "./affiliate/Register";
import AffiliateUrl from "./affiliate/AffiliateUrl";
import Creatives from "./affiliate/Creatives";
import Statistics from './affiliate/Statistics'
import Graphs from './affiliate/Graphs'
import Visits from "./affiliate/Visits";
import Referrals from './affiliate/Referrals'
import Payouts from './affiliate/Payouts'
import Settings from "./affiliate/Settings";
import ResetPassword from './affiliate/ResetPassword';
import LostPasswordAff from './affiliate/LostPasswordAff'
import OrganicBlog from './OrganicBlog'
import Blogs_de from './Blogs_de'
import ViewOrder from "./dashboard/ViewOrder";
import OrderPay from "./dashboard/OrderPay";
import gifLoader from "../assets/preloader.png"
import { useDispatch, useSelector } from "react-redux";
import { productsFetch } from "../features/productsSlice";
import Password from "./Password";
import TrackOrder from "./TrackOrder";
import Blogs from "./Blogs";
import Thanku from "./Thanku";
import OrderComplate from "./OrderComplate";
import PageNotFound from "./PageNotFound";



const Main = () => {
  
  const location = useLocation()
  // const dispatch = useDispatch();
  // const loading = useSelector((state) => state.products.loading);
  const [loading,setLoading] = useState(true)

  // useEffect(() => {
  //   dispatch(productsFetch());
  // }, [dispatch]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },5000);
  }, [])
  


  
  if (loading) {
    return (
      <div className="loading_layout">
      <img src={gifLoader} className="preloader" alt="logo" />
      </div>
    );
  }
  

  return (
    <>
      {location.pathname === "/" ? <Navbar /> : <InnerHeader />}
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />
        <Route path="/thank-you_/" element={<Thanku />} />
        <Route path="*" element={<PageNotFound />}/>
        <Route path="/order-received" element={<OrderComplate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-account/lost-password" element={<LostPassword />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/suggest-a-product" element={<Suggest />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<UserRoute><Checkout/></UserRoute>} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/organic-nutrients-for-brain-health-a-comprehensive-guide" element={<OrganicBlog />} />
        <Route path='/about-us' element={<About_Us/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/my-account/lost-password/aff' element={<LostPasswordAff />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/suggest-a-product' element={<Suggest />} />
        <Route path='/best-sellers' element={<BestProducts />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/about-us' element={<About_Us />} />
        <Route path='/shipping-payment' element={<Shipping />} />
        <Route path='/privacy-policy' element={<Privacy />} />
        <Route path='/guarantee' element={<Guarantee />} />
        <Route path='/terms-conditions' element={<Terms />} />
        <Route path='/blogs' element={<Blogs_de />} />
        <Route path='/blogs/:slug' element={<OrganicBlog />} />
        <Route path='/affiliate-center' element={<Affiliate />} />
        <Route path='/deal' element={<Deal />} />
        <Route path="/my-account/edit-address/:id" element={<UserRoute><Billing /> </UserRoute>} />
        <Route path='/my-account/orders' element={<UserRoute><Order/></UserRoute>} />
        <Route path='/view-order' element={<UserRoute><ViewOrder/></UserRoute>} />
        <Route path='/my-account/edit-address' element={<UserRoute><Address/></UserRoute>} />
        {/* <Route path='/my-account/edit-address/billing' element={<UserRoute><Billing/></UserRoute>} /> */}
        <Route path='/product-category/:params' element={<ProductCategory/>} />
        <Route path='/my-account/downloads' element={<UserRoute><Download/></UserRoute>} />
        <Route path='/my-account/edit-account' element={<UserRoute><Account/></UserRoute>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/my-account/add-payment-method' element={<PaymentMethod/>} />
        <Route path="/checkout/order-pay" element={<UserRoute><OrderPay /></UserRoute>} />
        <Route path="/my-account" element={<UserRoute><MyAccount /></UserRoute>}/>
        <Route path="/affiliate-area" element={<Register/>}/>
        <Route path="/affiliate-urls" element={<AffilateRoute><AffiliateUrl/></AffilateRoute>}/>
        <Route path="/creatives" element={<AffilateRoute><Creatives /></AffilateRoute>}/>
        <Route path="/statistics/" element={<AffilateRoute><Statistics /></AffilateRoute>} />
        <Route path="/graphs" element={<AffilateRoute><Graphs /></AffilateRoute>}/>
        <Route path="/referrals" element={ <AffilateRoute><Referrals /></AffilateRoute>} />
        <Route path="/payouts/"element={<AffilateRoute><Payouts /></AffilateRoute>} />
        <Route path="/visits/"element={<AffilateRoute><Visits /></AffilateRoute> }/>
        <Route path="/settings/" element={<AffilateRoute><Settings /></AffilateRoute>}/>
        <Route path="/resetpassword/:id/:token" element={<ResetPassword/>}/>
        <Route path="/create/password/:id/:token" element={<PublicRoute><Password/></PublicRoute>}/>
        <Route path="/track-order" element={<PublicRoute><TrackOrder/></PublicRoute>}/>
      </Routes>
      <Footer />

    </>
  );
};

export default Main;
