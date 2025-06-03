import { JSX, useEffect, useRef } from "react";

const logos: string[] = [
  "src/assets/relojes/rolex.png",
  "src/assets/relojes/Audemars.png",
  "src/assets/relojes/Heuer.png",
  "src/assets/relojes/Omega.png",
  "src/assets/relojes/patek_philippe.png",
  "src/assets/relojes/breguet.png",
];

export default function BrandsCarousel(): JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);

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

    const interval = window.setInterval(scroll, 20);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-white py-5">
      <div
        ref={containerRef}
        className="flex w-max select-none"
        style={{ scrollBehavior: 'smooth' }}
      >
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Logo"
            className="h-14 mx-10 flex-shrink-0 object-contain"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}
