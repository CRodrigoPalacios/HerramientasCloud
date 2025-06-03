import React, { useState, useEffect, JSX } from "react";
import { Link } from "react-router-dom";

import backgroundImage1 from "../assets/fondoreloj1.jpg";
import backgroundImage2 from "../assets/fondoreloj2.jpg";
import backgroundImage3 from "../assets/fondoreloj3.jpg";

export default function HeroSection(): JSX.Element {
  const images: string[] = [backgroundImage1, backgroundImage2, backgroundImage3];
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const prevImage = (): void => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = (): void => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section
      className="relative h-[80vh] bg-center bg-cover flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* Carousel Controls */}
      <div className="absolute inset-0 flex justify-between items-center px-5 z-20 pointer-events-none">
        <button
          onClick={prevImage}
          className="pointer-events-auto bg-black bg-opacity-50 hover:opacity-100 opacity-70 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl transition-opacity"
          aria-label="Previous Image"
          type="button"
        >
          &#8249;
        </button>
        <button
          onClick={nextImage}
          className="pointer-events-auto bg-black bg-opacity-50 hover:opacity-100 opacity-70 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl transition-opacity"
          aria-label="Next Image"
          type="button"
        >
          &#8250;
        </button>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-transform ${
              index === currentImageIndex
                ? "bg-white scale-125"
                : "bg-white bg-opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            type="button"
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl px-5 text-center mx-auto">
        <h1 className="text-5xl font-bold drop-shadow-md mb-4">Luxury Store</h1>
        <p className="max-w-xl mx-auto text-lg mb-10 drop-shadow-md">
          Descubre la elegancia y la precisión en cada detalle con nuestra exclusiva colección de relojes de lujo
        </p>
        <Link
          to="/catalog"
          className="inline-block px-8 py-4 bg-yellow-600 border-2 border-yellow-600 text-white font-bold rounded hover:bg-transparent hover:text-yellow-600 transition-all shadow-lg"
        >
          Compra ahora
        </Link>
      </div>
    </section>
  );
}
