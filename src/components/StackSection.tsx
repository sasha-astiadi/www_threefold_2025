"use client";

import { StackedCubes } from "@/components/ui/StackedCubes";

export function StackSectionPreview() {

  return (
    <section className="w-full bg-transparent px-4 py-8 sm:px-6 sm:pb-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-16 items-center lg:items-start">
          {/* Left Column - Text (1/3 width) */}
          <div className="text-center lg:text-left lg:col-span-1 order-1 lg:order-1">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight leading-tight text-white lg:text-3xl">
              A Decentralized Infrastructure Layer
            </h2>
            <p className="mt-4 sm:mt-6 text-sm font-light text-pretty text-gray-700 lg:text-base">
              We have built a foundational platform that runs directly on bare metal, offering a scalable solution focused on the essential building blocks of the Internet and Cloud: compute, data, and network.
            </p>
          </div>
          
          {/* Right Column - Stacked Cubes (2/3 width) */}
          <div className="lg:col-span-2 flex items-center justify-center lg:justify-start order-2 lg:order-2">
            <StackedCubes />
          </div>
        </div>
      </div>
    </section>
  );
}
