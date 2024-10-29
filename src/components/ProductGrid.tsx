import { Product } from '../types';
import { formatPrice } from '../utils';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export function ProductGrid({ products, onAddToCart }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="aspect-w-1 aspect-h-1">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-900 mb-2">{product.name}</h3>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl font-bold">{formatPrice(product.price)}</span>
              {product.prime && (
                <span className="text-xs text-blue-600 font-semibold">Prime</span>
              )}
            </div>
            
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <span 
                  key={i}
                  className={`text-lg ${
                    i < product.rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                >
                  ★
                </span>
              ))}
              <span className="ml-2 text-sm text-gray-600">
                ({product.reviews.toLocaleString()})
              </span>
            </div>

            <button
              onClick={() => onAddToCart(product)}
              className="w-full bg-yellow-400 text-gray-900 py-2 rounded-md hover:bg-yellow-500 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}