import React from "react";
import natural from "../assets/natural.webp";
import logos_n from "../assets/logos_n.png";
import girl from "../assets/girl.webp";
import our from "../assets/our.svg";
import tmr from "../assets/tmr-logo.png";
import star_tech from "../assets/star_tech.svg";
import star_half from "../assets/star_half.svg";
import trust from "../assets/judge.svg";
import star_half_trust from "../assets/star_half_trust.svg";
import star_trust from "../assets/star_trust-2.svg";
import plane from '../assets/plane.svg'
import Review from "./Review";
import Video from "./Video";


const Rating = () => {
  return (
    <div className="home_view">
      <div className="container_sec">
      
        <img className="reting_se" src={natural} />
       <div className="approve_sec">
        <div className="ap_content">
            <span>Consciously Crafted, Compassionately Curated & Sustainably Harvested 100% Plant-Based Products Manufactured In FDA-Registered, GMP-Certified Facilities And Delivered In Earth-Friendly Packaging.</span>
        </div>
        <div className="ap_img">
          <img src={logos_n} />
        </div>
       </div>

       <div className="customers-re"> 
          <div className="csu_img">
          <img className="our" src={our} />
            <img src={girl} />
          </div>
          <div className="reting_cust">
          <Review />      
         </div>
       </div>


      <div className="tmr_reting">
          <div className="reting_widget">
            <div className="logo_widg">
            <a href="https://techmorereview.com/companies/organicessentialshub/"> <img src={tmr} /></a>
            </div>
            <div className="reting_star">
              <img src={star_tech} />
              <img src={star_tech} />
              <img src={star_tech} />
              <img src={star_tech} />
              <img src={star_half} />
            </div>
            <a href="https://techmorereview.com/companies/organicessentialshub/"><span className="trust_score">Trustscore <b>4.5</b> | <b>510</b> Reviews</span></a>
          </div>
          <div className="reting_widget">
            <div className="logo_widg jd_logo">
            <a href="https://reviews.organicessentialshub.com"><img src={trust} /></a>
            </div>
            <div className="reting_star">
              <img src={star_trust} />
              <img src={star_trust} />
              <img src={star_trust} />
              <img src={star_trust} />
              <img src={star_half_trust} />
            </div>
            <a href="https://reviews.organicessentialshub.com"><span className="trust_score">Trustscore <b>4.47</b> | <b>536</b> Reviews</span></a>
          </div>
      </div>

      <Video/>

      
        </div>


        <div className="track_overl">
        <div className="track_ord">
        
          <div className="container_sec">
        <div className="track_sect">
        <h2 className="pro_secti">
        <span className="color_g"> Locate</span> Your Shipment
  <br />
  <span className="color_g"> On One Click</span>
  <img
    decoding="async"
    src={plane}
    style={{ width: '40px', margin: '0 0 0 14px' }}
    alt="Plane Icon"
  />
  <br />
</h2>
<div className="from_trac">
  <span className="track-t">Track my Order</span>
<form role="form" target="_self" className="navbar-form navbar-left margin-top-0 margin-bottom-0" action="https://t.17track.net" method="get">
  <input type="text" className="form-control tracking_input_box" name="nums" placeholder="YOUR TRACK ID" id="tracknumber" />
  <button className="btn btn-default" id="btnSumit" type="submit">Track Order</button>
</form>

</div>

        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
