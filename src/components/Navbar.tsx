import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import logo from '../Images/logo.jpeg';

const Navbar: React.FC = () => {
  const { totalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Mithilamrit Logo" 
              className="h-12 w-12 mr-2"
            />
            <span className="text-2xl md:text-3xl font-serif font-bold text-brand-brown">
              Mithilamrit
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-brand-orange transition">Home</Link>
            <Link to="/products" className="font-medium hover:text-brand-orange transition">Shop</Link>
            <Link to="/about" className="font-medium hover:text-brand-orange transition">About</Link>
            <Link to="/contact" className="font-medium hover:text-brand-orange transition">Contact</Link>
            <Link to="/cart" className="relative">
              <ShoppingCart size={24} className="text-brand-brown" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </nav>
          
          <div className="flex items-center md:hidden">
            <Link to="/cart" className="relative mr-4">
              <ShoppingCart size={24} className="text-brand-brown" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-brown focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="font-medium hover:text-brand-orange transition" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/products" className="font-medium hover:text-brand-orange transition" onClick={() => setIsMenuOpen(false)}>Shop</Link>
            <Link to="/about" className="font-medium hover:text-brand-orange transition" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/contact" className="font-medium hover:text-brand-orange transition" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;