import React from "react";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { SiCodingninjas } from "react-icons/si";
import SkillCards from "./skill/SkillCards";
const Coding = () => {
  return (
    <>
      <div className="dark:text-white dark:bg-[#2f2f2f] h-[80vh] ">
        <div className="md:flex items-center justify-center md:gap-20 flex-wrap p-10">
          <SkillCards
            icons={<SiLeetcode className="text-4xl" />}
            technology={"LeetCode"}
            skills={
              " LeetCode serves as my primary platform for applied coding learning, emphasizing real-world problem-solving and collaborative engagement, thereby enriching my coding abilities."
            }
            url={"https://leetcode.com/u/SinghRajYuvraj/"}
          />

          <SkillCards
            icons={<SiCodechef className="text-4xl" />}
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
            icons={<SiCodingninjas className="text-4xl" />}
            technology={"Coding Ninja"}
            url={
              "https://www.naukri.com/code360/profile/ba32d66b-3c88-4fcf-8365-493f4d3de7c2"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Coding;
