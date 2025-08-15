import { Container } from '../../../components/Container'

export const metadata = {
  title: 'Community',
  description: 'Join the ThreeFold community building the decentralized internet.',
}

export default function Community() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24" style={{ backgroundColor: '#121212' }}>
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-medium tracking-tight text-white lg:text-6xl">
              Join the Movement
            </h1>
            <p className="mt-6 lg:text-lg text-base text-gray-300">
              ThreeFold is more than technology - it's a global community building 
              a better internet for everyone.
            </p>
          </div>
        </Container>
      </section>

      {/* Community Stats */}
      <section className="py-24" style={{ backgroundColor: '#121212' }}>
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">50K+</div>
              <div className="text-gray-300">Community Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">1,800+</div>
              <div className="text-gray-300">Active Farmers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Developers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">51</div>
              <div className="text-gray-300">Countries</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Community Channels */}
      <section className="py-24" style={{ backgroundColor: '#121212' }}>
        <Container>
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl mb-12">
            <h2 className="text-3xl font-medium tracking-tight text-white">
              Connect with the Community
            </h2>
            <p className="mt-6 lg:text-lg text-base text-gray-300">
              Join our global community across multiple platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Forum',
                description: 'Discuss ideas, get help, and share your projects',
                link: 'https://forum.threefold.io',
                members: '15K+ members'
              },
              {
                name: 'Telegram',
                description: 'Real-time chat with farmers and developers',
                link: 'https://t.me/threefold',
                members: '25K+ members'
              },
              {
                name: 'Discord',
                description: 'Voice chat and community events',
                link: 'https://discord.gg/threefold',
                members: '8K+ members'
              },
              {
                name: 'GitHub',
                description: 'Contribute to open-source development',
                link: 'https://github.com/threefoldtech',
                members: '200+ contributors'
              },
              {
                name: 'Twitter/X',
                description: 'Latest news and announcements',
                link: 'https://twitter.com/threefold_io',
                members: '30K+ followers'
              },
              {
                name: 'LinkedIn',
                description: 'Professional network and company updates',
                link: 'https://linkedin.com/company/threefold',
                members: '5K+ followers'
              },
            ].map((channel) => (
              <div key={channel.name} className="bg-gray-900 p-8 rounded-2xl hover:bg-gray-800 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-4">{channel.name}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <div className="text-sm text-cyan-400 mb-4">{channel.members}</div>
                <a 
                  href={channel.link} 
                  className="text-cyan-400 hover:text-cyan-300 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join {channel.name} →
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}