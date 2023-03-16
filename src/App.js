import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./components/topbar";
import Bottombar from "./components/bottombar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Erreur from "./pages/Erreur";

import { Provider } from "react-redux";
import store from "./lib/redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Topbar />
        {/* <main> */}
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route path="/profil" element={<Profile />}></Route>
            <Route path="*" element={<Erreur />}></Route>
          </Routes>
        {/* </main> */}
        <Bottombar />
      </Router>
    </Provider>
  );
}

export default App;
