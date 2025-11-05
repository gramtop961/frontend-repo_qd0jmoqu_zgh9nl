import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_30%_-10%,rgba(99,102,241,0.15),transparent),radial-gradient(1000px_600px_at_70%_10%,rgba(56,189,248,0.15),transparent)] pointer-events-none" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 items-center gap-12">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-gradient-to-br from-indigo-500 to-sky-500" />
            Finance Automation, reimagined
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
            Automate every step of your finance ops
          </h1>
          <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            Reconcile transactions, route approvals, and generate real-time insights with a modern, secure platform powered by AI.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
            <a href="#pricing" className="inline-flex items-center rounded-lg bg-gray-900 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-gray-800">
              Get started
            </a>
            <a href="#features" className="inline-flex items-center rounded-lg bg-white text-gray-900 px-5 py-3 text-sm font-semibold shadow border border-black/10 hover:bg-gray-50">
              See features
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left opacity-80">
            <div>
              <div className="text-2xl font-semibold text-gray-900">99.99%</div>
              <div className="text-xs text-gray-600">Uptime</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-gray-900"><span className="align-top text-base">$</span>12B+</div>
              <div className="text-xs text-gray-600">Processed</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-gray-900">3x</div>
              <div className="text-xs text-gray-600">Faster closes</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-gray-900">SOC 2</div>
              <div className="text-xs text-gray-600">Certified</div>
            </div>
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] md:h-[640px] rounded-2xl overflow-hidden bg-white/60 border border-black/10 shadow-xl">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
