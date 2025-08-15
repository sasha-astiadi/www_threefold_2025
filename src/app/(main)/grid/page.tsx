import { Dashboard } from '../../../components/Dashboard'
import { Container } from '../../../components/Container'
import GlobeDemo from '../../../components/GlobeDemo'

export const metadata = {
  title: 'Grid Status',
  description: 'Live statistics and status of the ThreeFold Grid - the world\'s largest decentralized internet infrastructure.',
}

export default function Grid() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24" style={{ backgroundColor: '#121212' }}>
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-medium tracking-tight text-white lg:text-6xl">
              ThreeFold Grid Status
            </h1>
            <p className="mt-6 lg:text-lg text-base text-gray-300">
              Real-time statistics of our global decentralized infrastructure network.
            </p>
          </div>
        </Container>
      </section>

      {/* Globe Visualization */}
      <section className="relative h-[600px]" style={{ backgroundColor: '#121212' }}>
        <GlobeDemo />
      </section>

      {/* Dashboard Stats */}
      <Dashboard />

      {/* Additional Grid Info */}
      <section className="py-24" style={{ backgroundColor: '#121212' }}>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">80%</div>
              <div className="text-gray-300">Energy Savings vs Cloud</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">10x</div>
              <div className="text-gray-300">More Secure</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
              <div className="text-gray-300">Decentralized</div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}