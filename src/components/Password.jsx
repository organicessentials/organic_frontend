import React, { useState, useRef, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import config from "../config";

const Password = () => {
  const { id, token } = useParams();
  

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);


  const captchaRef = useRef(null);
  const [ingredients, setIngredients] = useState([]);

  const onSubmit = async (data,e) => {
    e.preventDefault();
    const result  = await axios.put(`${config}/api/auth/reset/password/${id}/${token}`,{password:data.password,confirm_password:data.confirm_password});
    if(result.status===200){
      console.log(result);
    }else{
      console.log(error);
    }
  };

  const onIngredientsChange = (e) => {
    let _ingredients = [...ingredients];

    if (e.checked) _ingredients.push(e.value);
    else _ingredients.splice(_ingredients.indexOf(e.value), 1);

    setIngredients(_ingredients);
  };

  return (
      <>
        <div className="lost_password">
        <h2>Change Password</h2>
      </div>
      <form className="lost_password" onSubmit={onSubmit}>
        <div className="card flex justify-content-center">
          <label htmlFor="">Enter New Password</label>
          <input
            type="password"
            
          />
          
          <label htmlFor="">Enter Confirm Password </label>
          <input
            type="password"
            
          />
          
          <label htmlFor=""></label>
          {/* <ReCAPTCHA sitekey="" ref={captchaRef} /> */}
          <div className="card flex flex-wrap justify-content-center gap-3">
            <div className="flex align-items-center">
              <checked
                inputId="ingredient1"
                name="remember"
                value="remember"
                onChange={onIngredientsChange}
                checked={ingredients.includes("remember")}
              />
              {/* <span
                style={{ marginLeft: "8px" }}
                htmlFor="ingredient1"
                className="ml-2"
              >
                Remember Me
              </span> */}
            </div>
          </div>
          <button type="submit" className="submit_button">
            Submit
          </button>
          {/* <Link to="/login">Register</Link> */}
          <Link to="/login">Login Account</Link>
        </div>
      </form>
      </>
    
  );
};

export default Password;
