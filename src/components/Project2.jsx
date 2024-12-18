import React from "react";

import img1 from "./Data/profiles1.png";
import img2 from "./Data/profiles2.png";
import img3 from "./Data/profiles3.png";
import img4 from "./Data/profiles4.png";

export const Project2 = () => {
  return (
    <div className="h-full bg-gray-900 text-white p-6 sm:p-10">
      <br />
      <br />
      <div className="flex items-center gap-4 mb-8 sm:mb-12">
        <div className="flex h-10 w-10 items-center justify-center relative">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60"></span>
          <span className="relative inline-flex h-6 w-6 rounded-full bg-teal-400"></span>
        </div>
        <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text">
          Profiles Storage App
        </span>
      </div>
      <h1 className="font-extrabold sm:text-2xl md:text-2xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent hover:from-pink-500 hover:to-orange-500 bg-clip-text">
        <a
          href="https://github.com/Manohar-gowda/Profile_Cards_Spring_Vite_React"
        >
          Repository Link
        </a>
      </h1>
      <br />
      <br />

      <div className="text-gray-300 md:text-xl space-y-4 font-bold sm:text-lg mb-10">
        <p className="md:text-2xl sm:text-lg">
          The Profiles Storage App is a full-stack web application built using{" "}
          <span className="text-teal-400">React (Vite)</span>,{" "}
          <span className="text-teal-400">Spring Boot</span>, and{" "}
          <span className="text-teal-400">MySQL</span>. It provides secure
          authentication and an efficient way to manage user profiles.
        </p>
        <ul className="space-y-4 list-disc">
          <li>
            <span className="text-white font-semibold">JWT Authentication</span>
            : Secure user registration, login, and session handling.
          </li>
          <li>
            <span className="text-white font-semibold">
              Automatic Data Fetching
            </span>
            : Axios is used to fetch data seamlessly.
          </li>
          <li>
            <span className="text-white font-semibold">CRUD Operations</span>:
            Users can create, edit, delete, and view profiles.
          </li>
          <li>
            <span className="text-white font-semibold">Responsive UI</span>:
            Clean and user-friendly design optimized for all devices.
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
        <div className="relative group">
          <img
            src={img1} 
            alt="Register & Login"
            className="w-[650px] h-[400px] object-cover rounded-lg shadow-xl transform transition duration-500 hover:scale-105"
          />
        </div>

        <div className="relative group">
          <img
            src={img2} 
            alt="Data Fetching"
            className="w-[650px] h-[400px] object-cover rounded-lg shadow-xl transform transition duration-500 hover:scale-105"
          />
        </div>

        <div className="relative group">
          <img
            src={img3} 
            alt="CRUD Operations"
            className="w-[650px] h-[400px] rounded-lg shadow-xl transform transition duration-500 hover:scale-105"
          />
        </div>

        <div className="relative group">
          <img
            src={img4} 
            alt="Responsive UI"
            className="w-[650px] h-[400px] object-cover rounded-lg shadow-xl transform transition duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};
