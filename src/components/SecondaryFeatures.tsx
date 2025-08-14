import { useId } from 'react'
import { SquaresPlusIcon, BeakerIcon, CurrencyDollarIcon, AdjustmentsVerticalIcon, SparklesIcon, ServerStackIcon } from '@heroicons/react/24/solid'
import Image from '@/components/Image'
import AppScreenshot from '/images/app_screenshot.png'


import { Container } from '@/components/Container'

const features = [
  {
    name: 'Engage Supporters with Community Tools.',
    description:
      'Inspire action through built-in community tools like forums, comments, and stories that spark meaningful participation.',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Train with AI-powered Learning Paths.',
    description:
      'Deliver scalable training with AI-powered learning paths, auto-generated content, and multilingual support.',
    icon: BeakerIcon,
  },
  {
    name: 'Fundraise via Peer & Micro-Donations.',
    description:
      'Empower supporters to fundraise through peer-to-peer campaigns, micro-donations, and integrated payment solutions.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Measure & Optimize Real-World Impact.',
    description:
      'Track real impact with dashboards that visualize KPIs, community activity, and field-level data.',
    icon: AdjustmentsVerticalIcon,
  },
  {
    name: 'White-Label Everything.',
    description:
      'Own your brand with a fully customizable platform—your name, your colors, your digital HQ.',
    icon: SparklesIcon,
  },
  {
    name: 'Robust & Secure Infrastructure.',
    description:
      'Host on your terms via decentralized, privacy-respecting infrastructure built for trust and security.',
    icon: ServerStackIcon,
  },
]

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="pt-24 pb-24"
    >
      <Container>
        <div className="mx-auto max-w-4xl sm:text-center">
          <h2 className="lg:text-4xl text-3xl font-medium tracking-tight text-gray-900">
            The Platform Built for Purpose-driven Organizations
          </h2>
          <p className="mt-4 lg:text-lg text-base text-gray-600">
            EngageOS is the first plug-and-play engagement infrastructure built for civil society. From Red Cross OS to Montessori OS, any org can launch their own digital headquarters—no tech team needed.
          </p>
        </div>
        <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image
            alt="App screenshot"
            src={AppScreenshot}
            width={2432}
            height={1442}
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
          />
          <div aria-hidden="true" className="relative">
            <div className="absolute -inset-x-20 bottom-0 bg-linear-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="rounded-2xl border border-gray-200 p-8"
            >
              <feature.icon className="h-8 w-8" />
              <h3 className="mt-6 font-semibold text-gray-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-gray-700">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
