'use client';

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  { 
    name: "Aisha K.", 
    company: "GlowTech", 
    quote: "ADmyBRAND AI Suite transformed our media planning! As a performance marketer, I struggled with manual campaign optimizations across billboards, TV, and influencers. Now, its predictive analytics auto-allocates budgets to high-converting channels, boosting our ROI by 37% in Q1. The AI recommendations feel like having a media strategist on-demand!", 
    avatar: "/people/woman1.jpg",
    rating: 5
  },
  { 
    name: "Raj M.", 
    company: "PixelNest", 
    quote: "Game-changer for outdoor + digital synergy! We used to juggle 5 different platforms for hoardings, radio, and influencer campaigns. ADmyBRAND'ss unified dashboard lets us launch, track, and optimize everything in one place. The competitor spend insights alone saved us ₹20L in misplaced ad spends last quarter.", 
    avatar: "/people/man1.jpg",
    rating: 4
  },
  { 
    name: "Emily T.", 
    company: "NovaReach", 
    quote: "Democratizing enterprise-grade tools for SMBs! As a D2C startup, we could not afford traditional agency retainers. ADmyBRAND's self-serve platform with its AI-powered creative library and real-time KPI alerts helped us compete with big players. Our campaign setup time dropped from 3 days to 20 minutes!", 
    avatar: "/people/woman2.jpg",
    rating: 5
  },
];

export default function Testimonials() {
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
      

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          className="text-3xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">Marketers Worldwide</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)"
              }}
            >
              <div className="flex justify-center text-yellow-400 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <FaStar key={i} className="mx-1" />
                ))}
              </div>
              
              <FaQuoteLeft className="text-gray-500 mx-auto mb-6 text-2xl" />
              
              <p className="italic text-lg mb-6">"{t.quote}"</p>
              
              <div className="flex items-center justify-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-pink-500">
                  <Image 
                    src={t.avatar} 
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold">{t.name}</h4>
                  <p className="text-sm text-gray-400">{t.company}</p>
                </div>
              </div>
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