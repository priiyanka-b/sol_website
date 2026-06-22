import { Zap, Settings, Globe2, Award } from 'lucide-react'
import { AnimateIn } from './AnimateIn'

const reasons = [
  {
    icon: Zap,
    title: 'High Capacity',
    description:
      'State-of-the-art production facility with high-speed automated rolling lines. We manufacture millions of cones monthly without compromising quality.',
    metric: '500M+',
    metricLabel: 'Cones Manufactured',
  },
  {
    icon: Settings,
    title: 'Custom Branding',
    description:
      'Every product is manufactured to your exact specifications — custom papers, colors, filter tips, and logos all tailored to your brand.',
    metric: '100%',
    metricLabel: 'Customizable',
  },
  {
    icon: Globe2,
    title: 'Global Supply Chain',
    description:
      'Direct partnerships with organic paper mills across Europe and Asia ensure consistent raw materials and reliable bulk fulfillment.',
    metric: '40+',
    metricLabel: 'Global Partners',
  },
  {
    icon: Award,
    title: 'Compliance Standards',
    description:
      'Over 10 years of cannabis manufacturing experience. Our team understands state compliance rules, child-resistant guidelines, and print safety.',
    metric: '10+',
    metricLabel: 'Years Experience',
  },
]

export function WhyChoose() {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-light-green-bg relative overflow-hidden border-y border-[#E2E8F0]">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-green/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimateIn>
            <span className="text-primary-green text-xs font-bold tracking-widest uppercase mb-4 block">
              Why Choose SOL
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-text mb-6 tracking-tight">
              The Manufacturing Partner{' '}
              <span className="text-gradient-green">Industry Leaders</span> Trust
            </h2>
            <p className="text-lg text-secondary-text leading-relaxed mb-8">
              We don&apos;t just supply cones — we build the custom manufacturing and packaging
              solutions that allow cannabis brands to scale confidently. From early-stage
              ventures to multi-state operators, we deliver at every level.
            </p>
            <div className="flex items-center gap-6">
              <div className="bg-white border border-[#E2E8F0] shadow-sm rounded-2xl p-5">
                <p className="text-4xl font-extrabold text-dark-green">2,000+</p>
                <p className="text-xs font-semibold text-secondary-text mt-1">Active Partners</p>
              </div>
              <div className="bg-white border border-[#E2E8F0] shadow-sm rounded-2xl p-5">
                <p className="text-4xl font-extrabold text-charcoal-text">500M+</p>
                <p className="text-xs font-semibold text-secondary-text mt-1">Cones Shipped</p>
              </div>
            </div>
          </AnimateIn>

          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((reason, i) => (
              <AnimateIn key={reason.title} delay={i * 0.1}>
                <div
                  className="group p-6 rounded-2xl bg-white border border-[#E2E8F0] hover:border-primary-green/30 hover:shadow-premium transition-all duration-500 h-full shadow-sm"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-light-green-bg border border-primary-green/10 flex items-center justify-center group-hover:bg-[#EAF5EA] transition-colors">
                      <reason.icon size={20} className="text-dark-green" />
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-dark-green">{reason.metric}</p>
                      <p className="text-xs text-secondary-text">{reason.metricLabel}</p>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-charcoal-text mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-secondary-text leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
