import HeroSection from '../components/HeroSection'
import FeaturedCollections from '../components/FeaturedCollections'
import FeaturedWatches from '../components/FeaturedWatches'
import BrandSection from '../components/BrandSection'
import TestimonialSection from '../components/TestimonialSection'
import NewsletterSection from '../components/NewsletterSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedCollections />
      <FeaturedWatches />
      <BrandSection />
      <TestimonialSection />
      <NewsletterSection />
    </>
  )
}