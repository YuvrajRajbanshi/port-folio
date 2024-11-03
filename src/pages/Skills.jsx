import React from "react";
import Language from "./language/Language";
import Language1 from "./language/Language1";
import Language2 from "./language/Language2";

const Skills = () => {
  return (
    <>
      <div className=" dark:text-white dark:bg-[#2f2f2f] p-20 h-[80vh]">
        <h1 className=" text-center  text-2xl md:text-4xl mt-10 md:mt-0 font-medium font-mono ">
          Skills
        </h1>
        <div className=" flex items-center  justify-center flex-wrap">
          <Language Technology={"FrontEnd"} />
          <Language1 Technology={"BackEnd"} />
          <Language2 Technology={"Others"} />
        </div>
      </div>
    </>
  );
};

export default Skills;
