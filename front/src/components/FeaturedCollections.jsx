import { Link } from "react-router-dom";
import "../styles/pages/Home.css";

export default function FeaturedCollections() {
  const collections = [
    {
      title: "Luxury Collection",
      description: "Timeless elegance for the discerning collector",
      href: "/catalog/luxury",
      image: "/placeholder-watch.jpg"
    },
    // ... más colecciones
  ];

  return (
    <section className="featured-collections">
      <div className="container">
        <div className="featured-title">
          <h2>Featured Collections</h2>
          <p>Discover our handpicked selection of luxury timepieces</p>
        </div>
        
        <div className="collections-grid">
          {collections.map((collection, index) => (
            <div key={index} className="collection-card">
              <Link to={collection.href}>
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="collection-image"
                />
                <div className="collection-info">
                  <h3>{collection.title}</h3>
                  <p>{collection.description}</p>
                  <span className="collection-link">
                    Explore Collection
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}