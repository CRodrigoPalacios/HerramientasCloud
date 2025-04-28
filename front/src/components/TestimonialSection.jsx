import { useState, useEffect } from 'react';
import '@/styles/components/TestimonialSection.css';
import { Star, Quote } from 'lucide-react';

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "La precisión y el acabado del Patek Philippe que adquirí superó todas mis expectativas. Una verdadera obra maestra de relojería que ahora es el centro de mi colección.",
      author: "Michael Chen",
      role: "Coleccionista",
      rating: 5,
      image: "/assets/testimonial-1.jpg" // Ruta a la imagen del cliente (opcional)
    },
    {
      quote: "El servicio personalizado y la selección de piezas exclusivas hacen que Luxury Watches sea mi destino predilecto para adquirir relojes de alta gama. Su asesoramiento experto es invaluable.",
      author: "Sarah Johnson",
      role: "Connoisseur de Lujo",
      rating: 5,
      image: "/assets/testimonial-2.jpg"
    },
    {
      quote: "La atención meticulosa a cada detalle, desde el momento de la compra hasta el servicio post-venta, refleja el compromiso con la excelencia que caracteriza a esta boutique.",
      author: "David Martinez",
      role: "Inversor",
      rating: 5,
      image: "/assets/testimonial-3.jpg"
    },
    {
      quote: "Mi Audemars Piguet adquirido aquí no es simplemente un reloj, es una herencia familiar que transmitirá elegancia y prestigio por generaciones. Una inversión impecable.",
      author: "Alexandra Dubois",
      role: "Directora Ejecutiva",
      rating: 5,
      image: "/assets/testimonial-4.jpg"
    }
  ];

  // Avanzar automáticamente los testimonios cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => 
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Navegar a un testimonio específico
  const goToTestimonial = (index) => {
    setActiveIndex(index);
  };

  // Ir al testimonio anterior
  const prevTestimonial = () => {
    setActiveIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  // Ir al siguiente testimonio
  const nextTestimonial = () => {
    setActiveIndex((current) => 
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-background"></div>
      <div className="testimonials-container">
        <div className="testimonials-header">
          <span className="section-label">Experiencias</span>
          <h2 className="testimonials-title">Lo que dicen nuestros clientes</h2>
          <div className="title-underline"></div>
          <p className="testimonials-subtitle">
            Descubra por qué coleccionistas y entusiastas confían en nuestra expertise
          </p>
        </div>
        
        <div className="testimonials-slider">
          <div className="testimonials-wrapper" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="quote-icon">
                    <Quote size={32} strokeWidth={1} />
                  </div>
                  
                  <blockquote className="testimonial-quote">
                    {testimonial.quote}
                  </blockquote>
                  
                  <div className="testimonial-rating">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        fill={i < testimonial.rating ? "#c9a74d" : "none"} 
                        stroke={i < testimonial.rating ? "#c9a74d" : "#cbd5e1"} 
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>
                  
                  <div className="testimonial-info">
                    {testimonial.image && (
                      <div className="testimonial-image-container">
                        <div className="testimonial-image" style={{ backgroundImage: `url(${testimonial.image})` }}></div>
                      </div>
                    )}
                    <div className="testimonial-author-info">
                      <p className="testimonial-author">{testimonial.author}</p>
                      <p className="testimonial-role">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="testimonial-controls">
            <button className="control-btn prev-btn" onClick={prevTestimonial}>
              &#8592;
            </button>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  className={`dot-indicator ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => goToTestimonial(index)}
                />
              ))}
            </div>
            <button className="control-btn next-btn" onClick={nextTestimonial}>
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}