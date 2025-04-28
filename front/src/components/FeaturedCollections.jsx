import { Link } from "react-router-dom";
import "../styles/pages/Home.css";

  
  const FeaturedCollections = () => {
    return (
      <main className="brands-page">
        <h1 className="brands-title">Our Watch Brands</h1>
        <div className="brands-grid">
          {brands.map((brand) => (
            <div key={brand.id} className="brand-card">
              <div className="brand-card-inner">
                <img src={brand.image} alt={brand.name} className="brand-logo" />
                <h2 className="brand-name">{brand.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  };
  
  export default FeaturedCollections;
  

