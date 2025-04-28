import HeroSection from '../components/HeroSection';
import FeaturedCollections from '../components/FeaturedCollections';
import TestimonialSection from '../components/TestimonialSection';
import NewsletterSection from '../components/NewsletterSection';
import '../styles/pages/Home.css';

export default function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <FeaturedCollections />
      <TestimonialSection />
      <NewsletterSection />
    </div>
  );
}