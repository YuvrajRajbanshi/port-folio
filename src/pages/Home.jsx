import React from "react";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { SiCodingninjas } from "react-icons/si";
import SkillCards from "./skill/SkillCards";
import ProjectsCard from "./projects/ProjectsCard";
import AboutSkills from "./AboutSkills/AboutSkills";
import Skills from "./Skills";
import Contact from "./Contact";
import netflix from "../assets/photos/netflix.png";
import food from "../assets/photos/food.jpg";
import quiz from "../assets/photos/quiz1.png";

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
          icons={<SiLeetcode className="text-4xl" />}
          technology={"Leetcode"}
          skills={
            " LeetCode serves as my primary platform for applied coding learning, emphasizing real-world problem-solving and collaborative engagement, thereby enriching my coding abilities"
          }
          url={"https://leetcode.com/u/SinghRajYuvraj/"}
        />

        <SkillCards
          icons={<SiCodechef className="text-4xl" />}
          technology={"CodeChef"}
          skills={
            "CodeChef is my preferred destination for coding practice, providing an interactive and competitive atmosphere that tests my skills and ignites my enthusiasm"
          }
          url={"https://www.codechef.com/users/singhraj0461"}
        />
        <SkillCards
          skills={
            "GeeksforGeeks has been my trusted hub for coding excellence, providing an extensive library of tutorials, engaging coding challenges, and hands-on problem-solving exercises"
          }
          icons={<SiCodingninjas className="text-4xl" />}
          technology={"Coding Ninja"}
          url={
            "https://www.naukri.com/code360/profile/ba32d66b-3c88-4fcf-8365-493f4d3de7c2"
          }
        />
      </div>
      <Skills />
      <h1 className=" text-center  font-semibold   md:text-4xl text-2xl font-mono p-8 ">
        Projects
      </h1>
      <div className="flex items-center justify-center gap-10 flex-wrap">
        <ProjectsCard
          abtProject={"Netflix-clone"}
          img={netflix}
          url={"https://github.com/YuvrajRajbanshi/Netflix-watch"}
        />
        <ProjectsCard
          abtProject={"Food website"}
          img={food}
          url={"https://github.com/YuvrajRajbanshi/flovaraFood"}
        />
        <ProjectsCard
          abtProject={"Quiz Website"}
          img={quiz}
          url={"https://github.com/YuvrajRajbanshi/Quiz-app"}
        />
      </div>

      <Contact />
    </div>
  );
};

export default Home;
