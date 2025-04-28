import '../styles/pages/Contact.css';

export default function ContactPage() {
  return (
    <div className="contact-page container">
      <div className="contact-header">
        <h1 className="contact-title">Contact Us</h1>
      </div>
      
      <form className="contact-form">
        <div className="form-group">
          <label className="form-label">Name</label>
          <input type="text" className="form-input" />
        </div>
        
        <div className="form-group">
          <label className="form-label">Email</label>
          <input type="email" className="form-input" />
        </div>
        
        <div className="form-group">
          <label className="form-label">Message</label>
          <textarea className="form-input"></textarea>
        </div>
        
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
      
      <div className="contact-info">
        <div className="info-item">✉️ contact@luxurywatches.com</div>
        <div className="info-item">📞 +1 (555) 123-4567</div>
      </div>
    </div>
  );
}