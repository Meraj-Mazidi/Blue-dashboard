import React, { useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiSolidDownArrow } from "react-icons/bi";
import { HiOutlineMoon, HiMoon } from "react-icons/hi";
import { TfiMenuAlt } from "react-icons/tfi";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import { TbMessageCircleDown, TbProgressBolt } from "react-icons/tb";
import { VscAccount } from "react-icons/vsc";
import { ImNotification } from "react-icons/im";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import { motion } from "framer-motion";

const avatar = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://meraj.vercel.app/"
        className="text-base"
      >
        Meraj Mazidi
      </a>
    ),
    icon: <SmileOutlined />,
  },
  {
    key: "2",
    label: <p className="text-base">My Messages</p>,
    icon: <TbMessageCircleDown />,
    // disabled: true,
  },
  {
    key: "3",
    label: <p className="text-base">My Pro Account</p>,
    icon: <TbProgressBolt />,
    disabled: true,
  },
  {
    key: "4",
    label: <p className="text-base">My Account</p>,
    icon: <VscAccount />,
  },
  {
    key: "5",
    label: <p className="text-base">My Notifications</p>,
    icon: <ImNotification />,
  },
];

const Navbar = ({
  setTheme,
  theme,
  setOpen,
  setIsModalOpen,
  setShowSearch,
  setCloseMenu,
  closeMenu,
}) => {
  return (
    <nav className="w-full h-[80px] bg-transparent flex items-center justify-between pr-7 md:pr-10 lg:pr-16 mb-5">
      <div className="lg:hidden pl-5 md:pl-10">
        <span onClick={() => setOpen(true)}>
          <TfiMenuAlt className="text-2xl" />
        </span>
      </div>

      {/* Menu close toggle */}
      <div className="hidden ml-5 lg:flex items-center">
        <span
          className="flex justify-center items-center pt-4 cursor-pointer transition-all duration-700"
          onClick={() => setCloseMenu((prev) => !prev)}
        >
          {closeMenu ? (
            <RiMenuUnfoldLine className="text-2xl" />
          ) : (
            <RiMenuFoldLine className="text-2xl" />
          )}
        </span>
      </div>
      <div className="flex items-center gap-x-5 md:gap-x-8">
        <span
          className="cursor-pointer"
          onClick={() =>
            theme == "dark" ? setTheme("light") : setTheme("dark")
          }
        >
          {theme == "dark" ? (
            <HiOutlineMoon className="text-[25px]" />
          ) : (
            <HiMoon className="text-[25px]" />
          )}
        </span>
        <span className="cursor-pointer" onClick={() => setShowSearch(true)}>
          <IoSearchOutline className="text-2xl" />
        </span>
        <span
          className="relative cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <span className="w-[8px] h-[8px] bg-red-600 rounded-full right-0 top-0 z-20 absolute animate-ping" />
          <IoIosNotificationsOutline className="text-3xl" />
        </span>

        {/* Avatar */}
        <Dropdown
          menu={{
            items: avatar,
          }}
          placement="bottomLeft"
          arrow
          className="cursor-pointer"
        >
          <span className=" p-1 relative flex">
            <span className="w-[8px] h-[8px] bg-red-600 rounded-full right-0 top-0 z-20 absolute animate-pulse" />
            <img
              src="/images/anime3.png"
              alt="User Avatar"
              className="w-[40px] h-[40px] rounded-full object-cover object-top"
            />
            <BiSolidDownArrow className=" absolute -right-3 top-[45%] text-[10px]" />
          </span>
        </Dropdown>
      </div>
    </nav>
  );
};

export default Navbar;
