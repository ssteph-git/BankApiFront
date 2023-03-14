import { useNavigate } from "react-router-dom";

import { submitForm } from "../lib/axios/infosUser";
import { infoToken } from "../lib/axios/infosUser";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { saveFormData, saveToken } from "../lib/redux/store";



const Login = () => {
  const dispatch = useDispatch();
  let form = useSelector((state) => state.formSave);
  let token = useSelector((state) => state.tokenSave);

  const history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    submitForm(form).then((data) => {

      token = data.body.token;
      if (data.status == 200) {
        history("/profil");

        // infoToken(form, token).then((data) => {
        // });

        dispatch(saveFormData(form));
        dispatch(saveToken(token));
      }
    })
    .catch(error => {
      console.log("l'identifiant ou le mot de passe, est incorrect");
      console.log(error);
    });
  };
  let typingForm;
  const handleChange = (event) => {
    typingForm = { ...typingForm, [event.target.name]: event.target.value };
    form = typingForm;
  };

  return (
    <main className="main bg-dark">
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
    </main>
  );
};

export default Login;
