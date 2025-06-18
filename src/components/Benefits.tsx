import { Container } from '@/components/Container'
import Image from 'next/image'
import Benefits1 from '@/images/benefits/benefits1.jpg'
import Benefits2 from '@/images/benefits/benefits2.jpg'
import Benefits3 from '@/images/benefits/benefits3.jpg'
import Benefits4 from '@/images/benefits/benefits4.jpg'


export default function Benefits() {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <Container>
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
                <h2 className="lg:text-4xl text-3xl font-medium tracking-tight text-gray-900">
                Built Different. For a Change.
                </h2>   
                <p className="mt-6 lg:text-lg text-base text-gray-600">
                    EngageOS isn’t just another tech platform — it’s a digital infrastructure built from the ground up for purpose-driven organizations. From white-label sovereignty to field-ready resilience, every element of EngageOS is designed to meet the real-world challenges of civil society.
                </p>
            </div>
        </Container>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="flex p-px lg:col-span-4">
            <div className="overflow-hidden rounded-lg bg-white ring-1 ring-black/15 max-lg:rounded-t-4xl lg:rounded-tl-4xl">
              <Image
                alt=""
                src={Benefits1}
                className="h-80 object-cover object-left"
              />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-gray-900"> Built for Civil Society</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-900">Purpose-First, Not Profit-First</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Unlike traditional SaaS built for commercial scale, EngageOS was born from the realities of NGOs, grassroots coalitions, and purpose-led institutions. Every module, flow, and metric is optimized to serve impact — not ad revenue or venture capital.
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-2">
            <div className="overflow-hidden rounded-lg bg-white ring-1 ring-black/15 lg:rounded-tr-4xl">
              <Image
                alt=""
                src={Benefits2}
                className="h-80 object-cover"
              />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-gray-900">White-Label, Zero-Code</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-900">Your Brand, Your Movements</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  EngageOS empowers organizations to fully own their digital identity. From Red Cross OS to Montessori OS, each instance is custom-branded — no tech team required. You launch a platform that looks and feels like you, not us.
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-2">
            <div className="overflow-hidden rounded-lg bg-white ring-1 ring-black/15 lg:rounded-bl-4xl">
              <Image
                alt=""
                src={Benefits3}
                className="h-80 object-cover"
              />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-gray-900">Sovereign & Ethical Infrastructure</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-900">Own Your Data. Always.</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  We don’t mine or monetize user data. EngageOS runs on decentralized, privacy-respecting infrastructure — built for trust, compliance, and sovereignty. You control where your data lives and who sees it.
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-4">
            <div className="overflow-hidden rounded-lg bg-white ring-1 ring-black/15 max-lg:rounded-b-4xl lg:rounded-br-4xl">
              <Image
                alt=""
                src={Benefits4}
                className="h-80 object-cover object-left"
              />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-gray-900">Mutualized Model</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-900">Share Infrastructure. Multiply Impact.</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  By pooling tech costs across aligned organizations, EngageOS offers enterprise-grade functionality at a fraction of the price. When one partner grows, the entire ecosystem benefits — through shared modules, updates, and insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
