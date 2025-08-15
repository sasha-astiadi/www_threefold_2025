import Image from "next/image"
import Traction from '../images/tractions/tractions.jpg'
import logoForbes from '../images/logos/forbes.svg'
import logoTechcrunch from '../images/logos/techcrunch.svg'
import logoWired from '../images/logos/wired.svg'
import logoCnn from '../images/logos/cnn.svg'
import logoBbc from '../images/logos/bbc.svg'
import logoCbs from '../images/logos/cbs.svg'
import logoFastCompany from '../images/logos/fast-company.svg'
import logoHuffpost from '../images/logos/huffpost.svg'
import clsx from 'clsx'

const stats = [
  { id: 1, name: 'Nodes deployed globally', value: '1,800+' },
  { id: 2, name: 'Countries with active farmers', value: '50+' },
  { id: 3, name: 'Total compute capacity (cores)', value: '100K+' },
  { id: 4, name: 'Total storage capacity (TB)', value: '500TB+' },
]

export default function Tractions() {
  return (
    <div className="relative py-12" style={{ backgroundColor: '#121212' }}>
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        {/* LEFT IMAGE + LOGO */}
        <div className="flex flex-col items-center lg:items-start gap-8 px-6 pb-12 lg:px-8">
          <div className="w-full ring-1 ring-gray-700 rounded-3xl overflow-hidden max-lg:rounded-t-4xl lg:rounded-tl-4xl">
            <Image
              alt=""
              src={Traction}
              className="aspect-[3/2] object-cover w-full h-auto"
            />
          </div>
          <div className="w-full pr-6 lg:pr-12">
            <ul
              role="list"
              className="mt-6 flex flex-wrap justify-center gap-x-10 gap-y-8 lg:justify-start"
            >
              {[
                ['Forbes', logoForbes],
                ['TechCrunch', logoTechcrunch],
                ['Wired', logoWired],
                ['CNN', logoCnn, 'hidden xl:block'],
                ['BBC', logoBbc],
                ['CBS', logoCbs],
                ['Fast Company', logoFastCompany],
                ['HuffPost', logoHuffpost, 'hidden xl:block'],
              ].map(([name, logo, className]) => (
                <li key={name} className={clsx('flex', className)}>
                  <Image src={logo} alt={name} className="h-8 w-auto" unoptimized />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT TEXT BLOCK */}
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
            <h2 className="text-base/8 font-semibold text-white">Our Global Footprint</h2>
            <p className="mt-2 text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Powering the Decentralized Internet Worldwide
            </p>
            <p className="mt-6 lg:text-lg text-base text-gray-300">
                ThreeFold is building the world's largest peer-to-peer internet infrastructure, with active nodes and farmers spanning the globe. Join our decentralized network.
            </p>
            <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col gap-y-3 border-l border-gray-600 pl-6">
                  <dt className="text-sm/6 text-gray-300">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
