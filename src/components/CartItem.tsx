import React from 'react';
import { Trash, Plus, Minus } from 'lucide-react';
import { CartItem as CartItemType } from '../types';
import { useCart } from '../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  return (
    <div className="flex flex-col sm:flex-row items-center py-4 border-b">
      <div className="w-full sm:w-24 h-24 bg-gray-100 rounded overflow-hidden mb-4 sm:mb-0 sm:mr-4">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="flex-1 sm:mr-4">
        <h3 className="font-medium">{product.name}</h3>
        <p className="text-sm text-gray-500 capitalize">{product.category}</p>
        <p className="text-red-700 font-medium mt-1">${product.price.toFixed(2)}</p>
      </div>
      
      <div className="flex items-center mt-4 sm:mt-0">
        <button
          onClick={() => updateQuantity(product.id, quantity - 1)}
          className="p-1 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors"
        >
          <Minus size={16} />
        </button>
        <span className="mx-3 w-8 text-center">{quantity}</span>
        <button
          onClick={() => updateQuantity(product.id, quantity + 1)}
          className="p-1 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors"
        >
          <Plus size={16} />
        </button>
      </div>
      
      <div className="flex items-center justify-between w-full sm:w-auto mt-4 sm:mt-0">
        <span className="font-medium text-gray-900 sm:ml-6 sm:mr-8">
          ${(product.price * quantity).toFixed(2)}
        </span>
        <button
          onClick={() => removeFromCart(product.id)}
          className="text-red-500 hover:text-red-700 transition-colors"
        >
          <Trash size={18} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;