import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import painting from '../Images/painting.jpg';

const Hero: React.FC = () => {
  return (
    <>
    <div className="w-full h-1 bg-white"></div>
    <section className="relative h-screen flex items-center">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0 bg-madhubani-pattern bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${painting})`, backgroundPosition: 'center top'  }} 
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-4 animate-fadeIn">
            Bihar's Cultural Heritage
          </h1>
          <p className="text-lg md:text-xl mb-8 animate-fadeIn animation-delay-100">
            Experience the authentic craftsmanship of Mithila region through our 
            handpicked collection of traditional art, textiles, and handicrafts.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fadeIn animation-delay-200">
            <Link 
              to="/products" 
              className="bg-brand-orange hover:bg-opacity-90 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center transition-colors"
            >
              Explore Collection
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link 
              to="/about" 
              className="border border-white hover:bg-white hover:text-brand-brown text-white px-6 py-3 rounded-md font-medium flex items-center justify-center transition-colors"
            >
              Our Heritage
            </Link>
          </div>
        </div>
      </div>
      
      {/* Traditional border pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-madhubani-pattern bg-repeat-x opacity-20"></div>
    </section></>
  );
};

export default Hero;