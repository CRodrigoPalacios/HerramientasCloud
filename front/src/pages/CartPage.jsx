// src/pages/CartPage.jsx
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button } from '@/components/ui/button';

export default function CartPage() {
  const { cartItems, dispatch } = useCart();

  const total = cartItems.reduce((acc, item) => 
    acc + (item.price * item.quantity), 0
  );

  return (
    <div className="container px-4 py-12 md:py-24">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center space-y-4">
          <p className="text-gray-500">Your cart is empty</p>
          <Button asChild>
            <Link to="/catalog">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex gap-4 border-b pb-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-24 h-24 object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>${item.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => dispatch({
                        type: 'UPDATE_QUANTITY',
                        payload: { id: item.id, quantity: parseInt(e.target.value) }
                      })}
                      className="w-16 px-2 py-1 border rounded"
                    />
                    <Button 
                      variant="destructive"
                      onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg h-fit sticky top-8">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <Button className="w-full mt-4">Checkout</Button>
          </div>
        </div>
      )}
    </div>
  );
}