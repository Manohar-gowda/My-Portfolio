import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="max-w-4xl mx-auto px-6">
        <br />
        <br />
        <motion.h2
          className="text-4xl font-extrabold text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="text-lg leading-relaxed space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p>
            Hey! I am <span className="font-bold text-teal-400">Manohar Gowda</span>, excited and dedicated to the most thrilling world of engineering and technology. My journey began when I pursued a BE in Computer Science and Engineering at <span className="font-bold"><a href=''>Government Engineering College, Kushalanagar</a></span>, where various interesting subjects were explored.
          </p>
          <p>
            I had the greatest opportunity to work as an intern in some great companies throughout my academic career. At <span className="font-bold">Inventeron Technologies</span>, I sharpened my skills with valuable experience, digging deeper into projects that challenged and inspired me. I'm currently looking forward to further growth as a <span className="font-bold">Java Full Stack Intern</span> at <span className="font-bold">Kodnest EdTech</span>, where every day becomes a learning experience and opportunity for innovations.
          </p>
          <p>
            I have been privileged to work on several pretty cool projects. Examples of such projects include the development of an admin panel aimed at helping in the efficient management of users and constructing a product services platform that operates perfectly with MongoDB. Overall, I always aim for effective solutions that have a real impact. One such project has been a forensic face sketch recognition app, which certainly set new standards for this area of technology.
          </p>
          <p>
            Beyond my technical skills, I am committed to continuous learning and personal development. I have certifications in various areas, and I am always looking for new challenges and opportunities to grow.
          </p>
          <p>
            When I'm out of the tech world, I love exploring new places, reading, and getting active. I believe that hard work, curiosity, and creativity are the powers through which one can make something good happen. The excitement is endless with what can be done.
          </p>
          <p>
            Let's connect and collaborate to bring ideas to life!
          </p>
        </motion.div>
      </div>
    </section>
  );
};
