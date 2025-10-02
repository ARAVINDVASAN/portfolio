import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaRocket } from 'react-icons/fa';
import { HiCode, HiSparkles } from 'react-icons/hi';
import CSS3DModel from './CSS3DModel';
import ParticleBackground from './ParticleBackground';
import Spline from '@splinetool/react-spline';


const ThreeDHero = () => {
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
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
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 py-8">
        {/* Left Side - Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
                     </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl font-bold mb-8 leading-tight sm:mt-36"
          >
            <motion.span 
              className="gradient-text-cyber text-3xl md:text-5xl "
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Hi , I am Aravind
              <motion.span
    animate={{ opacity: [0, 1, 0] }}
    transition={{ duration: 1.5, repeat: Infinity }}
    className="inline-block  gradient-text"
  >
    ...
  </motion.span>
            </motion.span>
            <br />
            <motion.span 
              className="text-white md:text-4xl text-lg"
              animate={{ 
                textShadow: [
                  '0 0 20px rgba(14, 165, 233, 0.5)',
                  '0 0 40px rgba(217, 70, 239, 0.5)',
                  '0 0 20px rgba(14, 165, 233, 0.5)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
             Fullstack Developer
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl leading-relaxed"
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
              Driven by learning and innovation to design seamless, user-focused experiences
            </motion.span>
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-16"
          >
            <a href="/Aravind-SoftwareEngineer-Resume.pdf" target="_blank" rel="noopener noreferrer">
  <motion.button
    whileHover={{ scale: 1.05, y: -5 }}
    whileTap={{ scale: 0.95 }}
    className="btn-primary flex items-center gap-3 shimmer-effect"
  >
    <FaDownload className="animate-bounce" />
    View / Download CV
  </motion.button>
</a>

            <motion.a
              href='#projects'
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center gap-3 text-white"
              
            >
              <FaRocket className="animate-pulse" />
              View Projects
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start space-x-6"
          >
            {[
              { icon: FaGithub, href: 'https://github.com/ARAVINDVASAN', color: 'hover:text-gray-300' },
              { icon: FaLinkedin, href: 'https://www.linkedin.com/in/aravind-s-13b111224/', color: 'hover:text-blue-400' },
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

        {/* Right Side - 3D Model */}
         <motion.div
          
          className=" h-[600px] lg:h-[700px] w-full"
        >
          
                            <Spline scene="https://prod.spline.design/C5FE1GStmdDCCE0O/scene.splinecode" />
                            </motion.div>

          {/* <motion.div
            className="w-full h-full glass-effect rounded-2xl overflow-hidden"
            animate={{ 
              boxShadow: [
                '0 20px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(14, 165, 233, 0.3)',
                '0 20px 60px rgba(0, 0, 0, 0.6), 0 0 60px rgba(217, 70, 239, 0.4)',
                '0 20px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(14, 165, 233, 0.3)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <CSS3DModel
              title="Interactive 3D Experience"
              description="Modern web technologies and design"
              className="w-full h-full"
            />
          </motion.div> */}
{/*           
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur-sm"
          />
          <motion.div
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full blur-sm"
          />
        </motion.div>  */}
      </div>

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

export default ThreeDHero;
