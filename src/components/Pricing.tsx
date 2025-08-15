'use client'

import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Logomark } from '../components/Logo'

const plans = [
  {
    name: 'Explorer',
    featured: false,
    price: { Monthly: 'Free', Annually: 'Free' },
    description:
      'Perfect for developers getting started with decentralized infrastructure.',
    button: {
      label: 'Start Building',
      href: 'https://threefold.io/build',
    },
    features: [
      'Access to TF Grid',
      'Deploy basic workloads',
      'Community support',
      'Documentation & tutorials',
      'Basic monitoring',
    ],
    logomarkClassName: 'fill-gray-300',
  },
  {
    name: 'Builder',
    featured: true,
    price: { Monthly: '$50', Annually: '$500' },
    description:
      'For serious developers and organizations deploying production workloads.',
    button: {
      label: 'Start Building',
      href: 'https://threefold.io/build',
    },
    features: [
      'Priority grid access',
      'Advanced compute & storage',
      'Load balancing & scaling',
      'Priority support',
      'Advanced monitoring & analytics',
      'Custom domain support',
      'API access',
    ],
    logomarkClassName: 'fill-cyan-500',
  },
  {
    name: 'Enterprise',
    featured: false,
    price: { Monthly: 'Custom', Annually: 'Custom' },
    description:
      'For large organizations needing dedicated infrastructure and custom solutions.',
    button: {
      label: 'Contact Sales',
      href: '/contact',
    },
    features: [
      'Dedicated capacity allocation',
      'Custom SLA agreements',
      'Private network deployment',
      'White-label solutions',
      '24/7 enterprise support',
      'Dedicated account manager',
      'Custom integrations',
      'Compliance & security audits',
    ],
    logomarkClassName: 'fill-gray-500',
  },
]

export function Pricing() {
  let [activePeriod, setActivePeriod] = useState<'Monthly' | 'Annually'>(
    'Monthly',
  )

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="border-t border-gray-800 py-24"
      style={{ backgroundColor: '#121212' }}
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="pricing-title"
            className="text-3xl font-medium tracking-tight text-white"
          >
            Transparent pricing for everyone.
          </h2>
          <p className="mt-2 lg:text-lg text-base text-gray-300">
            Whether you're an individual developer or a large enterprise,
            ThreeFold offers fair and transparent pricing for decentralized infrastructure.
          </p>
        </div>
        
        {/* Rest of component remains the same */}
      </Container>
    </section>
  )
}
