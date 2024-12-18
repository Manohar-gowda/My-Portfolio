import React from "react";
import img1 from "./Data/chat1.png";
import img2 from "./Data/Chat2.png";

export const Project3 = () => {
  return (
    <div className="h-full bg-gray-900 text-white p-6 sm:p-10">
      <br />
      <br />
      <div className="flex items-center gap-4 mb-8 sm:mb-12">
        <div className="flex h-10 w-10 items-center justify-center relative">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-60"></span>
          <span className="relative inline-flex h-6 w-6 rounded-full bg-purple-400"></span>
        </div>
        <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 text-transparent bg-clip-text">
          Real-Time Group Chat Application
        </span>
      </div>

      <h1 className="font-extrabold sm:text-2xl md:text-2xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent hover:from-pink-500 hover:to-orange-500 bg-clip-text">
        <a
          href="https://github.com/Manohar-gowda/Chat-WebSocket"
        >
          Repository Link
        </a>
      </h1>

      <br />
      <br />
      <div className="text-gray-300 md:text-xl space-y-4 font-bold sm:text-lg mb-10">
        <p className="md:text-2xl sm:text-lg">
          The Real-Time Group Chat Application is a collaborative messaging platform developed using{" "}
          <span className="text-purple-400">Spring Boot WebSocket</span> and{" "}
          <span className="text-purple-400">Thymeleaf</span>. It allows multiple users to join and communicate seamlessly in real time.
        </p>
        <ul className="space-y-4 list-disc">
          <li>
            <span className="text-white font-semibold">Real-Time Messaging</span>:  
            Users can send and receive messages instantly via WebSocket connections.
          </li>
          <li>
            <span className="text-white font-semibold">User Activity Status</span>:  
            Displays notifications when users join or leave the chat.
          </li>
          <li>
            <span className="text-white font-semibold">Dynamic UI Updates</span>:  
            Messages and user activities are updated dynamically without page refresh.
          </li>
          <li>
            <span className="text-white font-semibold">STOMP Protocol</span>:  
            Ensures structured and reliable message delivery over WebSocket.
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
    
        <div className="relative group">
          <img
            src={img1} 
            alt="Real-Time Messaging"
            className="w-[950px] h-[450px] object-cover rounded-lg shadow-xl transform transition duration-500 hover:scale-105"
          />
        
        </div>

        <div className="relative group">
          <img
            src={img2} 
            alt="User Activity Status"
            className="w-[950px] h-[450px] object-cover rounded-lg shadow-xl transform transition duration-500 hover:scale-105"
          />

        </div>
      </div>
    </div>
  );
};
