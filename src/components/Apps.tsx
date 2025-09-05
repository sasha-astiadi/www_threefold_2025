"use client";

import React from "react";
import Image from 'next/image'
import { motion } from "framer-motion";


import Algorand from '@/images/logos/algorand.svg'
import Casperlabs from '@/images/logos/casperlabs.svg'
import Discourse from '@/images/logos/discourse.svg'
import gitea from '@/images/logos/gitea.svg'
import Jenkins from '@/images/logos/jenkins.svg'
import Jitsi from '@/images/logos/jitsi.svg'
import Mattermost from '@/images/logos/mattermost.svg'
import Nextcloud from '@/images/logos/nextcloud.svg'

const logos = [
  Algorand, Casperlabs, Discourse, gitea,
  Jenkins, Jitsi, Mattermost, Nextcloud,
];

export function AppsPreview() {
  return (
    <div className="relative flex h-[40rem] w-full overflow-hidden rounded-md bg-transparent antialiased md:items-center md:justify-center">
      <div className="relative z-10 mx-auto w-full max-w-3xl p-4 pt-16">

        {/* Heading */}
        <motion.div
          className="flex flex-col justify-center items-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text tracking-tighter text-center text-4xl font-semibold text-transparent lg:text-5xl">
            Anything That Runs on Linux Can Run on ThreeFold
          </h1>
        </motion.div>

        {/* Animated Line */}
        <motion.div
          className="h-[2px] bg-neutral-400 rounded-full mx-auto mb-12"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, delay: 1 }}
        />

        {/* Logos grid */}
        <motion.div
          className="mx-auto grid grid-cols-2 items-start gap-x-8 gap-y-10 sm:gap-x-10 lg:mx-0 lg:grid-cols-4"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 2.8,
              },
            },
          }}
        >
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              className="flex justify-center"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image src={logo} alt="" unoptimized className="hover:backdrop-opacity-100 opacity-90" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
