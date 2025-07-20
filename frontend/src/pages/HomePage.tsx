import HeroSection from '../components/HeroSection';
import TestimonialSection from '../components/TestimonialSection';
import NewsletterSection from '../components/NewSletterSection';
import BrandsCarousel from '../components/BrandsCarousel';
import { JSX } from 'react';

export default function HomePage(): JSX.Element {
  return (
    <div className="home-page">
      <HeroSection />
      <BrandsCarousel />
      <TestimonialSection />
      <NewsletterSection />
    </div>
  );
}
