import { useState } from 'react'
import { Rocket, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-sky-500 text-white shadow-sm">
            <Rocket size={18} />
          </span>
          <span className="font-semibold text-gray-900">AutoFin</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-gray-700 hover:text-gray-900">Features</a>
          <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-gray-900">Pricing</a>
          <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-gray-900">Contact</a>
          <a href="#" className="inline-flex items-center rounded-md bg-gray-900 text-white text-sm font-medium px-4 py-2 hover:bg-gray-800">Sign in</a>
        </div>

        <button aria-label="Toggle menu" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-black/5" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/90 backdrop-blur">
          <div className="px-4 py-4 space-y-2">
            <a href="#features" className="block text-sm font-medium text-gray-700">Features</a>
            <a href="#pricing" className="block text-sm font-medium text-gray-700">Pricing</a>
            <a href="#contact" className="block text-sm font-medium text-gray-700">Contact</a>
            <a href="#" className="inline-flex items-center rounded-md bg-gray-900 text-white text-sm font-medium px-4 py-2 mt-2">Sign in</a>
          </div>
        </div>
      )}
    </header>
  )
}
