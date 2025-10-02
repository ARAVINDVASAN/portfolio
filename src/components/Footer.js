import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/ARAVINDVASAN', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/aravind-s-13b111224/', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-black border-t border-gray-700/50 relative">
      {/* Dark theme background overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-dark-900/50 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <motion.h3 
              className="text-3xl font-bold gradient-text-cyber mb-6"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Portfolio
            </motion.h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A passionate developer creating innovative digital experiences with modern technologies.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-2xl text-gray-500 hover:text-white transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-300">
              <p>aravindvasan33@gmail.com</p>
              <p>+91 9445937148</p>
              
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-gray-300 text-center md:text-left mb-4 md:mb-0">
            <p className="flex items-center justify-center md:justify-start gap-2">
              © 2025 Aravind </p>
             
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 px-4 py-2 glass-effect rounded-lg text-gray-300 hover:text-white transition-colors duration-300"
          >
            <FaArrowUp />
            Back to Top
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
