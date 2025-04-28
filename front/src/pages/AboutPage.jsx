import '@/styles/pages/About.css';

export default function AboutPage() {
  return (
    <div className="about-page container">
      <div className="about-header">
        <h1 className="about-title">About Us</h1>
      </div>
      
      <div className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>Founded in 2001, we've been passionate about...</p>
        </div>
        
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">★</div>
            <h3>Craftsmanship</h3>
            <p>Commitment to excellence in every detail</p>
          </div>
        </div>
      </div>
    </div>
  );
}