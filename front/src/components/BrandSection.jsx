export default function BrandSection() {
    const brands = [
      { name: "Rolex", logo: "/brands/rolex.svg" },
      { name: "Omega", logo: "/brands/omega.svg" },
      { name: "Patek Philippe", logo: "/brands/patek.svg" },
      { name: "Audemars Piguet", logo: "/brands/ap.svg" },
      { name: "Tag Heuer", logo: "/brands/tagheuer.svg" },
    ];
  
    return (
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
            {brands.map((brand, index) => (
              <img
                key={index}
                src={brand.logo}
                alt={brand.name}
                className="h-12 md:h-16 lg:h-20 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }