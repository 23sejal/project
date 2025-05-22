import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset form status after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  
  return (
    <div className="min-h-screen pt-20">
      {/* Hero section */}
      <div 
        className="h-64 flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/7096097/pexels-photo-7096097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="text-center relative z-10 text-white">
          <h1 className="text-4xl font-serif font-bold mb-2">Contact Us</h1>
          <p className="text-lg max-w-2xl">
            We'd love to hear from you. Reach out with any questions or feedback.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row rounded-lg shadow-lg overflow-hidden">
          {/* Contact info */}
          <div className="lg:w-1/3 bg-red-700 text-white p-8">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Visit Us</h3>
                  <address className="not-italic text-red-100">
                    1234 Cultural Lane<br />
                    Bihar, India<br />
                    Pin: 846001
                  </address>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Email Us</h3>
                  <p className="text-red-100">info@mithilamrit.com</p>
                  <p className="text-red-100">support@mithilamrit.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Call Us</h3>
                  <p className="text-red-100">+91 98765 43210</p>
                  <p className="text-red-100">+91 87654 32109</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="font-medium mb-3">Business Hours</h3>
              <div className="text-red-100">
                <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                <p>Saturday: 10:00 AM - 4:00 PM IST</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="lg:w-2/3 bg-white p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 rounded-md p-4 mb-6">
                <p className="font-medium">Thank you for your message!</p>
                <p>We've received your inquiry and will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    required
                  >
                    <option value="">Please select a subject</option>
                    <option value="Product Inquiry">Product Inquiry</option>
                    <option value="Order Status">Order Status</option>
                    <option value="Returns">Returns & Exchanges</option>
                    <option value="Wholesale">Wholesale Inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center transition-colors"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
        
        {/* Map section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h2>
          <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Map would be embedded here in a production environment</p>
          </div>
        </div>
        
        {/* FAQ section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept credit/debit cards, PayPal, and bank transfers. All payments are processed securely.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">How long does shipping take?</h3>
              <p className="text-gray-600">
                Domestic shipping within India takes 3-5 business days. International shipping typically takes 10-15 business days depending on the destination.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Do you offer custom orders?</h3>
              <p className="text-gray-600">
                Yes, we offer custom orders for many of our products. Please contact us with your specific requirements, and we'll work with our artisans to create something special for you.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">What is your return policy?</h3>
              <p className="text-gray-600">
                We offer a 30-day return policy for most items in their original condition. Custom orders may not be eligible for returns unless there's a defect.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;