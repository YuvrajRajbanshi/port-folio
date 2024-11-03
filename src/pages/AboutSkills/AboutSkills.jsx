import React from "react";
import Photos from "../Photos";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutSkills = () => {
  return (
    <div className=" dark:text-white dark:bg-[#2f2f2f] h-[80vh] md:h-[70vh] ">
      <div className="   flex items-center justify-center flex-col h-[60vh]  mx-auto w-[80%] md:w-[60%] md:ml-10 ">
        <div>
          <h1 className="flex  items-start flex-col gap-3">
            <span className="text-gray-500 font-mono text-5xl font-bold">
              Hello, I am
            </span>
            <span className=" text-6xl font-serif font-semibold text-gray-700 dark:text-white">
              Yuvraj Singh
            </span>
            <h2 className="text-3xl font-bold font-mono ">
              Computer Science and Engineer
            </h2>
          </h1>

          <div className=" flex  items-center gap-6 mt-4">
            <Link to="https://github.com/YuvrajRajbanshi" target="_blank">
              <FaGithub className="text-2xl" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/yuvraj-singh-893845259/"
              target="_blank"
            >
              <FaLinkedin className="text-2xl" />
            </Link>
            <Link
              to="https://www.instagram.com/yuvraj_singh_49/"
              target="_blank"
            >
              <FaSquareInstagram className="text-2xl" />
            </Link>
            <Link
              to="https://www.facebook.com/people/Vivaan-Singh/pfbid02eCTVbZFCqNqta3cUS33iadmWbzEkCnkmdSQwcFfcYdArWX1NHDwGcSufx1G2yvhJl/"
              target="_blank"
            >
              <FaFacebook className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
      <Photos />
    </div>
  );
};

export default AboutSkills;
