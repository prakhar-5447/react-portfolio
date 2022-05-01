import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Works from "./pages/Works";
import Home from "./pages/Home.js";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/Works" element={<Works />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
