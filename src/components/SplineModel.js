import React, { Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { FaCube } from 'react-icons/fa';

const SplineModel = ({ 
  scene = "https://prod.spline.design/6Wc1Q7YGyM-iab9p/scene.splinecode",
  className = "",
  style = {},
  onLoad = () => {},
  onError = () => {}
}) => {
  // Use a more reliable Spline model URL
  const reliableScene = scene || "https://prod.spline.design/6Wc1Q7YGyM-iab9p/scene.splinecode";
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setHasError(false);
    onLoad();
  };

  const handleError = (error) => {
    setHasError(true);
    onError(error);
  };

  return (
    <motion.div
      className={`relative ${className}`}
      style={style}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {hasError ? (
        // Fallback content when model fails to load
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-accent-500/10 rounded-2xl">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-6xl mb-4 gradient-text-cyber"
          >
            <FaCube />
          </motion.div>
          <h3 className="text-xl font-bold text-white mb-2">3D Model</h3>
          <p className="text-gray-400 text-center px-4">
            Interactive 3D experience would be here
          </p>
          <motion.div
            className="mt-4 flex space-x-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
            <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
            <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
          </motion.div>
        </div>
      ) : (
        <Suspense
          fallback={
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-accent-500/10 rounded-2xl">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full mb-4"
              />
              <p className="text-gray-300">Loading 3D Model...</p>
            </div>
          }
        >
          <Spline
            scene={reliableScene}
            onLoad={handleLoad}
            onError={handleError}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '1rem',
              overflow: 'hidden',
            }}
          />
        </Suspense>
      )}
    </motion.div>
  );
};

export default SplineModel;
