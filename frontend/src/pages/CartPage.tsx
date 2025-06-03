import React from 'react';
import { useCart } from '../context/CartContext'; // ajusta el path si es necesario

const CartPage: React.FC = () => {
  const { cartItems, dispatch } = useCart();

  const handleRemove = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity < 1) return;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return <p className="text-center mt-8 text-gray-500">Tu carrito está vacío.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Carrito de compras</h2>
      {cartItems.map(item => (
        <div
          key={item._id}
          className="flex items-center justify-between border-b py-4"
        >
          <div className="flex items-center gap-4">
            {item.image && (
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
            )}
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="number"
              value={item.quantity}
              min={1}
              onChange={e => handleQuantityChange(item._id, parseInt(e.target.value))}
              className="w-16 px-2 py-1 border rounded text-center"
            />
            <button
              onClick={() => handleRemove(item._id)}
              className="text-red-500 hover:underline"
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}

      <div className="text-right mt-6">
        <p className="text-lg font-semibold">
          Total: <span className="text-green-600">${total.toFixed(2)}</span>
        </p>
        <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Proceder al pago
        </button>
      </div>
    </div>
  );
};

export default CartPage;
