import React, { useState } from "react";
import Mylogo from "./Data/M-Logo.png";

import titleImg from "./Data/titleImg.png";

import { AppBar, Toolbar, IconButton, Drawer, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import "./animationFireWork.css";

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navigate = useNavigate();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const [showMessage, setShowMessage] = useState(false);
  const handleButtonClick = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  const handleSetSelectedTab = (tab) => {
    navigate(`/${tab}`);
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          background: "none",
          backdropFilter: "blur(10px)",
          transition: "all 0.3s ease",
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <img
              src={Mylogo}
              alt="Logo"
              style={{ height: "50px", width: "auto" }}
              className="cursor-pointer"
              onClick={() => handleSetSelectedTab("home")}
            />
          </Box>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { sm: "block", xs: "block" } }}
          >
            <MenuIcon sx={{ fontSize: "2rem" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          width: 350,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 350,
            background: "linear-gradient(to right, #6EE7B7, #3B82F6, #9333EA)",
            color: "white",
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
           
            "@media (max-width:600px)": {
              width: 250, 
              height: "100vh", 
            },
          },
        }}
      >
        <div className="sm:text-xl md:text-xl font-extrabold">
          <div className="p-4 flex items-center space-x-3 border-b">
            <img src={titleImg} alt="image M" style={{ height: "50px", width: "auto" }}/>
            <span className="font-bold">Manohar</span>
          </div>

          <ul
            className="mt-6 space-y-8 text-center font-extrabold items-center"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <li
              onClick={() => {
                handleSetSelectedTab("home");
              }}
              className="px-4 py-2 hover:bg-gray-700 rounded-lg cursor-pointer transition-colors duration-200"
            >
              Home
            </li>
            <li
              onClick={() => {
                handleSetSelectedTab("about");
              }}
              className="px-4 py-2 hover:bg-gray-700 rounded-lg cursor-pointer transition-colors duration-200"
            >
              About
            </li>
            <li
              onClick={() => {
                handleSetSelectedTab("internship");
              }}
              className="px-4 py-2 hover:bg-gray-700 rounded-lg cursor-pointer transition-colors duration-200"
            >
              Internship
            </li>
            <li
              onClick={() => {
                handleSetSelectedTab("projects");
              }}
              className="px-4 py-2 hover:bg-gray-700 rounded-lg cursor-pointer transition-colors duration-200"
            >
              Projects
            </li>
            <li
              onClick={() => {
                handleSetSelectedTab("contact");
              }}
              className="px-4 py-2 hover:bg-gray-700 rounded-lg cursor-pointer transition-colors duration-200"
            >
              Contact
            </li>
          </ul>
        </div>

        <Box
          sx={{
            padding: 2,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <button
            onClick={handleButtonClick}
            className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-extrabold px-4 py-2 rounded-xl font- transition duration-200 whitespace-nowrap w-full text-center"
          >
            😜😜
          </button>

          {showMessage && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
              <div className="relative">
                <div className="fireworks-container">
                  <div className="firework"></div>
                  <div className="firework"></div>
                  <div className="firework"></div>
                  <div className="firework"></div>
                  <div className="firework"></div>
                </div>

                <div className="text-orange-500 sm:text-3xl md:text-4xl font-bold animate-bounce text-center justify-center mt-10">
                  Hire Freshers, Train Them
                </div>
              </div>
            </div>
          )}
        </Box>
      </Drawer>
    </div>
  );
};

export default NavBar;
