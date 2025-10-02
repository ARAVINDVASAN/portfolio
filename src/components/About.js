import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaLightbulb, FaUsers } from 'react-icons/fa';
import CSS3DModel from './CSS3DModel';

const About = () => {
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

  const features = [
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.',
    },
    {
      icon: FaRocket,
      title: 'Performance',
      description: 'Optimizing applications for speed, scalability, and excellent user experience.',
    },
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'Staying updated with latest technologies and implementing creative solutions.',
    },
    {
      icon: FaUsers,
      title: 'Collaboration',
      description: 'Working effectively in teams and communicating complex technical concepts clearly.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black via-dark-900 to-dark-800 relative">
      {/* Dark theme background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 pointer-events-none"></div>
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
            <span className="gradient-text-cyber">About Me</span>
          </motion.h2>
          <motion.p 
            className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Passionate developer with a love for creating innovative solutions and beautiful user experiences.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                  I’m Aravind , i completed my bachelor degree  in Electrical and Electronics Engineering at SSN College Of Engineering, but i developed strong passion for building modern web applications . Over time, my curiosity for technology has grown into a journey of continuous learning and creating solutions that blend functionality with great user experience.

 
                </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-4">What I Do</h3>
              <p className="text-gray-300 leading-relaxed">
                                  With 10 months of hands-on experience in web development, I’ve had the opportunity to work on real-time projects with a focus on both technical execution and business impact. Every project has taught me something new—whether it’s optimizing performance, enhancing UI/UX, or integrating APIs—and continues to drive me to create meaningful, user-friendly solutions.

              </p>
            </motion.div>

            {/* <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">5+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </motion.div> */}
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10, rotateY: 5 }}
              className="glass-effect p-8 rounded-2xl card-hover shimmer-effect relative overflow-hidden"
            >
              <motion.div 
                className="text-4xl gradient-text-cyber mb-6"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
              >
                <feature.icon />
              </motion.div>
              <h4 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h4>
              <p className="text-gray-300 text-base leading-relaxed">
                {feature.description}
              </p>
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 3D Model Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          {/* <CSS3DModel
            title="Interactive 3D Experience"
            description="Explore this interactive 3D model showcasing modern web technologies and design"
            className="h-96"
          /> */}

        </motion.div>
      </div>
    </section>
  );    
};

export default About;
