import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-slate-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />

        <section id="contact" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="rounded-2xl border border-black/10 bg-white/70 p-8 sm:p-12 shadow-sm">
              <h3 className="text-2xl sm:text-3xl font-semibold">Ready to close the books faster?</h3>
              <p className="mt-3 text-gray-600">Join finance teams automating approvals, reconciliation, and reporting with confidence.</p>
              <form className="mt-6 max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
                <input type="email" required placeholder="Work email" className="flex-1 rounded-lg border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500" />
                <button className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-5 py-3 text-sm font-semibold hover:bg-gray-800">Request demo</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} AutoFin. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Security</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
