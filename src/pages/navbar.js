import React from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";

function Navbar() {
  const menuItems = [
    { name: `HOME`, path: `/porfolio` },
    { name: `SKILLS`, path: `/skills` },
    { name: `PROJECT`, path: `/project` }
  ];
  return (
    <div className="py-6 mb-6">
      <ul className="list-none flex text-white justify-center">
        {menuItems.map(e => <li key={e.name} className="mx-12"><Link to={e.path} className="">{e.name}</Link></li>)}
      </ul>
    </div>
  );
}

export default Navbar;
