import React from "react";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import BlinkingText from "../ui/BlinkingText";

const devOption = [
  {
    name: "Joshua Pacho",
    position: "Full Stack Developer",
    tech_stack: "Laravel - Php, React - (MERN) - NextJs",
    description:
      "Passionate about creating elegant solutions to complex problems. With 3 years of experience in full-stack development freelancing, I specialize in building scalable web applications using modern technologies like React, Node.js, and cloud platforms.",
  },
];

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center mb-12 md:mb-16 px-4 p-6"
    >
      {devOption.map((dev, index) => (
        <div key={index}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{dev.name}</h1>
          <BlinkingText position={dev.position} />
          <p className="text-md text-gray-400 mb-4">{dev.tech_stack}</p>
          <p className="text-lg max-w-2xl mx-auto mb-6 text-muted-foreground text-justify">
            {dev.description}
          </p>
        </div>
      ))}
      {/* <SocialLinks /> */}
    </motion.header>
  );
};

export default Header;
