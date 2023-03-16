import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveUserData } from "../lib/redux/store";
import { infoUser } from "../lib/axios/infosUser";
import {
  deleteToken,
  deleteStatus,
  deleteUserData,
  emptyFormData,
} from "../lib/redux/store";


const Topbar = function (props) {
  const dispatch = useDispatch();
  let token = useSelector((state) => state.tokenSave); //token unique de l'utilisateur

  let firstName = useSelector((state) => state.dataUserSave.userData.firstName);

  function handleClick() {
      dispatch(deleteToken());
      dispatch(deleteUserData());
  }

  let topbar;
  if (token.token !== null) {
    topbar = (<>
      <nav className="main-nav">
        <NavLink to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src="/assets/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
        <NavLink to="/profil" className="main-nav-item">
        <i className="fa fa-user-circle"></i>
       &nbsp;{firstName}
      </NavLink>
        <NavLink
            to="/"
            className="main-nav-item"
            onClick={handleClick}
          >
            <i className="fa-solid fa-right-from-bracket"></i>
            Sign Out
          </NavLink> 
        </div>
      </nav>
    </>)}else{
      topbar = (<>
      <nav className="main-nav">
        <NavLink to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src="/assets/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
        <NavLink
            to="/login"
            className="main-nav-item"
            // onClick={handleClick}
          >
            <i className="fa-solid fa-right-from-bracket"></i>
            Sign In
          </NavLink> 
          {/* <NavLink
            to={homepath}
            className="main-nav-item"
            onClick={handleClick}
          >
            {icon}
            {sign}
          </NavLink> */}
          {/* {token===null?(<div>déconnecté</div>):(<div>connecté</div>)} */}
        </div>
      </nav>
    </>)
    }
  

  return (topbar);
};
export default Topbar;
