import React from "react";
import { useState } from "react";
import TypeWriterEffect from "react-typewriter-effect";
import {insta_logo,linkedin_logo,twitter_logo,github_logo,profile} from "../images/images.js";

import "../style/home.css";

function Home() {
  const [insta, setinsta] = useState(false);
  const [twitter, settwitter] = useState(false);
  const [github, setgithub] = useState(false);
  const [linkedin, setlinkedin] = useState(false);
  return (
    <div className="container mx-auto w-2/5 rounded-3xl text-center card bg-white">
      <div className="flex mx-10 justify-between px-20 py-20">
        <div className="flex-col my-3 w-1/4">
          <div className="">
            <img className="rounded-full" src={profile} alt="" width={140} />
          </div>
          <div className="flex flex-row justify-between mt-6">
            <a href="https://instagram.com/prakhar_5447" className="">
              <img
                src={insta_logo}
                alt=""
                width={20}
                onMouseEnter={() => { setinsta(true) }}
                onMouseLeave={() => { setinsta(false) }}
              />
            </a>
            <a href="https://twitter.com/prakhar_5447" className="mt-1">
              <img
                src={twitter_logo}
                alt=""
                width={20}
                onMouseEnter={() => { settwitter(true) }}
                onMouseLeave={() => { settwitter(false) }}
              />
            </a>
            <a href="https://www.linkedin.com/in/prakhar-sahu-4519b8206" className="">
              <img
                src={linkedin_logo}
                alt=""
                width={20}
                onMouseEnter={() => { setlinkedin(true) }}
                onMouseLeave={() => { setlinkedin(false) }}
              />
            </a>
            <a href="https://github.com/prakhar-5447" className="">
              <img
                src={github_logo}
                alt=""
                width={20}
                onMouseEnter={() => { setgithub(true) }}
                onMouseLeave={() => { setgithub(false) }}
              />
            </a>
          </div>
          <div className="flex font-bold justify-center mt-6">
            <div className="username text-xs">
              {insta && <h2 className="justify-center">prakhar_5447</h2>}
              {twitter && <h2 className="justify-center">prakhar_5447</h2>}
              {github && <h2 className="justify-center">prakhar-5447</h2>}
              {linkedin && <h2 className="justify-center">PRAKHAR SAHU</h2>}
            </div>
          </div>
        </div>
        <div className="flex w-3/4 text-left flex-col my-5 ml-20 justify-around">
          <div className="justify-around">
            <div className="font-bold text-2xl">PRAKHAR SAHU</div>
            <div className="flex ml-1 mt-1 text-xl">
              <p className="mr-2">I'm a</p>
              <TypeWriterEffect
                textStyle={{
                  fontFamily: "",
                  color: "red",
                  fontWeight: 3000,
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
          <div className="text-sm text-white leading-5">
            <p className="pl-5 pr-3 text-slate-100 py-2 rounded-lg desc">
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
