"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect } from "react";

const tiers = [
  { 
    name: "Starter", 
    price: "$29/mo", 
    features: ["Basic AI tools", "Email support"],
    highlight: false
  },
  { 
    name: "Pro", 
    price: "$79/mo", 
    features: ["Advanced analytics", "Priority support", "Team access"],
    highlight: true
  },
  { 
    name: "Enterprise", 
    price: "Custom", 
    features: ["Dedicated AI models", "White-labeling", "24/7 support"],
    highlight: false
  },
];

export default function Pricing() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
      mouseX.set(clientX);
      mouseY.set(clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative text-white py-24 px-6 text-center min-h-screen flex items-center justify-center">
      {/* Semi-transparent overlay to enhance cursor visibility */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content */}
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white">Simple,</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">
            Transparent Pricing
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              className={`bg-white/5 backdrop-blur-sm border ${
                tier.highlight 
                  ? 'border-pink-400/50 shadow-lg shadow-pink-500/20' 
                  : 'border-white/10'
              } rounded-xl p-8 hover:bg-white/10 transition-all`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{tier.name}</h3>
              <p className="text-2xl font-bold mb-6">
                {tier.price === "Custom" ? (
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-400">
                    {tier.price}
                  </span>
                ) : (
                  <span className="text-white">{tier.price}</span>
                )}
              </p>
              <ul className="mb-8 text-gray-300 space-y-2">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-center">
                    <span className="text-pink-400 mr-2">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-lg font-medium ${
                  tier.highlight
                    ? 'bg-gradient-to-r from-blue-500 to-pink-500 text-white'
                    : 'bg-white/10 text-white border border-white/20'
                }`}
              >
                Choose Plan
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