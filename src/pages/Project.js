import React from "react";
import Card from "./Card"

function Project() {
  let projects = [
    {
      title: "Address book",
      desc: "This is address book",
      tech: ["HTML", "CSS", "JAVASCRIPT", "PHP", "MYSQL"],
      link: "https://github.com/prakhar-5447",
      host: "https://prakhar-5447.github.io/portfolio"
    },
    {
      title: "firstmy book",
      desc: "this is address book",
      tech: ["HTML", "CSS", "JAVASCRIPT", "PHP", "MYSQL"],
      link: "https://github.com/prakhar-5447",
      host: "https://prakhar-5447.github.io/portfolio"
    }
  ]

  return (
    <div className="container flex m-auto justify-evenly">
      {projects.map(e => <Card key={e.title} project={e} />)}
    </div>
  );
}

export default Project;
