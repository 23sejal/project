import React from 'react';
import painting from '../Images/painting.jpg';
import village from '../Images/village.jpeg';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero section */}
      <div 
        className="h-64 flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${painting})` 
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="text-center relative z-10 text-white">
          <h1 className="text-4xl font-serif font-bold mb-2">About Mithilamrit</h1>
          <p className="text-lg max-w-2xl">
            Our story, mission, and commitment to preserving Mithila culture
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {/* Our Story Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Mithilamrit was born from a deep passion for the rich cultural heritage of the Mithila region. 
                Our founder, Ananya Sharma, grew up surrounded by the vibrant colors and intricate patterns of 
                Madhubani art in her ancestral home in Bihar.
              </p>
              <p className="text-gray-700 mb-4">
                After witnessing the struggles of local artisans to find markets for their incredible creations, 
                Ananya was inspired to create a platform that would connect these skilled craftspeople with 
                art enthusiasts and culture lovers around the world.
              </p>
              <p className="text-gray-700">
                Founded in 2020, Mithilamrit has grown from a small online shop to a thriving marketplace that 
                supports over 100 artisan families. Each product in our collection is carefully selected for its 
                authenticity, quality, and cultural significance.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <img 
                  src={village}
                  alt="Artisans at work" 
                  className="rounded-lg shadow-md"
                />
                <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-red-700 rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Mission Section */}
        <section className="py-16 bg-gray-50 rounded-lg my-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-700 mb-8">
                At Mithilamrit, we are committed to:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-red-700 text-2xl font-serif">1</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Preserving Heritage</h3>
                  <p className="text-gray-600">
                    Supporting traditional art forms and ensuring these cultural treasures continue to thrive for generations to come.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-red-700 text-2xl font-serif">2</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Empowering Artisans</h3>
                  <p className="text-gray-600">
                    Providing fair compensation and sustainable livelihoods for skilled craftspeople in the Mithila region.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-red-700 text-2xl font-serif">3</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Sharing Stories</h3>
                  <p className="text-gray-600">
                    Educating the world about the rich cultural significance behind each piece of Mithila art and craft.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">Our Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">1</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Artisan Partnerships</h3>
              <p className="text-gray-600">
                We collaborate directly with artisans and small workshops throughout the Mithila region.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-red-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">2</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Traditional Techniques</h3>
              <p className="text-gray-600">
                Each item is created using time-honored methods passed down through generations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-red-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">3</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                We carefully inspect each product to ensure it meets our high standards of craftsmanship.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-red-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">4</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">From Artisan to You</h3>
              <p className="text-gray-600">
                Products are thoughtfully packaged and shipped directly to your doorstep.
              </p>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        {/* <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 relative w-48 h-48 mx-auto overflow-hidden rounded-full">
                <img 
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Ananya Sharma" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Ananya Sharma</h3>
              <p className="text-red-700 mb-2">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                With a background in art history and business, Ananya bridges the gap between traditional craftsmanship and modern markets.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 relative w-48 h-48 mx-auto overflow-hidden rounded-full">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Rajiv Kumar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Rajiv Kumar</h3>
              <p className="text-red-700 mb-2">Artisan Relations</p>
              <p className="text-gray-600 text-sm">
                Born into a family of Madhubani artists, Rajiv works directly with our artisan partners to maintain quality and authenticity.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 relative w-48 h-48 mx-auto overflow-hidden rounded-full">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Priya Mehta" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Priya Mehta</h3>
              <p className="text-red-700 mb-2">Creative Director</p>
              <p className="text-gray-600 text-sm">
                With an eye for design and deep knowledge of Mithila aesthetics, Priya curates our collections and oversees product development.
              </p>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default AboutPage;