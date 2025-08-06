"use client";
import { Button } from "./Button";


export function FarmerPreview() {

  return (
    <section className="w-full bg-transparent px-4 py-8 sm:px-6 sm:pb-12 lg:px-8 relative">
    {/* Gradient Blob Component */}
      <div className="absolute w-[400px] h-[200px] bg-gradient-to-br from-[#505050] to-[#7e7e7e] opacity-40 rounded-full blur-[150px] bottom-[200px] left-[-150px] z-0" />
      <div className="absolute w-[200px] h-[100px] bg-gradient-to-br from-[#505050] to-[#7e7e7e] opacity-50 rounded-full blur-[150px] top-[200px] right-[-150px] z-0" />
      <div className="mx-auto max-w-7xl">
        <div className="lg:flex lg:items-center lg:justify-between lg:px-8">
          {/* Left Column - Text (1/3 width) */}
          <div className="lg:col-span-1 flex text-center lg:text-left order-1 lg:order-1">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight leading-tight text-white lg:text-3xl">
              Contribute to the Decentralized Internet in 3 Steps
            </h2>
            </div>
          {/* Right Column - Stacked Cubes (2/3 width) */}
          <div className="lg:col-span-2 flex items-center justify-center lg:justify-start order-2 lg:order-2">
            <Button variant="outline" className=" text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">
              Become A Farmer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
