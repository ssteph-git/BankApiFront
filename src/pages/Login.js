import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import {submitForm} from "../lib/axios/infosUser";
import { infoToken } from "../lib/axios/infosUser";

import { useDispatch } from 'react-redux';
// import { saveFormData } from '../lib/redux/formSlice';
import { saveFormData } from "../lib/redux/store";

import { useSelector } from "react-redux";


const Login = () => {
  const dispatch = useDispatch();
let form = useSelector(state => state.formSave)
  const history = useNavigate();
  // const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    submitForm(form).then((data) => {
      let token = data.body.token;
      if (data.status == 200) {
        history('/profil');
        infoToken(form, token);

        dispatch(saveFormData(form));
      }
    });

  };
  let typingForm;;
  const handleChange = (event) => {
    typingForm= { ...typingForm,[event.target.name]: event.target.value };
    form = typingForm;
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" onChange={handleChange} />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button">Sign In</button>
      </form>
    </section>

  );
};

export default Login;
