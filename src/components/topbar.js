import { NavLink } from "react-router-dom";
// import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteToken, deleteUserData, isActiveFalse } from "../lib/redux/store";

const Topbar = function (props) {
  const dispatch = useDispatch();
  let token = useSelector((state) => state.tokenSave); //token unique de l'utilisateur
  let firstName = useSelector((state) => state.dataUserSave.userData.firstName);
  let isActive = useSelector((state) => state.turnIsActive.isActive);

  function handleClick() {//déconnexion
    dispatch(deleteToken());
    dispatch(deleteUserData());
    dispatch(isActiveFalse());
  }

  let iconUser;
  if (isActive == false) {
    iconUser = <i className="fa fa-user-circle"></i>;
  } else {
    iconUser = <i className="fa fa-user-circle fa-grey"></i>;
  }

  let topbar;
  if (token.token !== null) {
    topbar = (
      <>
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
              {iconUser}
              &nbsp;{firstName}
            </NavLink>
            <NavLink to="/" className="main-nav-item" onClick={handleClick}>
              <i className="fa-solid fa-right-from-bracket"></i>
              Sign Out
            </NavLink>
          </div>
        </nav>
      </>
    );
  } else {
    topbar = (
      <>
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
            >
              <i className="fa-solid fa-right-from-bracket"></i>
              Sign In
            </NavLink>
          </div>
        </nav>
      </>
    );
  }

  return topbar;
};
export default Topbar;
