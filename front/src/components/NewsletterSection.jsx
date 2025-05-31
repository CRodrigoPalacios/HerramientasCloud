import { useState } from "react";
import { Button } from '@/components/ui/button';
import '@/styles/components/NewsletterSection.css';


export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Suscrito con:", email);
    setEmail("");
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-header">
          <h2 className="newsletter-title">Únete a Nuestro Boletín</h2>
          <p className="newsletter-subtitle">
             Mantente al día con nuestras últimas colecciones y ofertas exclusivas
          </p>
        </div>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="newsletter-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu correo electrónico"
            required
          />
          <Button type="submit">Subscribe</Button>
        </form>
        <p className="newsletter-terms">
          Al suscribirte, aceptas nuestros términos y política de privacidad.
        </p>
      </div>
    </section>
  );
}