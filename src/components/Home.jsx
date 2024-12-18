import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import { ReactTyped as Typed } from "react-typed";
import ContactMeModal from "./ConatctMeModal";
import resume from "./Data/Resume-man.pdf"

function Home() {
  const [loaded, setLoaded] = useState(false);

  const [openProfileModal, setOpenProfileModal] = useState(false);
  const handleOpenProfileModal = () => setOpenProfileModal(true);
  const handleClose = () => setOpenProfileModal(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 100);
  }, []);

  return (
    <div className="h-screen flex flex-col bg-black text-white m-4 sm:m-7 w-full md:w-[70%]">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-8 md:px-16 mt-16">
        <div className="flex items-center gap-4 mb-6 sm:mb-8 transition-all duration-1500 ease-in-out">
          <div className="flex h-8 w-8 items-center justify-center relative">
            <span className="absolute inline-flex h-full w-full animate-bounce rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex h-4 w-4 rounded-full bg-teal-400"></span>
          </div>
          <span className="text-xl sm:text-2xl font-bold text-white">
            AVAILABLE FOR HIRE
          </span>
        </div>

        {/* Header Text */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 transform transition-all duration-1500 ease-in-out ${
            loaded ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
          }`}
        >
          Hello, <br />
          I'm{" "}
          <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text">
            Manohar Gowda.
          </span>
          <br />A{" "}
          <span className="italic font-extrabold text-blue-400">
            <Typed
              strings={["Spring-Boot Developer", "React Vite Developer"]}
              typeSpeed={50}
              backSpeed={50}
              loop
            />
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-4 sm:mb-8 leading-relaxed">
          Enthusiastic about crafting innovative web applications that delight
          users and drive success. <br />
          Passionate about transforming ideas into seamless, user-friendly
          experiences. <br />
          Driven to stay ahead of trends and continuously improve my skills to
          deliver high-quality solutions. <br />
          Excited to collaborate with others to bring impactful products to
          life.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap space-x-4 space-y-2 sm:space-y-0 sm:flex-nowrap text-lg sm:text-lg md:text-xl">
          <a
            href={resume} // Replace with your actual PDF path
            download="Resume.pdf" // Optional: specify the filename for the downloaded file
            className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-extrabold px-4 py-2 rounded-xl transition duration-200 whitespace-nowrap"
          >
            Download Resume
          </a>
          <button
            onClick={handleOpenProfileModal}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 px-4 py-2 rounded-xl text-White font-extrabold transition duration-200 whitespace-nowrap"
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* Social Icons Section */}
      <div className="fixed top-0 left-0 h-screen hidden sm:flex flex-col justify-center items-center gap-4 bg-black p-4 text-white">
        {/* Social Media Icons */}
        <SocialIcon
          url="https://github.com/Manohar-gowda"
          target="_blank"
          rel="noopener noreferrer"
          style={{ height: 50, width: 50 }}
          className="transition-transform transform hover:scale-150 duration-500 ease-in-out"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/manohar-gowda-24a64b255/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ height: 50, width: 50 }}
          className="transition-transform transform hover:scale-150 duration-500 ease-in-out"
        />
        <SocialIcon
          url="https://x.com/Manohar61756726"
          target="_blank"
          rel="noopener noreferrer"
          style={{ height: 50, width: 50 }}
          className="transition-transform transform hover:scale-150 duration-500 ease-in-out"
        />

        {/* Separator Line */}
        <div className="h-12 border-l-2 border-gray-600"></div>

        {/* Follow Me Text */}
        <div className="rotate-90 whitespace-nowrap">
          <span className="font-bold text-lg tracking-wider">Follow Me</span>
        </div>
      </div>

      {/* Mobile Social Icons */}
      <div className="flex sm:hidden justify-center mt-4 gap-4">
        <SocialIcon
          url="https://github.com/Manohar-gowda"
          target="_blank"
          rel="noopener noreferrer"
          style={{ height: 40, width: 40 }}
          className="transition-transform transform hover:scale-110 duration-500 ease-in-out"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/manohar-gowda-24a64b255/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ height: 40, width: 40 }}
          className="transition-transform transform hover:scale-110 duration-500 ease-in-out"
        />
        <SocialIcon
          url="https://x.com/Manohar61756726"
          target="_blank"
          rel="noopener noreferrer"
          style={{ height: 40, width: 40 }}
          className="transition-transform transform hover:scale-110 duration-500 ease-in-out"
        />
      </div>
      <section>
        <ContactMeModal handleClose={handleClose} open={openProfileModal} />
      </section>
    </div>
  );
}

export default Home;
