import React from "react";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";

import {Helmet} from "react-helmet";
const Address = () => {
  
  const address = [{id:"billing",name:"Billing address",title:"You have not set up this type of address yet."},
  {id:"shipping",name:"Shipping address",title:"You have not set up this type of address yet."}]
  return (
    <div>
      <Helmet>
        <title>Address - Organic Essentials Hub</title>
        <meta name="description" content="" />
    </Helmet>
       <div className="bredcrum_org">
    <h1>My Account</h1>
  </div>
      <div className="my_account">
      <div className="container_sec">
        <div className="row_account">
          <div className="col-lg-4">
            <Dashboard />
          </div>
          <div className="col-lg-8">
            <div className="div">
              <span>
                The following addresses will be used on the checkout page by
                default.
              </span>
              <div className="addres">
              {address.map((doc)=>(
                <table style={{marginRight:"16px"}}>
                <tr>
                  <td style={{display:"flex",justifyContent:"space-between"}}><h5>{doc.name}</h5><Link to={`/my-account/edit-address/${doc.id}`}>Add</Link></td>
                </tr>
                <tr>
                  <td><h6>{doc.title}</h6></td>
                </tr>
              </table>
              ))}
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
