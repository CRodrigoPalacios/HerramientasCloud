import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "@/styles/components/Hero.css";

// Importa tus imágenes de alta calidad
import backgroundImage1 from "../assets/fondoreloj1.jpg";
import backgroundImage2 from "../assets/fondoreloj2.jpg"; // Asegúrate de tener esta imagen
import backgroundImage3 from "../assets/fondoreloj3.jpg"; // Asegúrate de tener esta imagen

export default function HeroSection() {
  const images = [backgroundImage1, backgroundImage2, backgroundImage3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Cambiar la imagen cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  // Función para cambiar a la imagen anterior
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Función para cambiar a la imagen siguiente
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section 
      className="hero-section" 
      style={{ 
        backgroundImage: `url(${images[currentImageIndex]})`,
        transition: "background-image 1s ease-in-out"
      }}
    >
      <div className="carousel-controls">
        <button className="carousel-control prev" onClick={prevImage}>
          &lt;
        </button>
        <button className="carousel-control next" onClick={nextImage}>
          &gt;
        </button>
      </div>
      
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span 
            key={index} 
            className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
          ></span>
        ))}
      </div>
      
      <div className="container hero-content">
        <div className="text-center">
          <h1 className="hero-title">Luxury Store</h1>
          <p className="hero-subtitle">
            Descubre la elegancia y la precisión en cada detalle con nuestra exclusiva colección de relojes de lujo
          </p>
        </div>
        <Link to="/catalog" className="hero-cta">Compra ahora</Link>
      </div>
    </section>
  );
}