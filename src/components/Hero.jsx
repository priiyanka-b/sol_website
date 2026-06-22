import { motion } from 'framer-motion'
import { ArrowRight, Calculator, TrendingUp, Package, Globe } from 'lucide-react'
import { Button } from './Button'

const stats = [
  { icon: TrendingUp, value: '500M+', label: 'Cones Manufactured' },
  { icon: Package, value: '2,000+', label: 'Active Cannabis Brands' },
  { icon: Globe, value: '40+', label: 'States & Countries Deployed' },
]

const floatingProducts = [
  {
    label: 'Pre-Rolled Cones',
    delay: 0,
    position: 'top-[18%] right-[8%] lg:right-[12%]',
  },
  {
    label: 'Custom Packaging',
    delay: 0.2,
    position: 'top-[42%] right-[4%] lg:right-[6%]',
  },
  {
    label: 'Filling Machinery',
    delay: 0.4,
    position: 'bottom-[22%] right-[10%] lg:right-[14%]',
  },
]

export function Hero() {
  return (
    <section className="relative min-h-screen hero-gradient grid-pattern overflow-hidden">
      {/* Decorative ambient background elements */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary-green/5 blur-[100px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-dark-green/3 blur-[90px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-light-green-bg border border-primary-green/20 rounded-full px-4 py-1.5 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary-green animate-pulse" />
              <span className="text-xs font-semibold tracking-wider text-dark-green uppercase">
                WHITE-LABEL MANUFACTURING
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold leading-[1.08] tracking-tight text-charcoal-text mb-6"
            >
              Custom Pre-Roll Cones Built For{' '}
              <span className="text-gradient-green">
                Your Brand
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-secondary-text max-w-xl mb-10 leading-relaxed"
            >
              White-label manufacturing, custom printing, and compliant packaging
              trusted by cannabis brands across North America.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button
                variant="primary"
                size="lg"
                className="group"
                onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Free Consultation
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group"
                onClick={() => document.getElementById('quote-calculator')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calculator size={16} className="text-dark-green" />
                Get Instant Quote
              </Button>
            </motion.div>

            {/* Inline stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 sm:gap-8"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="relative">
                  {i > 0 && (
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 -ml-4 hidden sm:block" />
                  )}
                  <div className="text-2xl sm:text-3xl font-bold text-charcoal-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-secondary-text leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right visual area */}
          <div className="relative hidden lg:block h-[600px]">
            {/* Main product showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative w-full max-w-md">
                {/* Central hero product visual */}
                <div className="relative aspect-square rounded-3xl overflow-hidden bg-white border border-[#E2E8F0] shadow-premium shadow-dark-green/5">
                  <img
                    src="/imgi_72_Pre-Rolled_Cones_and_Tubes_2.jpg"
                    alt="Premium custom pre-rolled cones and retail packaging tubes"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md border border-[#E2E8F0] rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-primary-green font-semibold uppercase tracking-wider">
                          Featured Product
                        </p>
                        <p className="text-charcoal-text font-semibold">
                          Custom Branded Cones
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-dark-green">100%</p>
                        <p className="text-xs text-secondary-text">Organic Papers</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating stat cards */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -left-8 top-16 bg-white border border-[#E2E8F0] rounded-2xl p-4 shadow-premium animate-float"
                >
                  <p className="text-3xl font-bold text-dark-green">24hr</p>
                  <p className="text-xs text-secondary-text">Stock Shipping</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="absolute -right-4 bottom-32 bg-white border border-[#E2E8F0] rounded-2xl p-4 shadow-premium animate-float-delayed"
                >
                  <p className="text-3xl font-bold text-primary-green">100%</p>
                  <p className="text-xs text-secondary-text">Child-Resistant</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Floating product labels */}
            {floatingProducts.map((product) => (
              <motion.div
                key={product.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + product.delay }}
                className={`absolute ${product.position} bg-light-green-bg border border-[#E2E8F0] shadow-sm rounded-xl px-4 py-2 text-sm font-semibold text-dark-green hidden xl:block`}
              >
                {product.label}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}
