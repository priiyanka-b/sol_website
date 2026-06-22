import { ArrowRight, Star } from 'lucide-react'
import { AnimateIn } from './AnimateIn'
import { Button } from './Button'

const products = [
  {
    name: 'Organic Hemp Pre-Rolled Cones',
    category: 'Pre-Rolled Cones',
    price: 'From $0.07/unit',
    rating: 4.9,
    reviews: 284,
    image:
      'https://images.unsplash.com/photo-1565043666747-69f6646bb940?w=600&q=80',
    badge: 'Best Seller',
  },
  {
    name: 'Custom Printed Logo Cones',
    category: 'Custom Cones',
    price: 'From $0.11/unit',
    rating: 4.8,
    reviews: 156,
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
    badge: null,
  },
  {
    name: 'Child-Resistant Pre-Roll Tubes',
    category: 'Packaging Solutions',
    price: 'From $0.14/unit',
    rating: 4.9,
    reviews: 198,
    image:
      'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&q=80',
    badge: 'New',
  },
  {
    name: 'Bespoke Custom Retail Boxes',
    category: 'Packaging Solutions',
    price: 'From $0.24/unit',
    rating: 4.7,
    reviews: 92,
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80',
    badge: null,
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-24 lg:py-32 bg-light-green-bg border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <AnimateIn>
            <span className="text-primary-green text-xs font-bold tracking-widest uppercase mb-4 block">
              Featured Products
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-text tracking-tight">
              Premium Products,{' '}
              <span className="text-gradient-green">Ready to Order</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <Button
              variant="outline"
              size="md"
              className="group shrink-0"
              onClick={() => window.location.href = '#products'}
            >
              View All Products
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </AnimateIn>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <AnimateIn key={product.name} delay={i * 0.08}>
              <article
                className="group relative rounded-2xl bg-white border border-[#E2E8F0] overflow-hidden hover:border-primary-green/30 hover:shadow-premium transition-all duration-500 card-shine shadow-sm"
              >
                <div className="relative h-56 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />

                  {product.badge && (
                    <span className="absolute top-4 left-4 text-[10px] font-extrabold uppercase tracking-wider bg-dark-green text-white px-3 py-1 rounded-full shadow-sm">
                      {product.badge}
                    </span>
                  )}

                  <div className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => window.location.href = '#quote'}
                    >
                      Quick Inquiry
                    </Button>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-[10px] font-extrabold text-primary-green uppercase tracking-wider mb-1">
                    {product.category}
                  </p>
                  <h3 className="text-base font-bold text-charcoal-text mb-2 group-hover:text-dark-green transition-colors line-clamp-1">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          size={12}
                          className={
                            j < Math.floor(product.rating)
                              ? 'text-accent-amber fill-accent-amber'
                              : 'text-gray-200'
                          }
                        />
                      ))}
                    </div>
                    <span className="text-xs text-secondary-text">
                      ({product.reviews})
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-charcoal-text">
                      {product.price}
                    </span>
                    <button
                      onClick={() => window.location.href = '#quote'}
                      className="text-dark-green text-sm font-semibold hover:text-primary-green transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      Inquire
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
