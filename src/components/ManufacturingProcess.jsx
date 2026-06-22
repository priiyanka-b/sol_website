import { MessageSquare, PenTool, Factory, Package, Truck } from 'lucide-react'
import { AnimateIn } from './AnimateIn'

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Consultation',
    description:
      'We review your brand specs, sizing requirements, paper options, and custom print files to create a digital packaging proof.',
    duration: '1–2 Days',
  },
  {
    icon: PenTool,
    step: '02',
    title: 'Prototyping',
    description:
      'Our digital design team creates visual mockups and layout proofs of custom printed cones and retail displays for your sign-off.',
    duration: '3–5 Days',
  },
  {
    icon: Factory,
    step: '03',
    title: 'Production',
    description:
      'Custom cones are rolled and printed under strict B2B hygiene standards using high-speed automated machinery.',
    duration: '5–14 Days',
  },
  {
    icon: Package,
    step: '04',
    title: 'Quality Audits',
    description:
      'Rigorous quality audits ensure weight tolerances, print quality, and child-resistant certified safety clearances.',
    duration: '2–5 Days',
  },
  {
    icon: Truck,
    step: '05',
    title: 'Fulfillment',
    description:
      'Secure packing and high-speed freight dispatch directly to your warehouse with real-time package tracking.',
    duration: 'Ongoing',
  },
]

export function ManufacturingProcess() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary-green text-xs font-bold tracking-widest uppercase mb-4 block">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-text mb-6 tracking-tight">
            From Strategy to Scaling in{' '}
            <span className="text-gradient-green">Record Time</span>
          </h2>
          <p className="text-lg text-secondary-text leading-relaxed">
            A streamlined five-step process designed for speed, transparency,
            and uncompromising quality at every stage.
          </p>
        </AnimateIn>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-green/20 to-transparent" />

          <div className="grid lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <AnimateIn key={step.title} delay={i * 0.1}>
                <div className="relative group">
                  {/* Connector dot */}
                  <div className="hidden lg:flex absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-primary-green/30 items-center justify-center z-10 group-hover:border-primary-green group-hover:scale-110 transition-all">
                    <div className="w-2 h-2 rounded-full bg-primary-green" />
                  </div>

                  <div className="bg-white border border-[#E2E8F0] shadow-sm rounded-2xl p-6 h-full hover:border-primary-green/30 hover:shadow-premium transition-all duration-500 group-hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-light-green-bg border border-primary-green/10 flex items-center justify-center">
                        <step.icon size={18} className="text-dark-green" />
                      </div>
                      <span className="text-xs font-bold text-primary-green tracking-widest">
                        {step.step}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-charcoal-text mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-secondary-text leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <span className="inline-block text-xs font-semibold text-dark-green bg-light-green-bg border border-primary-green/10 px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
