import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../affiliate/Navbar";
import { useSelector } from "react-redux";
import axios from "axios";
import config from "../../config";
import moment from "moment";
import { decodeToken } from "react-jwt";

const Referrals = () => {
  const { user:item } = useSelector((state) => state.user);
  let user = decodeToken(item)
  const [data,setData] = useState([])

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
              <h4>Referrals</h4>
              <table class="aff-table-responsive">
                <thead>
                  <tr>
                    <th class="referral-amount">Reference</th>
                    <th class="referral-amount">Amount</th>
                    <th class="referral-description">Description</th>
                    <th class="referral-status">Status</th>
                    <th class="referral-date">Date</th>
                  </tr>
                </thead>

                <tbody>
                  {data?.referrals?.map((doc)=>(
                    <tr>
                    <td class="referral-amount">{doc._id}</td>
                    <td class="referral-amount">${doc.amount}</td>
                    <td class="referral-description">{doc.description}</td>
                    <td class="referral-status">{doc.status}</td>
                    <td>{moment(doc.createAt).format('MMMM Do YYYY, h:mm:ss a')}</td>
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

export default Referrals;
