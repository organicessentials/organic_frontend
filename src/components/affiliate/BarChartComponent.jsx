import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Typography, Paper, Select, MenuItem } from "@mui/material";
import axios from "axios";
import  config from '../../config'
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { decodeToken } from "react-jwt";

// const data = [
//   {
//     month: "January",
//     unpaidEarnings:0,
//     pendingEarnings:0,
//     rejectedEarnings:2,
//     paidEarnings:0,
//   },
//   {
//     month: "February",
//     unpaidEarnings:0,
//     pendingEarnings:2,
//     rejectedEarnings: 15,
//     paidEarnings: 2,
//   },
//   {
//     month: "March",
//     unpaidEarnings: 8,
//     pendingEarnings: 70,
//     rejectedEarnings: 10,
//     paidEarnings: 10,
//   },
//   {
//     month: "April",
//     unpaidEarnings: 80,
//     pendingEarnings: 7,
//     rejectedEarnings: 10,
//     paidEarnings: 90,
//   },
//   {
//     month: "April",
//     unpaidEarnings: 80,
//     pendingEarnings: 7,
//     rejectedEarnings: 10,
//     paidEarnings: 90,
//   },
//   {
//     month: "April",
//     unpaidEarnings: 80,
//     pendingEarnings: 7,
//     rejectedEarnings: 10,
//     paidEarnings: 90,
//   },
//   {
//     month: "April",
//     unpaidEarnings: 80,
//     pendingEarnings: 7,
//     rejectedEarnings: 10,
//     paidEarnings: 90,
//   },
//   // Add data for the remaining months...
// ];

function BarChartComponent() {
  const {user:item} = useSelector((state)=>state.user)
  let user = decodeToken(item)
  const [filteredData, setFilteredData] = useState([]);

  const getData = () => {
    axios
      .get(`${config}/api/auth/bar-chart-user/${user?.id}`)
      .then((response) => {
        setFilteredData(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getData()
  }, [])
  

  return (
    <Paper elevation={3} style={{ padding: "16px" }}>
      <Typography variant="h6">Referral Earnings Over Time</Typography>
      <Select
        style={{ marginBottom: "16px" }}
      >
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="Today">Today</MenuItem>
        <MenuItem value="Yesterday">Yesterday</MenuItem>
        {/* Add menu items for other time range filters */}
      </Select>
      <LineChart width={600} height={300} data={filteredData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="unpaidEarnings"
          stroke="#8884d8"
          name="Unpaid Earnings"
        />
        <Line
          type="monotone"
          dataKey="pendingEarnings"
          stroke="#82ca9d"
          name="Pending Earnings"
        />
        <Line
          type="monotone"
          dataKey="rejectedEarnings"
          stroke="#ff7f0e"
          name="Rejected Earnings"
        />
        <Line
          type="monotone"
          dataKey="paidEarnings"
          stroke="#ff00ff"
          name="Paid Earnings"
        />
      </LineChart>
    </Paper>
  );
}

export default BarChartComponent;
