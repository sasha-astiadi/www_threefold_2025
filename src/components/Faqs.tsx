import { Container } from '../components/Container'

const faqs = [
  [
    {
      question: 'What is ThreeFold?',
      answer:
        'ThreeFold is building the world\'s largest decentralized internet infrastructure. It\'s a peer-to-peer network of compute, storage, and network capacity owned and operated by independent farmers worldwide.',
    },
    {
      question: 'How is ThreeFold different from traditional cloud?',
      answer:
        'Unlike centralized cloud providers, ThreeFold is fully decentralized, uses up to 10x less energy, provides quantum-safe security, and gives you complete data sovereignty.',
    },
    {
      question: 'What can I build on ThreeFold?',
      answer:
        'Anything that runs on Linux can run on ThreeFold - from simple websites to complex AI workloads, blockchain nodes, IoT applications, and enterprise solutions.',
    },
  ],
  [
    {
      question: 'How do I become a ThreeFold farmer?',
      answer:
        'Simply boot any modern computer with our Zero-OS image. Once connected to the internet, your node will automatically join the grid and start earning TFT rewards.',
    },
    {
      question: 'What are ThreeFold Tokens (TFT)?',
      answer:
        'TFT is the native currency of the ThreeFold ecosystem. Farmers earn TFT for providing capacity, and users spend TFT to deploy workloads on the grid.',
    },
    {
      question: 'Is ThreeFold secure?',
      answer:
        'Yes, ThreeFold uses quantum-safe storage algorithms, end-to-end encryption, and a zero-trust security model. Data is dispersed across multiple nodes making it virtually impossible to hack.',
    },
  ],
  [
    {
      question: 'How much does it cost to use ThreeFold?',
      answer:
        'Pricing is transparent and competitive with traditional cloud providers, but with added benefits of decentralization and data sovereignty. Check our calculator for specific pricing.',
    },
    {
      question: 'Where is ThreeFold available?',
      answer:
        'ThreeFold operates globally with nodes in over 50 countries. The decentralized nature means you can deploy close to your users anywhere in the world.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Visit our Grid portal to start building, or check out our farming guide to contribute capacity. Our community is always ready to help newcomers.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-800 py-20 sm:py-32"
      style={{ backgroundColor: '#121212' }}
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-white"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 lg:text-lg text-base text-gray-300">
            If you have anything else you want to ask,{' '}
            <a
              href="mailto:info@threefold.io"
              className="text-cyan-400 hover:text-cyan-300 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="lg:text-lg text-base/6 font-semibold text-white">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-300">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
