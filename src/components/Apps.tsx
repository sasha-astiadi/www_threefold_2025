"use client";

import React from "react";
import { Button } from "@/components/Button";

export function AppsPreview() {
  return (
    <div className="relative flex h-[40rem] w-full overflow-hidden rounded-md bg-transparent antialiased md:items-center md:justify-center">
      <div className="relative z-10 mx-auto w-full max-w-4xl p-4 pt-20 md:pt-0">
        <div className="flex flex-col justify-center items-center mb-6">
          <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text tracking-tighter text-center text-4xl font-semibold text-transparent lg:text-6xl">
            Anything That Runs on Linux Can Run on ThreeFold
          </h1>
        </div>
      </div>
    </div>
  );
}
