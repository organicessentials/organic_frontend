import React from "react";
import { Link, useNavigate,useLocation } from "react-router-dom";
import { logout } from "../../features/userSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
    
  }

  return (
    <>
     <div className="bredcrum_org">
    <h1>Affiliate Area</h1>
  </div>
      <section className="affiliates_dash">
        <div className="container_sec">
         
          <div class="aff_links">
            <ul>
              <li>
                <Link to="/affiliate-urls" className={location.pathname === "/affiliate-urls" ? "active_" : ""}>
                  Affiliate URLs
                </Link>
              </li>
              <li>
                <Link to="/creatives" className={location.pathname === "/creatives" ? "active_" : ""}>Creatives</Link>
              </li>
              <li>
                <Link to="/statistics" className={location.pathname === "/statistics" ? "active_" : ""}>Statistics</Link>
              </li>
              <li>
                <Link to="/graphs" className={location.pathname === "/graphs" ? "active_" : ""}>Graphs</Link>
              </li>
              <li>
                <Link to="/referrals" className={location.pathname === "/referrals" ? "active_" : ""}>Referrals</Link>
              </li>
              <li>
                <Link to="/payouts" className={location.pathname === "/payouts" ? "active_" : ""}>Payouts</Link>
              </li>
              <li>
                <Link to="/visits" className={location.pathname === "/visits" ? "active_" : ""}>Visits</Link>
              </li>
              <li>
                <Link to="/settings" className={location.pathname === "/settings" ? "active_" : ""}>Settings</Link>
              </li>
              <li>
                <Link onClick={handleLogout}> Log out</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
