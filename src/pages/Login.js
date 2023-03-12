import axios from "axios";
import Profile from "./Profile";

import React, { useState } from "react";

import { useNavigate } from 'react-router-dom';
import { connect } from "react-redux";

import  submitForm  from "../lib/actions/submitForm";


const Login = () => {
  const history = useNavigate();
  const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("formData", formData);
    submitForm(formData);


    submitForm(formData).then(activity => {
      console.log("Activity", activity);
      console.log("Token", activity.body.token);
      console.log("OK",activity.status);
      if(activity.status == 200){

        history('/profil');
      }
  })

  }

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }


  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit} >
        {/* <form> */}
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="email" onChange={handleChange}/>
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={handleChange}/>
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" onChange={handleChange}/>
          <label htmlFor="remember-me">Remember me</label>
        </div>
        {/* PLACEHOLDER DUE TO STATIC SITE */}
        {/* <a href="./user.html" className="sign-in-button">Sign In</a> */}
        {/* SHOULD BE THE BUTTON BELOW */}
        <button className="sign-in-button">Sign In</button>
      </form>
    </section>
  );
};

export default Login;
// export default connect(null, { submitForm })(Login);
