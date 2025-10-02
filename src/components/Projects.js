import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {FaCode, FaRocket } from 'react-icons/fa';


const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Flight & Hotel Booking Platform',
      description: 'I am working on a fully-featured flight and hotel booking platform that integrates multiple third-party APIs to provide real-time availability, pricing, and seamless booking.The platform supports business concepts like agents, sub-agents, B2C dashboards, commission structures, and markup management, enabling partners to run their own branded booking services. My role involves developing both the front-end and back-end, ensuring smooth API integrations, secure transactions, and a user-friendly experience. The platform allows users to search, filter, and book flights and hotels efficiently, combining real-time data.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Django', 'Postgres', 'Razorpay', 'Redux','Galileo','Grn','Bootstrap'],
      category: 'fullstack',
      featured: true
    },
    {
      id: 2,
      title: 'DevChat – Developer Networking Platform with AI',
      description: 'DevChat is a networking platform for developers to connect, collaborate, and share opportunities. The platform allows users to send requests, accept connections, and match with other developers according to there interest. I integrated AI-powered chat functionality using Socket.IO, enabling real-time intelligent conversations and assistance within the chat.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Express', 'Tailwind css', 'Mongodb', 'Socket.io'],
      category: 'fullstack',
      github: '#',
      live: '#',
      featured: false
    },
    {
      id: 3,
      title: 'FoodHunt',
      description: 'FoodHunt is a responsive platform that allows users to browse, search, and filter restaurants based on their preferences. I integrated Swiggy’s real-time API using CORS to fetch live restaurant data, ensuring up-to-date availability, menus, and ratings. The project focuses on providing a smooth and intuitive user experience, enabling users to quickly discover top-rated restaurants, explore cuisines, and make informed choices.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Swiggy API', 'Tailwind CSS','Cors'],
      category: 'frontend',
      github: '#',
      live: '#',
      featured: false
    },
   
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with smooth animations, dark mode, and optimized performance.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite','Spline'],
      category: 'frontend',
      github: '#',
      live: '#',
      featured: false
    },
   
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-dark-900 via-black to-dark-800 relative">
      {/* Dark theme background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/30 pointer-events-none"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-8"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="gradient-text-cyber">Featured Projects</span>
          </motion.h2>
          <motion.p 
            className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            A showcase of my recent work and side projects, demonstrating my skills and passion for development.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'glass-effect text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ y: -15, rotateY: 5 }}
                className={`glass-effect rounded-2xl overflow-hidden card-hover shimmer-effect relative ${
                  project.featured ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="relative overflow-hidden">
                  <motion.div 
                    className="w-full h-48 bg-gradient-to-br from-primary-500/20 via-secondary-500/20 to-accent-500/20 flex items-center justify-center"
                    animate={{ 
                      background: [
                        'linear-gradient(45deg, rgba(14, 165, 233, 0.2), rgba(217, 70, 239, 0.2))',
                        'linear-gradient(45deg, rgba(217, 70, 239, 0.2), rgba(234, 179, 8, 0.2))',
                        'linear-gradient(45deg, rgba(234, 179, 8, 0.2), rgba(14, 165, 233, 0.2))'
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    >
                      <FaCode className="text-8xl gradient-text-cyber" />
                    </motion.div>
                  </motion.div>
                  {project.featured && (
                    <motion.div 
                      className="absolute top-4 left-4 bg-gradient-to-r from-accent-400 to-accent-600 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ⭐ Featured
                    </motion.div>
                  )}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
{/* 
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <FaGithub />
                      <span className="text-sm">Code</span>
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <FaExternalLinkAlt />
                      <span className="text-sm">Live Demo</span>
                    </motion.a>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary flex items-center gap-2 mx-auto"
            href='https://github.com/ARAVINDVASAN'
          >
            <FaRocket />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
