import React, { useState } from "react";
import { AiOutlinePieChart, AiOutlineBorderlessTable } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { IoClose } from "react-icons/io5";
import { BsUiChecks, BsKanban } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

const Menu = ({
  menuSelected,
  setMenuSelected,
  setOpen,
  mode,
  setCloseMenu,
  closeMenu,
}) => {
  return (
    <>
      {mode === "normal" ? (
        // Laptop Menu
        <div
          className={`w-full px-4 sticky top-0 transition-all duration-500 ${
            closeMenu && "!w-[120px]"
          }`}
        >
          {/* Navbar */}
          <div
            className={`w-full h-[80px] bg-transparent flex justify-between items-center mb-5 pl-2 transition-all duration-700 ${
              closeMenu && "invisible"
            }`}
          >
            <p className="text-2xl pop font-light mt-5">{menuSelected}</p>
          </div>
          <div className="w-full flex flex-col px-4 bg-[#1f8ef1] bg-[linear-gradient(160deg, #1f8ef1 0.5%, #80D0C7 100%)] rounded-md py-5 min-h-[88vh] shadow-md dark:shadow-lg relative">
            {/* Top - Meraj Mazidi */}
            <div className="flex items-center gap-x-4 border-b pb-3">
              <a
                className={`flex items-center justify-center  ${
                  closeMenu && "ml-2"
                }`}
                href="https://meraj.vercel.app/"
                target="_blank"
              >
                <img
                  src="/images/logo-blue-bg-2.png"
                  alt="Meraj Mazidi"
                  className="w-[40px] h-[40px] rounded-md"
                />
              </a>

              <p className={`text-xl font-extralight ${closeMenu && "hidden"}`}>
                <a
                  href="https://meraj.vercel.app/"
                  target="_blank"
                  className="underline text-white"
                >
                  Meraj Mazidi
                </a>
              </p>
            </div>

            {/* Menu Content */}
            <div className="flex flex-col gap-y-8 mt-8 px-3">
              <div
                className={`flex gap-x-3 hover:gap-x-5 transition-all duration-300 items-center cursor-pointer`}
                onClick={() => setMenuSelected("Dashboard")}
              >
                <span className={`w-[30px]`}>
                  <AiOutlinePieChart
                    className={`${
                      menuSelected === "Dashboard" ? "text-3xl" : "text-2xl"
                    } transition-all duration-200 text-white`}
                  />
                </span>
                <p
                  className={`text-base font-normal text-white  ${
                    closeMenu && "hidden"
                  }`}
                >
                  Dashboard
                </p>
              </div>

              <div
                className={`flex gap-x-3 hover:gap-x-5 transition-all duration-300 items-center cursor-pointer`}
                onClick={() => setMenuSelected("Table List")}
              >
                <span className="w-[30px]">
                  <AiOutlineBorderlessTable
                    className={`${
                      menuSelected === "Table List" ? "text-4xl" : "text-3xl"
                    } transition-all duration-200 text-white`}
                  />
                </span>
                <p
                  className={`text-base font-normal text-white  ${
                    closeMenu && "hidden"
                  }`}
                >
                  Table List
                </p>
              </div>

              <div
                className={`flex gap-x-3 hover:gap-x-5 transition-all duration-300 items-center cursor-pointer`}
                onClick={() => {
                  setMenuSelected("To Do List");
                }}
              >
                <span className="w-[30px]">
                  <BsUiChecks
                    className={`${
                      menuSelected === "To Do List" ? "text-3xl" : "text-2xl"
                    } transition-all duration-200 text-white  ${
                      closeMenu && "ml-1"
                    }`}
                  />
                </span>
                <p
                  className={`text-base font-normal text-white  ${
                    closeMenu && "hidden"
                  }`}
                >
                  To Do List
                </p>
              </div>

              <div
                className={`flex gap-x-3 hover:gap-x-5 transition-all duration-300 items-center cursor-pointer`}
                onClick={() => setMenuSelected("User Profile")}
              >
                <span className="w-[30px]">
                  <RxAvatar
                    className={`${
                      menuSelected === "User Profile" ? "text-4xl" : "text-3xl"
                    } transition-all duration-200 text-white`}
                  />
                </span>
                <p
                  className={`text-base font-normal text-white  ${
                    closeMenu && "hidden"
                  }`}
                >
                  User Profile
                </p>
              </div>

              <div
                className={`flex gap-x-3 hover:gap-x-5 transition-all duration-300 items-center cursor-pointer`}
                onClick={() => setMenuSelected("Google Map")}
              >
                <span className="w-[30px]">
                  <LiaMapMarkedAltSolid
                    className={`${
                      menuSelected === "Google Map" ? "text-4xl" : "text-3xl"
                    } transition-all duration-200 text-white`}
                  />
                </span>
                <p
                  className={`text-base font-normal text-white transition-all duration-700  ${
                    closeMenu && "hidden"
                  }`}
                >
                  Google Map
                </p>
              </div>

              <div
                className={`flex gap-x-3 hover:gap-x-5 transition-all duration-300 items-center cursor-pointer`}
                onClick={() => setMenuSelected("Kanban")}
              >
                <span className="w-[30px]">
                  <BsKanban
                    className={`${
                      menuSelected === "Kanban" ? "text-3xl" : "text-2xl"
                    } transition-all duration-200 text-white`}
                  />
                </span>
                <p
                  className={`text-base font-normal text-white transition-all duration-700  ${
                    closeMenu && "hidden"
                  }`}
                >
                  Kanban
                </p>
              </div>
            </div>

            <div className="w-full absolute bottom-5 flex items-center justify-start left-0 px-7">
              <a
                href="https://meraj.vercel.app/"
                target="_blank"
                className="flex items-center gap-x-3 text-base font-thin"
              >
                <CgWebsite className={`text-[30px]`} />
                <span className={`${closeMenu && "hidden"}`}>
                  Who is Meraj !?
                </span>
              </a>
            </div>
          </div>
        </div>
      ) : (
        // Mobile - Tablet Drwaer
        <div className="w-full relative">
          <div className="w-full flex flex-col px-4 bg-[#1f8ef1] bg-[linear-gradient(160deg, #1f8ef1 0.5%, #80D0C7 100%)] rounded-md py-5 min-h-[95vh] shadow-md dark:shadow-lg">
            {/* Top - Meraj Mazidi */}
            <div className="flex items-center justify-between gap-x-4 border-b pb-3">
              <div className="flex items-center gap-x-4">
                <div className=" flex items-center justify-center">
                  <img
                    src="/images/logo-blue-bg-2.png"
                    alt="Meraj Mazidi"
                    className="w-[40px] h-[40px] rounded-full"
                  />
                </div>

                <p className="text-xl font-extralight">
                  <a
                    href="https://meraj.vercel.app/"
                    target="_blank"
                    className="underline text-white"
                  >
                    Meraj Mazidi
                  </a>
                </p>
              </div>

              <div>
                <span onClick={() => setOpen(false)} className="cursor-pointer">
                  <IoClose className="text-3xl" />
                </span>
              </div>
            </div>

            {/* Menu Content */}
            <div className="flex flex-col gap-y-8 mt-8 px-3">
              <div
                className={`flex gap-x-3 hover:gap-x-5 transition-all duration-300 items-center cursor-pointer`}
                onClick={() => {
                  setMenuSelected("Dashboard");
                  setOpen(false);
                }}
              >
                <span className="w-[30px]">
                  <AiOutlinePieChart
                    className={`${
                      menuSelected === "Dashboard" ? "text-3xl" : "text-2xl"
                    } transition-all duration-200 text-white`}
                  />
                </span>
                <p className="text-base font-normal text-white">Dashboard</p>
              </div>

              <div
                className={`flex gap-x-3 hover:gap-x-5 transition-all duration-300 items-center cursor-pointer`}
                onClick={() => {
                  setMenuSelected("Table List");
                  setOpen(false);
                }}
              >
                <span className="w-[30px]">
                  <AiOutlineBorderlessTable
                    className={`${
                      menuSelected === "Table List" ? "text-4xl" : "text-2xl"
                    } transition-all duration-200 text-white`}
                  />
                </span>
                <p className="text-base font-normal text-white">Table List</p>
              </div>

              <div
                className={`flex gap-x-3 hover:gap-x-5 transition-all duration-300 items-center cursor-pointer`}
                onClick={() => {
                  setMenuSelected("To Do List");
                  setOpen(false);
                }}
              >
                <span className="w-[30px]">
                  <BsUiChecks
                    className={`${
                      menuSelected === "To Do List" ? "text-3xl" : "text-2xl"
                    } transition-all duration-200 text-white`}
                  />
                </span>
                <p className="text-base font-normal text-white">To Do List</p>
              </div>

              <div
                className={`flex gap-x-3 hover:gap-x-5 transition-all duration-300 items-center cursor-pointer`}
                onClick={() => {
                  setMenuSelected("User Profile");
                  setOpen(false);
                }}
              >
                <span className="w-[30px]">
                  <RxAvatar
                    className={`${
                      menuSelected === "User Profile" ? "text-3xl" : "text-2xl"
                    } transition-all duration-200 text-white`}
                  />
                </span>
                <p className="text-base font-normal text-white">User Profile</p>
              </div>

              <div
                className={`flex gap-x-3 hover:gap-x-5 transition-all duration-300 items-center cursor-pointer`}
                onClick={() => {
                  setMenuSelected("Google Map");
                  setOpen(false);
                }}
              >
                <span className="w-[30px]">
                  <LiaMapMarkedAltSolid
                    className={`${
                      menuSelected === "Google Map" ? "text-3xl" : "text-2xl"
                    } transition-all duration-200 text-white`}
                  />
                </span>
                <p className="text-base font-normal text-white">Google Map</p>
              </div>

              <div
                className={`flex gap-x-3 hover:gap-x-5 transition-all duration-300 items-center cursor-pointer`}
                onClick={() => {
                  setMenuSelected("Kanban");
                  setOpen(false);
                }}
              >
                <span className="w-[30px]">
                  <BsKanban
                    className={`${
                      menuSelected === "Kanban" ? "text-3xl" : "text-2xl"
                    } transition-all duration-200 text-white`}
                  />
                </span>
                <p className="text-base font-normal text-white">Kanban</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 w-full flex justify-center items-center">
            {/* <div className="py-3 sm:w-[300px] bg-[#27293d] flex justify-center items-center rounded-md text-lg shadow-lg"> */}
            <div
              className="py-3 w-[85%] sm:w-[300px] border border-[#1d8cf8] bg-[rgb(179,185,245)] bg-[linear-gradient(90deg, rgba(179,185,245,1) 0%, rgba(255,255,255,1) 100%)] text-[#27293d] font-[600] flex justify-center items-center rounded-md text-lg shadow-md shadow-white"
              onClick={() => setOpen(false)}
            >
              <a href="https://meraj.vercel.app/" target="_blank">
                Who is Meraj?
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
