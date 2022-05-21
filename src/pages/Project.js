import React from "react";
import Card from "./Card";
import {
  ToDo,
  Firstmy,
  AddressBook,
  COE_Bot,
  JuicyNYummy,
} from "../images/images.js";

function Project() {
  let projects = [
    {
      title: "Address Book",
      desc: "This is address book which allows the user to manage a list of contact information",
      tech: ["HTML", "CSS", "JAVASCRIPT", "PHP", "MYSQL"],
      link: "https://github.com/prakhar-5447/Address-Book",
      host: "",
      image: AddressBook,
      tag: ["#PERSONAL", "#WEB"],
    },
    {
      title: "Discord Bot",
      desc: "Server Moderation bot help to make server secure and away from threats",
      tech: ["TYPESCRIPT"],
      link: "https://github.com/prakhar-5447/PROJECT-C",
      host: "",
      image: Firstmy,
      tag: ["#PERSONAL"],
    },
    {
      title: "ToDo APP",
      desc: "ToDo is a kind of web app that generally used to maintain our day-to-day tasks or list everything that we have to do.",
      tech: ["HTML", "CSS", "TYPESCRIPT", "ANGULAR"],
      link: "https://github.com/prakhar-5447/angular-project",
      host: "",
      image: ToDo,
      tag: ["#WEB"],
    },
    {
      title: "Firstmy",
      desc: "FirstMy is dedicated to preventing child abuse by strengthening, equipping, and restoring children and families in crisis. One Life at a Time.",
      tech: ["HTML", "CSS", "JAVASCRIPT", "MERN"],
      link: "https://github.com/prakhar-5447/firstmy",
      host: "",
      image: COE_Bot,
      tag: ["#TEAM", "#WEB"],
    },
    {
      title: "Juicy-N-Yummy",
      desc: "Juicy-N-Yummy is an platform for restaurant aggregator and food delivery. It provides information, menus and user-reviews of restaurants.",
      tech: ["HTML", "CSS", "TYPESCRIPT", "MEAN"],
      link: "https://github.com/prakhar-5447/Juicy-N-Yummy",
      host: "",
      image: JuicyNYummy,
      tag: ["#TEAM", "#WEB"],
    },
  ];

  return (
    <div className="container flex m-auto flex-wrap justify-evenly">
      {projects.map((e) => (
        <Card key={e.title} project={e} />
      ))}
    </div>
  );
}

export default Project;
