"use client";
import { Button } from "./Button";
import Image from "next/image";

const products = [
  {
    id: 1,
    colSpan: "lg:col-span-3",
    rounded: "rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]",
    img: "https://tailwindcss.com/plus-assets/img/component-images/dark-bento-01-performance.png",
    title: "3Nodes",
    desc: "The backbone of storage and infrastructure, providing compute and data resources.",
    color: "indigo-400",
    bgRounded: "max-lg:rounded-t-4xl lg:rounded-tl-4xl"
  },
  {
    id: 2,
    colSpan: "lg:col-span-3",
    rounded: "rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]",
    img: "https://tailwindcss.com/plus-assets/img/component-images/dark-bento-01-releases.png",
    title: "`Mycelium`",
    desc: "Curabitur auctor, ex quis auctor venenatis, eros arcu rhoncus massa, laoreet dapibus ex elit vitae odio.",
    color: "indigo-400",
    bgRounded: "lg:rounded-tr-4xl"
  },
  {
    id: 3,
    colSpan: "lg:col-span-2",
    rounded: "rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]",
    img: "https://tailwindcss.com/plus-assets/img/component-images/dark-bento-01-speed.png",
    title: "AiBox",
    desc: "Sed congue eros non finibus molestie. Vestibulum euismod augue.",
    color: "indigo-400",
    bgRounded: "lg:rounded-bl-4xl"
  },
  {
    id: 4,
    colSpan: "lg:col-span-2",
    rounded: "rounded-[calc(var(--radius-lg)+1px)]",
    img: "https://tailwindcss.com/plus-assets/img/component-images/dark-bento-01-integrations.png",
    title: "3Phone",
    desc: "Maecenas at augue sed elit dictum vulputate, in nisi aliquam maximus arcu.",
    color: "indigo-400",
    bgRounded: ""
  },
  {
    id: 5,
    colSpan: "lg:col-span-2",
    rounded: "rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]",
    img: "https://tailwindcss.com/plus-assets/img/component-images/dark-bento-01-network.png",
    title: "3Router",
    desc: "Aenean vulputate justo commodo auctor vehicula in malesuada semper.",
    color: "indigo-400",
    bgRounded: "max-lg:rounded-b-4xl lg:rounded-br-4xl"
  }
];

export function ProductsPreview() {

  return (
    <section className="w-full bg-transparent px-4 py-8 sm:px-6 mt-12 sm:pb-12 lg:px-8 relative">
    {/* Gradient Blob Component */}
      <div className="absolute w-[400px] h-[200px] bg-gradient-to-br from-[#505050] to-[#7e7e7e] opacity-40 rounded-full blur-[150px] bottom-[200px] left-[-150px] z-0" />
      <div className="absolute w-[200px] h-[100px] bg-gradient-to-br from-[#505050] to-[#7e7e7e] opacity-50 rounded-full blur-[150px] top-[200px] right-[-150px] z-0" />
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
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          {products.map(product => (
            <div key={product.id} className={`relative ${product.colSpan}`}>
              <div className={`absolute inset-0 rounded-lg bg-gray-100 ${product.bgRounded}`} />
              <div className={`relative flex h-full flex-col overflow-hidden ${product.rounded}`}>
                <img
                  alt={`${product.title} screenshot`}
                  src={product.img}
                  className={`h-80 object-cover ${product.id === 2 ? 'object-left lg:object-right' : 'object-left'}`}
                />
                <div className="p-10 pt-4">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white">{product.title}</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-700">
                    {product.desc}
                  </p>
                </div>
              </div>
              <div className={`pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-white/15 ${product.bgRounded}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
