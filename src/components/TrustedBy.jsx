import { AnimateIn } from './AnimateIn'

const brands = [
  'Nova Labs',
  'Vertex Greens',
  'Summit Cannabis',
  'Elevate Botanicals',
  'Apex Farms',
  'Crown Extracts',
]

const industryStats = [
  { value: '10+', label: 'Years in Manufacturing' },
  { value: '99.2%', label: 'On-Time Fulfillment' },
  { value: '1.5M+', label: 'Daily Production Capacity' },
  { value: 'GMP', label: 'Certified Facility' },
]

export function TrustedBy() {
  return (
    <section className="relative py-20 bg-light-green-bg border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <p className="text-center text-xs font-bold tracking-widest uppercase text-secondary-text mb-10">
            Trusted By Leading Cannabis Brands & Distributors
          </p>
        </AnimateIn>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {brands.map((brand, i) => (
            <AnimateIn key={brand} delay={i * 0.05}>
              <div className="bg-white border border-[#E2E8F0] shadow-sm rounded-xl py-5 px-4 flex items-center justify-center h-20 hover:border-primary-green/30 hover:bg-[#F3F8F3] hover:shadow transition-all duration-300 group">
                <span className="text-sm font-bold text-secondary-text group-hover:text-dark-green transition-colors tracking-wide">
                  {brand}
                </span>
              </div>
            </AnimateIn>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {industryStats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 0.1}>
              <div className="text-center p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-premium transition-shadow">
                <div className="text-3xl sm:text-4xl font-extrabold text-gradient-green mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-secondary-text">{stat.label}</div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
