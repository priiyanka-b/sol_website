import { Quote, Star } from 'lucide-react'
import { AnimateIn } from './AnimateIn'

const testimonials = [
  {
    quote:
      'SOL transformed our packaging supply line. We went from 10,000 monthly pre-rolls to over 500,000 without any supply delays or quality issues. Their team is responsive, professional, and truly understands custom branding at scale.',
    author: 'Marcus Chen',
    role: 'CEO, Nova Labs',
    company: 'Nova Labs',
    metric: '500K+',
    metricLabel: 'Monthly Supply',
    rating: 5,
  },
  {
    quote:
      'The custom print quality is unmatched. Our branded pre-roll cones look premium and our retail partners consistently praise the paper quality and burn rate. SOL is our exclusive packaging supplier.',
    author: 'Sarah Williams',
    role: 'Head of Operations, Elevate Botanicals',
    company: 'Elevate Botanicals',
    metric: '99%',
    metricLabel: 'Partner Retention',
    rating: 5,
  },
  {
    quote:
      'From custom packaging blueprints to production delivery in under two weeks. Their design-to-ship capability saved our product launch. Enterprise-grade quality and fulfillment at wholesale pricing.',
    author: 'David Rodriguez',
    role: 'Founder, Summit Cannabis',
    company: 'Summit Cannabis',
    metric: '2 Weeks',
    metricLabel: 'Production Timeline',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary-green/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimateIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-green text-xs font-bold tracking-widest uppercase mb-4 block">
            Client Success
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-text mb-6 tracking-tight">
            Trusted by{' '}
            <span className="text-gradient-green">2,000+ Brands</span> Worldwide
          </h2>
          <p className="text-lg text-secondary-text">
            Real results from scaling organizations that grow with SOL.
          </p>
        </AnimateIn>

        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimateIn key={t.author} delay={i * 0.1}>
              <div
                className="relative p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm h-full hover:border-primary-green/30 hover:shadow-premium transition-all duration-500 group"
              >
                <Quote
                  size={32}
                  className="text-primary-green/10 mb-6 group-hover:text-primary-green/35 transition-colors"
                />

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={14} className="text-accent-amber fill-accent-amber" />
                  ))}
                </div>

                <p className="text-secondary-text leading-relaxed mb-8 text-[15px]">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-[#F1F5F9]">
                  <div>
                    <p className="font-bold text-charcoal-text">{t.author}</p>
                    <p className="text-xs text-secondary-text">{t.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-extrabold text-dark-green">{t.metric}</p>
                    <p className="text-xs text-secondary-text">{t.metricLabel}</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Trust indicators */}
        <AnimateIn delay={0.3} className="mt-16">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 py-8 bg-light-green-bg border border-[#E2E8F0] rounded-2xl shadow-sm">
            {[
              'GMP Certified Facility',
              'Child-Resistant Certified',
              '100% Food-Grade Paper',
              'FDA-Approved Inks',
              'ISO 9001 Quality Audited',
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-sm text-dark-green font-semibold">
                <div className="w-2 h-2 rounded-full bg-primary-green" />
                {badge}
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
