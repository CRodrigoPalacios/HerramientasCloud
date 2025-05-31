import '../styles/pages/Contact.css';

export default function ContactPage() {
  return (
    <div className="contact-page container">
      <div className="contact-header">
        <h1 className="contact-title">Contáctanos</h1>
      </div>
      
      <form className="contact-form">
        <div className="form-group">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-input" />
        </div>
        
        <div className="form-group">
          <label className="form-label">Correo Electrónico</label>
          <input type="email" className="form-input" />
        </div>
        
        <div className="form-group">
          <label className="form-label">Mensaje</label>
          <textarea className="form-input"></textarea>
        </div>
        
        <button type="submit" className="submit-btn">Enviar Mensaje</button>
      </form>
      
      <div className="contact-info">
        <div className="info-item">✉️ contacto@luxurywatches.com</div>
        <div className="info-item">📞 +1 (555) 123-4567</div>
      </div>
    </div>
  );
}
