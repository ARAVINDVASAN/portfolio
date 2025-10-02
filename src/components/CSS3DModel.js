import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaCog } from 'react-icons/fa';
// filepath: c:\Users\aravi\Desktop\cursor_portfolio\src\components\CSS3DModel.js
import Spline from '@splinetool/react-spline';
// ...existing code...

const CSS3DModel = ({
  title = "3D Experience",
  description = "Interactive 3D elements",
  className = "",
  style = {}
}) => {
  return (
    <motion.div
      className={`relative ${className}`}
      style={style}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-accent-500/10 rounded-2xl relative overflow-hidden">
        {/* Spline 3D Scene */}
        <div className="relative  h-full w-full">
                  <Spline scene="https://prod.spline.design/C5FE1GStmdDCCE0O/scene.splinecode" />

          
        </div>
        {/* ...rest of your code... */}
      </div>
    </motion.div>
  );
};

export default CSS3DModel;