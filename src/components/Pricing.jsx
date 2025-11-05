export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-4 text-gray-600">Start free. Scale as you go. No hidden fees.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Starter</h3>
            <p className="mt-1 text-sm text-gray-600">For solo founders and small teams</p>
            <div className="mt-6">
              <span className="text-4xl font-semibold text-gray-900">$0</span>
              <span className="text-gray-600">/mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              <li>Up to 1,000 transactions</li>
              <li>Basic workflows</li>
              <li>Email support</li>
            </ul>
            <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-gray-900 text-white px-4 py-2 text-sm font-semibold hover:bg-gray-800">Get started</a>
          </div>

          <div className="relative rounded-2xl border border-indigo-200 bg-white p-6 shadow-sm ring-2 ring-indigo-500/30">
            <span className="absolute -top-3 left-6 rounded-full bg-indigo-600 px-2 py-0.5 text-xs font-medium text-white">Popular</span>
            <h3 className="text-lg font-semibold text-gray-900">Growth</h3>
            <p className="mt-1 text-sm text-gray-600">For growing finance teams</p>
            <div className="mt-6">
              <span className="text-4xl font-semibold text-gray-900">$79</span>
              <span className="text-gray-600">/mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              <li>Up to 50k transactions</li>
              <li>Advanced workflows</li>
              <li>Role-based access</li>
              <li>Priority support</li>
            </ul>
            <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-gray-900 text-white px-4 py-2 text-sm font-semibold hover:bg-gray-800">Start free trial</a>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Enterprise</h3>
            <p className="mt-1 text-sm text-gray-600">For large and regulated orgs</p>
            <div className="mt-6">
              <span className="text-4xl font-semibold text-gray-900">Custom</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              <li>Unlimited transactions</li>
              <li>SSO/SAML, SCIM</li>
              <li>Dedicated environment</li>
              <li>24/7 support</li>
            </ul>
            <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-white text-gray-900 border border-black/10 px-4 py-2 text-sm font-semibold hover:bg-gray-50">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}
