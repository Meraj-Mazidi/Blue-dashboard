"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useTheme } from "next-themes";
import {
  Main,
  Menu,
  TablesList,
  ToDoList,
  UserProfile,
  Map,
  KanbanList,
} from "@/Sections";
import { Navbar } from "@/Components";
import { Drawer, Modal } from "antd";
import { IoIosNotificationsOutline } from "react-icons/io";
import { motion } from "framer-motion";
import TextField from "@mui/material/TextField";
import { IoSearchOutline } from "react-icons/io5";

const notifications = [
  {
    text: "New Message from Robert Johnson",
  },
  {
    text: "New Customer data added",
  },
  {
    text: "You have 3 new contact requests",
  },
  {
    text: "The Performance chart needs an update",
  },
  {
    text: "You have 5 unread messages in you inbox",
  },
];

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [menuSelected, setMenuSelected] = useState("Dashboard");
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [closeMenu, setCloseMenu] = useState(false);

  // For Mobile view - Gets window size
  const size = useWindowSize();
  let isTablet = size.width > 650 && size.width < 1024 ? true : false;

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
  }

  return (
    <>
      <Head>
        <title>Blue Dashboard | Meraj Mazidi</title>
        <meta name="description" content="Meraj Mazidi Blue Dashboard" />
        <meta name="keywords" content="Meraj Mazidi Blue Dashboard" />
        <meta name="author" content="Meraj Mazidi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Popins Font */}
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </style>
      </Head>

      <main
        className={`w-full grid grid-cols-1 lg:grid-cols-8 xl:grid-cols-6 xl:gap-x-5 pop relative !transition-all !duration-500  ${
          closeMenu && "!grid-cols-12 !gap-x-0 !transition-all !duration-500"
        }`}
      >
        <div
          className={`lg:col-span-2 xl:col-span-1 relative hidden lg:block !transition-all !duration-500 ${
            closeMenu && "lg:!col-span-1"
          }`}
        >
          <Menu
            menuSelected={menuSelected}
            setMenuSelected={setMenuSelected}
            mode="normal"
            setCloseMenu={setCloseMenu}
            closeMenu={closeMenu}
          />
        </div>
        <div
          className={`lg:col-span-6 xl:col-span-5 !transition-all !duration-500 ${
            closeMenu && "lg:!col-span-11"
          }`}
        >
          {/* Navbar */}
          <Navbar
            setTheme={setTheme}
            theme={theme}
            setOpen={setOpen}
            setIsModalOpen={setIsModalOpen}
            setShowSearch={setShowSearch}
            setCloseMenu={setCloseMenu}
            closeMenu={closeMenu}
          />

          {/* Content */}
          {menuSelected === "Dashboard" ? (
            <Main />
          ) : menuSelected === "Table List" ? (
            <TablesList />
          ) : menuSelected === "To Do List" ? (
            <ToDoList />
          ) : menuSelected === "User Profile" ? (
            <UserProfile />
          ) : menuSelected === "Google Map" ? (
            <Map />
          ) : menuSelected === "Kanban" ? (
            <KanbanList />
          ) : (
            <></>
          )}
        </div>

        {/* Search Box */}
        {showSearch && (
          <div className="absolute top-[150px] flex justify-center items-center w-full z-[9999999]">
            <motion.div
              className="w-[90%] md:w-[50%] h-[100px] dark:bg-white bg-[#1f8ef1] bg-[linear-gradient(160deg, #1f8ef1 0.5%, #80D0C7 100%)] rounded-md p-5 flex items-center gap-x-3 text-base"
              initial={{ y: "-200px" }}
              animate={{ y: "0" }}
              exit={{ y: "-200px" }}
            >
              <IoSearchOutline className="text-[#1f8ef1] text-3xl" />
              <TextField
                fullWidth
                label="Search Whatever you want..."
                id="fullWidth"
              />
            </motion.div>
          </div>
        )}
        {showSearch && (
          <div
            className="absolute w-full h-full top-0 bottom-0 left-0 right-0 backdrop-blur-[50px] base-blur bg-[rgba(43,45,66,0.3)] opacity-50"
            onClick={() => setShowSearch(false)}
          />
        )}

        {/* Drawer - Menu */}
        <Drawer
          title={false}
          placement="left"
          width={isTablet ? "50%" : "100%"}
          open={open}
          closable={false}
        >
          <Menu
            menuSelected={menuSelected}
            setMenuSelected={setMenuSelected}
            setOpen={setOpen}
            mode="drawer"
          />
        </Drawer>

        {/* Notification Modal */}
        <Modal
          title={
            <div className="flex items-center gap-x-4">
              <span className="w-[50px] h-[50px] relative">
                <img
                  src="/images/anime3.png"
                  alt="User Avatar"
                  className="w-[50px] h-[50px] rounded-full object-cover object-top"
                />
                <span className="w-[10px] h-[10px] bg-red-600 rounded-full left-1 top-0 z-20 absolute animate-pulse" />
              </span>
              <p className="text-xl">Your Notifications</p>
            </div>
          }
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={false}
          centered
        >
          <div className="flex flex-col border-t pt-5">
            {notifications.map((item, i) => (
              <div
                className="flex items-center gap-x-5 border-b py-4 hover:bg-gray-100 cursor-pointer"
                key={i}
              >
                <span className="w-[20px] relative">
                  <IoIosNotificationsOutline className="text-3xl" />
                  <span className="w-[10px] h-[10px] bg-red-600 rounded-full left-0 top-0 z-20 absolute" />
                </span>
                <p className="text-base font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </Modal>
      </main>
    </>
  );
}
