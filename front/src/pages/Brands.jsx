import marcas from "@/data/marcas";
import "@/styles/pages/Brands.css";

const MarcasPage = () => {
  return (
    <main className="marcas-page">
      <h1 className="marcas-title">Nuestras Marcas de Relojes</h1>
      <div className="marcas-grid">
        {marcas.map((marca) => (
          <div key={marca.id} className="marca-card">
            <div className="marca-card-inner">
              <img src={marca.image} alt={marca.name} className="marca-logo" />
              <h2 className="marca-name">{marca.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MarcasPage;
