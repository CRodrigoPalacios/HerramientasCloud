import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ItemsCarrito } from "../components/ItemsCarrito.jsx";
import { FormularioCodigoPromo } from "../components/FormularioCodigoPromo.jsx";
import { ShoppingCart, ArrowRight } from "lucide-react";
import '../styles/pages/CartPage.css';

export default function CartPage() {
  const { cartItems, dispatch } = useCart();

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const envio = 0;
  const impuestos = subtotal * 0.07;
  const total = subtotal + envio + impuestos;

  const carrito = { items: cartItems, subtotal, envio, impuestos, total };
  const cargando = false;

  if (cargando) {
    return <div className="container">Cargando carrito...</div>;
  }

  return (
    <div className="container">
      <div className="cart-layout">
  <div className="cart-items">
    <div className="card">
      <div className="card-header">
        <h1 className="card-title">Carrito de Compras</h1>
        <p className="text-muted">Revisa y modifica tus artículos antes de finalizar la compra</p>
      </div>
      <div className="card-content">
        <h2 className="card-title">Artículos en el Carrito ({carrito.items.length})</h2>
        <ItemsCarrito items={carrito.items} dispatch={dispatch} />
      </div>
    </div>
  </div>

  <div className="cart-summary">
  <div className="card">
    <div className="card-header">
      <h2 className="card-title">Resumen del Pedido</h2>
    </div>
    <div className="card-content">
      <div className="summary-item">
        <span className="text-muted">Subtotal</span>
        <span>${carrito.subtotal.toFixed(2)}</span>
      </div>
      <div className="summary-item">
        <span className="text-muted">Envío</span>
        <span>{carrito.envio === 0 ? "Gratis" : `$${carrito.envio.toFixed(2)}`}</span>
      </div>
      <div className="summary-item">
        <span className="text-muted">Impuestos (7%)</span>
        <span>${carrito.impuestos.toFixed(2)}</span>
      </div>
      <div className="summary-item total">
        <span>Total</span>
        <span>${carrito.total.toFixed(2)}</span>
      </div>

      {/* Agregamos aquí el formulario del código promocional */}
      <div style={{ marginTop: "1.5rem" }}>
        <FormularioCodigoPromo />
      </div>
    </div>

    <div className="card-footer">
      <Link to="/checkout" className="button">
        Proceder al Pago <ArrowRight style={{ marginLeft: '0.5rem' }} size={16} />
      </Link>
    </div>
  </div>
</div>

</div>


      {carrito.items.length === 0 && (
        <div className="empty-cart">
          <div className="empty-icon">
            <ShoppingCart size={32} color="#6b7280" />
          </div>
          <h2 className="card-title">Tu carrito está vacío</h2>
          <p className="text-muted">
            Parece que aún no has añadido ningún producto a tu carrito. Explora nuestra colección para encontrar lo que buscas.
          </p>
          <br />
          <Link to="/catalog" className="link-button">
            Continuar Comprando
          </Link>
        </div>
      )}
    </div>
  );
}
