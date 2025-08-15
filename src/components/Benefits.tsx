import { Container } from '../components/Container'
import Image from 'next/image'
import Benefits1 from '../images/benefits/benefits1.jpg'
import Benefits2 from '../images/benefits/benefits2.jpg'
import Benefits3 from '../images/benefits/benefits3.jpg'
import Benefits4 from '../images/benefits/benefits4.jpg'


export default function Benefits() {
  return (
    <div style={{ backgroundColor: '#121212' }} className="py-12">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <Container>
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
                <h2 className="lg:text-4xl text-3xl font-medium tracking-tight text-white">
                The Benefits of Decentralized Infrastructure
                </h2>
                <p className="mt-6 lg:text-lg text-base text-gray-300">
                    ThreeFold offers a fundamentally different approach to internet infrastructure, providing unparalleled benefits in terms of sovereignty, sustainability, and accessibility.
                </p>
            </div>
        </Container>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="flex p-px lg:col-span-4">
            <div className="overflow-hidden rounded-lg bg-gray-900 ring-1 ring-gray-700 max-lg:rounded-t-4xl lg:rounded-tl-4xl">
              <Image
                alt=""
                src={Benefits1}
                className="h-80 object-cover object-left"
              />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-white">True Sovereignty</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-white">Own Your Data, Control Your Destiny</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-300">
                  With ThreeFold, you own your data and control your digital presence. Our decentralized architecture ensures your information remains private and secure, free from corporate or governmental oversight.
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-2">
            <div className="overflow-hidden rounded-lg bg-gray-900 ring-1 ring-gray-700 lg:rounded-tr-4xl">
              <Image
                alt=""
                src={Benefits2}
                className="h-80 object-cover"
              />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-white">Sustainable & Energy Efficient</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-white">Green Computing for a Better Future</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-300">
                  Our Zero-OS and optimized network design consume significantly less energy than traditional data centers, making ThreeFold a truly sustainable solution for the planet.
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-2">
            <div className="overflow-hidden rounded-lg bg-gray-900 ring-1 ring-gray-700 lg:rounded-bl-4xl">
              <Image
                alt=""
                src={Benefits3}
                className="h-80 object-cover"
              />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-white">Accessible & Inclusive</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-white">Internet for Everyone, Everywhere</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-300">
                  By distributing computing power globally, ThreeFold makes internet infrastructure accessible to underserved regions, fostering digital inclusion and empowering local communities.
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-4">
            <div className="overflow-hidden rounded-lg bg-gray-900 ring-1 ring-gray-700 max-lg:rounded-b-4xl lg:rounded-br-4xl">
              <Image
                alt=""
                src={Benefits4}
                className="h-80 object-cover object-left"
              />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-white">Resilient & Secure</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-white">Quantum-Safe and Unhackable</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-300">
                  ThreeFold's unique data distribution and encryption methods provide quantum-safe security, making your data virtually impossible to hack or lose, ensuring unparalleled resilience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
