import HeroSection from '../components/HeroSection';
import TestimonialSection from '../components/TestimonialSection';
import NewsletterSection from '../components/NewsletterSection';
import BrandsCarousel from "../components/BrandsCarousel";
import '../styles/pages/Home.css';

export default function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <BrandsCarousel />
      <TestimonialSection />
      <NewsletterSection />
    </div>
  );
}