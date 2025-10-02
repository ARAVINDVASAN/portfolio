import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaRocket } from 'react-icons/fa';
import { HiCode, HiSparkles } from 'react-icons/hi';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-primary-500/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-gradient-radial from-secondary-500/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: 180,
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-radial from-accent-500/15 to-transparent rounded-full blur-2xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 text-center relative z-10"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block text-8xl mb-6 relative"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-4 -right-4 text-2xl"
            >
              <HiSparkles className="text-accent-400" />
            </motion.div>
            <HiCode className="gradient-text-cyber neon-glow" />
          </motion.div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
        >
          <motion.span 
            className="gradient-text-cyber"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Full Stack
          </motion.span>
          <br />
          <motion.span 
            className="text-white"
            animate={{ 
              textShadow: [
                '0 0 20px rgba(14, 165, 233, 0.5)',
                '0 0 40px rgba(217, 70, 239, 0.5)',
                '0 0 20px rgba(14, 165, 233, 0.5)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Developer
          </motion.span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          <motion.span
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Crafting digital experiences with modern technologies and innovative solutions.
          </motion.span>
          <br />
          <motion.span
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="gradient-text"
          >
            Passionate about creating beautiful, functional, and user-centered applications.
          </motion.span>
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary flex items-center gap-3 shimmer-effect"
          >
            <FaDownload className="animate-bounce" />
            Download CV
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary flex items-center gap-3"
          >
            <FaRocket className="animate-pulse" />
            View Projects
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6"
        >
          {[
            { icon: FaGithub, href: '#', color: 'hover:text-gray-300' },
            { icon: FaLinkedin, href: '#', color: 'hover:text-blue-400' },
            { icon: FaTwitter, href: '#', color: 'hover:text-blue-400' },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className={`text-2xl text-gray-500 transition-colors duration-300 ${social.color}`}
            >
              <social.icon />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
