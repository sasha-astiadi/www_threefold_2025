"use client";

import React from "react";
import { motion } from "framer-motion";

interface CubeProps {
  title: string;
  descriptionTitle: string;
  description: string;
  isActive: boolean;
  index: number;
  onHover: () => void;
  onLeave: () => void;
}

const CubeSvg: React.FC<React.SVGProps<SVGSVGElement> & { index: number }> = ({ index, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="507"
    height="234"
    fill="none"
    viewBox="0 0 507 234"
    {...props}
  >
    <path
      fill={`url(#cube-gradient-${index})`}
      d="M491.651 144.747L287.198 227.339C265.219 236.22 241.783 236.22 219.802 227.339L15.3486 144.747C-5.11621 136.479 -5.11621 97.5191 15.3486 89.2539L219.802 6.65884C241.783 -2.21961 265.219 -2.21961 287.198 6.65884L491.651 89.2539C512.116 97.5191 512.116 136.479 491.651 144.747Z"
    />
    <defs>
      <linearGradient
        id={`cube-gradient-${index}`}
        x1="185.298"
        x2="185.298"
        y1="-27.5515"
        y2="206.448"
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset="1" stopColor="#3F3B3E" />
      </linearGradient>
    </defs>
  </svg>
);

export function Cube({ title, descriptionTitle, description, isActive, index, onHover, onLeave }: CubeProps) {
  return (
    <div className="relative flex flex-col items-center">
      <motion.div
        className="relative cursor-pointer"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        style={{
          zIndex: 10 - index,
        }}
        animate={{
          scale: isActive ? 1.05 : 1,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
      >
        {/* SVG Cube */}
        <CubeSvg 
          index={index}
          className="w-48 sm:w-64 lg:w-80 h-auto drop-shadow-lg opacity-50"
          style={{
            filter: isActive ? 'brightness(1.2) drop-shadow(0 0 20px rgba(156, 163, 175, 0.5))' : 'brightness(0.9)',
          }}
        />
        
        {/* Title overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 
            className="text-white text-sm lg:text-base font-medium text-center px-4 drop-shadow-lg"
            style={{ 
              transform: 'rotate(0deg) skewX(0deg)',
              transformOrigin: 'center'
            }}
          >
            {title}
          </h3>
        </div>

        {/* Description with arrow line - Desktop */}
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="hidden lg:block absolute left-full top-1/2 -translate-y-1/2 z-50"
          >
            {/* Arrow line */}
            <svg
              className="absolute left-0 top-1/2 -translate-y-1/2"
              width="120"
              height="2"
              viewBox="0 0 120 2"
              fill="none"
            >
              <line
                x1="0"
                y1="1"
                x2="120"
                y2="1"
                stroke="white"
                strokeWidth="1"
                opacity="0.6"
              />
            </svg>
            
            {/* Description text */}
            <div className="ml-32 w-80">
              <h4 className="text-white text-base font-semibold mb-2">
                {descriptionTitle}
              </h4>
              <p className="text-white text-sm leading-relaxed font-light">
                {description}
              </p>
            </div>
          </motion.div>
        )}

        {/* Description for Mobile - Below cube */}
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-1/2 -translate-x-1/2 mt-8 z-50"
          >
            <div className="w-64 sm:w-80 px-4">
              <h4 className="text-white text-base font-semibold mb-2 text-center">
                {descriptionTitle}
              </h4>
              <p className="text-white text-sm leading-relaxed font-light text-center">
                {description}
              </p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
