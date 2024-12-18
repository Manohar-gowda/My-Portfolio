import React from "react";
import { useNavigate } from "react-router-dom";

export const Projects = () => {
  const navigate = useNavigate();

  const handleSetSelectedTab = (tab) => {
    navigate(`/${tab}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-4">

      <div className="w-full max-w-6xl bg-black text-white rounded-lg shadow-2xl p-6 sm:p-10">
        <h1 className="text-3xl sm:text-5xl p-4 font-extrabold bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text mb-8 text-center">
          Projects
        </h1>
     
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
          <li
            onClick={() => handleSetSelectedTab("projects/1")}
            className="cursor-pointer text-center text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-6 shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-green-400 hover:via-blue-500 hover:to-purple-600"
          >
            conFab Social App
          </li>

          <li
            onClick={() => handleSetSelectedTab("projects/2")}
            className="cursor-pointer text-center text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-6 shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-green-400 hover:via-blue-500 hover:to-purple-600"
          >
            Profile-Cards
          </li>

          <li
            onClick={() => handleSetSelectedTab("projects/3")}
            className="cursor-pointer text-center text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-6 shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-green-400 hover:via-blue-500 hover:to-purple-600"
          >
            Chat-Websocket
          </li>
        </ul>
      </div>
    </div>
  );
};
