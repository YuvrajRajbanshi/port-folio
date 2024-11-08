import React from "react";
import Button from "./Button";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { MdOutlineSyncProblem } from "react-icons/md";
import { RiMiniProgramFill } from "react-icons/ri";
const Language2 = ({ Technology, Name, Logo }) => {
  return (
    <div className="flex items-center justify-center p-10 ">
      <div className="bg-gray-500 h-[250px] w-[300px] p-4 rounded-md">
        <h2 className=" text-center text-xl font-serif mb-4">{Technology}</h2>
        <div className=" flex items-center justify-center flex-wrap gap-3 ">
          {/* Sorry c i can't take as my skills, Because  I am not able to find your logo in react icons🥲🥲🥲  */}
          {/* <Button Name={"C"} logo={<FaCamera />} /> */}
          <Button Name={"Java"} logo={<FaJava />} />
          <Button Name={"DSA"} logo={<RiMiniProgramFill />} />
          <Button Name={"Problem Solving"} logo={<MdOutlineSyncProblem />} />
          <Button Name={"GitHub"} logo={<FaGithub />} />
          <Button Name={"Vercel"} logo={<SiVercel />} />
        </div>
      </div>
    </div>
  );
};

export default Language2;
