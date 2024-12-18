import React, { useState, useEffect } from "react";
import { ReactTyped as Typed } from "react-typed";
import KodImg from "./Data/kodnestLogo.png";
import InvImg from "./Data/InventronLogo.png";


export const InternShip = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="h-full flex flex-col bg-black text-white m-4 sm:m-7 w-full md:w-[70%]">
     
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-8 md:px-16 mt-16">
        <div className="flex items-center gap-4 mb-6 sm:mb-8">
          <div className="flex h-8 w-8 items-center justify-center relative">
            <span className="absolute inline-flex h-full w-full animate-bounce rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex h-4 w-4 rounded-full bg-teal-400"></span>
          </div>
          <span className="text-xl sm:text-2xl font-bold text-white">
            INTERNSHIP EXPERIENCE
          </span>
        </div>
        <Typed
          strings={["Learning, Growing, and Building Skills!"]}
          typeSpeed={50}
          backSpeed={60}
          loop
          className="text-teal-400 text-lg sm:text-2xl font-semibold"
        />
        <br />
     
        <div className="flex flex-col gap-8">
          <div
            className={`transform transition-all duration-1000 ease-in-out ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text">
             <a href="https://www.inventeron.com/">Inventeron Technologies | Intern Java</a>
            </h3>
            <div className="mb-4 flex float-right">
            <img
              src={InvImg}
              alt="Kodnest Logo"
              className="h-20 w-20 rounded-lg shadow-md"
            />
          </div>
            <p className="text-gray-400 mb-4">Jun 2023 – Jul 2023</p>
            <ul className="list-disc ml-5 space-y-2 text-gray-300">
              <li>
                Completed a 7-week training program, mastering Java development
                and microservices concepts.
              </li>
              <li>
                Designed and implemented backend solutions using Spring Boot and
                RESTful APIs.
              </li>
              <li>
                Project:{" "}
                <span className="text-teal-400 font-semibold">
                  Product Services
                </span>
              </li>
              <li>
                Technologies:{" "}
                <span className="text-blue-400">
                  Java, DBMS, MongoDB, Linux, Spring Boot
                </span>
              </li>
            </ul>
          </div>

          <div
            className={`transform transition-all duration-1000 ease-in-out ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
             <a href="https://www.kodnest.com/">Kodnest EdTech | Java Full Stack Intern</a> 
            </h3>
            <div className="mb-4 flex float-right">
            <img
              src={KodImg} 
              alt="Kodnest Logo"
              className="h-20 w-20 rounded-lg shadow-md"
            />
          </div>
           
            <p className="text-gray-400 mb-4">March 2024 – Current</p>
            <ul className="list-disc ml-5 space-y-2 text-gray-300">
              <li>Currently pursuing Java Full Stack Internship.</li>
              <li>Designed and implemented RESTful APIs using <u className="font-bold">Spring Boot</u> to handle backend processes and integrated them with a dynamic front end.<br/></li>
              <li>Created responsive front-end interfaces using <u className="font-bold">React Vite</u> for a seamless user experience.</li>
              <li>
                Technologies:{" "}
                <span className="text-blue-400">
                  HTML, CSS, JavaScript, Spring Boot, Java, MySQL, Maven,
                  Project Integration, Performance Optimization
                </span>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};


