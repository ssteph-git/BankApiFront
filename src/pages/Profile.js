import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { infoToken } from "../lib/axios/infosUser";
import { saveStatus } from "../lib/redux/store";

function Profile() {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.formSave); //données du formulaire saisie par l'utilisateur
  const token = useSelector((state) => state.tokenSave); //token unique de l'utilisateur

  infoToken(form, token.token).then((data) => {
    dispatch(saveStatus(data.status));
  }).catch(error => {
    console.log("le token n'est pas valide");
    console.log(error);
  });

  const status = useSelector((state) => state.statusSave);

  let pageProfil;
  if (status.status == 200) {
    //si le statut est à 200: il est valide, s'il est 400: il ne l'est pas
    pageProfil = (
      <>
        page profil
        <p>{form.formData.email}</p>
      </>
    );
  } else {
    pageProfil = <>Vous avez été déconnecté!</>;
  }

  return <>{pageProfil};</>;
}

export default Profile;
