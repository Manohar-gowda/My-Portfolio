import React from "react";

import img1 from "./Data/confab1.png";
import img2 from "./Data/confab2.png";
import img3 from "./Data/confab3.png";
import img4 from "./Data/confab4.png";
import img5 from "./Data/confab5.png";
import img6 from "./Data/confab6.png";

export const Project1 = () => {
  return (
    <div className="h-full bg-gray-900 text-white p-6 sm:p-10">
      <br />
      <br />
      <div className="flex items-center gap-4 mb-8 sm:mb-12">
        <div className="flex h-10 w-10 items-center justify-center relative">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60"></span>
          <span className="relative inline-flex h-6 w-6 rounded-full bg-teal-400"></span>
        </div>
        <span className="text-2xl sm:text-3xl font-extrabold mb-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text">
          Confab Social App
        </span>
      </div>
      <h1 className="font-extrabold sm:text-2xl md:text-2xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent hover:from-pink-500 hover:to-orange-500 bg-clip-text">
        <a
          href="https://github.com/Manohar-gowda/conFab-SocialApp-SpringBoot-React-SQL"
        >
          Repository Link
        </a>
      </h1>

      <br />
      <br />
     
      <div className="text-gray-300 md:text-xl space-y-4 font-bold sm:text-lg mb-10">
        <p className="md:text-2xl sm:text-lg">
          Confab Social App is a dynamic full-stack social media application
          built using React, Spring Boot, and SQL.
        </p>
        <ul className="space-y-4 list-disc">
          <li>
            The app begins with robust authentication via JWT (JSON Web Tokens),
            ensuring secure user registration and login.
          </li>
          <li>
            It utilizes local storage and session management for seamless user
            navigation across different sections of the app without needing to
            log in again.
          </li>
          <li>
            The core features include creating posts, viewing posts from other
            users, liking and commenting on posts, and an interactive user
            profile management system.
          </li>
          <li>
            A verification mark can also be purchased to distinguish users,
            showcasing the potential for a more engaging, secure, and
            personalized platform.
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
  {[
    { id: 1, src: img1, alt: "Screenshot 1" },
    { id: 2, src: img2, alt: "Screenshot 2" },
    { id: 3, src: img3, alt: "Screenshot 3" },
    { id: 4, src: img4, alt: "Screenshot 4" },
    { id: 5, src: img5, alt: "Screenshot 5" },
    { id: 6, src: img6, alt: "Screenshot 6" },
  ].map((image) => (
    <div
      key={image.id}
      className="relative group overflow-hidden rounded-lg shadow-xl"
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover object-center transform transition-transform duration-500 hover:scale-105"
      />
    </div>
  ))}
</div>

    </div>
  );
};
