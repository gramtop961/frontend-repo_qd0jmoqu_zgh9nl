import { Shield, Zap, BarChart3 } from 'lucide-react'

const items = [
  {
    icon: Shield,
    title: 'Bank-grade security',
    desc: 'End-to-end encryption, SSO/SAML, and fine-grained roles keep your data locked down.'
  },
  {
    icon: Zap,
    title: 'Workflow automation',
    desc: 'Build approval flows and reconciliation rules that run automatically with full audit trails.'
  },
  {
    icon: BarChart3,
    title: 'Real-time insights',
    desc: 'Live dashboards across cash, revenue, and expenses with anomaly detection.'
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Everything you need to move money confidently</h2>
          <p className="mt-4 text-gray-600">Designed for finance teams who want speed, accuracy, and control—without the busywork.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/90 to-sky-500/90 text-white shadow">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
