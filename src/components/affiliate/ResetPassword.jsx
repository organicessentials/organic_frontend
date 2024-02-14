import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import config from "../../config";

const ResetPassword = () => {
  const params =   useParams()
  console.log(params);
  const navigate = useNavigate()
  const [password, setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("")
  

  const sendEmail = async(e) => {
    e.preventDefault();
    const result = await axios.put(`${config}/api/auth/create-affilate-password/${params.id}/${params.token}`,{password,confirmPassword})
    if (!password|| !confirmPassword) {
      msgs.current.show({severity:'error', summary: 'Error', detail:"Enter Your Email", life: 3000});
    }else{
      console.log(result);
      navigate("/")
    }  

    
  }
  return (
    <>
    <div className="bredcrum_org">
    <h1>Reset Password</h1>
  </div>
    <div className="container_sec">
      <div className="passwordre">
      <div className="pass_section">
    {/* <Messages ref={msgs}/> */}
      <div className="form"><h2>Reset Password</h2></div>
      <form onSubmit={sendEmail}>
      <div className="card flex justify-content-center">
      <div className="with_check">
        <label htmlFor="">New password</label>
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div  className="with_check">
        <label htmlFor="">Confirm new password</label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <div className="with_check">
        <button type="submit" className="submit_button">Save Password</button>
        </div>
      </div>
      </form>
      </div>
      </div>
    </div>
    </>
  );
};

export default ResetPassword;
