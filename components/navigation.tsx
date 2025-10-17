  "use client"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Navigation() {
  const [open, setOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setOpen(false)
  }

  return (
    <header className="fixed inset-x-0  z-50 flex justify-center pointer-events-auto">
      <nav
        className="pointer-events-auto w-full border border-white/20 bg-white/40 dark:bg-gray-900/40 backdrop-blur-md shadow-lg px-4 sm:px-6 py-6  flex items-center transition-all"
        aria-label="Primary navigation"
      >
        {/* Left: Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="text-3xl font-bold tracking-tight hover:text-primary transition-colors justify-items-start"
        >
          Portfolio
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-md font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-md font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-md font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Experience
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md bg-white/30 dark:bg-gray-800/30 border border-white/20 dark:border-gray-700/30 focus:outline-none focus:ring-2 focus:ring-sky-300"
          >
            <span className="sr-only">Toggle menu</span>
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          id="mobile-menu"
          className={`absolute left-1/2 transform -translate-x-1/2 top-full mt-3 w-[calc(100%-3rem)] max-w-md rounded-xl border border-white/20 bg-white/40 dark:bg-gray-900/40 backdrop-blur-md shadow-lg p-3 transition-all ${open ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible pointer-events-none'}`}
          aria-hidden={!open}
        >
          <div className="flex flex-col gap-1">
            <button
              onClick={() => scrollToSection("about")}
              className="block px-4 py-2 rounded-md text-sm font-medium text-gray-800 dark:text-gray-100 hover:bg-white/30 dark:hover:bg-gray-700/30"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block px-4 py-2 rounded-md text-sm font-medium text-gray-800 dark:text-gray-100 hover:bg-white/30 dark:hover:bg-gray-700/30"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block px-4 py-2 rounded-md text-sm font-medium text-gray-800 dark:text-gray-100 hover:bg-white/30 dark:hover:bg-gray-700/30"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="block px-4 py-2 rounded-md text-sm font-medium text-gray-800 dark:text-gray-100 hover:bg-white/30 dark:hover:bg-gray-700/30"
            >
              Experience
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
