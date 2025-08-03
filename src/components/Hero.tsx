"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX, FiTrendingUp, FiUsers, FiDollarSign, FiBarChart2 } from "react-icons/fi";
import { RiRobot2Line } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sample data for the chart
  const chartData = [30, 60, 40, 80, 60, 90, 120];
  const maxData = Math.max(...chartData);

  return (
    <section className="relative text-white py-12 md:py-24 px-4 md:px-6 text-center min-h-[calc(100vh-80px)] md:min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 md:p-6 z-50 bg-black/30 backdrop-blur-md border-b border-gray-700/50">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/logo/logo.png" 
              alt="ADmyBRAND Logo"
              width={200}
              height={50}
              className="hover:scale-110 transition-transform"
            />
            
          </Link>
          
          <div className="hidden md:flex items-center gap-6 ml-8">
            <Link href="/pricing" className="text-gray-300 hover:text-blue-400 transition-colors">
              Pricing
            </Link>
            <Link href="/resources" className="text-gray-300 hover:text-blue-400 transition-colors">
              Resources
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="/login" 
            className="text-gray-300 hover:text-pink-400 transition-colors px-3 py-1"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="text-gray-300 hover:text-pink-400 transition-colors px-3 py-1"
          >
            Sign Up
          </Link>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-50 focus:outline-none text-gray-300 hover:text-white"
          >
            {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 pt-20 px-6 text-right"
          >
            <div className="flex justify-end">
              <ul className="space-y-6 text-xl w-max">
                {['Pricing', 'Resources', 'Contact'].map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: -10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      href={`/${item.toLowerCase()}`} 
                      className="hover:text-blue-400 transition-colors block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.li>
                ))}
                <div className="pt-4 border-t border-gray-700/50">
                  {['Login', 'Sign Up'].map((item) => (
                    <motion.li
                      key={item}
                      whileHover={{ x: -10 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4"
                    >
                      <Link 
                        href={`/${item.toLowerCase().replace(' ', '-')}`} 
                        className={`block ${item === 'Sign Up' ? 'text-pink-400 hover:text-pink-300' : 'text-blue-400 hover:text-blue-300'} transition-colors`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    </motion.li>
                  ))}
                </div>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />
      
      {/* Left Column - Text Content */}
      <div className="max-w-xl lg:max-w-md text-center lg:text-left z-10 mt-20">
        <motion.h1 
          className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        > 
          <span className="text-white">ADmyBRAND</span>{' '} 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">AI Suite</span> 
        </motion.h1>
        
        <motion.p
          className="text-base md:text-lg mb-6 md:mb-8 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Intelligent marketing automation that <span className="text-blue-300">scales your business</span>
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
  {/* Get Started Button */}
  <motion.button
    whileHover={{ 
      scale: 1.05,
      background: "linear-gradient(45deg, #ffffff, #f0f0f0)",
      boxShadow: "0 4px 15px rgba(255, 255, 255, 0.2)"
    }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="relative bg-white text-black px-6 py-3 rounded-md font-medium overflow-hidden group"
  >
    <span className="relative z-10">Get Started</span>
    <motion.span
      className="absolute inset-0 bg-gradient-to-r from-blue-100 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      initial={{ opacity: 0 }}
    />
  </motion.button>

  {/* Live Demo Button */}
  <motion.button
    whileHover={{ 
      scale: 1.05,
      borderColor: "rgba(255, 255, 255, 0.5)",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      boxShadow: "0 4px 15px rgba(255, 255, 255, 0.1)"
    }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="relative bg-transparent text-white border border-white/20 px-6 py-3 rounded-md font-medium overflow-hidden group"
  >
    <span className="relative z-10">Live Demo</span>
    <motion.span
      className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      initial={{ opacity: 0 }}
    />
    <motion.span
      className="absolute inset-0 border-2 border-transparent group-hover:border-white/10 rounded-md transition-all duration-300"
      initial={{ borderWidth: 0 }}
    />
  </motion.button>
</div>
      </div>

      {/* Right Column - Dashboard UI */}
      <motion.div 
        className="relative w-full max-w-2xl z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="bg-gray-800/20 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6 shadow-lg">
          {/* Dashboard Header */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-medium text-blue-400 flex items-center gap-2">
              <FiTrendingUp /> Campaign Growth
            </h3>
            <span className="text-xs bg-green-900/30 text-green-400 px-2 py-1 rounded">
              Live Data
            </span>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              { icon: <FiUsers className="text-blue-400" />, label: "Leads", value: "1.2K", change: "+12%" },
              { icon: <FiDollarSign className="text-pink-400" />, label: "Revenue", value: "$42K", change: "+24%" },
              { icon: <RiRobot2Line className="text-purple-400" />, label: "AI Actions", value: "3.8K", change: "+38%" },
              { icon: <FiBarChart2 className="text-green-400" />, label: "ROAS", value: "4.2x", change: "+0.8x" },
            ].map((item, i) => (
              <div key={i} className="bg-gray-900/20 p-3 rounded-lg border border-gray-800/50">
                <div className="flex items-center gap-2">
                  {item.icon}
                  <span className="text-xs text-gray-400">{item.label}</span>
                </div>
                <p className="text-xl font-bold mt-1">{item.value}</p>
                <p className="text-xs text-green-400 mt-1">{item.change}</p>
              </div>
            ))}
          </div>

          {/* Line Chart Visualization */}
          <div className="h-48 relative">
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-700/50"></div>
            <div className="absolute top-0 right-0 left-0 h-px bg-gray-700/50"></div>
            
            {/* Grid lines */}
            <div className="absolute inset-0 grid grid-cols-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="border-r border-gray-700/30"></div>
              ))}
            </div>
            
            {/* Data line */}
            <div className="absolute bottom-0 left-0 right-0 h-full flex items-end">
              {chartData.map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${(value / maxData) * 100}%` }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="relative flex-1 flex items-end"
                >
                  <div className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-sm mx-0.5 h-full">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.1 + 0.5 }}
                      className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-xs text-blue-300"
                    >
                      {value}%
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* X-axis labels */}
            <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs text-gray-500">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map((month, i) => (
                <span key={i}>{month}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 w-20 h-px bg-white/20 z-10"></div>
    </section>
  );
}