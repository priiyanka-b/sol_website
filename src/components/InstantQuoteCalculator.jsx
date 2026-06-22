import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, Check, ArrowRight, ShieldCheck } from 'lucide-react'
import { Button } from './Button'
import { AnimateIn } from './AnimateIn'

export function InstantQuoteCalculator() {
  const [productType, setProductType] = useState('Custom Cones')
  const [quantity, setQuantity] = useState('50,000')
  const [customization, setCustomization] = useState('Custom Branded')
  const [addPackaging, setAddPackaging] = useState(true)

  // Lead capture state
  const [leadName, setLeadName] = useState('')
  const [leadEmail, setLeadEmail] = useState('')
  const [leadCompany, setLeadCompany] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  // Pricing calculations derived directly from state during render
  const productBases = {
    'Custom Cones': 0.07,
    'Pre-Roll Tubes': 0.14,
    'Packaging Boxes': 0.24,
    'Multi-Packs': 0.38,
  }

  const qtyBases = {
    '5,000': { val: 5000, mult: 1.4 },
    '10,000': { val: 10000, mult: 1.2 },
    '25,000': { val: 25000, mult: 1.0 },
    '50,000': { val: 50000, mult: 0.85 },
    '100,000+': { val: 100000, mult: 0.65 },
  }

  const customBases = {
    'Stock': 0.8,
    'Custom Branded': 1.1,
    'Full Custom': 1.4,
  }

  const base = productBases[productType] || 0.07
  const { val: qtyVal, mult: qtyMult } = qtyBases[quantity] || { val: 50000, mult: 0.85 }
  const customMult = customBases[customization] || 1.1
  const pkgAddon = addPackaging ? 0.08 : 0.0

  // Unit Cost Calculation
  const calculatedBaseUnitCost = (base * qtyMult * customMult) + pkgAddon
  
  // Create ranges
  const minUnit = Math.round(calculatedBaseUnitCost * 0.95 * 100) / 100
  const maxUnit = Math.round(calculatedBaseUnitCost * 1.20 * 100) / 100

  const minOrder = Math.round(minUnit * qtyVal)
  const maxOrder = Math.round(maxUnit * qtyVal)

  const unitCostRange = { min: minUnit, max: maxUnit }
  const orderValueRange = { min: minOrder, max: maxOrder }

  const handleLeadSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
    }, 1200)
  }

  return (
    <section id="quote-calculator" className="py-24 lg:py-32 bg-white relative overflow-hidden border-t border-[#E2E8F0]">
      {/* Decorative background grid */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-primary-green/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-dark-green/3 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimateIn className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary-green text-xs font-bold tracking-widest uppercase mb-4 block">
            Pricing Estimator
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal-text mb-4 tracking-tight">
            Get an Instant Estimate
          </h2>
          <p className="text-base text-secondary-text">
            Configure your product parameters and receive an estimated price range in seconds.
          </p>
        </AnimateIn>

        {/* Calculator Widget Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Inputs Card */}
          <div className="lg:col-span-7 bg-[#F8FAF8] border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-5">
              <div className="flex items-center gap-2 mb-2 pb-4 border-b border-[#E2E8F0]">
                <Calculator size={18} className="text-primary-green" />
                <h3 className="text-sm font-bold text-charcoal-text uppercase tracking-wider">Configure Specifications</h3>
              </div>

              {/* Product Type Dropdown */}
              <div>
                <label className="block text-xs font-bold text-charcoal-text uppercase tracking-wider mb-2">
                  1. Product Type
                </label>
                <select
                  value={productType}
                  onChange={(e) => setProductType(e.target.value)}
                  className="w-full border border-gray-200 bg-white rounded-lg px-3 py-2 text-sm text-charcoal-text focus:border-primary-green focus:ring-1 focus:ring-primary-green outline-none transition-colors cursor-pointer"
                >
                  <option value="Custom Cones">Custom Cones</option>
                  <option value="Pre-Roll Tubes">Pre-Roll Tubes</option>
                  <option value="Packaging Boxes">Packaging Boxes</option>
                  <option value="Multi-Packs">Multi-Packs</option>
                </select>
              </div>

              {/* Quantity Dropdown */}
              <div>
                <label className="block text-xs font-bold text-charcoal-text uppercase tracking-wider mb-2">
                  2. Quantity (Units)
                </label>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full border border-gray-200 bg-white rounded-lg px-3 py-2 text-sm text-charcoal-text focus:border-primary-green focus:ring-1 focus:ring-primary-green outline-none transition-colors cursor-pointer"
                >
                  <option value="5,000">5,000</option>
                  <option value="10,000">10,000</option>
                  <option value="25,000">25,000</option>
                  <option value="50,000">50,000</option>
                  <option value="100,000+">100,000+</option>
                </select>
              </div>

              {/* Customization Dropdown */}
              <div>
                <label className="block text-xs font-bold text-charcoal-text uppercase tracking-wider mb-2">
                  3. Customization level
                </label>
                <select
                  value={customization}
                  onChange={(e) => setCustomization(e.target.value)}
                  className="w-full border border-gray-200 bg-white rounded-lg px-3 py-2 text-sm text-charcoal-text focus:border-primary-green focus:ring-1 focus:ring-primary-green outline-none transition-colors cursor-pointer"
                >
                  <option value="Stock">Stock (No Printing)</option>
                  <option value="Custom Branded">Custom Branded (Logo Wrap)</option>
                  <option value="Full Custom">Full Custom (Bespoke Material & Die Cuts)</option>
                </select>
              </div>

              {/* Add Packaging Toggle */}
              <div className="flex items-center justify-between pt-2">
                <div>
                  <label className="block text-xs font-bold text-charcoal-text uppercase tracking-wider">
                    4. Add Outer Retail Packaging
                  </label>
                  <span className="text-xs text-secondary-text">Include displays or cartons in estimate</span>
                </div>
                <button
                  type="button"
                  onClick={() => setAddPackaging(!addPackaging)}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out outline-none ${
                    addPackaging ? 'bg-primary-green' : 'bg-gray-200'
                  }`}
                  aria-label="Toggle Packaging Addon"
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      addPackaging ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="text-[10px] text-secondary-text mt-8 pt-4 border-t border-[#E2E8F0] flex items-center gap-1">
              <ShieldCheck size={12} className="text-primary-green" />
              <span>Calculated ranges represent standard wholesale rates. Subject to review.</span>
            </div>
          </div>

          {/* Right Calculations & Lead Capture Card */}
          <div className="lg:col-span-5 bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-premium">
            <div className="space-y-6">
              <div className="bg-light-green-bg border border-primary-green/10 rounded-xl p-5 text-center">
                <p className="text-xs font-bold text-secondary-text uppercase tracking-wider mb-2">Estimated Unit Cost</p>
                <div className="text-3xl font-extrabold text-dark-green mb-4">
                  ${unitCostRange.min.toFixed(2)} - ${unitCostRange.max.toFixed(2)}
                </div>

                <div className="w-full h-px bg-primary-green/10 my-4" />

                <p className="text-xs font-bold text-secondary-text uppercase tracking-wider mb-2">Estimated Order Value</p>
                <div className="text-2xl font-extrabold text-charcoal-text">
                  ${orderValueRange.min.toLocaleString()} - ${orderValueRange.max.toLocaleString()}
                </div>
              </div>

              {/* Lead Capture form */}
              <div className="pt-2">
                <div className="text-center mb-4">
                  <p className="text-sm font-bold text-charcoal-text">Want an exact, locked-in quote?</p>
                  <p className="text-xs text-secondary-text mt-0.5">Submit details to lock in wholesale volume discounts.</p>
                </div>

                <AnimatePresence mode="wait">
                  {!success ? (
                    <motion.form
                      key="calc-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleLeadSubmit}
                      className="space-y-3"
                    >
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={leadName}
                        onChange={(e) => setLeadName(e.target.value)}
                        className="w-full border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-charcoal-text focus:border-primary-green focus:ring-1 focus:ring-primary-green outline-none transition-colors"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Work Email"
                        value={leadEmail}
                        onChange={(e) => setLeadEmail(e.target.value)}
                        className="w-full border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-charcoal-text focus:border-primary-green focus:ring-1 focus:ring-primary-green outline-none transition-colors"
                      />
                      <input
                        type="text"
                        required
                        placeholder="Company"
                        value={leadCompany}
                        onChange={(e) => setLeadCompany(e.target.value)}
                        className="w-full border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-charcoal-text focus:border-primary-green focus:ring-1 focus:ring-primary-green outline-none transition-colors"
                      />

                      <Button
                        type="submit"
                        variant="primary"
                        className="w-full text-xs py-2.5 group mt-3"
                        disabled={loading}
                      >
                        {loading ? 'Processing...' : 'Get My Exact Quote'}
                        {!loading && <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />}
                      </Button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="calc-success"
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-4 bg-[#F3FDF3] border border-primary-green/20 rounded-xl space-y-1.5"
                    >
                      <div className="inline-flex w-8 h-8 rounded-full bg-primary-green/10 items-center justify-center mb-1 text-primary-green">
                        <Check size={16} />
                      </div>
                      <p className="text-xs font-bold text-dark-green">Estimate Request Sent!</p>
                      <p className="text-[11px] text-secondary-text max-w-xs mx-auto px-4">
                        We have logged your specifications. An account manager will email your exact contract proposal within 4 business hours.
                      </p>
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
