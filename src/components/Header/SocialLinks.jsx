import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  {
    icon: FaGithub,
    href: 'https://github.com',
    label: 'GitHub'
  },
  {
    icon: FaLinkedin,
    href: 'https://linkedin.com',
    label: 'LinkedIn'
  },
  {
    icon: FaEnvelope,
    href: 'mailto:contact@example.com',
    label: 'Email'
  }
];

const SocialLinks = () => {
  return (
    <div className="flex justify-center gap-6 mt-6">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <motion.a
          key={label}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-2xl hover:text-teal-400"
        >
          <Icon />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;