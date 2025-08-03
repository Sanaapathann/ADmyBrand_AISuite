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
    <section className="relative text-white py-15 px-6 text-center flex items-center justify-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />
      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-3 md:p-4 z-50 bg-black/30 backdrop-blur-md border-b border-gray-700/50 h-16">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo/logo.png" 
              alt="ADmyBRAND Logo"
              width={160}
              height={40}
              className="h-8 md:h-10 object-contain"
            />
          </Link>
          
          <div className="hidden md:flex items-center gap-4 ml-6">
            <Link href="/pricing" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
              Pricing
            </Link>
            <Link href="/resources" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
              Resources
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
              Contact
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-3">
            <Link 
              href="/login" 
              className="text-gray-300 hover:text-pink-400 transition-colors px-2 py-1 text-sm"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="text-gray-300 hover:text-pink-400 transition-colors px-2 py-1 text-sm"
            >
              Sign Up
            </Link>
          </div>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-50 focus:outline-none text-gray-300 hover:text-white p-1"
          >
            {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-lg z-40 pt-16 px-6"
          >
            <div className="flex flex-col h-full">
              <ul className="space-y-4 text-lg mt-8">
                {['Pricing', 'Resources', 'Contact'].map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: -10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      href={`/${item.toLowerCase()}`} 
                      className="block py-3 text-gray-300 hover:text-blue-400 transition-colors border-b border-gray-800"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              
              <div className="mt-auto mb-8 space-y-4">
                <motion.div
                  whileHover={{ x: -10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href="/login" 
                    className="block py-3 text-center text-blue-400 hover:text-blue-300 transition-colors border border-blue-400 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ x: -10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href="/signup" 
                    className="block py-3 text-center bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center pt-20 pb-12 px-4 md:px-6 gap-8 md:gap-12 lg:gap-16">
        {/* Left Column - Text Content */}
        <div className="w-full max-w-xl lg:max-w-md flex flex-col items-center lg:items-start text-center lg:text-left z-10">
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
            className="text-base md:text-lg mb-6 md:mb-8 text-gray-300 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Intelligent marketing automation that <span className="text-blue-300">scales your business</span>
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs sm:max-w-none">
            <motion.button
              whileHover={{ 
                scale: 1.03,
                background: "linear-gradient(45deg, #ffffff, #f0f0f0)",
                boxShadow: "0 4px 12px rgba(255, 255, 255, 0.15)"
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="relative bg-white text-black px-4 py-3 sm:px-6 rounded-md font-medium overflow-hidden group w-full"
            >
              <span className="relative z-10">Get Started</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-100 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                initial={{ opacity: 0 }}
              />
            </motion.button>

            <motion.button
              whileHover={{ 
                scale: 1.03,
                borderColor: "rgba(255, 255, 255, 0.4)",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                boxShadow: "0 4px 12px rgba(255, 255, 255, 0.08)"
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="relative bg-transparent text-white border border-white/20 px-4 py-3 sm:px-6 rounded-md font-medium overflow-hidden group w-full"
            >
              <span className="relative z-10">Live Demo</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                initial={{ opacity: 0 }}
              />
            </motion.button>
          </div>
        </div>

        {/* Right Column - Dashboard UI */}
        <motion.div 
          className="relative w-full max-w-2xl z-10 mt-8 lg:mt-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-gray-800/20 backdrop-blur-lg border border-gray-700/50 rounded-xl p-4 sm:p-6 shadow-lg">
            {/* Dashboard Header */}
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h3 className="font-medium text-blue-400 flex items-center gap-2 text-sm sm:text-base">
                <FiTrendingUp className="text-lg" /> Campaign Growth
              </h3>
              <span className="text-xs bg-green-900/30 text-green-400 px-2 py-1 rounded">
                Live Data
              </span>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
              {[
                { icon: <FiUsers className="text-blue-400" />, label: "Leads", value: "1.2K", change: "+12%" },
                { icon: <FiDollarSign className="text-pink-400" />, label: "Revenue", value: "$42K", change: "+24%" },
                { icon: <RiRobot2Line className="text-purple-400" />, label: "AI Actions", value: "3.8K", change: "+38%" },
                { icon: <FiBarChart2 className="text-green-400" />, label: "ROAS", value: "4.2x", change: "+0.8x" },
              ].map((item, i) => (
                <div key={i} className="bg-gray-900/20 p-2 sm:p-3 rounded-lg border border-gray-800/50">
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <span className="text-xs text-gray-400">{item.label}</span>
                  </div>
                  <p className="text-lg sm:text-xl font-bold mt-1">{item.value}</p>
                  <p className="text-xs text-green-400 mt-1">{item.change}</p>
                </div>
              ))}
            </div>

            {/* Line Chart Visualization */}
            <div className="h-40 sm:h-48 relative">
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
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 w-20 h-px bg-white/20 z-10"></div>
    </section>
  );
}