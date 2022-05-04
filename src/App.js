import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Home from "./pages/Home.js";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/Project" element={<Project />}></Route>
          <Route exact path="/Skills" element={<Skills />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;