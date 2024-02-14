import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../affiliate/Navbar";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import config from "../../config";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "react-jwt";

const Visits = () => {

  const { user:item } = useSelector((state) => state.user);
  let user = decodeToken(item)
  const [data, setData] = useState([]);
  const navigate = useNavigate()

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
              <h4>Referral URL Visits</h4>
              <table class="aff-table-responsive">
                <thead>
                  <tr>
                    <th class="visit-url">URL</th>
                    <th class="referring-url">Referring URL</th>
                    <th class="visit-date">Date</th>
                  </tr>
                </thead>

                <tbody>
                   {data?.visits?.map((doc)=>(
                    <tr>
                    <td class="visit-url">
                      <a href={`${doc.pageUrl}`}>{doc.pageUrl}</a>
                    </td>
                    <td class="referring-url">{doc.referringUrl?doc.referringUrl:"Direct traffic"}</td>
                    <td class="visit-date">{moment(doc.createAt).format("L")}</td>
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

export default Visits;
