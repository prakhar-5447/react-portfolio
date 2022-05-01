import React from "react";
import "../style/navbar.css";

function navbar() {
  return (
    <div className="py-6 text-xl mb-10">
      <ul className="list-none flex text-white justify-center">
        <li className="mx-12"><a href="/" className="">HOME</a></li>
        <li className="mx-12"><a href="/" className="">EDUCATION</a></li>
        <li className="mx-12"><a href="/" className="">SKILLS</a></li>
        <li className="mx-12"><a href="/" className="">WORK</a></li>
        <li className="mx-12"><a href="/" className="">BLOGS</a></li>
      </ul>
    </div>
  );
}

export default navbar;
