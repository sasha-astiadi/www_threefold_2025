const faqs = [
  {
    question: 'Is this a separate new Internet?',
    answer: 'ThreeFold creates a decentralized internet infrastructure that can operate independently, offering alternatives to traditional centralized systems while maintaining compatibility with existing internet protocols.',
  },
  {
    question: 'Why do we need a new Internet?',
    answer: 'The current internet is increasingly centralized and controlled by few entities. ThreeFold provides a more democratic, private, and secure alternative where users and developers have full control over their data and applications.',
  },
  {
    question: 'How can I participate?',
    answer: 'You can participate by becoming a farmer, a user, a partner or by developing apps. Provide capacity to the ThreeFold Grid, Use capacity, build solutions, develop applications, and many more.',
  },
  {
    question: 'How can I get V4 nodes?',
    answer: 'Our partners are selling V4 nodes with a new reward scheme and ready to grow to millions of nodes. Click here to get V4 nodes.',
  },
  {
    question: 'What can I do with the ThreeFold Grid?',
    answer: 'ThreeFold grid can be used to host any web2, web3 and future workload. For more details see our docs.',
  },
  {
    question: 'How secure and private is my data?',
    answer: 'ThreeFold is designed to be secure and private by default. We use end-to-end encryption to protect your data and ensure that only you have access to your data.',
  },
  {
    question: 'Who should use the ThreeFold Grid?',
    answer: 'Individuals, businesses, and organizations who want to be autonomous and have full control over their data and applications. Security is a very big problem today, Technology as used by ThreeFold has the potential to resolve this if used properly. We are building a channel of solution providers and integrators who want to build on top of ThreeFold.',
  },
]

export function Faq () {
  return (
    <div className="bg-transparent">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-white sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-base/7 text-pretty text-gray-400">
              Can’t find the answer you’re looking for? Reach out to our{' '}
              <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
                customer support
              </a>{' '}
              team.
            </p>
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="space-y-10">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-base/7 font-semibold text-white">{faq.question}</dt>
                  <dd className="mt-2 text-base/7 text-gray-400">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
