import { useState } from 'react'
import { ArrowRight, Phone, Calendar, Clock, CheckCircle2, ShieldCheck } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './Button'

const benefits = [
  'Free 15-minute consultation',
  'Manufacturing & packaging recommendations',
  'Production cost guidance',
  'Volume planning advice',
  'NDA-protected discussion',
]

export function CTABanner() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    volume: '50k-250k',
    date: '',
    time: '10:00 AM',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    // Simulate booking API call
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <section id="quote" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary-green/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-dark-green rounded-3xl overflow-hidden shadow-2xl relative border border-dark-green/20">
          {/* Subtle grid line overlay */}
          <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-green/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-12 p-8 sm:p-12 lg:p-20 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 text-left">
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full mb-6">
                <ShieldCheck size={14} className="text-primary-green" />
                🔒 NDA Protected & Confidential Consultation
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.1] mb-4 tracking-tight">
                Book a Free 15-Minute Consultation
              </h2>
              <p className="text-sm text-white/80 mb-6 leading-relaxed">
                Speak directly with a pre-roll manufacturing specialist to discuss custom cones, packaging, automation equipment, production requirements, and pricing options.
              </p>

              <div className="space-y-6 mb-8">
                <p className="text-xs font-bold text-primary-green uppercase tracking-wider">
                  Ready to Scale Your Cannabis Brand?
                </p>
                <p className="text-sm text-white/70 leading-relaxed max-w-md">
                  Join 2,000+ cannabis brands that trust SOL. In a free 15-minute strategy call, we'll discuss your production goals, packaging requirements, manufacturing challenges, and recommend the best solution for your business.
                </p>
                
                <ul className="space-y-3">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-sm text-white/90">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary-green/20 text-primary-green text-xs shrink-0 font-bold">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="text-xs text-white/40 font-semibold tracking-wider uppercase mb-1">Social Proof</p>
                <p className="text-sm text-white/60 font-medium">Trusted by 2,000+ Cannabis Brands Worldwide</p>
              </div>
            </div>

            {/* Right Booking Calendar Column */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-[#E2E8F0]">
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form
                      key="booking-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <div className="text-center pb-4 mb-2 border-b border-[#F1F5F9]">
                        <p className="text-sm font-bold text-charcoal-text">Schedule Strategy Session</p>
                        <p className="text-xs text-secondary-text mt-0.5">Select your details to secure a calendar slot.</p>
                      </div>

                      <div>
                        <label htmlFor="name" className="block text-xs font-bold text-charcoal-text uppercase tracking-wider mb-1.5">
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Jane Doe"
                          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-charcoal-text focus:border-primary-green focus:ring-1 focus:ring-primary-green outline-none transition-colors"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="company" className="block text-xs font-bold text-charcoal-text uppercase tracking-wider mb-1.5">
                            Company Name
                          </label>
                          <input
                            id="company"
                            type="text"
                            required
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="Cannabis Co."
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-charcoal-text focus:border-primary-green focus:ring-1 focus:ring-primary-green outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-xs font-bold text-charcoal-text uppercase tracking-wider mb-1.5">
                            Business Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="jane@company.com"
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-charcoal-text focus:border-primary-green focus:ring-1 focus:ring-primary-green outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="volume" className="block text-xs font-bold text-charcoal-text uppercase tracking-wider mb-1.5">
                          Estimated Monthly Production Volume
                        </label>
                        <select
                          id="volume"
                          value={formData.volume}
                          onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                          className="w-full border border-gray-200 bg-white rounded-lg px-3 py-2 text-sm text-charcoal-text focus:border-primary-green focus:ring-1 focus:ring-primary-green outline-none transition-colors cursor-pointer"
                        >
                          <option value="under-10k">Under 10,000 units</option>
                          <option value="10k-50k">10,000 – 50,000 units</option>
                          <option value="50k-250k">50,000 – 250,000 units</option>
                          <option value="250k-1m">250,000 – 1,000,000 units</option>
                          <option value="over-1m">1,000,000+ units</option>
                        </select>
                      </div>

                      {/* Date and Time selectors (Calendly Feel) */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="date" className="block text-xs font-bold text-charcoal-text uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                            <Calendar size={13} className="text-primary-green" />
                            Preferred Date
                          </label>
                          <input
                            id="date"
                            type="date"
                            required
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs text-charcoal-text focus:border-primary-green focus:ring-1 focus:ring-primary-green outline-none transition-colors cursor-pointer"
                          />
                        </div>
                        <div>
                          <label htmlFor="time" className="block text-xs font-bold text-charcoal-text uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                            <Clock size={13} className="text-primary-green" />
                            Preferred Time
                          </label>
                          <select
                            id="time"
                            value={formData.time}
                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                            className="w-full border border-gray-200 bg-white rounded-lg px-3 py-2 text-xs text-charcoal-text focus:border-primary-green focus:ring-1 focus:ring-primary-green outline-none transition-colors cursor-pointer"
                          >
                            <option value="09:00 AM">09:00 AM EST</option>
                            <option value="10:00 AM">10:00 AM EST</option>
                            <option value="11:30 AM">11:30 AM EST</option>
                            <option value="01:00 PM">01:00 PM EST</option>
                            <option value="02:30 PM">02:30 PM EST</option>
                            <option value="04:00 PM">04:00 PM EST</option>
                          </select>
                        </div>
                      </div>

                      <div className="pt-2">
                        <Button
                          type="submit"
                          variant="primary"
                          className="w-full group py-3.5"
                          disabled={submitting}
                        >
                          {submitting ? 'Booking Time...' : 'Book Free Consultation'}
                          {!submitting && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
                        </Button>
                      </div>

                      <div className="flex flex-col gap-2 pt-2 text-center">
                        <a
                          href="tel:+18005557651"
                          className="text-xs font-bold text-dark-green hover:text-primary-green hover:underline transition-colors flex items-center justify-center gap-1.5"
                        >
                          <Phone size={13} />
                          Prefer to talk now? Call 1-800-555-SOL-1
                        </a>
                        <p className="text-[10px] text-secondary-text">
                          No obligation. Free strategy session with a manufacturing specialist.
                        </p>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="booking-success"
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-center py-10 space-y-4"
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-light-green-bg border border-primary-green/20 mb-2">
                        <CheckCircle2 size={36} className="text-dark-green animate-bounce" />
                      </div>
                      <h3 className="text-xl font-bold text-charcoal-text">Consultation Booked!</h3>
                      <p className="text-sm text-secondary-text max-w-sm mx-auto">
                        Thank you, {formData.name}. Your 15-minute strategy call is scheduled for <strong>{formData.date}</strong> at <strong>{formData.time}</strong>.
                      </p>
                      <p className="text-xs text-secondary-text max-w-xs mx-auto">
                        A calendar invite with the meeting link and conference details has been sent to <strong>{formData.email}</strong>.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false)
                          setFormData({ name: '', email: '', company: '', volume: '50k-250k', date: '', time: '10:00 AM' })
                        }}
                        className="text-sm font-semibold text-dark-green hover:text-primary-green transition-colors mt-6 inline-block"
                      >
                        Reschedule or book another call
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
