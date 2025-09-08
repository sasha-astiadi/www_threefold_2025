"use client";
import { Button } from "./Button";
import Image from "next/image";

import { CpuChipIcon } from "@heroicons/react/24/solid";
import { CircleStackIcon } from "@heroicons/react/24/solid";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";

const posts = [
  {
    id: 1,
    title: 'Host A Node',
    href: '#',
    description1:
      'All you need to get started is a modern computer, electricity and network. Once booted with Zero OS, a computer becomes a ThreeFold Node.',
    description2: '',
    imageUrl:
      './images/3nodes.png',
    icon: <CpuChipIcon className="h-6 w-6 text-white" />,
    },
    {
    id: 2,
    title: 'Offer Capacity',
    href: '#',
    description1: 'The capacity of the node gets registered on the ThreeFold Blockchain and is available for users on the TF Marketplace.',
      description2: '',
    imageUrl:
      './images/capacity.png',
    icon: <CircleStackIcon className="h-6 w-6 text-white" />,
    },
    {
    id: 3,
    title: 'Earn Rewards',
    href: '#',
    description1:
      'Farmers earn rewards for their used resources, enabling a fair and transparent peer-to-peer economy.',
      description2: '',
    imageUrl:
      './images/rewards.png',
    icon: <CurrencyDollarIcon className="h-6 w-6 text-white" />,
    },
]


export function FarmerPreview() {

  return (
    <section className="w-full bg-transparent px-4 py-8 sm:px-6 mt-12 sm:pb-12 lg:px-8 relative">
    {/* Gradient Blob Component */}
      <div className="absolute w-[400px] h-[200px] bg-gradient-to-br from-[#535353] to-[#7e7e7e] opacity-60 rounded-full blur-[150px] bottom-[200px] left-[-150px] z-0" />
      <div className="absolute w-[200px] h-[100px] bg-gradient-to-br from-[#505050] to-[#7e7e7e] opacity-50 rounded-full blur-[150px] top-[200px] right-[-150px] z-0" />
      <div className="mx-auto max-w-7xl">
        <div className="lg:flex lg:items-center lg:justify-between lg:px-8">
          {/* Left Column - Text (1/3 width) */}
          <div className="lg:col-span-1 flex max text-center lg:text-left order-1 lg:order-1">
            <div className="max-w-xl">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight leading-tight text-white lg:text-4xl">
              Contribute to the Decentralized Internet in 3 Steps
            </h2>
            </div>
            </div>
          {/* Right Column - Stacked Cubes (2/3 width) */}
          <div className="lg:col-span-2 flex items-center justify-center lg:justify-start order-2 lg:order-2">
            <Button variant="outline">
              Become A Farmer
            </Button>
          </div>
        </div>
        <div className="mx-auto  mt-10 grid max-w-2xl h-3/4 grid-cols-1 gap-8 lg:mt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-stat-gradient px-8 lg:pt-12"
            >
              <div className="absolute inset-0 -z-10 bg-linear-to-t from-gray-200 via-gray-300/10" 
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
                </div>
                <div className="mt-12 flex items-start gap-x-3 text-lg/6 font-semibold text-white">
                    {post.icon}
                    {post.title}
                </div>  
                < div className="max-w-2/3">
                <p className="mt-4 text-sm font-light text-gray-700">{post.description1}</p>
                <p className=" text-sm font-light text-gray-700">{post.description2}</p>
                </div>
                <img alt="" src={post.imageUrl} className="w-1/2 h-full translate-x-20 -translate-32 transform object-cover object-top-left lg:translate-x-50  lg:-translate-20 opacity-70 hover:opacity-95" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
