import React, { useRef, useState } from "react";
import { Checkbox } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import config from "../../config";
import { loginUser, registerUser } from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { decodeToken } from "react-jwt";
import Alert from "../Alert";
import {Helmet} from "react-helmet";
import ReCAPTCHA from "react-google-recaptcha";

const Register = () => {

  const { user:item } = useSelector((state) => state.user);
  let user = decodeToken(item)
  const navigate = useNavigate();
  const [userName,setUserName] = useState("")
  const [password,setPassword] = useState("")
  const [message,setMessage] = useState("")
  const dispatch = useDispatch();
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const captchaRef = useRef(null);

  const [data, setData] = useState({
    name: "",
    userName: "",
    email: "",
    paymentEmail: "",
    note: "",
    webUrl: "",
    domain: "https://organicessentialshub.com",
  });
  
  useEffect(() => {
    if (user?.role === "Admin User") {
      navigate('/affiliate-urls/')
    }else{
      navigate('/affiliate-area')
    }
  }, [user])
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);


  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    if (!isCaptchaVerified) {
      setMessage({text:"Please solve Captcha correctly",severity:"error"});
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      return;
    }
    axios.post(`${config}/api/auth/login-affilate-user`,{userName,password})
    .then((res)=>{
      dispatch(loginUser(res.data.accessToken))
    }).catch((err)=>{
      setMessage({text:err.response.data.message,severity:"error"})
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    })
  }

  const register = (e) => {
    e.preventDefault();
    if (!isCaptchaVerified) {
      setMessage({text:"Please solve Captcha correctly",severity:"error"});
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      return;
    }
    axios
      .post(`${config}/api/auth/create-affilate-user`, data)
      .then((res) => {
        console.log(res);
        dispatch(registerUser(res.data.accessToken));
        navigate("/affiliate-urls/")
      })
      .catch((err) => {
        setMessage({text:err.response.data.message,severity:"error"})
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      });
  };

  //let key = "6LcYAOcoAAAAANJ33iaFV4o1B-h36tVQtFlnqnZt"

  //  live key
  let key = "6LdywEYpAAAAAJheBZaa9VjoivH3WF92fPDx07XK"
  
  const handleCaptchaVerify = (response) => {
    if (response) {
      setIsCaptchaVerified(true);
    }
  };


  return (
    <>
      <Helmet>
        <title>Affiliate Area - Organic Essentials Hub</title>
        <meta name="description" content="" />
    </Helmet>
     <div className="bredcrum_org">
    <h1>Affiliate Area</h1>
  </div>
    <Alert text={message.text} severity={message.severity}/>
    <div className="container_sec">
      <div className="row_affili">
        <form onSubmit={register} className="affili_reg">
          <h5>Register a new affiliate account</h5>
          <div className="card_con flex justify-content-center">
            <div className="feilds_s with_check ">
              <label htmlFor="">Your Name</label>
              <input required
                name="name"
                value={data.name}
                onChange={handleChange}
              />
            </div>
            <div className="feilds_s with_check ">
              <label htmlFor="">Username</label>
              <input required
                name="userName"
                value={data.userName}
                onChange={handleChange}
              />
            </div>
            <div className="feilds_s with_check ">
              <label htmlFor="">Account Email</label>
              <input required
                name="email"
                value={data.email}
                onChange={handleChange}
              />
            </div>
            <div className="feilds_s with_check ">
              <label htmlFor="">Payment Email</label>
              <input required
                name="paymentEmail"
                value={data.paymentEmail}
                onChange={handleChange}
              />
            </div>
            <div className="feilds_s with_check ">
              <label htmlFor="">Website URL</label>
              <input required
                name="webUrl"
                value={data.webUrl}
                onChange={handleChange}
              />
            </div>
            <div className="feilds_s with_check ">
              <label htmlFor="">How will you promote us?</label>
              <textarea 
                name="note"
                value={data.note}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="feilds_s with_check ">
            <ReCAPTCHA sitekey={key}
           ref={captchaRef}
            onChange={handleCaptchaVerify}
           />
            </div>
            <div className="feilds_s with_check ">
              <p></p>
              <button  type="submit" className="add_cart-account">
                Register
              </button>
              <p></p>
            </div>
          </div>
        </form>
        <form onSubmit={login} className="affili_reg">
          <h5>Log into your account</h5>
          <div className="card_con flex justify-content-center">
            <div className="feilds_s with_check ">
              <label htmlFor="">Username</label>
              <input required name="user" value={userName} onChange={(e)=>setUserName(e.target.value)} />
            </div>
            <div className="feilds_s with_check ">
              <label htmlFor="">Password</label>
              <input required
                name="password"
                value={password}
                type="password"
                onChange={(e)=>setPassword(e.target.value)}
              />
              <p></p>
            </div>
            <div>
              <Checkbox name="remember" value="remember" />
              <span>Remember Me</span>
            </div>
            <ReCAPTCHA sitekey={key}
           ref={captchaRef}
            onChange={handleCaptchaVerify}
           />
            <div className="feilds_s">
              <p></p>
              <button  type="submit" className="add_cart-account">
                Log In
              </button>
              <p></p>
            </div>

            <div className="feilds_s">
              <Link to="/my-account/lost-password/aff">Lost your password?</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Register;
