import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <Link to={`/product/${product.id}`} className="block h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="p-4">
        <div className="mb-2 flex justify-between items-center">
          <h3 className="text-lg font-medium">
            <Link to={`/product/${product.id}`} className="hover:text-red-700 transition">
              {product.name}
            </Link>
          </h3>
          <span className="font-semibold text-red-700">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 capitalize">{product.category}</span>
          <button
            onClick={() => addToCart(product, 1)}
            className="flex items-center bg-red-700 hover:bg-red-800 text-white px-3 py-1.5 rounded-md text-sm transition-colors"
          >
            <ShoppingBag size={16} className="mr-1" />
            Add to Cart
          </button>
        </div>
      </div>
      {product.featured && (
        <div className="absolute top-2 left-2 bg-yellow-500 text-xs text-white font-semibold px-2 py-1 rounded">
          Featured
        </div>
      )}
      {!product.inStock && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <span className="bg-red-600 text-white px-3 py-1 rounded-md font-medium">Out of Stock</span>
        </div>
      )}
    </div>
  );
};

export default ProductCard;