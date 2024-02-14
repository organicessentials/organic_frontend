import React,{useEffect, useState} from 'react'
import Dashboard from './Dashboard';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useSelector } from 'react-redux';
import config from '../../config';
import { decodeToken } from "react-jwt";

import {Helmet} from "react-helmet";
axios.defaults.withCredentials = true


const Account = () => {
  const [data,setData] = useState([])
 const [password,setPassword] = useState("")
 const [newPassword,setNewPassword] = useState("")
 const [comPassword,setComPassword] = useState("")
  const {user:item} = useSelector((state)=>state.user)
  let user = decodeToken(item)
 
  
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

 
  useEffect(() => {
    const getData =async () => {
     try {
      const result = await axios.get(`${config}/api/auth/user/${user.id}`)
       setData(result.data)
     } catch (error) {
      console.log(error);
     }
    }
    getData()
  }, [user?.id])
  
 
 const changePassword = async () => {
  try {
    if (newPassword !== comPassword) {
      throw new Error("Confirm password not same");
    }

    const result = await axios.post(
      `${config}/api/auth/change/password`,
      {
        id: user.id,
        firstName: data.firstName,
        lastName: data.lastName,
        userName:data.userName,
        email: data.email,
        password: password,
        newPassword: newPassword
      }
    );

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};


  return (
    <div>
        <Helmet>
        <title>My Account - Organic Essentials Hub</title>
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
                <div className="with_check">
                  <label htmlFor="">First Name *</label>
                  <br />
                  <input value={data.firstName} onChange={(e) => setData({ ...data, firstName: e.target.value })}  className="billing_input" />
                </div>
                <div className="with_check">
                  <label htmlFor="">Last Name *</label>
                  <br />
                  <input value={data.lastName} onChange={(e) => setData({ ...data, lastName: e.target.value })}  className="billing_input" />
                </div>
             
                <div className="with_check">
              <label htmlFor="">Display name *</label>
              <input value={data.userName} onChange={(e) => setData({ ...data, userName: e.target.value })}  className="billing_input" />
              </div>
              <div className="with_check">
              <label htmlFor="">Email address *</label>
              <input value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} className="billing_input" />
             </div>
              <h3 style={{marginTop:"12px"}}>Password change</h3>
              <hr />
              <div className="with_check">
              <label htmlFor="">Current password (leave blank to leave unchanged)</label>
              <input onChange={(e)=>setPassword(e.target.value)}  className="billing_input" />
              </div>
              <div className="with_check">
              <label htmlFor="">New password (leave blank to leave unchanged)</label>
              <input onChange={(e)=>setNewPassword(e.target.value)}  className="billing_input" />
              </div>
              <div className="with_check">
              <label htmlFor="">Confirm new password</label>
              <input onChange={(e)=>setComPassword(e.target.value)}  className="billing_input" />
              </div>
              <div className="with_check">
              <button onClick={changePassword} className="addres_s">
                Save changes
              </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Account;