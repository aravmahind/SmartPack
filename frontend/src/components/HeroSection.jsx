import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/hero.jpg";
import { FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-dark_purple text-white py-16 px-8 overflow-hidden">
      {/* Scattered Elements */}
      <div className="absolute top-10 left-10 w-8 h-8 rounded-full bg-purple-600 opacity-50"></div>
      {/* <div className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-gray-400 opacity-75"></div> */}
      <div className="absolute bottom-20 right-20 w-6 h-6 transform rotate-45 bg-purple-500 opacity-60"></div>

      {/* Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-68 text-center md:text-left py-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to <span className="text-purple-400">SmartPack!</span> <br /> AI Trip Planner

          </motion.h1>
        
          <p className="text-gray-300 mb-6">
          Streamline your packing process with SmartPack! Effortlessly create personalized packing lists, ensure you never forget essentials, and pack smarter with AI-powered recommendations tailored to your destination and travel style. Let SmartPack make packing stress-free and efficient like never before!
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Link to="/Planner">
              <button className="bg-purple-600 px-6 py-3 rounded-full text-white font-medium hover:bg-purple-700 transition">
                Start Planning!
              </button>
            </Link>
            <Link to='https://github.com/aravmahind/SmartPack'>
            <button className="border-2 border-gray-500 px-6 py-3 rounded-full text-white font-medium hover:bg-gray-700 transition">
              <div className="flex items-center gap-2">
              Github <FaGithub className='p-[2px] w-6 h-6'/></div>
            </button> </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
          <motion.div
            className="w-64 h-64 bg-gray-800 rounded-full overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Placeholder for image */}
            <img
              src={heroImg}
              alt="Designer Placeholder"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Circular Badge */}
            <motion.div
              className="absolute bottom-0 right-0 bg-black text-white border-2 border-purple-500 rounded-full px-4 py-2 text-sm "
              initial={{ opacity: 0, rotate: -30 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              AI Powered
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;