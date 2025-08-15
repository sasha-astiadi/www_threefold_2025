import { FarmerPreview } from '../../../components/Farmer'
import { Container } from '../../../components/Container'

export const metadata = {
  title: 'Farming',
  description: 'Learn how to become a ThreeFold farmer and earn rewards by contributing to the decentralized internet.',
}

export default function Farming() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24" style={{ backgroundColor: '#121212' }}>
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-medium tracking-tight text-white lg:text-6xl">
              Become a ThreeFold Farmer
            </h1>
            <p className="mt-6 lg:text-lg text-base text-gray-300">
              Join thousands of farmers worldwide who are building the decentralized internet 
              and earning rewards for their contribution.
            </p>
          </div>
        </Container>
      </section>

      {/* Farmer Process */}
      <FarmerPreview />

      {/* Farming Benefits */}
      <section className="py-24" style={{ backgroundColor: '#121212' }}>
        <Container>
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl mb-12">
            <h2 className="text-3xl font-medium tracking-tight text-white">
              Why Become a Farmer?
            </h2>
            <p className="mt-6 lg:text-lg text-base text-gray-300">
              ThreeFold farming offers unique benefits compared to traditional hosting or mining.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">Earn TFT Rewards</h3>
              <p className="text-gray-300">
                Get rewarded in ThreeFold Tokens (TFT) for providing capacity to the grid.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">Low Energy Usage</h3>
              <p className="text-gray-300">
                Our efficient Zero-OS uses up to 10x less energy than traditional cloud infrastructure.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">Easy Setup</h3>
              <p className="text-gray-300">
                Simply boot any computer with our Zero-OS image and you're farming in minutes.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}