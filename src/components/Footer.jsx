import React from "react";
import logo_wi from "../assets/logo-white.svg";
import leaf from "../assets/23-1.png";
import payments from "../assets/payments.png";
import { Link } from "react-router-dom";
import KommunicateChat from "./KommunicateChat";
import Botpenguin from "./Botpenguin";

const Footer = () => {
  return (
    <>
    { <KommunicateChat /> }
      <div className="footer">
        <div className="container_foot">
          <div className="foot_left">
            <div className="leftfoo_logd">
                <div className="logo_fodetails">
                    <div className="footer_logo">
                        <img src={logo_wi} />
                    </div>
                    <div className="footer_company">
                      <span>Experience Renewed Clarity At Organic Essentials Hub With The Finely Sourced Natural Products To Unlock Enhanced Productivity, Extended Focus & Restful Sleep. Get A Step Closer To Natural Well Being.</span>
                    </div>
                </div>
            </div>
            <div className="leftfoo_list">
                <div className="list_footer1">
                  <span className="list-title">Company</span>
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li> <Link to="blogs">Blogs</Link></li>
                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                    <li><Link to="/track-order">Track Order</Link></li>
                  </ul>
                </div>
                <div className="list_footer2">
                <span className="list-title">Quick Links</span>
                <ul>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                    <li><Link to="/my-account">My Account</Link></li>
                    <li><Link to="/affiliate-center">Affiliate Center</Link></li>
                    <li><Link to="/guarantee">Guarantee</Link> </li>
                    <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
                  </ul>
                </div>
                <div className="list_footer3">
                  <img className="leaf" src={leaf} />
                <span className="list-title3">Top Products</span>
                <ul>
                    <li><Link to="/product/ashwagandha-ksm-66-500mg">Ashwagandha</Link></li>
                    <li><Link to="/product/panax-ginseng-extract">Panax Ginseng</Link></li>
                    <li><Link to="/product/bacopa-brahmi-extract">Bacopa Monnieri</Link></li>
                    <li><Link to="/product/l-theanine-200mg">L-Theanine</Link></li>
                    
                  </ul>
                  <ul>
                  <li><Link to="/product/curcumin-with-bioperine-1310mg">Curcumin</Link></li>
                    <li><Link to="/product/gotu-kola">Gotu Kola</Link></li>
                    <li><Link to="/product/rhodiola-rosea-extract-500">Rhodiola Rosea</Link></li>
                    <li><Link to="/product/acetyl-l-carnitine-alcar">Acetyl L-Carnitine</Link></li>
                  </ul>
                </div>
            </div>
          </div>
          <div className="foot_right">
                  <div className="footer_rig1">
                  <h3 class="asii">Need assistance? </h3>
                  <Link to="/contact-us" className="cont_foo">Contact Us</Link>
                  </div>
                  <div className="pay_img">
                    <img src={payments} />
                  </div>
          </div>
          <div className="copytext">

          Copyright © 2024 Organic Essentials Hub. All Rights Reserved.

          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
