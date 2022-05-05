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
          <Route path="/portfolio" element={<Home />}></Route>
          <Route exact path="/project" element={<Project />}></Route>
          <Route exact path="/skills" element={<Skills />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;