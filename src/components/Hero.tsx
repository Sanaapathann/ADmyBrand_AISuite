"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { RiRobot2Line } from "react-icons/ri";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [budget, setBudget] = useState<number>(100000);
  const [channels, setChannels] = useState<number>(3);
  const calculatorRef = useRef<HTMLDivElement>(null);

  const calculateROI = (budget: number, channels: number): number => {
    const baseROI = budget * 0.4;
    const channelBonus = channels * 0.05 * budget;
    return Math.round(baseROI + channelBonus);
  };

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (calculatorRef.current && !calculatorRef.current.contains(e.target as Node)) {
      setIsCalculatorOpen(false);
    }
  };

  return (
    <section className="relative text-white py-24 px-6 text-center min-h-screen flex items-center justify-center">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 flex justify-between items-center p-6 z-50">
        <motion.button
          onClick={() => setIsCalculatorOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9, rotate: [0, 10, -10, 0] }}
          className="z-50 focus:outline-none"
        >
          <RiRobot2Line className="text-2xl text-blue-400" />
        </motion.button>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="z-50 focus:outline-none"
        >
          {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
        </button>
      </nav>

      {/* Calculator Overlay */}
      <AnimatePresence>
        {isCalculatorOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 flex items-center justify-center"
            onClick={handleOverlayClick}
          >
            <motion.div
  ref={calculatorRef}
  initial={{ scale: 0.9, y: 20 }}
  animate={{ scale: 1, y: 0 }}
  exit={{ scale: 0.9, y: 20 }}
  className="bg-gray-800/90 p-8 rounded-xl border border-gray-700 max-w-md w-full mx-4 relative"
>
  {/* Close button with proper spacing */}
  <button
    onClick={() => setIsCalculatorOpen(false)}
    className="absolute top-4 right-3 text-gray-400 hover:text-white focus:outline-none transition-colors"
    aria-label="Close calculator"
  >
    <FiX className="text-xl" />
  </button>
  
  {/* Heading with adjusted margin-top to account for close button */}
  <h2 className="text-3xl font-bold mt-2 mb-8 text-center bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
    Campaign ROI Calculator
  </h2>
        
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-300">
                    Monthly Budget: {formatCurrency(budget)}
                  </label>
                  <input
                    type="range"
                    min="50000"
                    max="5000000"
                    step="50000"
                    value={budget}
                    onChange={(e) => setBudget(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-pink-500"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹50K</span>
                    <span>₹5M</span>
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-gray-300">
                    Number of Channels: {channels}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={channels}
                    onChange={(e) => setChannels(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                </div>

                <motion.div 
                  className="bg-gray-900/50 p-6 rounded-xl border-l-4 border-pink-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-400">Your Investment</p>
                      <p className="text-xl font-bold">{formatCurrency(budget)}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Estimated ROI</p>
                      <motion.p
                        key={`roi-${budget}-${channels}`}
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        className="text-xl font-bold text-pink-400"
                      >
                        {formatCurrency(calculateROI(budget, channels))}
                      </motion.p>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-400">
                    (+{Math.round((calculateROI(budget, channels) / budget) * 100)}% return)
                  </div>
                </motion.div>

                <button className="w-full bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-700 hover:to-blue-700 text-white py-3 rounded-lg font-medium transition-all">
                  Get Custom Proposal
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
  

      
      {/* Overlay menu */}
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
                {['Signup', 'Login'].map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: -10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button className="hover:text-blue-400 transition-colors">
                      {item}
                    </button>
                  </motion.li>
                ))}
                {['Features', 'Pricing', 'Demo', 'About', 'Contact'].map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: -10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button className="hover:text-pink-400 transition-colors">
                      {item}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />
      
      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6 leading-tight" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.1, duration: 0.6 }}
        > 
          <span className="text-white">ADmyBRAND</span>{' '} 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">AI Suite</span> 
        </motion.h1> 
          
        <motion.p 
          className="text-lg mb-8 max-w-xl mx-auto text-gray-300"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        > 
          Intelligent marketing automation without the complexity 
        </motion.p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <motion.button 
            whileHover={{ 
              scale: 1.02,
              background: 'linear-gradient(to right, #3b82f6, #ec4899)',
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
            }}
            className="bg-white text-black px-6 py-2.5 rounded-md text-sm font-medium tracking-wide transition-all"
          >
            Get Started
          </motion.button>
          
          <motion.button 
            whileHover={{ 
              scale: 1.02,
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderColor: 'rgba(236, 72, 153, 0.5)',
              boxShadow: '0 0 15px rgba(236, 72, 153, 0.3)'
            }}
            className="bg-transparent text-white border border-white/20 px-6 py-2.5 rounded-md text-sm font-medium tracking-wide transition-all"
          >
            Watch Demo
          </motion.button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-20 h-px bg-white/20 z-10"></div>
    </section>
  );
}