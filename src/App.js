import "./App.css";
import { Routes, Route} from "react-router-dom";

import HomeMain from "./Components/HomeMain";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";
import About from "./Components/About";
import {Bug} from "./Components/Bug";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Bug" element={<Bug/>} />
        <Route path="/Contact" element={<Contact/>} />
        
      </Routes>
    </div>
  );
}

export default App;
