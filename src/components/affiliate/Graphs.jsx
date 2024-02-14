import React, { useEffect } from "react";
import { motion } from "framer-motion";
import BarChartComponent from "./BarChartComponent"; 
import Navbar from "../affiliate/Navbar";

const Graphs = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Navbar />
        <section className="affiliates_dash">
          <div className="container_sec">
            <h3>
              <b>Affiliate Area</b>
            </h3>
            <div className="aff_links">
              <ul>{/* ... Your navigation links ... */}</ul>
            </div>
            <div className="affiliate_urls">
              <h4>Referral Graphs</h4>
              <BarChartComponent />
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Graphs;
