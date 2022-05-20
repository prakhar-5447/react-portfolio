import React from "react";
import Card from "./Card";

function Project() {
  let projects = [
    {
      title: "Address Book",
      desc: "This is address book which allows the user to manage a list of contact information",
      tech: ["HTML", "CSS", "JAVASCRIPT", "PHP", "MYSQL"],
      link: "https://github.com/prakhar-5447/Address-Book",
      host: "",
      // image: "https://raw.githubusercontent.com/prakhar-5447/firstmy/master/src/images/bg3.jpg",
      tag: ["#PERSONAL", "#WEB"],
    },
    {
      title: "Discord Bot",
      desc: "Server Moderation bot help to make server secure and away from threats",
      tech: ["TYPESCRIPT"],
      link: "https://github.com/prakhar-5447/PROJECT-C",
      host: "",
      // image: "https://raw.githubusercontent.com/prakhar-5447/firstmy/master/src/images/bg3.jpg",
      tag: ["#PERSONAL"],
    },
    {
      title: "ToDo APP",
      desc: "ToDo is a kind of web app that generally used to maintain our day-to-day tasks or list everything that we have to do.",
      tech: ["HTML", "CSS", "TYPESCRIPT", "ANGULAR"],
      link: "https://github.com/prakhar-5447/angular-project",
      host: "",
      // image: "https://raw.githubusercontent.com/prakhar-5447/firstmy/master/src/images/bg3.jpg",
      tag: ["#WEB"],
    },
    {
      title: "Firstmy",
      desc: "FirstMy is dedicated to preventing child abuse by strengthening, equipping, and restoring children and families in crisis. One Life at a Time.",
      tech: ["HTML", "CSS", "JAVASCRIPT", "MERN"],
      link: "https://github.com/prakhar-5447/firstmy",
      host: "",
      // image: "https://raw.githubusercontent.com/prakhar-5447/firstmy/master/src/images/bg3.jpg",
      tag: ["#TEAM", "#WEB"],
    },
    {
      title: "Juicy-N-Yummy",
      desc: "Juicy-N-Yummy is an platform for restaurant aggregator and food delivery. It provides information, menus and user-reviews of restaurants.",
      tech: ["HTML", "CSS", "TYPESCRIPT", "MEAN"],
      link: "https://github.com/prakhar-5447/Juicy-N-Yummy",
      host: "",
      // image: "https://raw.githubusercontent.com/prakhar-5447/firstmy/master/src/images/bg3.jpg",
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
