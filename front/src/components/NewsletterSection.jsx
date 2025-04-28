import { useState } from "react";
import { Button } from '@/components/ui/button';
import '@/styles/components/NewsletterSection.css';


export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic
    console.log("Subscribed with:", email);
    setEmail("");
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-header">
          <h2 className="newsletter-title">Join Our Newsletter</h2>
          <p className="newsletter-subtitle">
            Stay updated with our latest collections and exclusive offers
          </p>
        </div>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="newsletter-input"
            // ... resto de props
          />
          <Button type="submit">Subscribe</Button>
        </form>
        <p className="newsletter-terms">
          By subscribing, you agree to our terms and privacy policy.
        </p>
      </div>
    </section>
  );
}