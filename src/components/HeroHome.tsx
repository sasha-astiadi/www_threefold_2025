'use client'

import Image from 'next/image'
import { Button } from './Button'
import Engage from '@/images/engage.svg'
import { gradientText, gradientDark } from '@/components/Gradients'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function HeroHome() {
  return (
    <div style={{ backgroundColor: '#121212' }}>
        <div className="">
          <div className="mx-auto max-w-7xl px-8 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-medium tracking-tight text-white lg:text-5xl">
                Empowering Purpose-Driven Organizations.
              </h1>
              <p className="mt-8 lg:lg:text-lg text-base text-base text-gray-300">
                Welcome to <span className={`font-semibold ${gradientText}`}>EngageOS</span>: the first all-in-one, white-label engagement platform to mobilize communities, engage supporters, scale impact, and fundraise—at a fraction of the cost.
              </p>
              <div className="mt-12 flex items-center justify-center gap-x-6 relative z-10">
                <Button color="gradient">Get in Touch</Button>
              <Button
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                variant="outline"
              >
                <span className="ml-2.5">Book a Demo</span>
              </Button>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-4 lg:px-8 mb-10 lg:mb-32">
            <div className="max-w-4xl flow-root bg-transparent mx-auto relative">
              <div className="lg:-m-8 m-10 flex justify-center">
                <Image src={Engage} alt="" unoptimized />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
