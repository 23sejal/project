import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const CartPage: React.FC = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  
  const shipping = totalPrice > 100 ? 0 : 15;
  const total = totalPrice + shipping;
  
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag size={64} className="mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-medium text-gray-900 mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-6">Looks like you haven't added any products to your cart yet.</p>
          <Link 
            to="/products" 
            className="inline-flex items-center bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            Start Shopping
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-6">Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="hidden sm:flex border-b pb-4 mb-4">
                <div className="w-24 mr-4">
                  <span className="text-sm text-gray-600">Product</span>
                </div>
                <div className="flex-1">
                  <span className="text-sm text-gray-600">Details</span>
                </div>
                <div className="w-32 text-center">
                  <span className="text-sm text-gray-600">Quantity</span>
                </div>
                <div className="w-20 text-right">
                  <span className="text-sm text-gray-600">Price</span>
                </div>
                <div className="w-8"></div>
              </div>
              
              <div className="divide-y">
                {cartItems.map(item => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </div>
              
              <div className="flex justify-between mt-6 pt-6 border-t">
                <button
                  onClick={clearCart}
                  className="text-red-700 hover:text-red-800 font-medium transition-colors"
                >
                  Clear Cart
                </button>
                <Link 
                  to="/products" 
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                {shipping > 0 && (
                  <div className="text-sm text-gray-500">
                    Free shipping on orders over $100
                  </div>
                )}
                <div className="pt-3 border-t">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Total</span>
                    <span className="font-medium text-gray-900">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <button
                className="w-full bg-red-700 hover:bg-red-800 text-white py-3 px-6 rounded-md font-medium transition-colors mb-4"
              >
                Proceed to Checkout
              </button>
              
              <div className="text-sm text-gray-500 space-y-2">
                <p>• Secure payment</p>
                <p>• Fast shipping</p>
                <p>• 30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;