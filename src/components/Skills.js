import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaPython, 
  FaGitAlt, 
  FaDocker,
  FaAws,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiPostgresql, SiTypescript, SiNextdotjs } from 'react-icons/si';
import { BiLogoDjango } from "react-icons/bi";


const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: FaReact, level: 95, color: 'text-blue-400' },
        // { name: 'Next.js', icon: SiNextdotjs, level: 90, color: 'text-gray-100' },
        { name: 'TypeScript', icon: SiTypescript, level: 88, color: 'text-blue-500' },
        { name: 'JavaScript', icon: FaJs, level: 92, color: 'text-yellow-400' },
        { name: 'HTML5', icon: FaHtml5, level: 95, color: 'text-orange-500' },
        { name: 'CSS3', icon: FaCss3Alt, level: 90, color: 'text-blue-500' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 88, color: 'text-cyan-400' },
        { name: 'Bootstrap', icon: FaBootstrap, level: 85, color: 'text-purple-500' },
      ]
    },
    {
      title: 'Backend',
      skills: [
                { name: 'Django', icon: BiLogoDjango
, level: 90, color: 'text-green-500' },

        { name: 'Node.js', icon: FaNodeJs, level: 90, color: 'text-green-500' },
        { name: 'Python', icon: FaPython, level: 85, color: 'text-yellow-500' },
        { name: 'MongoDB', icon: SiMongodb, level: 88, color: 'text-green-600' },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 82, color: 'text-blue-600' },
        { name: 'Database Design', icon: FaDatabase, level: 80, color: 'text-blue-400' },
      ]
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git', icon: FaGitAlt, level: 92, color: 'text-orange-500' },
        // { name: 'Docker', icon: FaDocker, level: 75, color: 'text-blue-500' },
        { name: 'AWS', icon: FaAws, level: 30, color: 'text-orange-400' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-dark-800 via-black to-dark-900 relative">
      {/* Dark theme background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50 pointer-events-none"></div>
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
            <span className="gradient-text-cyber">Skills & Technologies</span>
          </motion.h2>
          <motion.p 
            className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            A comprehensive toolkit of modern technologies and frameworks I use to build amazing applications.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-8">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
  {category.skills.map((skill, skillIndex) => (
    <motion.div
      key={skillIndex}
      variants={itemVariants}
      whileHover={{ scale: 1.1, y: -10, rotateY: 5 }}
      className="glass-effect p-4 rounded-2xl card-hover text-center group shimmer-effect relative overflow-hidden"
    >
      <motion.div
        className={`flex items-center justify-center gap-2 text-xl ${skill.color} group-hover:animate-pulse`}
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: skillIndex * 0.2 }}
      >
        <skill.icon />
        <span className="text-white font-bold text-lg">{skill.name}</span>
      </motion.div>
    </motion.div>
  ))}
</div>

        </motion.div>))}
       </motion.div>
        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'RESTful APIs','Responsive Design',
              'Agile Methodologies', 'Test-Driven Development',
              'Performance Optimization', 'SEO', 'Api-Integration'
            ].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-gray-300 hover:text-white transition-colors duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
