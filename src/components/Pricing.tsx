"use client";
import { motion } from "framer-motion";
import { FiArrowRight, FiDollarSign, FiTrendingUp, FiUsers, FiLayers } from "react-icons/fi";
import { useState } from 'react';

const tiers = [
  { 
    icon: <FiDollarSign className="w-6 h-6" />,
    name: "Starter", 
    price: "$29", 
    period: "/month",
    features: ["Basic AI tools", "Email support", "Up to 10 campaigns"],
    cta: "Start Free Trial",
    color: "from-blue-400 to-pink-400",
    borderColor: "border-blue-400/30 hover:border-blue-400/60"
  },
  { 
    icon: <FiTrendingUp className="w-6 h-6" />,
    name: "Pro", 
    price: "$79", 
    period: "/month",
    features: ["Advanced analytics", "Priority support", "Team access", "100 campaigns"],
    cta: "Most Popular",
    color: "from-pink-400 to-purple-500",
    borderColor: "border-pink-400/30 hover:border-pink-400/60"
  },
  { 
    icon: <FiLayers className="w-6 h-6" />,
    name: "Enterprise", 
    price: "Custom", 
    period: "",
    features: ["Dedicated AI", "White-labeling", "24/7 support", "Unlimited campaigns"],
    cta: "Contact Sales",
    color: "from-purple-500 to-blue-400",
    borderColor: "border-purple-500/30 hover:border-purple-500/60"
  },
];

export default function Pricing() {
  const [budget, setBudget] = useState(100000);
  const [channels, setChannels] = useState(3);

  const calculateROI = (budget: number, channels: number) => {
    const baseROI = budget * 0.4;
    const channelBonus = channels * 0.05 * budget;
    return Math.round(baseROI + channelBonus);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <section className="relative text-white py-24 px-6 text-center min-h-screen flex items-center justify-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white">Pricing That</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">
            Scales With You
          </span>
        </motion.h2>

        {/* ROI Calculator Card */}
        <motion.div
          className="bg-gradient-to-br from-gray-900/70 to-gray-800/50 backdrop-blur-lg border border-blue-400/30 rounded-2xl p-8 mb-16 max-w-3xl mx-auto hover:border-blue-400/60 transition-all"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ 
            y: -5,
            boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)"
          }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-r from-blue-400 to-pink-400 shadow-lg">
              <FiUsers className="w-6 h-6" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-6 text-white">
            See Your Potential ROI
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Monthly Budget</label>
              <input
                type="range"
                min="50000"
                max="5000000"
                step="50000"
                value={budget}
                onChange={(e) => setBudget(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>₹50K</span>
                <span className="font-medium text-blue-400">{formatCurrency(budget)}</span>
                <span>₹5M</span>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Marketing Channels: {channels}</label>
              <input
                type="range"
                min="1"
                max="10"
                value={channels}
                onChange={(e) => setChannels(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-pink-500"
              />
            </div>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl border-l-4 border-blue-500 mb-8 shadow-lg">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400">Your Investment</p>
                <p className="text-xl font-bold">{formatCurrency(budget)}</p>
              </div>
              <div>
                <p className="text-gray-400">Estimated ROI</p>
                <p className="text-xl font-bold text-pink-400">
                  {formatCurrency(calculateROI(budget, channels))}
                </p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <span className="inline-block bg-gray-700/70 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                (+{Math.round((calculateROI(budget, channels) / budget) * 100)}% return)

              </span>
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-500 hover:to-pink-500 text-white py-3.5 rounded-xl font-medium transition-all shadow-lg hover:shadow-blue-500/30">
            Get Custom Proposal
          </button>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              className={`bg-gradient-to-br from-gray-900/70 to-gray-800/50 backdrop-blur-lg border ${tier.borderColor} rounded-2xl p-8 transition-all group`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ 
                y: -8,
                boxShadow: tier.name === "Pro" 
                  ? "0 15px 40px -10px rgba(236, 72, 153, 0.3)"
                  : "0 10px 30px -10px rgba(59, 130, 246, 0.3)"
              }}
            >
              <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-r ${tier.color} shadow-lg mx-auto`}>
                {tier.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white text-center">{tier.name}</h3>
              
              <div className="mb-6 text-center">
                <span className="text-3xl font-bold">
                  {tier.price === "Custom" ? (
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-400">
                      {tier.price}
                    </span>
                  ) : (
                    <span className="text-white">{tier.price}</span>
                  )}
                </span>
                <span className="text-gray-400 ml-2">{tier.period}</span>
              </div>
              
              <ul className="mb-8 space-y-3">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">✓</span>
                    <span className="text-gray-300">{f}</span>
                  </li>
                ))}
              </ul>
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3.5 rounded-xl font-medium flex items-center justify-center gap-2 transition-all ${
                  tier.name === "Pro"
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg hover:shadow-pink-500/40'
                    : 'bg-gray-700/70 text-white border border-gray-600 hover:bg-gray-700/90'
                }`}
              >
                {tier.cta} <FiArrowRight />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-20 h-px bg-white/20"
        initial={{ width: 0 }}
        whileInView={{ width: "80px" }}
        transition={{ duration: 0.8 }}
      />
    </section>
  );
}