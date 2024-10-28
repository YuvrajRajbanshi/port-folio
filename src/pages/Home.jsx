import React from "react";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { SiCodingninjas } from "react-icons/si";
import SkillCards from "./skill/SkillCards";
import ProjectsCard from "./projects/ProjectsCard";
import AboutSkills from "./AboutSkills/AboutSkills";
import project1 from "../../public/photos/Project1.jpg";
import project2 from "../../public/photos/project2.jpg";
import project3 from "../../public/photos/project3.jpg";
import project4 from "../../public/photos/project4.jpg";
import Skills from "./Skills";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="dark:text-white dark:bg-[#2f2f2f] ">
      <AboutSkills />

      <div>
        <h1 className=" text-center  font-semibold  mt-40 md:text-4xl text-2xl font-mono  ">
          Coding
        </h1>
      </div>
      <div className="md:flex items-center justify-center md:gap-20 flex-wrap">
        <SkillCards
          icons={<SiLeetcode />}
          technology={"Web Development"}
          skills={
            " LeetCode serves as my primary platform for applied coding learning, emphasizing real-world problem-solving and collaborative engagement, thereby enriching my coding abilities."
          }
          url={"https://leetcode.com/u/SinghRajYuvraj/"}
        />

        <SkillCards
          icons={<SiCodechef />}
          technology={"CodeChef"}
          skills={
            "CodeChef is my preferred destination for coding practice, providing an interactive and competitive atmosphere that tests my skills and ignites my enthusiasm."
          }
          url={"https://www.codechef.com/users/singhraj0461"}
        />
        <SkillCards
          skills={
            "GeeksforGeeks has been my trusted hub for coding excellence, providing an extensive library of tutorials, engaging coding challenges, and hands-on problem-solving exercises."
          }
          icons={<SiCodingninjas />}
          technology={"Coding Ninja"}
          url={
            "https://www.naukri.com/code360/profile/ba32d66b-3c88-4fcf-8365-493f4d3de7c2"
          }
        />
      </div>
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
