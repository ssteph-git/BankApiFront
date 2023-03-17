import { useNavigate } from "react-router-dom";
import { submitFormUser } from "../lib/axios/infosUser";
import { useDispatch } from "react-redux";
import { saveToken } from "../lib/redux/store";

const Login = () => {
  const dispatch = useDispatch();
  let form = { email: "", password: "" };
  const history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    submitFormUser(form)
      .then((data) => {
        let token = data.body.token;
        dispatch(saveToken(token));
        history("/profil");
      })
      .catch((error) => {
        console.log("l'identifiant ou le mot de passe, est incorrect");
        console.log(error);
      });
  };

  let typingForm;
  const handleChange = (event) => {//Récupérations des données tapés dans le formulaire
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
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              required
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
