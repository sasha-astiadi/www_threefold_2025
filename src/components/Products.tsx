"use client";
import { Button } from "./Button";
import Image from "next/image";

const products = [
  {
    id: 1,
    colSpan: "lg:col-span-3",
    rounded: "rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]",
    img: "/images/3nodes.png",
    title: "3Nodes",
    desc: "The backbone of storage and infrastructure, providing compute and data resources.",
    color: "indigo-400",
    bgRounded: "max-lg:rounded-t-4xl lg:rounded-tl-4xl"
  },
  {
    id: 2,
    colSpan: "lg:col-span-3",
    rounded: "rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]",
    img: "/images/mycelium.svg",
    title: "Mycelium",
    desc: "End-to-end encrypted overlay network, always looking for the shortest possible path between participants",
    color: "indigo-400",
    bgRounded: "lg:rounded-tr-4xl"
  },
  {
    id: 3,
    colSpan: "lg:col-span-2",
    rounded: "rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]",
    img: "/images/aibox.png",
    title: "AIBox",
    desc: "A self-hosted AI compute solution powered by ThreeFold.",
    color: "indigo-400",
    bgRounded: "lg:rounded-bl-4xl"
  },
  {
    id: 4,
    colSpan: "lg:col-span-2",
    rounded: "rounded-[calc(var(--radius-lg)+1px)]",
    img: "/images/3phone.png",
    title: "3Phone",
    desc: "OwnPhone is the first secure device in the 3Phone family designed to work seamlessly with the ThreeFold Grid.",
    color: "indigo-400",
    bgRounded: ""
  },
  {
    id: 5,
    colSpan: "lg:col-span-2",
    rounded: "rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]",
    img: "/images/3router.png",
    title: "3Router",
    desc: "Smart routers ensure shortest-path connections between nodes and phones with end-to-end encryption.",
    color: "indigo-400",
    bgRounded: "max-lg:rounded-b-4xl lg:rounded-br-4xl"
  }
];

export function ProductsPreview() {

  return (
    <section className="w-full bg-transparent px-4 py-8 sm:px-6 mt-12 sm:pb-12 lg:px-6 relative">
    
      <div className="mx-auto max-w-7xl">
        <div className="lg:flex lg:items-center lg:justify-between lg:px-8">
          {/* Left Column - Text (1/3 width) */}
          <div className="lg:col-span-1 flex max text-center lg:text-left order-1 lg:order-1">
            <div className="max-w-4xl">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight leading-tight text-white lg:text-4xl">
              Join the Movement to Build a New Internet
            </h2>
            <p className="mt-4 lg:mt-6 text-sm font-light text-pretty text-white lg:text-base">
              There are many ways to be part of our mission to create a more open, autonomous, and interconnected digital world. Farming is just one pillar of our ecosystem. Explore all the products that are driving this transformation.
            </p>
            </div>
            </div>
          {/* Right Column - Stacked Cubes (2/3 width) */}
          <div className="lg:col-span-2 flex items-center justify-center lg:justify-start order-2 lg:order-2">
            <Button variant="outline">
              Join the Ecosystem
            </Button>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          {products.map(product => (
            <div
              key={product.id}
              className={`rounded-2xl bg-stat-gradient p-8 shadow-sm backdrop-blur transition-all duration-300 ease-out hover:scale-105 ${product.colSpan}`}
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
              <div className="flex h-full flex-col lg:flex-row items-center lg:items-start gap-6">
                <div className="flex-shrink-0">
                  <img
                    alt={`${product.title} screenshot`}
                    src={product.img}
                    className="w-20 h-20 lg:w-24 lg:h-24 object-contain"
                  />
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-xl lg:text-2xl font-semibold text-white mb-3">{product.title}</h3>
                  <p className="text-gray-700 text-sm font-light text-pretty lg:text-base">
                    {product.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
