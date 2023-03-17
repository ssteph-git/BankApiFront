import { useSelector, useDispatch } from "react-redux";
import { infoUser } from "../lib/axios/infosUser";
import { deleteToken,saveUserData } from "../lib/redux/store";
import Account from "../components/Account";
import Civility from "../components/Civility";
import Logout from "./Logout";

function Profile() {
  const dispatch = useDispatch();
  let token = useSelector((state) => state.tokenSave); //token unique de l'utilisateur

  infoUser(token.token)//recherches des infos de l'utilisateur: dans la bdd
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
  let isActive = useSelector((state) => state.turnIsActive.isActive); //isActive permet de changer les couleurs de plusieurs elements de la page profil: si l'on appuis sur le bouton "Edit Name" (ainsi: on ajoute une propriété "active" à l'element que nous voulons changer: dans le css: qui changera la couleur)

  if (token.token !== null) {
    pageProfil = (
      <>
        <main className={`main bg-dark ${isActive ? 'isActiveBackground' : ''}`}>
          <Civility/>
          <h2 className="sr-only">Accounts</h2>
          <Account title="Argent Bank Checking (x8349)" total="$2,082.79" balance="Available Balance" click={isActive}/>
          <Account title="Argent Bank Savings (x6712)" total="$10,928.42" balance="Available Balance" click={isActive}/>
          <Account title="Argent Bank Credit Card (x8349)" total="$184.30" balance="Current Balance" click={isActive}/>
        </main>
      </>
    );
  } else {
    pageProfil = (<Logout/>);
  }

  return pageProfil;
}

export default Profile;
