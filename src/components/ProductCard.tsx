interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export function ProductCard({ name, price, image, description }: Product) {
  return (
    <div className="flex bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-4 gap-6">
      <div className="w-48 h-48 flex-shrink-0">
        <img src={image} alt={name} className="w-full h-full object-cover rounded-md" />
      </div>
      <div className="flex flex-col flex-grow justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl font-bold text-indigo-600">${price}</span>
            <span className="text-sm text-gray-500">Free Prime Delivery</span>
          </div>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <div className="flex gap-3 mt-4">
          <button className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
            Add to Cart
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            Save for Later
          </button>
        </div>
      </div>
    </div>
  );
}