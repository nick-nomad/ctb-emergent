import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Check } from 'lucide-react';

const SummerHouses = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?w=1600"
            alt="Summer House"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Summer Houses</h1>
          <p className="text-xl">Elegant garden retreats for relaxation and entertainment</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#2d5016] mb-6">Beautiful Timber Summer Houses</h2>
            <p className="text-gray-700 text-lg mb-4">
              Our elegant summer houses provide the perfect garden retreat for relaxation and entertainment. Whether you want a quiet reading nook, a space for afternoon tea, or somewhere to entertain guests, a custom summer house can transform your garden.
            </p>
            <p className="text-gray-700 text-lg">
              Each summer house is built to your specifications with quality materials and craftsmanship. Choose from traditional or contemporary designs, with a wide range of sizes, styles, and features available.
            </p>
          </div>

          {/* Image Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?w=800"
                alt="Traditional summer house"
                className="w-full h-80 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#2d5016] mb-2">Traditional Style</h3>
                <p className="text-gray-600">Classic timber summer house designs</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1607137149873-cdcc8135930b?w=800"
                alt="Modern summer house"
                className="w-full h-80 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#2d5016] mb-2">Contemporary Design</h3>
                <p className="text-gray-600">Modern summer houses with clean lines</p>
              </CardContent>
            </Card>
          </div>

          {/* Features */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-[#2d5016] mb-6">Summer House Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Custom Sizes</h4>
                  <p className="text-gray-600">From cozy corners to spacious entertaining areas</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Traditional or Modern</h4>
                  <p className="text-gray-600">Choose your preferred architectural style</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Corner Summer Houses</h4>
                  <p className="text-gray-600">Perfect for making use of corner spaces</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Windows & Doors</h4>
                  <p className="text-gray-600">Various configurations including bi-fold doors</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Roofing Options</h4>
                  <p className="text-gray-600">Felt, shingle, or tiled roofing available</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Electrical Installation</h4>
                  <p className="text-gray-600">Lighting and power sockets available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Styles Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#2d5016] mb-6 text-center">Popular Styles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-[#2d5016] mb-3">Traditional Summer House</h4>
                  <p className="text-gray-600">Classic design with apex roof and traditional windows</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-[#2d5016] mb-3">Corner Summer House</h4>
                  <p className="text-gray-600">Space-efficient design perfect for garden corners</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-[#2d5016] mb-3">Contemporary Summer House</h4>
                  <p className="text-gray-600">Modern aesthetics with clean lines and large glazing</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-[#2d5016] rounded-lg p-8 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Transform Your Garden Today</h3>
            <p className="text-xl mb-6">Create the perfect summer house for your garden</p>
            <Link to="/contact-us">
              <Button className="bg-[#8fbe00] hover:bg-[#7aa500] text-white px-8 py-6 text-lg">
                Request Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SummerHouses;
