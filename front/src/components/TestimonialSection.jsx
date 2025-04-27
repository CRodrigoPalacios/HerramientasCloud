export default function TestimonialSection() {
    const testimonials = [
      {
        quote: "The perfect addition to my collection. The craftsmanship is unparalleled.",
        author: "Michael Chen",
        role: "Watch Collector"
      },
      {
        quote: "Exceptional service and an incredible selection. My go-to for luxury timepieces.",
        author: "Sarah Johnson",
        role: "Luxury Enthusiast"
      },
      {
        quote: "The attention to detail in every piece is truly remarkable. Highly recommended!",
        author: "David Martinez",
        role: "Investor"
      }
    ];
  
    return (
      <section className="bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Client Testimonials</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                What our clients say about us
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-900">
                <blockquote className="text-gray-600 dark:text-gray-300">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mt-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }