import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../affiliate/Navbar";
import axios from "axios";
import { useSelector } from "react-redux";
import config from "../../config";
import Toast from "../Toast";
import { decodeToken } from "react-jwt";

const Settings = () => {
  const [data, setData] = useState({
    paymentEmail: "",
  });
  console.log(data);
  const {user:item} = useSelector((state) => state.user);
  let user = decodeToken(item)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const getData = () => {
    axios
      .get(`${config}/api/auth/show/affilate-user/${user?.id}`)
      .then((response) => {
        setData(response.data.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getData();
  }, [user?.id]);

  const EmailUpdate = async (e) => {
    e.preventDefault();
    try {
      Toast({title:"Email Updated",type:"success"})
      const result = await axios.put(
        `${config}/api/auth/payment-email-update/${user.id}`,
        data.paymentEmail
      );
    } catch (error) {
      Toast({title:"Failed",type:"error"})
      console.log(error);
    }
  };

  return (
    <>
    
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Navbar />
        <div className="container_sec">
          <section className="affiliates_dash">
            <div className="affiliate_urls">
              <h4>Profile Settings</h4>
              <div className="affili_form">
                <form className="aff_genarte_form" onSubmit={EmailUpdate}>
                  <div></div>
                  <div class="affi_form">
                    <span>Your Payment Email </span>
                    <input
                      onChange={(e) => setData(e.target.value)}
                      value={data.paymentEmail}
                      type="email"
                    />
                  </div>

                  <div class="feilds_s">
                    <button type="submit" className="submit_button-aff">
                      Save Profile Settings
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </>
  );
};

export default Settings;
