export  function CallTo() {
  return (
    <div className="bg-transparent">
      <div className="mx-auto max-w-7xl py-24 px-6 lg:px-4">
        <div className="relative isolate overflow-hidden bg-stat-gradient  py-16 text-center after:pointer-events-none after:absolute after:inset-0 sm:rounded-3xl sm:px-16">
          <div className="mx-auto max-w-2xl lg:max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight leading-tight text-white lg:text-4xl">
            More Resilient, More Powerful, More Diverse With You
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm font-light text-pretty text-white lg:text-base">
            Unlike the corporate internet, where users are the product, in the new internet, participants are the owners and beneficiaries.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-sm font-light text-pretty text-white lg:text-base">
          By participating, you're not just using the technology, you're also helping to build a digital world that protects privacy, promotes fairness, and returns control to the people.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-white/15"
            >
              {' '}
              Get started{' '}
            </a>
            <a href="#" className="text-sm/6 font-semibold text-white">
              Learn more
              <span aria-hidden="true">→</span>
            </a>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-x-1/2 mask-[radial-gradient(closest-side,white,transparent)]"
          >
            <circle r={512} cx={512} cy={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#fff4f8" />
                <stop offset={1} stopColor="#97979d" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      </div>
    </div>
  )
}
