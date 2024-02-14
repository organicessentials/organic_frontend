import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import config from "../config";
import Alert from "./Alert"
import axios from "axios";

const LostPassword = () => {

  const [email, setEmail] = useState("")
  const [message, setMessage] = useState({})
  console.log(message);
  const sendEmail = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage({ text: `Enter Your Email`, severity: "error" });
    }else{
      try {
        const result = await axios.post(`${config}/api/auth/forgot/password`, { email: email });
  
        if (result.status === 200) {
            setMessage({ text: `${result.data.message}`, severity: "success" });
        } else {
           console.log(result);
            setMessage({ text: `${result.data.message}`, severity: "error" });
        }
    } catch (error) {
        // Handle any errors that occurred during the axios request
        console.error("Error sending email:", error);
  
        // You may want to set a specific error message for the user
        setMessage({ text: "An error occurred while sending the email", severity: "error" });
    }
    }
};


  return (
    <div>
      <div className="account_login">
        <h1>
          <FontAwesomeIcon style={{ marginTop: "6px" }} icon={faUserTie} />
          My Account
        </h1>
      </div>
     {message? <Alert text={message.text} severity={message.severity}/>:null}
      <div className="lost_password">
        <form onSubmit={sendEmail} className="lost">
          <div>
            <span style={{ fontSize: "14px", fontWeight: "600" }}>
              Lost your password? Please enter your username or email address.
              You will receive a link to create a new password via email.
            </span>
          </div>
          <div>
            <div className="form-group">
              <label>Username or email</label>
              <input  value={email} onChange={(e)=>setEmail(e.target.value)} type="text" />
            </div>
            <button className="btn_btn" type="submit">RESET PASSWORD</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LostPassword;
