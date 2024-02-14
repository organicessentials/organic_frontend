import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../affiliate/Navbar";
import { useSelector } from "react-redux";
import axios from "axios";
import config from "../../config";
import moment from "moment";
import { decodeToken } from "react-jwt";


const Payouts = () => {

  const { user:item } = useSelector((state) => state.user);
  let user = decodeToken(item)
  const [data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const getData = () => {
    axios
      .get(`${config}/api/auth/show-custom-link/${user?.id}`)
      .then((response) => {
        console.log(response);
        setData(response.data); // Access the data property of the response.
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getData();
  }, [user?.id]);

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
              <h4>Referral Payouts</h4>
              <table class="aff-table-responsive">
                <thead>
                  <tr>
                    <th class="payout-date">Date</th>
                    <th class="payout-amount">Amount</th>
                    <th class="payout-method">Payout Method</th>
                    <th class="payout-status">Status</th>
                  </tr>
                </thead>

                <tbody>
                {data?.referrals?.filter((doc)=>doc.status==="Paid")
                .map((doc)=>(
                    <tr>
                    <td>{moment(doc.createAt).format('MMMM Do YYYY, h:mm:ss a')}</td>
                    <td class="referral-amount">${doc.amount}</td>
                    <td class="referral-description">{doc.payoutMethod}</td>
                    <td class="referral-status">{doc.status}</td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </motion.div>
    </>
  );
};

export default Payouts;
