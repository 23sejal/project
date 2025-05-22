import React from 'react';
import { Link } from 'react-router-dom';
import tikuli from '../Images/tikuli.jpg';
import saree from '../Images/saree.jpg';
import sikki from '../Images/sikki.jpg';

const categories = [
  {
    id: 'art',
    name: 'Madhubani & Tikuli Art',
    description: 'Traditional paintings and artwork from Bihar',
    image: tikuli,
  },
  {
    id: 'clothing',
    name: 'Traditional Textiles',
    description: 'Bhagalpuri silk and handwoven fabrics',
    image: saree,
  },
  {
    id: 'home',
    name: 'Cultural Decor',
    description: 'Sikki grass crafts and traditional artifacts',
    image:sikki,
  }
];

const CategorySection: React.FC = () => {
  return (
    <section className="py-16 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-brown mb-4">
            Explore Bihar's Heritage
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover authentic handicrafts and traditional art forms that have been 
            cherished for generations in Bihar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map(category => (
            <Link 
              key={category.id}
              to={`/products?category=${category.id}`} 
              className="group relative h-80 overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              >
                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-serif font-semibold mb-2">{category.name}</h3>
                <p className="text-sm opacity-90 mb-4">{category.description}</p>
                <span className="inline-block py-2 px-4 border border-white rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore Collection
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;