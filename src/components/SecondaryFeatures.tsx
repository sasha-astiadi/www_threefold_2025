import { useId } from 'react'
import {
  CpuChipIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  BoltIcon,
  CloudIcon,
  CubeIcon
} from '@heroicons/react/24/solid'
import Image from 'next/image'
import AppScreenshot from '../images/app_screenshot.png'

import { Container } from '../components/Container'

const features = [
  {
    name: 'Quantum-Safe Storage',
    description:
      'Revolutionary storage algorithm that disperses data across multiple nodes, making it quantum-safe and unhackable.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Zero-OS Operating System',
    description:
      'Lightweight OS that runs directly on bare metal, eliminating virtualization overhead and maximizing efficiency.',
    icon: CpuChipIcon,
  },
  {
    name: 'Planetary Network',
    description:
      'End-to-end encrypted overlay network that finds the shortest path between any two points on the internet.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Energy Efficient',
    description:
      'Uses up to 10x less energy than traditional cloud infrastructure through intelligent resource optimization.',
    icon: BoltIcon,
  },
  {
    name: 'Edge Computing Ready',
    description:
      'Deploy applications at the edge of the internet for ultra-low latency and improved user experience.',
    icon: CloudIcon,
  },
  {
    name: 'Autonomous Operation',
    description:
      'Self-healing infrastructure that operates autonomously without human intervention or central control.',
    icon: CubeIcon,
  },
]

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="ThreeFold Technology Features"
      className="pt-24 pb-24"
      style={{ backgroundColor: '#121212' }}
    >
      <Container>
        <div className="mx-auto max-w-4xl sm:text-center">
          <h2 className="lg:text-4xl text-3xl font-medium tracking-tight text-white">
            Revolutionary Technology for a Decentralized Future
          </h2>
          <p className="mt-4 lg:text-lg text-base text-gray-300">
            ThreeFold's groundbreaking technology stack enables true decentralization,
            sustainability, and sovereignty in internet infrastructure.
          </p>
        </div>
        
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="rounded-2xl border border-gray-700 bg-gray-900 p-8"
            >
              <feature.icon className="h-8 w-8 text-cyan-400" />
              <h3 className="mt-6 font-semibold text-white">
                {feature.name}
              </h3>
              <p className="mt-2 text-gray-300">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
