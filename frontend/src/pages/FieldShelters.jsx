import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Check } from 'lucide-react';

const FieldShelters = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1603951743220-867ee4ae77d4?w=1600"
            alt="Field Shelter"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Field Shelters</h1>
          <p className="text-xl">Weather-resistant shelters for horses and livestock</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#2d5016] mb-6">Quality Field Shelters</h2>
            <p className="text-gray-700 text-lg mb-4">
              Our field shelters provide essential protection from the elements for horses, ponies, and other livestock. Built with the same quality and attention to detail as all our timber buildings, these robust structures are designed to withstand the harshest weather conditions.
            </p>
            <p className="text-gray-700 text-lg">
              We offer field shelters in various sizes to suit different animals - from large shelters for horses to smaller versions for ponies, goats, and sheep. Each shelter can be customized to your specific needs and site requirements.
            </p>
          </div>

          {/* Image Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1603951743220-867ee4ae77d4?w=600"
                alt="Red field shelter"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h4 className="font-semibold text-[#2d5016]">Standard Field Shelter</h4>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1655103797557-524307e07485?w=600"
                alt="Barn interior"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h4 className="font-semibold text-[#2d5016]">Interior View</h4>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1607136739095-ee0404e2c3fc?w=600"
                alt="Custom shelter"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h4 className="font-semibold text-[#2d5016]">Custom Design</h4>
              </CardContent>
            </Card>
          </div>

          {/* Features */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-[#2d5016] mb-6">Shelter Features & Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Weather Resistant</h4>
                  <p className="text-gray-600">Built to withstand wind, rain, and snow</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Various Sizes</h4>
                  <p className="text-gray-600">From small pony shelters to large horse shelters</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Mobile or Fixed</h4>
                  <p className="text-gray-600">Skid-mounted for easy relocation if needed</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Open or Enclosed</h4>
                  <p className="text-gray-600">Partially or fully enclosed options</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Durable Materials</h4>
                  <p className="text-gray-600">Heavy-duty timber construction</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Custom Features</h4>
                  <p className="text-gray-600">Add partitions, hay racks, and more</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-[#2d5016] rounded-lg p-8 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Protect Your Animals</h3>
            <p className="text-xl mb-6">Get a custom field shelter quote today</p>
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

export default FieldShelters;
