'use client';

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { FaTwitter, FaLinkedin, FaYoutube, FaRegEnvelope } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

export default function Footer() {
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
    <footer className="relative bg-black text-white pt-20 pb-12 px-6 overflow-hidden">
      {/* Cursor-reactive background effects */}
      <motion.div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: useMotionTemplate`radial-gradient(600px at ${mouseX}px ${mouseY}px, rgba(59, 130, 246, 0.15), transparent 80%)`,
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: useMotionTemplate`radial-gradient(600px at ${mouseX}px ${mouseY}px, rgba(236, 72, 153, 0.1), transparent 80%)`,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-bold text-2xl mb-4 flex items-center gap-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">
                ADmyBRAND
              </span>
              <span className="text-xs font-normal bg-blue-900/30 text-blue-300 px-2 py-1 rounded">
                AI Suite
              </span>
            </h3>
            <p className="text-gray-400 mb-4">
              Intelligent marketing automation without the complexity
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <FaRegEnvelope />
              <a href="mailto:hello@admybrand.com" className="hover:text-white transition">
                hello@admybrand.com
              </a>
            </div>
          </motion.div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold text-lg mb-4 flex items-center gap-1">
              Product
              <FiArrowUpRight className="text-xs opacity-70" />
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="/features" className="hover:text-white transition flex items-center gap-1">
                  Features <FiArrowUpRight className="text-xs" />
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-white transition flex items-center gap-1">
                  Pricing <FiArrowUpRight className="text-xs" />
                </a>
              </li>
              <li>
                <a href="/integrations" className="hover:text-white transition flex items-center gap-1">
                  Integrations <FiArrowUpRight className="text-xs" />
                </a>
              </li>
              <li>
                <a href="/roadmap" className="hover:text-white transition flex items-center gap-1">
                  Roadmap <FiArrowUpRight className="text-xs" />
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold text-lg mb-4 flex items-center gap-1">
              Resources
              <FiArrowUpRight className="text-xs opacity-70" />
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="/blog" className="hover:text-white transition flex items-center gap-1">
                  Blog <FiArrowUpRight className="text-xs" />
                </a>
              </li>
              <li>
                <a href="/guides" className="hover:text-white transition flex items-center gap-1">
                  Guides <FiArrowUpRight className="text-xs" />
                </a>
              </li>
              <li>
                <a href="/webinars" className="hover:text-white transition flex items-center gap-1">
                  Webinars <FiArrowUpRight className="text-xs" />
                </a>
              </li>
              <li>
                <a href="/docs" className="hover:text-white transition flex items-center gap-1">
                  Documentation <FiArrowUpRight className="text-xs" />
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
            <div className="flex gap-4 text-xl mb-6">
              <motion.a 
                href="#" 
                aria-label="Twitter"
                whileHover={{ y: -2, color: "#1DA1F2" }}
                className="text-gray-400 hover:text-[#1DA1F2] transition"
              >
                <FaTwitter />
              </motion.a>
              <motion.a 
                href="#" 
                aria-label="LinkedIn"
                whileHover={{ y: -2, color: "#0077B5" }}
                className="text-gray-400 hover:text-[#0077B5] transition"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                href="#" 
                aria-label="YouTube"
                whileHover={{ y: -2, color: "#FF0000" }}
                className="text-gray-400 hover:text-[#FF0000] transition"
              >
                <FaYoutube />
              </motion.a>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <p className="text-sm text-gray-400 mb-2">Subscribe to our newsletter</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 text-white px-3 py-2 text-sm rounded-l focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                />
                <button className="bg-gradient-to-r from-blue-500 to-pink-500 px-4 py-2 text-sm rounded-r hover:opacity-90 transition">
                  Join
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ADmyBRAND AI Suite. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition">Terms of Service</a>
            <a href="/cookies" className="hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}