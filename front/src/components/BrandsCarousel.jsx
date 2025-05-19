import { useEffect, useRef } from "react";
import "@/styles/components/BrandsCarousel.css";

const logos = [
  "src/assets/relojes/rolex.png",
  "src/assets/relojes/Audemars.png",
  "src/assets/relojes/Heuer.png",
  "src/assets/relojes/Omega.png",
  "src/assets/relojes/patek_philippe.png",
  "src/assets/relojes/breguet.png",
];

export default function BrandsCarousel() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const speed = 1;

    const scroll = () => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
        scrollAmount = 0;
      } else {
        scrollAmount += speed;
        container.scrollLeft = scrollAmount;
      }
    };

    const interval = setInterval(scroll, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-wrapper">
      <div className="carousel" ref={containerRef}>
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Logo"
            className="carousel-logo"
          />
        ))}
      </div>
    </div>
  );
}
