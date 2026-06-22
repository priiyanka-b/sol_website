import { useState, useEffect } from 'react'
import { Menu, X, Search, ChevronDown, Cone, Palette, Package, Factory, Truck, Compass, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './Button'

const navLinks = [
  { label: 'Products', href: '#products', hasMegaMenu: true },
  { label: 'Process', href: '#process' },
  { label: 'Why SOL', href: '#why-us' },
]

const megaMenuProducts = [
  {
    icon: Cone,
    title: 'Pre-Rolled Cones',
    description: 'Premium pre-rolled cones available in multiple sizes, materials, and specifications.',
    href: '#products',
  },
  {
    icon: Palette,
    title: 'Custom Printed Cones',
    description: 'Fully branded cones with custom colors, logos, and designs.',
    href: '#products',
  },
  {
    icon: Package,
    title: 'Packaging Solutions',
    description: 'Custom boxes, tubes, jars, labels, and compliant packaging.',
    href: '#products',
  },
  {
    icon: Factory,
    title: 'White Label Manufacturing',
    description: 'End-to-end manufacturing solutions for brands and distributors.',
    href: '#products',
  },
  {
    icon: Truck,
    title: 'Bulk Wholesale Orders',
    description: 'High-volume production with competitive pricing and reliable fulfillment.',
    href: '#products',
  },
  {
    icon: Compass,
    title: 'Custom Product Development',
    description: 'Tailored cone and packaging solutions designed for unique brand requirements.',
    href: '#products',
  },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [showMegaMenu, setShowMegaMenu] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md py-3 border-b border-[#E2E8F0] shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-dark-green to-primary-green flex items-center justify-center shadow-sm group-hover:shadow transition-shadow">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                <path d="M6 18 L12 6 L18 18 Z" />
              </svg>
            </div>
            <div>
              <span className="text-charcoal-text font-bold text-xl tracking-wider group-hover:text-dark-green transition-colors">
                SOL
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.hasMegaMenu && setShowMegaMenu(true)}
                onMouseLeave={() => link.hasMegaMenu && setShowMegaMenu(false)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 text-sm text-secondary-text hover:text-charcoal-text transition-colors duration-200 font-medium py-2"
                >
                  {link.label}
                  {link.hasMegaMenu && (
                    <ChevronDown size={14} className={`transition-transform duration-200 ${showMegaMenu ? 'rotate-180' : ''}`} />
                  )}
                </a>

                {/* Mega Menu Dropdown */}
                {link.hasMegaMenu && (
                  <AnimatePresence>
                    {showMegaMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-1 w-[800px] bg-white border border-[#E2E8F0] rounded-2xl shadow-xl p-6 grid grid-cols-12 gap-6 pointer-events-auto"
                      >
                        {/* Left grid containing categories */}
                        <div className="col-span-8 space-y-4">
                          <div className="pb-2 mb-2 border-b border-[#F1F5F9]">
                            <p className="text-xs font-bold uppercase tracking-wider text-secondary-text">
                              Product Catalog
                            </p>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            {megaMenuProducts.map((prod) => (
                              <a
                                key={prod.title}
                                href={prod.href}
                                onClick={() => setShowMegaMenu(false)}
                                className="flex gap-3 p-2.5 rounded-xl hover:bg-light-green-bg transition-colors group"
                              >
                                <div className="w-9 h-9 rounded-lg bg-light-green-bg group-hover:bg-white flex items-center justify-center border border-[#E2E8F0] shrink-0 transition-colors">
                                  <prod.icon size={16} className="text-dark-green" />
                                </div>
                                <div>
                                  <p className="text-sm font-semibold text-charcoal-text group-hover:text-dark-green transition-colors leading-snug">
                                    {prod.title}
                                  </p>
                                  <p className="text-[11px] text-secondary-text mt-0.5 leading-relaxed font-normal">
                                    {prod.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                          
                          {/* Bottom View Full Catalog CTA */}
                          <div className="pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
                            <p className="text-xs text-secondary-text">Need bulk sizing templates?</p>
                            <a
                              href="#products"
                              onClick={() => setShowMegaMenu(false)}
                              className="text-xs font-bold text-dark-green hover:text-primary-green flex items-center gap-1 transition-colors"
                            >
                              View Full Catalog
                              <ArrowRight size={12} />
                            </a>
                          </div>
                        </div>

                        {/* Right side featured product box */}
                        <div className="col-span-4 bg-[#F8FAF8] border border-[#E2E8F0] rounded-xl p-4 flex flex-col justify-between">
                          <div>
                            <div className="aspect-video w-full rounded-lg overflow-hidden border border-[#E2E8F0] mb-3 relative">
                              <img
                                src="/pre_roll_packaging.png"
                                alt="Featured custom pre-roll and box packaging showcase"
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                            </div>
                            <h4 className="text-xs font-bold text-charcoal-text uppercase tracking-wider mb-1">
                              Custom Brand Showcase
                            </h4>
                            <p className="text-[11px] text-secondary-text leading-relaxed">
                              Get free paper and packaging sample kits to test quality, sizes, and print finishes before committing.
                            </p>
                          </div>
                          
                          <a
                            href="#quote"
                            onClick={() => setShowMegaMenu(false)}
                            className="text-xs font-bold text-primary-green hover:text-dark-green flex items-center gap-1 pt-3 border-t border-gray-200 mt-3"
                          >
                            Order Free Sample Kit
                            <ArrowRight size={12} />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Search Bar / Icon */}
            <div className="relative flex items-center">
              <AnimatePresence>
                {searchOpen && (
                  <motion.input
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 160, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    type="text"
                    placeholder="Search Solutions..."
                    className="border border-[#E2E8F0] rounded-lg px-3 py-1.5 text-xs text-charcoal-text outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green mr-2"
                  />
                )}
              </AnimatePresence>
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-secondary-text hover:text-charcoal-text rounded-full hover:bg-light-green-bg transition-colors"
                aria-label="Search"
              >
                <Search size={18} />
              </button>
            </div>

            <Button variant="ghost" size="sm" onClick={() => window.location.href = '#quote'}>
              Contact
            </Button>
            <Button variant="primary" size="sm" onClick={() => window.location.href = '#quote'}>
              Book Free Consultation
            </Button>
          </div>

          {/* Mobile Drawer Trigger */}
          <button
            className="lg:hidden p-2 text-secondary-text hover:text-charcoal-text rounded-full hover:bg-light-green-bg"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="lg:hidden mt-4 bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-lg space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-secondary-text hover:text-charcoal-text py-2 font-medium border-b border-[#F1F5F9] last:border-b-0"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Button variant="secondary" size="md" className="w-full" onClick={() => { setMobileOpen(false); window.location.href = '#quote'; }}>
                Contact Us
              </Button>
              <Button variant="primary" size="md" className="w-full" onClick={() => { setMobileOpen(false); window.location.href = '#quote'; }}>
                Book Free Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
