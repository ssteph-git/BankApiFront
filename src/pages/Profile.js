import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { infoUser } from "../lib/axios/infosUser";
import { deleteToken } from "../lib/redux/store";
import { saveUserData } from "../lib/redux/store";
// import { saveStatus, saveUserData } from "../lib/redux/store";
import { useNavigate } from "react-router-dom";
import Account from "../components/Account";
import Erreur from "./Erreur";

function Profile() {
  const dispatch = useDispatch();
  const history = useNavigate();

  let token = useSelector((state) => state.tokenSave); //token unique de l'utilisateur

  infoUser(token.token)
  .then((data) => {
    const { email, firstName, lastName } = data.body;
    dispatch(saveUserData({ email, firstName, lastName }));
  })
  .catch((error) => {
    console.log("Vous avez été déconnecté");
    console.log(error);
    dispatch(deleteToken());
  });

  let pageProfil;
  let firstName = useSelector((state) => state.dataUserSave.userData.firstName);
  let lastName = useSelector((state) => state.dataUserSave.userData.lastName);

  const [isActiveBackground, setIsActiveBackground] = useState(false);
  const [isActiveButton, setIsActiveButton] = useState(false);

  function handleClick() {
    setIsActiveBackground(!isActiveBackground);
    setIsActiveButton(!isActiveButton);
  }

  if (token.token !== null) {
    pageProfil = (
      <>
        {/* <main className="main bg-dark"> */}
        <main className={`main bg-dark ${isActiveBackground ? 'isActiveBackground' : ''}`}>
          <div className="header">
            <h1>
              Welcome back
              <br />
              {firstName} {lastName}
            </h1>
            {/* <button className="edit-button" >Edit Name</button> */}
            <button  onClick={handleClick} className="edit-button">Edit Name</button>
          </div>
          <h2 className="sr-only">Accounts</h2>
          <Account title="Argent Bank Checking (x8349)" total="$2,082.79" balance="Available Balance" click={isActiveButton}/>
          <Account title="Argent Bank Savings (x6712)" total="$10,928.42" balance="Available Balance" click={isActiveButton}/>
          <Account title="Argent Bank Credit Card (x8349)" total="$184.30" balance="Current Balance" click={isActiveButton}/>
        </main>
      </>
    );
  } else {
    pageProfil = <>Vous avez été déconnecté!</>;
    // pageProfil = (<Erreur/>);
    // history("/profilt");
  }

  return pageProfil;
}

export default Profile;
