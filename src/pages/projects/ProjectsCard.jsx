import React from "react";
import { Link } from "react-router-dom";

const ProjectsCard = ({ img, abtProject, url }) => {
  return (
    <Link to={url} target="_blank">
      <div>
        <div className="flex items-center justify-center flex-col">
          <div className="relative group  ">
            {/* Image */}
            <img
              src={img}
              alt="Sample Image"
              className="w-80 h-60 rounded-md"
            />

            {/* Hover Text */}
            <div
              className="
            absolute inset-0 flex items-center justify-center
          bg-black bg-opacity-50 text-white text-lg 
          opacity-0 transition-opacity duration-500 ease-in-out
          group-hover:opacity-100
        "
            >
              {abtProject}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectsCard;
