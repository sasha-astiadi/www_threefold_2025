"use client";

import { useState } from "react";
import { Cube } from "@/components/ui/Cube";

const stackData = [
  {
    id: "network",
    title: "Network",
    descriptionTitle: "Secure Network",
    description:
      "End-to-end encrypted overlay network, always looking for the shortest possible path between participants. Logical Internet address securely linked to a private key. Unlimited scale and performance optimizations.",
    position: "top",
  },
  {
    id: "data",
    title: "Data",
    descriptionTitle: "Unbreakable Data",
    description:
      "Private, distributed, and AI-native storage with user sovereignty at its core. End-to-end encryption and redundancy, with no central control. Optimized for performance and sustainability, far surpassing traditional cloud.",
    position: "middle",
  },
  {
    id: "compute",
    title: "Compute",
    descriptionTitle: "Bare Metal OS",
    description:
      "Zero OS, an efficient and secure operating system, runs directly on the hardware – enabling an autonomous cloud. Can run any Web2, Web3, or AI workload at the edge of the Internet, with more scalability and reliability.",
    position: "bottom",
  },
];

export function StackedCubes() {
  const [active, setActive] = useState<string | null>("compute");

  return (
    <div className="relative w-full flex items-center justify-center lg:justify-start min-h-[600px] sm:min-h-[700px] lg:min-h-[600px]">
      <div className="relative ml-0 sm:ml-4 lg:ml-8 flex flex-col items-center -space-y-4 sm:-space-y-6 lg:-space-y-8">
        {stackData.map((layer, index) => (
          <div
            key={layer.id}
            className="relative"
            style={{
              zIndex: 10 - index,
            }}
          >
            <Cube
              title={layer.title}
              descriptionTitle={layer.descriptionTitle}
              description={layer.description}
              isActive={active === layer.id}
              index={index}
              onHover={() => setActive(layer.id)}
              onLeave={() => setActive("compute")}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
