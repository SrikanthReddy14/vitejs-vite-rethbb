import { useState } from 'react';
import { FiShoppingCart, FiSearch, FiUser } from 'react-icons/fi';

export function Header({ cartCount }: { cartCount: number }) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-gray-900 text-white py-3 px-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center gap-4">
        <div className="text-2xl font-bold">Amazon Clone</div>
        
        <div className="flex-1 max-w-2xl">
          <div className="flex">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 text-gray-900 rounded-l-md focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-yellow-400 px-6 rounded-r-md hover:bg-yellow-500">
              <FiSearch className="text-gray-900" />
            </button>
          </div>
        </div>

        <nav className="flex items-center gap-6">
          <div className="text-sm">
            <div className="text-gray-300">Hello, Sign in</div>
            <div className="font-bold">Account & Lists</div>
          </div>
          
          <div className="text-sm">
            <div className="text-gray-300">Returns</div>
            <div className="font-bold">& Orders</div>
          </div>

          <div className="relative">
            <FiShoppingCart className="text-2xl" />
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
}