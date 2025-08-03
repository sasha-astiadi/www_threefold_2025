"use client";
import React from "react";
import { motion } from "framer-motion";

export function GlobeDemo() {
  return (
    <div className="flex flex-row items-center justify-center py-20 h-screen md:h-auto dark:bg-black bg-white relative w-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="div"
        >
          <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
            We sell soap worldwide
          </h2>
          <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
            This globe is interactive and customizable. Have fun with it, and
            don&apos;t forget to share it. :)
          </p>
        </motion.div>
        
        {/* Simple CSS Globe */}
        <div className="absolute w-full -bottom-20 h-72 md:h-full z-10 flex items-center justify-center">
          <div className="relative">
            {/* Globe sphere */}
            <motion.div
              className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 relative overflow-hidden shadow-2xl"
              animate={{ 
                rotateY: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {/* Globe grid lines */}
              <div className="absolute inset-0">
                {/* Horizontal lines */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={`h-${i}`}
                    className="absolute w-full border-t border-blue-300/30"
                    style={{ top: `${(i + 1) * 12.5}%` }}
                  />
                ))}
                {/* Vertical lines */}
                {[...Array(12)].map((_, i) => (
                  <div
                    key={`v-${i}`}
                    className="absolute h-full border-l border-blue-300/30"
                    style={{ left: `${(i + 1) * 8.33}%` }}
                  />
                ))}
              </div>
              
              {/* Continents (simplified shapes) */}
              <div className="absolute top-8 left-12 w-16 h-12 bg-green-600/60 rounded-lg transform rotate-12"></div>
              <div className="absolute top-16 right-8 w-12 h-8 bg-green-600/60 rounded-full"></div>
              <div className="absolute bottom-12 left-8 w-20 h-16 bg-green-600/60 rounded-2xl transform -rotate-6"></div>
              <div className="absolute bottom-8 right-12 w-14 h-10 bg-green-600/60 rounded-lg"></div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </motion.div>
            
            {/* Orbiting dots representing connections */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                style={{
                  top: "50%",
                  left: "50%",
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.5,
                }}
              >
                <div 
                  className="w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
                  style={{
                    transform: `translate(-50%, -50%) translateX(${120 + i * 20}px)`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
      </div>
    </div>
  );
}
