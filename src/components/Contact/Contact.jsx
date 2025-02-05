import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { FaEnvelope, FaFacebook, FaGithub } from 'react-icons/fa'; // Import icons for social links

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="max-w-3xl mx-auto mt-12 md:mt-16 px-4"
    >
      <Card className="text-center">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">Let's Connect!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg md:text-xl mb-4">
            I'm always open to discussing new opportunities, collaborations, and projects. If you're passionate about tech, innovation, or creating impactful digital solutions, I'm here to help!
          </p>
          <p className="text-muted-foreground mb-6">
            Whether you're looking to build something from scratch, need advice on a current project, or simply want to chat about the latest trends in technology, I would love to connect. Feel free to reach out, and let's bring your ideas to life together!
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="mailto:jshpch1996@gmail.com"
              className="text-xl text-muted-foreground hover:text-accent transition-colors"
            >
              <FaEnvelope />
            </a>

            {/* Facebook Link */}
            <a
              href="https://www.facebook.com/JoshDevIlokano/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-muted-foreground hover:text-accent transition-colors"
            >
              <FaFacebook />
            </a>
            {/* GitHub Link */}
            <a
              href="https://github.com/joshdevkit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-muted-foreground hover:text-accent transition-colors"
            >
              <FaGithub />
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
};

export default Contact;
