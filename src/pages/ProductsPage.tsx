import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, getProductsByCategory } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Filter } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [displayedProducts, setDisplayedProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState<string>(categoryParam || 'all');
  const [showFilters, setShowFilters] = useState(false);
  
  const categories = ['all', 'art', 'clothing', 'home'];
  
  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
      setDisplayedProducts(getProductsByCategory(categoryParam));
    } else {
      setActiveCategory('all');
      setDisplayedProducts(products);
    }
  }, [categoryParam]);
  
  const filterByCategory = (category: string) => {
    if (category === 'all') {
      setDisplayedProducts(products);
    } else {
      setDisplayedProducts(getProductsByCategory(category));
    }
    setActiveCategory(category);
  };
  
  return (
    <div className="pt-20">
      {/* Hero banner */}
      <div 
        className="h-64 flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/7096097/pexels-photo-7096097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="text-center relative z-10 text-white">
          <h1 className="text-4xl font-serif font-bold mb-2">Our Collection</h1>
          <p className="text-lg max-w-2xl">
            Explore our handcrafted treasures that celebrate the rich cultural heritage of Mithila
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Mobile filter toggle */}
        <div className="md:hidden mb-4">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md text-gray-700 transition-colors"
          >
            <Filter size={18} className="mr-2" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row">
          {/* Sidebar filters */}
          <aside className={`md:w-64 md:mr-8 mb-6 md:mb-0 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-medium text-lg mb-4 text-gray-900">Categories</h3>
              <ul className="space-y-2">
                {categories.map(category => (
                  <li key={category}>
                    <button
                      onClick={() => filterByCategory(category)}
                      className={`w-full text-left py-2 px-3 rounded-md transition-colors ${
                        activeCategory === category 
                          ? 'bg-red-700 text-white' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          
          {/* Products grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-medium text-gray-900">
                {activeCategory === 'all' 
                  ? 'All Products' 
                  : `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Collection`}
              </h2>
              <p className="text-gray-600">
                {displayedProducts.length} {displayedProducts.length === 1 ? 'product' : 'products'}
              </p>
            </div>
            
            {displayedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-gray-600">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;