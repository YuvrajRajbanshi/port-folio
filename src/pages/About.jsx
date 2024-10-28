import React from "react";
import Language from "./language/Language";
import AboutSkills from "./AboutSkills/AboutSkills";
import Button from "./language/Button";
import Language1 from "./language/Language1";
import Language2 from "./language/Language2";
import Photos from "./Photos";

const About = () => {
  return (
    <>
      <div className=" dark:text-white dark:bg-[#2f2f2f] h-[80vh]">
        <div className=" md:flex justify-center items-center p-5">
          <div className=" text-justify w-[500px] md:mr-60 md:mt-20">
            <h1 className="font-bold md:text-5xl text-3xl  ">About Me</h1>
            <h2 className="dark:text-gray-500 dark:bg-[#2f2f2f] text-gray-900 font-bold text-2xl mt-2">
              Immerse yourself in my world
            </h2>
            <p className=" font-mono mt-2 ">
              Here, in my own little corner of the world, kindness is a way of
              being. As I journey through life, nature's beauty reminds me of
              the importance of compassion and gratitude. With each passing day,
              I strive to craft a life that reflects my values, nurtures my
              dreams, and inspires others to do the same.
            </p>
          </div>
          <Photos />
        </div>
      </div>
    </>
  );
};
export default About;
