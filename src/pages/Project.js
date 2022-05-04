import React from "react";
import Card from "./Card"

function Project() {
  let projects = [
    {
      title: "Address book",
      desc: "This is address book which allows the user to manage a list of contact information",
      tech: ["HTML", "CSS", "JAVASCRIPT", "PHP", "MYSQL"],
      link: "https://github.com/prakhar-5447",
      host: "",
      image: "https://raw.githubusercontent.com/prakhar-5447/firstmy/master/src/images/bg3.jpg",
      tag: ["#PERSONAL"],
    },
    {
      title: "firstmy book",
      desc: "this is address book which allows the user to manage a list of contact information",
      tech: ["HTML", "CSS", "JAVASCRIPT", "PHP", "MYSQL"],
      link: "https://github.com/prakhar-5447",
      host: "https://prakhar-5447.github.io/portfolio",
      image: "https://raw.githubusercontent.com/prakhar-5447/firstmy/master/src/images/bg3.jpg",
      tag: ["#TEAM"],
    }
  ]

  return (
    <div className="container flex m-auto flex-wrap justify-evenly">
      {projects.map(e => <Card key={e.title} project={e} />)}
    </div>
  );
}

export default Project;
