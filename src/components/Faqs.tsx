import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'What is ThreeFold?',
      answer:
        'ThreeFold is a white-label engagement platform built specifically for purpose-driven organizations. It allows NGOs, foundations, and impact coalitions to launch their own branded platforms to engage communities, deliver training, and mobilize support.',
    },
    {
      question: 'Do I need a tech team to use ThreeFold?',
      answer:
        'No. ThreeFold is fully plug-and-play. It’s designed so any organization—regardless of technical capacity—can deploy and customize their own platform without writing a line of code.',
    },
    {
      question: 'Can we fully customize the platform’s look and feel?',
      answer:
        'Absolutely. From logos and colors to navigation and community features, ThreeFold supports full white-label customization so the platform feels like your own digital headquarters.',
    },
  ],
  [
    {
      question: 'What kinds of organizations use ThreeFold?',
      answer:
        'We work with NGOs, educational networks, development agencies, faith-based groups, and mission-aligned coalitions that want to better engage, train, and mobilize their communities at scale.',
    },
    {
      question: 'Is ThreeFold multilingual and accessible offline?',
      answer:
        'Yes. The platform supports multilingual content and offline-friendly delivery—ideal for reaching underserved communities with limited connectivity.',
    },
    {
      question: 'Can we use ThreeFold for fundraising?',
      answer:
        'Yes. ThreeFold includes built-in fundraising tools, including peer-to-peer, micro-donation, and pay-it-forward models—plus full donor engagement capabilities.',
    },
  ],
  [
    {
      question: 'How is ThreeFold different from other platforms?',
      answer:
        'Unlike general-purpose platforms, ThreeFold is mission-built for civil society. It integrates engagement, learning, and fundraising in one secure, ethical platform—hosted on sovereign infrastructure.',
    },
    {
      question: 'What is the pricing model?',
      answer:
        'ThreeFold operates on a flexible SaaS model, with plans ranging from €30K to €300K annually depending on features and user scale. For grassroots initiatives, pay-it-forward and sponsorship models are also available.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Reach out to our team for a demo or strategy session. We’ll walk you through the options and help design the best deployment path for your mission.',
    },
  ],
]


export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 lg:text-lg text-base text-gray-600">
            If you have anything else you want to ask,{' '}
            <a
              href="mailto:info@example.com"
              className="text-gray-900 underline"
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
                    <h3 className="lg:text-lg text-base/6 font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
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
