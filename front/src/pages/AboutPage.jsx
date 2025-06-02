import '../styles/pages/About.css';

export default function AboutPage() {
  return (
    <div className="about-page container">
      <div className="about-header">
        <h1 className="about-title">Sobre Nosotros</h1>
        <p className="about-subtitle">Pasión y excelencia en relojes de lujo</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Nuestra Historia</h2>
          <p>
            Desde 2001, en <strong>Luxury Watches</strong> nos dedicamos a ofrecer relojes de lujo exclusivos, combinando tradición y tecnología para los amantes de la precisión y el estilo. Nuestra pasión por la relojería fina nos impulsa a seleccionar las mejores marcas y modelos para que cada cliente encuentre su pieza ideal.
          </p>
        </section>

        <section className="about-section">
          <h2>Nuestros Valores</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">⌚</div>
              <h3>Artesanía</h3>
              <p>Compromiso con la excelencia en cada detalle de nuestros relojes.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">🔒</div>
              <h3>Confianza</h3>
              <p>Garantizamos autenticidad y seguridad en todas tus compras.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">🌍</div>
              <h3>Experiencia Global</h3>
              <p>Acceso a las marcas más prestigiosas de todo el mundo.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">💎</div>
              <h3>Exclusividad</h3>
              <p>Modelos únicos para quienes buscan destacar con elegancia.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⏳</div>
              <h3>Durabilidad</h3>
              <p>Relojes diseñados para acompañarte toda la vida.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Atención Personalizada</h3>
              <p>Asesoría exclusiva para que elijas el reloj perfecto según tu estilo.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
