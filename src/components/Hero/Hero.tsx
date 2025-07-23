"use client";
import { motion } from "motion/react";
import React from "react";
import Link from "next/link";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="relative h-[40rem] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1605980776566-0486c3ac7617?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="container mx-auto px-4 text-center z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="flex flex-col items-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.h1
              className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300 py-4"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Premium Hair Extensions & <br />
              <motion.span
                className="text-green-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                Business Solutions
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-white/80 text-center max-w-xl mt-4 text-sm md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              Unparalleled quality virgin hair with cuticles aligned from root to end,
              guaranteed to behave exactly like your own hair.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <motion.button
              onClick={() => scrollToSection("products")}
              className="px-6 py-3 backdrop-blur-sm bg-emerald-500/90 border border-emerald-500/20 text-white rounded-full relative hover:bg-emerald-600/90 transition-all duration-200 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Explore Products</span>
              <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-300 to-transparent" />
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("services")}
              className="px-6 py-3 backdrop-blur-sm border border-white/20 text-white rounded-full relative hover:bg-white/10 transition-all duration-200 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Our Services</span>
              <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-white/50 to-transparent" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
