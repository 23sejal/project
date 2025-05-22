import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';
import { ShoppingBag, ArrowLeft, Minus, Plus } from 'lucide-react';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = id ? getProductById(id) : undefined;
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-medium text-gray-900 mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/products" 
            className="inline-flex items-center bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-md transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };
  
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <Link 
          to="/products" 
          className="inline-flex items-center text-gray-600 hover:text-red-700 mb-6 transition-colors"
        >
          <ArrowLeft size={18} className="mr-1" />
          Back to Products
        </Link>
        
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
          {/* Product image */}
          <div className="md:w-1/2 h-96 md:h-auto relative">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover" 
            />
            {product.featured && (
              <div className="absolute top-4 left-4 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded">
                Featured
              </div>
            )}
          </div>
          
          {/* Product details */}
          <div className="md:w-1/2 p-6 md:p-8 flex flex-col">
            <div className="mb-2">
              <span className="text-sm text-gray-500 uppercase tracking-wider">
                {product.category}
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            <div className="text-2xl text-red-700 font-medium mb-6">
              ${product.price.toFixed(2)}
            </div>
            
            <div className="border-t border-b border-gray-200 py-6 mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                {product.description}
              </p>
              <p className="text-gray-700 leading-relaxed">
                Each piece is handmade by skilled artisans from the Mithila region, ensuring authenticity and supporting traditional craftsmanship. Due to the handmade nature, slight variations may occur, making each piece truly unique.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Quantity</h3>
              <div className="flex items-center">
                <button 
                  onClick={decreaseQuantity}
                  className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors"
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </button>
                <span className="mx-4 w-8 text-center">{quantity}</span>
                <button 
                  onClick={increaseQuantity}
                  className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-red-700 hover:bg-red-800 text-white py-3 px-6 rounded-md font-medium flex items-center justify-center transition-colors"
                disabled={!product.inStock}
              >
                <ShoppingBag size={18} className="mr-2" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
              <Link 
                to="/products" 
                className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-6 rounded-md font-medium text-center transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
            
            {/* Additional info */}
            <div className="mt-8 text-sm text-gray-500">
              <p>• Free shipping on orders over $100</p>
              <p>• 30-day return policy</p>
              <p>• Sustainably sourced and ethically made</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;