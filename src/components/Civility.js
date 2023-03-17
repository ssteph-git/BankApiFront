import { useSelector, useDispatch } from "react-redux";
import { isActiveTurn } from "../lib/redux/store";
import { changeInfoUser } from "../lib/axios/infosUser";

const Civility = function (props) {
  const dispatch = useDispatch();
  let firstName = useSelector((state) => state.dataUserSave.userData.firstName);
  let lastName = useSelector((state) => state.dataUserSave.userData.lastName);
  let isActive = useSelector((state) => state.turnIsActive.isActive); //permet de savoir si on à appuyé sur le bouton "edit name" ou non: pour afficher le composant avec les informations d'editions ou non
  let token = useSelector((state) => state.tokenSave.token);

  function handleClick() {
    dispatch(isActiveTurn()); //Permet de charger le formulaire d'edition et sa bonne couleur, ou rechanger la couleur de notre page et notre composant "civility": car on quitte le formulaire d'edition
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    changeInfoUser(formEdit, token)
      .then((data) => {
        dispatch(isActiveTurn()); //Permet de charger le composant "civility": si isActive == false (et donc de quitter l'edition du formulaire)
      })
      .catch((error) => {
        console.log(
          "Problème reçu sur l'edition du nom et prénom de l'utilisateur"
        );
        console.log(error);
      });
  };

  let typingForm;
  let formEdit = { firstName: "", lastName: "" };
  const handleChange = (event) => {
    //permet de récupérer les informations saisies dans le formulaire d'edition
    typingForm = { ...typingForm, [event.target.name]: event.target.value };
    formEdit = typingForm;
  };

  let componentCivility;
  if (isActive == false) {
    componentCivility = //formulaire d'indication du nom et prénom: chargé
      (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstName} {lastName}
          </h1>
          <button onClick={handleClick} className="edit-button">
            Edit Name
          </button>
        </div>
      );
  } else {
    //formulaire d'edition chargé
    componentCivility = (
      <div className="header">
        <h1 className="welcome">Welcome back</h1>
        <form onSubmit={handleSubmit} id="editForm">
          <div className="editButton">
            <input
              type="text"
              id="editInput"
              name="firstName"
              placeholder={firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              id="editInput"
              name="lastName"
              placeholder={lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="validateButton">
            <button className="buttonValidate" form="editForm">
              Save
            </button>
            <button onClick={handleClick} className="buttonValidate">
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }

  return componentCivility;
};
export default Civility;
