import { AppsPreview } from '../../../components/Apps'
import { Container } from '../../../components/Container'

export const metadata = {
  title: 'Build',
  description: 'Build and deploy your applications on ThreeFold\'s decentralized infrastructure.',
}

export default function Build() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24" style={{ backgroundColor: '#121212' }}>
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-medium tracking-tight text-white lg:text-6xl">
              Build on ThreeFold
            </h1>
            <p className="mt-6 lg:text-lg text-base text-gray-300">
              Deploy your Web2, Web3, and AI applications on truly decentralized infrastructure. 
              Own your data, control your destiny.
            </p>
          </div>
        </Container>
      </section>

      {/* Apps Preview */}
      <AppsPreview />

      {/* Developer Tools */}
      <section className="py-24" style={{ backgroundColor: '#121212' }}>
        <Container>
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl mb-12">
            <h2 className="text-3xl font-medium tracking-tight text-white">
              Developer Tools & Resources
            </h2>
            <p className="mt-6 lg:text-lg text-base text-gray-300">
              Everything you need to build and deploy on the ThreeFold Grid.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">TF Grid SDK</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive SDK for deploying and managing workloads on the ThreeFold Grid.
              </p>
              <a href="https://github.com/threefoldtech" className="text-cyan-400 hover:text-cyan-300">
                View on GitHub →
              </a>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">Documentation</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive guides, tutorials, and API documentation for developers.
              </p>
              <a href="https://manual.threefold.io" className="text-cyan-400 hover:text-cyan-300">
                Read Docs →
              </a>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">Community Forum</h3>
              <p className="text-gray-300 mb-4">
                Get help from the community and share your ThreeFold projects.
              </p>
              <a href="https://forum.threefold.io" className="text-cyan-400 hover:text-cyan-300">
                Join Forum →
              </a>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">Marketplace</h3>
              <p className="text-gray-300 mb-4">
                Browse and deploy ready-made solutions from the ThreeFold ecosystem.
              </p>
              <a href="https://marketplace.threefold.io" className="text-cyan-400 hover:text-cyan-300">
                Explore →
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}