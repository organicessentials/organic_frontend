import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../affiliate/Navbar";
import { useSelector } from "react-redux";
import axios from "axios";
import config from "../../config";
import { decodeToken } from "react-jwt";

const Statistics = () => {
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
      .get(`${config}/api/auth/statistics/${user?.id}`)
      .then((response) => {
        setData(response.data);
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
              <h4>Statistics</h4>
              <table class="aff-table-responsive stats">
                <thead>
                  <tr>
                    <th>Paid Referrals</th>
                    <th>Visits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{data.referralsPaidCount}</td>
                    <td>{data.data?.visits?.length}</td>
                  </tr>
                </tbody>
              </table>

              <table class="aff-table-responsive stats">
                <thead>
                  <tr>
                    <th>Unpaid Earnings </th>
                    <th>Paid Earnings </th>
                    <th>Commission Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>${data.referralsUnpaidTotalAmount}</td>
                    <td>${data.referralsPaidTotalAmount}</td>
                    <td>10%</td>
                  </tr>
                </tbody>
              </table>

              <table class="aff-table-responsive stats">
                <thead>
                  <tr>
                    <th>Campaign</th>
                    <th>Visits</th>
                    <th>Converted</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {data.campaignNames?.map((doc, index) => (
                        <React.Fragment key={index}>
                          {doc.campaignName}
                          {index !== data.campaignNames.length - 1 && ", "}
                        </React.Fragment>
                      ))}
                    </td>
                    <td>{data.campaignCount}</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </motion.div>
    </>
  );
};

export default Statistics;
