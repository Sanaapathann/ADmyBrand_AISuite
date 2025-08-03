"use client";

import { motion} from "framer-motion";
import { FiBarChart2, FiCpu, FiFilter, FiImage, FiDollarSign, FiLink } from "react-icons/fi";

const features = [
  { 
    icon: <FiCpu className="w-6 h-6" />, 
    title: "Smart Campaign Builder", 
    desc: "Create campaigns with AI in minutes.",
    color: "from-blue-400 to-pink-400"
  },
  { 
    icon: <FiBarChart2 className="w-6 h-6" />, 
    title: "Real-Time Analytics", 
    desc: "Track performance live across channels.",
    color: "from-pink-400 to-purple-500"
  },
  { 
    icon: <FiFilter className="w-6 h-6" />, 
    title: "Audience Segmentation", 
    desc: "Target the right people with precision.",
    color: "from-purple-500 to-blue-400"
  },
  { 
    icon: <FiImage className="w-6 h-6" />, 
    title: "Creative Assistant", 
    desc: "Generate ad creatives with AI.",
    color: "from-blue-400 to-pink-400"
  },
  { 
    icon: <FiDollarSign className="w-6 h-6" />, 
    title: "Budget Optimization", 
    desc: "Maximize ROI with smart spend.",
    color: "from-pink-400 to-purple-500"
  },
  { 
    icon: <FiLink className="w-6 h-6" />, 
    title: "Multi-Channel Integration", 
    desc: "Manage ads across platforms.",
    color: "from-purple-500 to-blue-400"
  },
];

export default function Features() {

  return (
    <section className="relative text-white py-15 px-6 text-center min-h-screen flex items-center justify-center">
      {/* Semi-transparent overlay to enhance cursor visibility */}
      <div className="absolute inset-0 bg-black/40 z-0" />
      

      {/* Content */}
      <motion.div 
        className="max-w-7xl mx-auto relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white">Features That</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">
            Power Your Brand
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={`w-12 h-12 rounded-lg mb-6 flex items-center justify-center bg-gradient-to-r ${f.color} group-hover:shadow-lg group-hover:shadow-${f.color.split(' ')[1]}/30`}>
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{f.title}</h3>
              <p className="text-gray-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-20 h-px bg-white/20"
        initial={{ width: 0 }}
        whileInView={{ width: "80px" }}
        transition={{ duration: 0.8 }}
      />
    </section>
  );
}