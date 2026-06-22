import { ArrowRight, Clock } from 'lucide-react'
import { AnimateIn } from './AnimateIn'

const articles = [
  {
    title: 'The Complete Guide to Custom Pre-Roll Cone Manufacturing',
    excerpt:
      'Everything you need to know about materials, sizes, filters, and production timelines for custom cones.',
    category: 'Manufacturing',
    readTime: '8 min read',
    date: 'Mar 15, 2026',
    image:
      'https://images.unsplash.com/photo-1565043666747-69f6646bb940?w=600&q=80',
  },
  {
    title: 'How to Scale Pre-Roll Production from 10K to 1M Units',
    excerpt:
      'Strategies and infrastructure decisions for cannabis brands ready to dramatically increase output.',
    category: 'Growth',
    readTime: '12 min read',
    date: 'Mar 8, 2026',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
  },
  {
    title: 'Packaging Compliance: What Every Cannabis Brand Must Know',
    excerpt:
      'State-by-state packaging requirements, child-resistant standards, and labeling best practices.',
    category: 'Compliance',
    readTime: '6 min read',
    date: 'Feb 28, 2026',
    image:
      'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&q=80',
  },
]

export function IndustryResources() {
  return (
    <section id="resources" className="py-24 lg:py-32 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-green text-xs font-bold tracking-widest uppercase mb-4 block">
            Industry Resources
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-text mb-6 tracking-tight">
            Insights From{' '}
            <span className="text-gradient-green">Industry Experts</span>
          </h2>
          <p className="text-lg text-secondary-text leading-relaxed">
            Educational content to help your brand make smarter manufacturing
            and packaging decisions.
          </p>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <AnimateIn key={article.title} delay={i * 0.1}>
              <article
                className="group rounded-2xl overflow-hidden bg-white border border-[#E2E8F0] shadow-sm hover:border-primary-green/30 hover:shadow-premium transition-all duration-500 cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${article.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
                  <span className="absolute top-4 left-4 text-[10px] font-extrabold uppercase tracking-wider bg-light-green-bg text-dark-green px-3 py-1 rounded-full border border-primary-green/10 shadow-sm">
                    {article.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-secondary-text mb-3">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-charcoal-text mb-3 group-hover:text-dark-green transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-secondary-text leading-relaxed mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <span className="text-sm font-semibold text-dark-green flex items-center gap-1 group-hover:text-primary-green group-hover:gap-2 transition-all">
                    Read Article
                    <ArrowRight size={14} />
                  </span>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
