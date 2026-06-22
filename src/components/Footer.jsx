import { Mail, Phone, MapPin, Share2, Globe, Video } from 'lucide-react'

const footerLinks = {
  Products: [
    'Pre-Rolled Cones',
    'Pre-Roll Tubes',
    'Packaging Solutions',
    'Automation Machines',
    'Custom Branding',
  ],
  Company: [
    'About Us',
    'Development Lifecycle',
    'Compliance Standards',
    'Careers',
    'Contact',
  ],
  Resources: [
    'Blog',
    'Case Studies',
    'Compliance & Audits',
    'FAQ',
    'Support Center',
  ],
}

const socials = [
  { icon: Share2, label: 'LinkedIn', href: '#' },
  { icon: Globe, label: 'Instagram', href: '#' },
  { icon: Video, label: 'YouTube', href: '#' },
]

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-[#E2E8F0] text-secondary-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-dark-green to-primary-green flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                  <path d="M6 18 L12 6 L18 18 Z" />
                </svg>
              </div>
              <div>
                <span className="text-charcoal-text font-bold text-lg tracking-wider">SOL</span>
              </div>
            </a>
            <p className="text-sm text-secondary-text leading-relaxed mb-6 max-w-xs">
              Industry-leading pre-roll manufacturing, packaging, and distribution
              solutions for cannabis brands worldwide.
            </p>
            <div className="space-y-3 text-sm text-secondary-text">
              <a href="tel:+18005557651" className="flex items-center gap-2 hover:text-dark-green transition-colors font-medium">
                <Phone size={14} className="text-primary-green" />
                1-800-555-SOL-1
              </a>
              <a href="mailto:hello@sol.com" className="flex items-center gap-2 hover:text-dark-green transition-colors font-medium">
                <Mail size={14} className="text-primary-green" />
                hello@sol.com
              </a>
              <p className="flex items-center gap-2">
                <MapPin size={14} className="text-primary-green shrink-0" />
                Los Angeles, CA · Denver, CO
              </p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-bold text-charcoal-text mb-5 uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-secondary-text hover:text-dark-green hover:underline transition-colors font-medium"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-[#E2E8F0]">
          <p className="text-sm text-secondary-text">
            © {new Date().getFullYear()} SOL. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center text-secondary-text hover:text-dark-green hover:border-primary-green/30 hover:shadow-md transition-all"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6 text-sm text-secondary-text">
            <a href="#" className="hover:text-charcoal-text transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-charcoal-text transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
