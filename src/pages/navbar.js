import React from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";

function Navbar() {
  const menuItems = [
    { name: `Home`, path: `/` },
    { name: `Education`, path: `/Education` },
    { name: `Skills`, path: `/Skills` },
    { name: `Work`, path: `/Work` }
  ];
  return (
    <div className="py-6 text-xl mb-10">
      <ul className="list-none flex text-white justify-center">
        {menuItems.map(e => <li key={e.name} className="mx-12"><Link to={e.path} className="">{e.name}</Link></li>)}
      </ul>
    </div>
  );
}

export default Navbar;
