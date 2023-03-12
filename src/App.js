import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Topbar from './components/topbar';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (

    <Router>
      <Topbar />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          {/* <Route path="/user/:id" element={<Profil/>}></Route>
    <Route path="/parameters" element={<Reglage/>}></Route>
    <Route path="/community" element={<Communaute/>}></Route>
    <Route path="*" element={<Erreur/>}></Route> */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
