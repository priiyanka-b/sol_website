import {
  Cone,
  Palette,
  Package,
  Factory,
  Truck,
  Compass,
  ArrowUpRight,
} from 'lucide-react'
import { AnimateIn } from './AnimateIn'

const categories = [
  {
    icon: Cone,
    title: 'Pre-Rolled Cones',
    description:
      'Premium pre-rolled cones available in multiple sizes, materials, and specifications.',
    tag: 'Most Popular',
    image:
      'https://images.unsplash.com/photo-1565043666747-69f6646bb940?w=600&q=80',
  },
  {
    icon: Palette,
    title: 'Custom Printed Cones',
    description:
      'Fully branded cones with custom colors, logos, and designs.',
    tag: null,
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
  },
  {
    icon: Package,
    title: 'Packaging Solutions',
    description:
      'Custom boxes, tubes, jars, labels, and compliant cannabis packaging.',
    tag: 'New',
    image:
      'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&q=80',
  },
  {
    icon: Factory,
    title: 'White Label Manufacturing',
    description:
      'End-to-end manufacturing solutions for cannabis brands and distributors.',
    tag: 'Enterprise',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
  },
  {
    icon: Truck,
    title: 'Bulk Wholesale Orders',
    description:
      'High-volume production with competitive pricing and reliable fulfillment.',
    tag: null,
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80',
  },
  {
    icon: Compass,
    title: 'Custom Product Development',
    description:
      'Tailored cone and packaging solutions designed for unique brand requirements.',
    tag: null,
    image:
      'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=600&q=80',
  },
]

export function ProductCategories() {
  return (
    <section id="products" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-green text-xs font-bold tracking-widest uppercase mb-4 block">
            Product Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-text mb-6 tracking-tight">
            Premium Cannabis Products & Packaging
          </h2>
          <p className="text-lg text-secondary-text leading-relaxed">
            Everything your brand needs to source, scale, and package
            premium pre-roll cones at scale.
          </p>
        </AnimateIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <AnimateIn key={cat.title} delay={i * 0.08}>
              <article
                className="group relative rounded-2xl overflow-hidden bg-white border border-[#E2E8F0] hover:border-primary-green/30 hover:shadow-premium transition-all duration-500 card-shine cursor-pointer shadow-sm"
              >
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${cat.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                  {cat.tag && (
                    <span className="absolute top-4 left-4 text-[10px] font-extrabold uppercase tracking-wider bg-dark-green text-white px-3 py-1 rounded-full shadow-sm">
                      {cat.tag}
                    </span>
                  )}
                  <div className="absolute bottom-4 left-4 w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center">
                    <cat.icon size={20} className="text-dark-green" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold text-charcoal-text group-hover:text-dark-green transition-colors">
                      {cat.title}
                    </h3>
                    <ArrowUpRight
                      size={20}
                      className="text-secondary-text group-hover:text-dark-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1"
                    />
                  </div>
                  <p className="text-secondary-text mt-3 text-sm leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
