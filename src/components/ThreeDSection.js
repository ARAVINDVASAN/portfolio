import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SplineModel from './SplineModel';

const ThreeDSection = ({ 
  title = "Interactive 3D Experience",
  description = "Explore this interactive 3D model",
  scene = "https://prod.spline.design/6Wc1Q7YGyM-iab9p/scene.splinecode",
  height = "500px",
  className = ""
}) => {
  const [modelLoaded, setModelLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleModelLoad = () => {
    setModelLoaded(true);
  };

  const handleModelError = (error) => {
    console.error('Spline model failed to load:', error);
  };

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="text-center mb-8">
        <motion.h3 
          className="text-3xl md:text-4xl font-bold mb-4 gradient-text-cyber"
          animate={{ 
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {title}
        </motion.h3>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      <motion.div
        className="relative glass-effect rounded-2xl overflow-hidden"
        style={{ height }}
        animate={isHovered ? { 
          scale: 1.02,
          boxShadow: [
            '0 20px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(14, 165, 233, 0.3)',
            '0 20px 60px rgba(0, 0, 0, 0.6), 0 0 60px rgba(217, 70, 239, 0.4)',
            '0 20px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(14, 165, 233, 0.3)'
          ]
        } : {
          scale: 1,
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(14, 165, 233, 0.1)'
        }}
        transition={{ duration: 0.3 }}
      >
        <SplineModel
          scene={scene}
          onLoad={handleModelLoad}
          onError={handleModelError}
          className="w-full h-full"
        />
        
        {/* Loading overlay */}
        {!modelLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-accent-500/10 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full"
            />
          </div>
        )}

        {/* Floating elements */}
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur-sm"
        />
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-4 left-4 w-3 h-3 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full blur-sm"
        />
      </motion.div>

      {/* Interactive hint */}
      <motion.div
        className="mt-4 text-center"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="text-sm text-gray-400">
          🖱️ Hover and interact with the 3D model
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ThreeDSection;
