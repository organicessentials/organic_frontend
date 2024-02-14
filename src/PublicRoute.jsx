import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {decodeToken } from "react-jwt";


const USER_TYPES = {
  PUBLIC: "Public User",
  NORMAL_USER: "Normal User",
  ADMIN_USER: "Admin User",
};

const PublicRoute = ({ children }) => {
 
  return <>{children}</>;
};

function UserRoute({ children }) {
  
  const { user:item } = useSelector((state) => state.user)
  const user = decodeToken(item)
   
  if (
    user?.role === USER_TYPES.NORMAL_USER ||
    user?.role === USER_TYPES.ADMIN_USER
  ) {
    return <>{children}</>;
  } else {
    return <Navigate to="/" />;
  }
}

function AffilateRoute({ children }) {

  const { user:item } = useSelector((state) => state.user)
  const user = decodeToken(item)
  const isActive = user?.status === "Active";
  if (user?.role === USER_TYPES.ADMIN_USER && isActive ) {
    return <>{children}</>;
  } else if (user?.role === USER_TYPES.ADMIN_USER) {
    return (
      <div style={{textAlign:"center",marginTop:"24px",marginBottom:"24px"}}>
        <h1>Your Affiliate Account Is Not Activated.</h1>
      </div>
    );
  } else {
    return <Navigate to="/" />
  }
}

export { PublicRoute, UserRoute, AffilateRoute };
