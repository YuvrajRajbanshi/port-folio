import React from "react";

import ProjectsCard from "./projects/ProjectsCard.jsx";
import netflix from "../assets/photos/netflix.png";
import food from "../assets/photos/food.jpg";
import quiz from "../assets/photos/quiz1.png";

const Projects = () => {
  return (
    <>
      <div className="dark:text-white dark:bg-[#2f2f2f] min-h-[80vh] ">
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
      </div>
    </>
  );
};

export default Projects;
