'use client';

import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiChevronDown} from "react-icons/fi";

const faqs = [
  { 
    q: "What is ADmyBRAND AI Suite?", 
    a: "Our AI Suite is an all-in-one marketing platform that leverages artificial intelligence to automate campaigns, optimize ad performance, and generate data-driven insights. It combines the power of machine learning with intuitive tools for marketers of all skill levels." 
  },
  { 
    q: "Can I try it for free?", 
    a: "Yes! We offer a 14-day free trial with full access to all features. No credit card required. You will get personalized onboarding and can import your existing campaigns to see the AI in action." 
  },
  { 
    q: "Is it suitable for agencies?", 
    a: "Absolutely. We built ADmyBRAND with agencies in mind. Features include multi-client dashboards, white-label reporting, team collaboration tools, and scalable pricing models. Many of our customers manage 50+ client accounts through our platform." 
  },
  {
    q: "How does the AI improve my results?",
    a: "Our proprietary algorithms analyze millions of data points to optimize your campaigns in real-time. The AI handles bid adjustments, audience targeting, creative testing, and budget allocation - typically delivering 30-50% better performance than manual management."
  },
  {
    q: "What integrations are available?",
    a: "We integrate with all major platforms including Google Ads, Meta Ads, TikTok, LinkedIn, and Shopify. Our API allows custom connections to CRMs, analytics tools, and internal systems."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative text-white py-15 px-6 text-center min-h-screen flex items-center justify-center">
      {/* Semi-transparent overlay to enhance cursor visibility */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      <div className="max-w-4xl w-full mx-auto relative z-10">
       

        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">Questions</span>
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              className="w-full"
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => setOpen(open === i ? null : i)}
                className={`w-full text-left flex items-center justify-between gap-4 p-6 rounded-xl transition-all ${open === i ? 'bg-gray-900' : 'bg-gray-900/50 hover:bg-gray-900/70'}`}
                whileHover={{ scale: 1.01 }}
                layout
              >
                <h3 className="font-semibold text-lg md:text-xl">{faq.q}</h3>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="text-gray-400 text-xl" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden w-full"
                  >
                    <div className="p-6 bg-gray-900/30 border-l-4 border-blue-500 rounded-b-xl">
                      <p className="text-gray-300">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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