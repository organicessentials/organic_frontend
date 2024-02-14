import React, { useState, useRef } from "react";
import axios from "axios";
import config from "../../config";

const LostPassword = () => {
  const [email, setEmail] = useState("");
  
  
  const sendEmail = async(e) => {
    e.preventDefault();
    try {
      const result = await axios.put(`${config}/api/auth/reset-user-password`,{email:email})
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    
    
  }
  return (
    <div className="container_sec">
    <div className="passwordre">
    <div className="pass_section">
      <div className="form-ti"><h2>My account</h2>
      <p>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</p>
      </div>
      <form onSubmit={sendEmail}>
      <div className="card flex justify-content-center">
      <div className="with_check">
        <label htmlFor="">Username or Email Address</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <label htmlFor=""></label>
        <button type="submit" className="submit_button">Reset Password</button>
      </div>
      </form>
    </div> </div> </div>
  );
};

export default LostPassword;
