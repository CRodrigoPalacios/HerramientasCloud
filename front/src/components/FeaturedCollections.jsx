import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function FeaturedCollections() {
  const collections = [
    {
      title: "Luxury Collection",
      description: "Timeless elegance for the discerning collector",
      href: "/catalog/luxury",
    },
    {
      title: "Sport Collection",
      description: "Precision engineering for the active lifestyle",
      href: "/catalog/sport",
    },
    {
      title: "Limited Edition",
      description: "Rare and exclusive timepieces for collectors",
      href: "/catalog/limited",
    },
  ];

  return (
    <section className="container px-4 py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Collections</h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover our handpicked selection of luxury timepieces
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {collections.map((collection, index) => (
          <Link
            key={index}
            to={collection.href}
            className="group transition-transform duration-300 hover:scale-105"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src="/placeholder-watch.jpg"
                alt={collection.title}
                className="object-cover w-full h-[300px]"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold">{collection.title}</h3>
              <p className="text-gray-500 mt-2">{collection.description}</p>
              <div className="flex items-center mt-4 text-sm text-primary">
                <span className="flex items-center">
                  Explore Collection <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}