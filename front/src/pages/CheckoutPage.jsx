import { useCart } from "../context/CartContext";
import "../styles/pages/CheckoutPage.css";
import { CreditCard, MapPin, ShieldCheck } from "lucide-react";

export default function CheckoutPage() {
  const { cartItems } = useCart();

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const envio = 0;
  const impuestos = subtotal * 0.07;
  const total = subtotal + envio + impuestos;

  return (
    <div className="container checkout-page">
      <h1 className="checkout-title">Finaliza tu Compra</h1>
      <p className="checkout-subtitle">Tus datos están protegidos y cifrados</p>

      <div className="checkout-layout">
        {/* Formulario de Envío */}
        <div className="checkout-form card">
          <div className="card-header">
            <h2><MapPin size={20} /> Dirección de Envío</h2>
          </div>
          <div className="card-content">
            <form>
              <label>Nombre Completo</label>
              <input type="text" placeholder="Ej. Gabriel Gutiérrez" required />
              <label>Correo Electrónico</label>
              <input type="email" placeholder="Ej. correo@ejemplo.com" required />
              <label>Dirección</label>
              <input type="text" placeholder="Calle, número, distrito" required />
              <label>Ciudad</label>
              <input type="text" required />
              <label>Código Postal</label>
              <input type="text" required />
              <label>País</label>
              <input type="text" required />
            </form>
          </div>
        </div>

        {/* Método de Pago y Resumen */}
        <div className="checkout-summary card">
          <div className="card-header">
            <h2><CreditCard size={20} /> Método de Pago</h2>
          </div>
          <div className="card-content">
            <form>
              <label>Número de Tarjeta</label>
              <input type="text" placeholder="1234 5678 9012 3456" required />
              <label>Nombre en la Tarjeta</label>
              <input type="text" placeholder="Ej. Gabriel Gutiérrez" required />
              <div className="row">
                <div>
                  <label>Expira</label>
                  <input type="text" placeholder="MM/AA" required />
                </div>
                <div>
                  <label>CVV</label>
                  <input type="text" placeholder="123" required />
                </div>
              </div>
            </form>

            {/* Resumen del Pedido */}
            <div className="summary-block">
              <h3>Resumen del Pedido</h3>
              <div className="summary-item">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-item">
                <span>Envío</span>
                <span>{envio === 0 ? "Gratis" : `$${envio.toFixed(2)}`}</span>
              </div>
              <div className="summary-item">
                <span>Impuestos</span>
                <span>${impuestos.toFixed(2)}</span>
              </div>
              <div className="summary-item total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="card-footer">
            <button className="button pay-button">
              <ShieldCheck size={18} /> Pagar de forma segura
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
