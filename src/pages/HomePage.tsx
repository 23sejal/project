import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import CategorySection from '../components/CategorySection';
import village from '../Images/village.jpeg';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      
      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                The Story of Mithila Art
              </h2>
              <p className="text-gray-600 mb-4">
                Mithila, also known as Madhubani, art is a traditional folk art form that originates from the 
                Mithila region of Bihar, India. Dating back to the 7th century, these intricate paintings were
                traditionally created by women on freshly plastered mud walls of their homes.
              </p>
              <p className="text-gray-600 mb-4">
                The distinctive geometric patterns, mythological motifs, and vibrant natural colors make Mithila 
                art instantly recognizable. Each piece tells a story of cultural heritage, community traditions, 
                and ancient wisdom.
              </p>
              <p className="text-gray-600">
                At Mithilamrit, we collaborate with skilled artisans to preserve this magnificent art form while 
                bringing it to homes around the world through our carefully curated collection of authentic Mithila products.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <img 
                  src={village}
                  alt="Mithila Artisan at Work" 
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 border-8 border-red-700 rounded-lg z-0"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 border-8 border-yellow-500 rounded-lg z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturedProducts />
      <CategorySection />
      
      {/* Testimonial Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "The Madhubani painting I purchased is absolutely stunning. The attention to detail and vibrant colors bring so much life to my living room. I appreciate how each piece comes with information about the artist."
              </p>
              <div className="font-medium">
                <p className="text-gray-900">Sarah Johnson</p>
                <p className="text-gray-500 text-sm">New York, USA</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "I gifted my mother a Mithila embroidered scarf and she absolutely loves it! The craftsmanship is exceptional and knowing that my purchase supports traditional artisans makes it even more special."
              </p>
              <div className="font-medium">
                <p className="text-gray-900">Rajiv Mehta</p>
                <p className="text-gray-500 text-sm">Toronto, Canada</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "The wooden jewelry box is not just a storage item but a piece of art. The intricate Mithila patterns are mesmerizing, and the quality of the wood is excellent. Fast shipping and careful packaging too!"
              </p>
              <div className="font-medium">
                <p className="text-gray-900">Emma Wilson</p>
                <p className="text-gray-500 text-sm">London, UK</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-red-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Join Our Community
            </h2>
            <p className="text-lg mb-8">
              Subscribe to receive updates on new arrivals, special offers, and the stories behind our products.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 py-3 px-4 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium py-3 px-6 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm mt-4 text-red-200">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;