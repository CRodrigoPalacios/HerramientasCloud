import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "La precisión y el acabado del Patek Philippe que adquirí superó todas mis expectativas. Una verdadera obra maestra de relojería que ahora es el centro de mi colección.",
      author: "Michael Chen",
      role: "Coleccionista",
      rating: 5,
      image: "/assets/testimonial-1.jpg",
    },
    {
      quote:
        "El servicio personalizado y la selección de piezas exclusivas hacen que Luxury Watches sea mi destino predilecto para adquirir relojes de alta gama. Su asesoramiento experto es invaluable.",
      author: "Sarah Johnson",
      role: "Connoisseur de Lujo",
      rating: 5,
      image: "/assets/testimonial-2.jpg",
    },
    {
      quote:
        "La atención meticulosa a cada detalle, desde el momento de la compra hasta el servicio post-venta, refleja el compromiso con la excelencia que caracteriza a esta boutique.",
      author: "David Martinez",
      role: "Inversor",
      rating: 5,
      image: "/assets/testimonial-3.jpg",
    },
    {
      quote:
        "Mi Audemars Piguet adquirido aquí no es simplemente un reloj, es una herencia familiar que transmitirá elegancia y prestigio por generaciones. Una inversión impecable.",
      author: "Alexandra Dubois",
      role: "Directora Ejecutiva",
      rating: 5,
      image: "/assets/testimonial-4.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  const prevTestimonial = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const nextTestimonial = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#f9f8f6] py-24">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5 bg-[url('/assets/luxury-pattern.svg')] bg-[length:300px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 text-center">
        <div className="mb-16">
          <span className="inline-block mb-4 text-sm tracking-widest uppercase text-[#c9a74d] font-medium">
            Experiencias
          </span>
          <h2 className="mb-4 font-serif text-4xl font-bold text-[#1a1a1a]">
            Lo que dicen nuestros clientes
          </h2>
          <div className="mx-auto mb-6 h-0.5 w-16 bg-[#c9a74d]" />
          <p className="mx-auto max-w-xl text-gray-600 text-lg leading-relaxed">
            Descubra por qué coleccionistas y entusiastas confían en nuestra
            expertise
          </p>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden mt-8">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-full px-4"
                aria-hidden={activeIndex !== index}
              >
                <div className="mx-auto max-w-3xl h-[400px] rounded-lg bg-white p-12 shadow-lg border border-black/5 flex flex-col text-left">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#c9a74d] text-white">
                    <Quote size={32} strokeWidth={1} />
                  </div>

                  <blockquote className="mb-8 text-lg italic leading-relaxed text-gray-800">
                    {testimonial.quote}
                  </blockquote>

                  <div className="mb-6 flex gap-1">
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

                  <div className="flex items-center border-t border-gray-200 pt-6">
                    {testimonial.image && (
                      <div className="mr-4 h-15 w-15 overflow-hidden rounded-full border-4 border-gray-100">
                        <div
                          className="h-full w-full bg-center bg-cover"
                          style={{ backgroundImage: `url(${testimonial.image})` }}
                        />
                      </div>
                    )}
                    <div className="flex flex-col">
                      <p className="text-lg font-semibold text-[#1a1a1a] mb-1">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-center gap-8">
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c9a74d] text-[#c9a74d] transition-colors hover:bg-[#c9a74d] hover:text-white focus:outline-none"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              &#8592;
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2.5 w-2.5 rounded-full transition-transform duration-300 ${
                    activeIndex === index
                      ? "bg-[#c9a74d] scale-125"
                      : "bg-gray-300"
                  }`}
                  onClick={() => goToTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c9a74d] text-[#c9a74d] transition-colors hover:bg-[#c9a74d] hover:text-white focus:outline-none"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
