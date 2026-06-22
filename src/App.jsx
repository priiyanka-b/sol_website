import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TrustedBy } from './components/TrustedBy'
import { ProductCategories } from './components/ProductCategories'
import { WhyChoose } from './components/WhyChoose'
import { ManufacturingProcess } from './components/ManufacturingProcess'
import { FeaturedProducts } from './components/FeaturedProducts'
import { Testimonials } from './components/Testimonials'
import { InstantQuoteCalculator } from './components/InstantQuoteCalculator'
import { CTABanner } from './components/CTABanner'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-charcoal-text antialiased">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <ProductCategories />
        <WhyChoose />
        <ManufacturingProcess />
        <FeaturedProducts />
        <Testimonials />
        <InstantQuoteCalculator />
        <CTABanner />
      </main>
      <Footer />
    </div>
  )
}
