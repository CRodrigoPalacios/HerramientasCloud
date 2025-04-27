import { Link } from "react-router-dom";
import "@/styles/components/Hero.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container hero-content">
        <div className="text-center">
          <h1 className="hero-title">Luxury Timepieces for the Discerning Collector</h1>
          <p className="hero-subtitle">
            Discover timeless elegance with our curated selection of premium watches
          </p>
        </div>
        <Link to="/catalog" className="hero-cta">Shop Now</Link>
      </div>
    </section>
  );
}