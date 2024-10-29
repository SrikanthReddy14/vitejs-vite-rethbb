import { useState } from 'react';
import { Header } from './components/Header';
import { ProductGrid } from './components/ProductGrid';
import { Cart } from './components/Cart';
import { Product } from './types';

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "2023 MacBook Pro M2",
    price: 1499.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
    description: "Apple's latest MacBook Pro featuring the M2 chip",
    rating: 4.8,
    reviews: 2563,
    prime: true,
    category: "Laptops"
  },
  {
    id: 2,
    name: "Sony WH-1000XM5",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500",
    description: "Premium noise-cancelling headphones",
    rating: 4.9,
    reviews: 3842,
    prime: true,
    category: "Audio"
  },
  {
    id: 3,
    name: "Samsung 65\" OLED TV",
    price: 2199.99,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500",
    description: "4K OLED TV with HDR and smart features",
    rating: 4.7,
    reviews: 1256,
    prime: true,
    category: "TVs"
  },
  {
    id: 4,
    name: "DJI Mini 3 Pro",
    price: 759.99,
    image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=500",
    description: "Compact drone with 4K camera",
    rating: 4.6,
    reviews: 892,
    prime: true,
    category: "Drones"
  }
];

export default function App() {
  const [cartItems, setCartItems] = useState<Array<{ product: Product; quantity: number }>>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems((items) => {
      const existingItem = items.find((item) => item.product.id === product.id);
      
      if (existingItem) {
        return items.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...items, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveFromCart = (productId: number) => {
    setCartItems((items) => items.filter((item) => item.product.id !== productId));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <ProductGrid products={PRODUCTS} onAddToCart={handleAddToCart} />
          </div>
          
          <div className="lg:col-span-1">
            <Cart
              items={cartItems}
              onUpdateQuantity={handleUpdateQuantity}
              onRemove={handleRemoveFromCart}
            />
          </div>
        </div>
      </main>
    </div>
  );
}