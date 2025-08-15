import { Container } from '../../../components/Container'
import { StackSectionPreview } from '../../../components/StackSection'

export const metadata = {
  title: 'Technology',
  description: 'Deep dive into ThreeFold\'s revolutionary decentralized infrastructure technology.',
}

export default function Technology() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24" style={{ backgroundColor: '#121212' }}>
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-medium tracking-tight text-white lg:text-6xl">
              Revolutionary Technology Stack
            </h1>
            <p className="mt-6 lg:text-lg text-base text-gray-300">
              ThreeFold has reimagined internet infrastructure from the ground up, 
              creating a truly decentralized, sustainable, and sovereign alternative to Big Tech.
            </p>
          </div>
        </Container>
      </section>

      {/* Stack Section */}
      <StackSectionPreview />

      {/* Technical Details */}
      <section className="py-24" style={{ backgroundColor: '#121212' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="bg-gray-900 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">Zero-OS</h3>
              <p className="text-gray-300">
                Our lightweight operating system runs directly on bare metal, 
                eliminating the overhead of traditional virtualization while 
                providing maximum security and efficiency.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">Quantum Safe Storage</h3>
              <p className="text-gray-300">
                Revolutionary storage system that disperses data across multiple 
                nodes, making it quantum-safe and virtually impossible to hack or lose.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">Planetary Network</h3>
              <p className="text-gray-300">
                End-to-end encrypted overlay network that creates the shortest 
                path between any two points on the internet, bypassing traditional routing.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}