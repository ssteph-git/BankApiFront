import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Bottombar from "./components/Bottombar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";
import Error from "./pages/Error";

import { Provider } from "react-redux";
import { store } from "./lib/redux/mySlice";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Topbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route path="/profil" element={<Profile />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        <Bottombar />
      </Router>
    </Provider>
  );
}

export default App;
