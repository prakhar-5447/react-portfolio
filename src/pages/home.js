import React from "react";
import { useState } from "react";
import TypeWriterEffect from "react-typewriter-effect";
import insta_logo from "../images/insta.png";
import twitter_logo from "../images/twitter.png";
import linkedin_logo from "../images/linkedin.png";
import github_logo from "../images/github.png";
import profile from "../images/PRAKHAR.jpg";
import "../style/home.css";

function Home() {
  const [insta, setinsta] = useState(false);
  const [twitter, settwitter] = useState(false);
  const [github, setgithub] = useState(false);
  const [linkedin, setlinkedin] = useState(false);
  const s1 = (e) => {
    setinsta(true);
  };
  const h1 = (e) => {
    setinsta(false);
  };
  const s2 = (e) => {
    settwitter(true);
  };
  const h2 = (e) => {
    settwitter(false);
  };
  const s3 = (e) => {
    setlinkedin(true);
  };
  const h3 = (e) => {
    setlinkedin(false);
  };
  const s4 = (e) => {
    setgithub(true);
  };
  const h4 = (e) => {
    setgithub(false);
  };

  return (
    <div className="container mx-auto w-2/5 card bg-white">
      <div className="flex mx-10 justify-between pl-20 pr-10 py-10">
        <div className="flex-col my-3 w-1/4">
          <div className="">
            <img className="rounded-full" src={profile} alt="" width={140} />
          </div>
          <div className="flex flex-row justify-between mt-6">
            <a href="" className="">
              <img
                src={insta_logo}
                alt=""
                width={20}
                onMouseEnter={s1}
                onMouseLeave={h1}
              />
            </a>
            <a href="" className="mt-1">
              <img
                src={twitter_logo}
                alt=""
                width={20}
                onMouseEnter={s2}
                onMouseLeave={h2}
              />
            </a>
            <a href="" className="">
              <img
                src={linkedin_logo}
                alt=""
                width={20}
                onMouseEnter={s3}
                onMouseLeave={h3}
              />
            </a>
            <a href="" className="">
              <img
                src={github_logo}
                alt=""
                width={20}
                onMouseEnter={s4}
                onMouseLeave={h4}
              />
            </a>
          </div>
          <div className="flex font-bold justify-center mt-6">
            <p className="username">
              {insta && <h2 className="justify-center">prakhar_5447</h2>}
              {twitter && <h2 className="justify-center">prakhar_5447</h2>}
              {github && <h2 className="justify-center">prakhar-5447</h2>}
              {linkedin && <h2 className="justify-center">PRAKHAR SAHU</h2>}
            </p>
          </div>
        </div>
        <div className="flex w-3/4 text-left flex-col my-5 ml-10 justify-around">
          <div className="justify-around">
            <div className="font-bold text-2xl">PRAKHAR SAHU</div>
            <div className="flex ml-1 text-xl">
              <p className="mr-2">I'm a</p>
              <TypeWriterEffect
                textStyle={{
                  fontFamily: "",
                  color: "#34ebeb",
                  fontWeight: 150,
                  fontSize: "1.3rem",
                }}
                startDelay={2000}
                cursorColor="#34ebeb"
                multiText={["Developer", "Designer", "Programmer"]}
                loop={true}
                nextTextDelay={1000}
                typeSpeed={30}
              />
            </div>
          </div>
          <div className="text-2xl text-sm text-white leading-5">
            <p className="px-5 py-2 rounded-lg desc">
              BTech CSE'24 student from Shri Shankaracharya Technical Campus,
              Bhilai
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
