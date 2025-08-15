'use client'

import Image from 'next/image'
import { Button } from './Button'
import Engage from '../images/engage.svg'
import { gradientText, gradientDark } from '../components/Gradients'

export default function HeroHome() {
  return (
    <div style={{ backgroundColor: '#121212' }}>
        <div className="">
          <div className="mx-auto max-w-7xl px-8 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-medium tracking-tight text-white lg:text-5xl">
                Building the Internet of Tomorrow
              </h1>
              <p className="mt-8 lg:text-lg text-base text-gray-300">
                Welcome to <span className={`font-semibold ${gradientText}`}>ThreeFold</span>: the world's largest decentralized internet infrastructure. Built by everyone, for everyone - creating a more sovereign, sustainable, and accessible internet.
              </p>
              <div className="mt-12 flex items-center justify-center gap-x-6 relative z-10">
                <Button color="gradient" href="https://threefold.io/build">Start Building</Button>
                <Button
                  href="https://threefold.io/farm"
                  variant="outline"
                >
                  <span className="ml-2.5">Start Farming</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-4 lg:px-8 mb-10 lg:mb-32">
            <div className="max-w-4xl flow-root bg-transparent mx-auto relative">
              <div className="lg:-m-8 m-10 flex justify-center">
                <Image src={Engage} alt="ThreeFold Network" unoptimized />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
