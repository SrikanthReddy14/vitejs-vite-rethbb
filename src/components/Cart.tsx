import { Product } from '../types';
import { formatPrice } from '../utils';

interface CartProps {
  items: Array<{ product: Product; quantity: number }>;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
}

export function Cart({ items, onUpdateQuantity, onRemove }: CartProps) {
  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      
      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="flex gap-4 py-4 border-b">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
                
                <div className="flex-1">
                  <h3 className="font-medium">{product.name}</h3>
                  <div className="text-lg font-bold text-gray-900">
                    {formatPrice(product.price)}
                  </div>
                  
                  <div className="flex items-center gap-2 mt-2">
                    <select
                      value={quantity}
                      onChange={(e) => 
                        onUpdateQuantity(product.id, Number(e.target.value))
                      }
                      className="border rounded-md px-2 py-1"
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                    
                    <button
                      onClick={() => onRemove(product.id)}
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-right">
            <div className="text-lg">
              Subtotal ({items.length} items):{' '}
              <span className="font-bold">{formatPrice(subtotal)}</span>
            </div>
            
            <button className="mt-4 bg-yellow-400 text-gray-900 px-6 py-2 rounded-md hover:bg-yellow-500 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}