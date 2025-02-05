import React from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const personalInfo = {
  name: "Joshua Pacho",
  degree: "Bachelor of Science in Information Technology",
  university: "Isabela State University",
  graduationYear: "2022-2023",
  description:
    "A passionate full-stack developer with a focus on Laravel - php framework, React and Node.js. I graduated with a degree in Information Technology and have been building web applications ever since.",
  skills: ["React", "Node.js", "Express", "MongoDB", "Next.js", "Laravel", 'Php', 'MVC'],
};

const SidebarPersonal = () => {
  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-0 min-h-screen w-72 bg-background border-r p-6 mb-10 hidden md:flex flex-col justify-between"
    >
      <div className="flex flex-col items-center">
        <img
          src="/dev.jpg"
          alt="Profile"
          className="rounded-full max-w-[150px] max-h-[150px] mb-6 object-contain shadow-lg"
        />

        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground mb-4">{personalInfo.description}</p>
          <p className="text-md font-semibold text-gray-800 dark:text-gray-50">{personalInfo.degree}</p>
          <p className="text-sm text-gray-400 mb-4">{personalInfo.university}</p>
          <p className="text-sm text-gray-400">{`Graduated: ${personalInfo.graduationYear}`}</p>

          <motion.div
            className="mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-lg font-semibold">Skills:</h3>
            <motion.ul
              className="text-sm text-muted-foreground"
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {personalInfo.skills.map((skill, index) => (
                <motion.li
                  key={index}
                  className="flex items-center"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="mr-2">•</span>
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>

      <div className="pb-4 flex justify-center">
        <ThemeToggle />
      </div>
    </motion.aside>
  );
};

export default SidebarPersonal;
