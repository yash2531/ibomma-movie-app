import "./App.css";
import { Routes, Route} from "react-router-dom";

import Home from "./Components/Home";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Content from "./Components/Content";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Content" element={<Content />} />
        
      </Routes>
    </div>
  );
}

export default App;
