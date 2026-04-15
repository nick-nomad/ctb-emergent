import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Check } from 'lucide-react';

const Stables = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1566781002872-239421bc0ec7?w=1600"
            alt="Horse Stables"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Horse Stables</h1>
          <p className="text-xl">Heavy-duty stables built for strength and durability</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#2d5016] mb-6">Custom Horse Stables</h2>
            <p className="text-gray-700 text-lg mb-4">
              We have a vast amount of experience with stables, so we know what will make our customers (and just as importantly, their horses) happy. We understand that these buildings need to be strong enough to not only withstand the weather, but also whatever your horse can throw at them.
            </p>
            <p className="text-gray-700 text-lg">
              Our stables use heavy duty framework with sturdy, effective cladding. We build all the standard equestrian buildings and offer all the standard options, but like all our other buildings, we also have a high degree of customizability.
            </p>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1566781002872-239421bc0ec7?w=800"
                alt="Horse in stable"
                className="w-full h-64 object-cover"
              />
            </Card>
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1566781002730-d16662d72030?w=800"
                alt="Horse stable exterior"
                className="w-full h-64 object-cover"
              />
            </Card>
          </div>

          {/* Features */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-[#2d5016] mb-6">Stable Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Heavy Duty Construction</h4>
                  <p className="text-gray-600">Built to withstand weather and horses</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Custom Sizes</h4>
                  <p className="text-gray-600">Any number of stalls and configurations</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Tack Rooms</h4>
                  <p className="text-gray-600">Integrated tack and feed storage</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">American Barns</h4>
                  <p className="text-gray-600">Complete barn solutions available</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Mobile Options</h4>
                  <p className="text-gray-600">Skids or wheeled trailer units available</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Ventilation</h4>
                  <p className="text-gray-600">Proper airflow design for horse health</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-[#2d5016] rounded-lg p-8 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Build Your Perfect Stable</h3>
            <p className="text-xl mb-6">Contact us for expert advice and a free quote</p>
            <Link to="/contact-us">
              <Button className="bg-[#8fbe00] hover:bg-[#7aa500] text-white px-8 py-6 text-lg">
                Get Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Stables;
