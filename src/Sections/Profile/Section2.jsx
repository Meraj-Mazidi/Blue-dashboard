import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { Tooltip } from "antd";

const Section2 = () => {
  return (
    <div className="w-full rounded-md bg-[#fff] dark:bg-[#27293d] mb-5 shadow-md dark:shadow-lg  relative min-h-[500px] overflow-hidden">
      <div className="w-full h-[250px] flex items-end justify-center relative">
        <span className="w-[70%] absolute profile-card-1 h-[120px] -top-10 -left-[25%] rotate-[30deg]" />
        <span className="w-[70%] absolute profile-card-1 h-[120px] -top-[25%] -left-[10%] rotate-[150deg]" />
        <span className="w-[70%] absolute profile-card-1 h-[120px] -top-10 -right-[25%] rotate-[140deg]" />
        <span className="w-[70%] absolute profile-card-1 h-[120px] -top-[25%] -right-[30%] rotate-[170deg]" />

        <div className="w-[165px] h-[165px] flex justify-center items-center rounded-full activeBtn shadow-xl sh2">
          <img
            src="/images/ProfilePic1.jpg"
            alt="MerajMazidi"
            className="w-[150px] h-[150px] rounded-full object-cover object-center border-2 border-white sh"
          />
        </div>
      </div>

      <div className="p-4">
        <p className="text-center text-2xl font-medium">Meraj Mazidi</p>
        <p className="text-center text-sm font-thin">CEO / Co-Founder</p>

        <p className="text-center text-sm font-thin mt-10 px-2 text-[#9a9a9a]">
          I'm a 25 years old self-taught Fronted-developer who absolutely LOVES
          to Code, Create & Design websites and applications. I'm a JS guy, who
          happens to adore React/Next! I just love exploring new things and
          learn new technologies in the process. Energetic and a great team
          player who in every opportunity, looks to find some new friends.
        </p>
      </div>

      <div className="w-full flex justify-center items-center gap-5  min-h-[90px]">
        <Tooltip title="Email Me :)" placement="top">
          <a
            href="mailto:merajmazidiwork@gmail.com"
            className="border p-2 rounded-full shadow-md cursor-pointer hover:-mt-3 transition-all duration-200 border-[#1d8cf8] shadow-[#1d8cf8]"
          >
            <AiOutlineMail className="text-2xl" />
          </a>
        </Tooltip>

        <Tooltip title="Call Me :)" placement="bottom">
          <a
            href="Tel: 00989363347522"
            className="border p-2 rounded-full shadow-md cursor-pointer hover:-mt-3 transition-all duration-200  border-[#1d8cf8] shadow-[#1d8cf8]"
          >
            <BsTelephone className="text-2xl" />
          </a>
        </Tooltip>

        <Tooltip title="Check out my Website" placement="top">
          <a
            href="https://meraj.vercel.app/"
            target="_blank"
            className="border p-2 rounded-full shadow-md cursor-pointer hover:-mt-3 transition-all duration-200  border-[#1d8cf8] shadow-[#1d8cf8]"
          >
            <CgWebsite className="text-2xl" />
          </a>
        </Tooltip>

        <Tooltip title="My Linkedin Account" placement="bottom">
          <a
            href="www.linkedin.com/in/meraj-mazidi-59290a155"
            target="_blank"
            className="border p-2 rounded-full shadow-md cursor-pointer hover:-mt-3 transition-all duration-200  border-[#1d8cf8] shadow-[#1d8cf8]"
          >
            <FaLinkedinIn className="text-2xl" />
          </a>
        </Tooltip>

        <Tooltip title="My GitHub Account" placement="top">
          <a
            href="https://github.com/Meraj-Mazidi"
            target="_blank"
            className="border p-2 rounded-full shadow-md cursor-pointer hover:-mt-3 transition-all duration-200 border-[#1d8cf8] shadow-[#1d8cf8]"
          >
            <FiGithub className="text-2xl" />
          </a>
        </Tooltip>
      </div>
    </div>
  );
};

export default Section2;
