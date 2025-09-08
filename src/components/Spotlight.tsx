"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";
import { Logomark } from "@/components/Logo";
import { Button } from "@/components/Button";

export function SpotlightPreview() {
  return (
    <div className="relative flex h-[40rem] w-full overflow-hidden rounded-md bg-transparent antialiased md:items-center md:justify-center">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <div className="flex justify-center mb-6">
           <div className="mb-4 relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing The New TF Marketplace.{' '}
              <a href="#" className="font-semibold text-white hover:text-gray-200">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
        </div>

        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text tracking-tighter text-center text-4xl font-semibold text-transparent lg:text-6xl">
          Built by Everyone <br /> for Everyone.
        </h1>
        <p className="mx-auto mt-8 max-w-lg text-center text-base lg:text-xl font-light text-neutral-300">
          ThreeFold is a fully operational, decentralized internet infrastructure – deployed locally, scalable globally, and owned and powered by the people.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button href="/login" variant="glass">
            Start Building
          </Button>
          <Button href="#" variant="outline" color="gray">
            Start Hosting
          </Button>
        </div>
      </div>
    </div>
  );
}
