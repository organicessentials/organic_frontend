import React, { useEffect } from "react";
import off from "../assets/off.svg";
import affiliate from "../assets/affiliate.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { decodeToken } from "react-jwt";
import {Helmet} from "react-helmet";

const Affiliate = () => {
  const {user:item} = useSelector((state)=>state.user)
  const user = decodeToken(item)
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    if (user?.role === "Admin User") {
      navigate('/affiliate-urls/')
    }else{
      navigate('/affiliate-center')
    }
  }, [user])

  return (
    <div>
        <Helmet>
        <title>Affiliate Center - Organic Essentials Hub</title>
        <meta name="description" content="" />
    </Helmet>

       <div className="bredcrum_org">
    <h1>Affiliate Center</h1>
  </div>
      <div className="affili_sec">
        <div className="container_sec">
          <div className="sec_1aff">
            <div className="cl1">
                <div className="sale_img">
                  <img src={off} />
                </div>
                <div className="sale_cont">
                  <h3>Earn 10% to 50% in each sale!</h3>
                  <span>When any sale is made in 30 days using your link, you will receive a 10% to 50% commission!</span>
                </div>
            </div>
            <div className="cl2">
            <h3>Highest conversion rate!</h3>
            <span>We have the highest conversion rate in the industry. We definitely mean it!</span>
            </div>
            <div className="cl2">
            <h3>Weekly Payout!</h3>
            <span>We payout every week on Friday’s so you don’t have to wait for a month to receive what you have earned!</span>
             

            </div>
          </div>
        <h2 className="aff_comm">Affiliate Commissions Table</h2>
          <table class="tabel_aff">
<thead>
<tr>
<td>Total Earnings</td>
<td>Commission Rate</td>
<td>Avg Number of Refferals</td>
</tr>
</thead>
<tbody>
<tr>
<td>$0 – $9,999</td>
<td>30%</td>
<td>1</td>
</tr>
<tr>
<td>$10,000 – $24,999</td>
<td>31%</td>
<td>123</td>
</tr>
<tr>
<td>$25,000 – $49,999</td>
<td>32%</td>
<td>297</td>
</tr>
<tr>
<td>$50,000 – $99,999</td>
<td>33%</td>
<td>574</td>
</tr>
<tr>
<td>$100,000 – $249,999</td>
<td>34%</td>
<td>1,111</td>
</tr>
<tr>
<td>$250,000 – $499,999</td>
<td>35%</td>
<td>2,380</td>
</tr>
<tr>
<td>$500,000 – $999,999</td>
<td>36%</td>
<td>4,166</td>
</tr>
<tr>
<td>$10,000,000 – $2,499,999</td>
<td>45%</td>
<td>83,000</td>
</tr>
<tr>
<td>$25,000,000+</td>
<td>55%</td>
<td>150,000</td>
</tr>
</tbody>
</table>

<h2 className="aff_comma">Benefits</h2>
        <div className="benift_a">
              <div className="benifits">
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none"><path d="M2 7.5L6.5 13L22.5 1.5" stroke="#7BAF42" stroke-width="3"></path></svg>Lifetime Cookie Tracking Increases Commissions From Returning Customers;</span>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none"><path d="M2 7.5L6.5 13L22.5 1.5" stroke="#7BAF42" stroke-width="3"></path></svg>Average Sale $80;</span>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none"><path d="M2 7.5L6.5 13L22.5 1.5" stroke="#7BAF42" stroke-width="3"></path></svg>Customer Lifetime Value Over $150 (2 Orders);</span>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none"><path d="M2 7.5L6.5 13L22.5 1.5" stroke="#7BAF42" stroke-width="3"></path></svg>The More You Earn, The More You Get! No Limits!</span>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none"><path d="M2 7.5L6.5 13L22.5 1.5" stroke="#7BAF42" stroke-width="3"></path></svg>No One Can Offer: Your Commissions Are Unaffected By Refunds Or Chargebacks!</span>
              </div>
              <div className="beniti_img">
                <img src={affiliate} />
              </div>
        </div>
        <div className="affili-sign"> 
        <div className="join_affi">
        <h2>Join Our Affiliate Program Now!</h2>
        <span>It’s free and only takes less than a minute!</span>
        <Link to="/affiliate-area">Apply Now</Link>
        </div>
        </div>
        <div className="affili-sign aff_log"> 
        <div className="join_affi">
        <h2>Login To Your Account</h2>
        <Link to="/affiliate-area">Sign In</Link>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Affiliate;
