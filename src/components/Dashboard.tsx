"use client";

import CountUp from "react-countup";
import React from "react";

export function Dashboard() {
  return (
    <div className="py-24 bg-transparent">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Column 1: Title & NODES */}
          <div className="flex flex-col space-y-10">
            {/* Title + Description */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight leading-tight text-white lg:text-4xl">
                Powered by a Global Community
              </h2>
              <p className="mt-4 sm:mt-6 text-sm font-light text-pretty text-white lg:text-base">
                ThreeFold’s groundbreaking technology enables anyone – individuals, organizations, and communities – to deploy their own Internet infrastructure.
              </p>
              <button className="mt-6" variant="primary" color="transparent" href="https://threefold.io/build" >Explore TFGrid →</button>
            </div>


          </div>

          {/* Column 2: CORES (staggered) + SSD */}
          <div className="flex flex-col space-y-10">
            <StatCard
              label="CORES"
              description="A globally distributed mesh of CPU cores powering decentralized applications, AI workloads, and edge computing — without central bottlenecks."
              value={<CountUp end={54_958} duration={2.5} separator="," />}
              note="Total Central Processing Unit Cores available on the grid."
              className="mt-24"
            />

            <StatCard
              label="SSD CAPACITY"
              description="A distributed network of storage capacity — ready to support Web3, AI, and edge computing workloads around the world."
              value={<CountUp end={7_364_506} duration={2.5} separator="," />}
              unit="GB"
              note="The total amount of storage (SSD, HDD, & RAM) on the grid."
            />
          </div>

          

          {/* Column 3: nodes countries */}
          <div className="flex flex-col space-y-10 justify-start">
            <StatCard
              label="NODES"
              description="A computer server 100% dedicated to the network. It is a building block of the ThreeFold Grid, providing compute, storage, and network resources."
              value={<CountUp end={1778} duration={2.5} separator="," />}
              note="The total number of nodes on the grid."

            />

            <StatCard
              label="COUNTRIES"
              description="The number of countries where at least one node is connected and operational on the grid."
              value={<CountUp end={51} duration={2.5} separator="," />}
              note="The total number of countries with active nodes."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// 🧱 Stat Card Component
function StatCard({
  label,
  description,
  value,
  unit,
  note,
  className = "",
}: {
  label: string;
  description: string;
  value: React.ReactNode;
  unit?: string;
  note: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-2xl bg-stat-gradient p-8 shadow-sm backdrop-blur transition-all duration-300 ease-out hover:scale-105 ${className}`}
      style={{
        filter: 'brightness(1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.filter = 'brightness(0.8) drop-shadow(0 0 20px rgba(156, 163, 175, 0.5))';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.filter = 'brightness(1)';
      }}
    >
      <h3 className="text-lg font-semibold text-cyan-400">{label}</h3>
      <p className="mt-2 text-sm font-light text-pretty text-white lg:text-base">
        {description}
      </p>
      <div className="mt-8 flex items-center space-x-3">
        <span className="text-cyan-400 text-3xl">•</span>
        <div className="text-5xl font-semibold tracking-tight text-white tabular-nums">
          {value}
          {unit && (
            <span className="ml-2 text-lg font-normal text-gray-400">{unit}</span>
          )}
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-400 uppercase tracking-wider">
        {note}
      </p>
    </div>
  );
}
