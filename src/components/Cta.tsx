export default function Cta() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            Scale Your Impact, Not Your Costs
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-300">
            EngageOS gives purpose-driven teams the power to mobilize communities, grow movements, and fundraise faster—
            all from one unified platform.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Contact Us
            </a>
            <a href="/demo" className="text-sm/6 font-semibold text-white">
              Book a Demo <span aria-hidden="true">→</span>
            </a>
          </div>

          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-x-1/2 mask-[radial-gradient(closest-side,white,transparent)]"
          >
            <circle r={512} cx={512} cy={512} fill="url(#engage-gradient)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="engage-gradient">
                <stop offset="0%" stop-color="#caa5f0" />
                <stop offset="50%" stop-color="#8f79f9" />
                <stop offset="100%" stop-color="#5d84e1" />
                </radialGradient>

            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}
