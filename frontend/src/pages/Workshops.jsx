import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Check, Wrench, Hammer, Zap } from 'lucide-react';

const Workshops = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1588395532936-179b5891b4c8?w=1600"
            alt="Workshop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Timber Workshops</h1>
          <p className="text-xl">Professional spaces for serious craftspeople</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#2d5016] mb-6">Custom Timber Workshops</h2>
            <p className="text-gray-700 text-lg mb-4">
              Our timber workshops are designed for serious craftspeople who need a dedicated, professional space. Whether you're a woodworker, mechanic, artist, or hobbyist, we can create the perfect workshop tailored to your specific needs.
            </p>
            <p className="text-gray-700 text-lg">
              With our experience building garages and heavy-duty structures, we're able to provide workshops that are far more robust than many competitors. Every workshop is custom-built with your requirements in mind.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-[#8fbe00] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <Wrench size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#2d5016] mb-3">Heavy Duty Build</h3>
                <p className="text-gray-600">Reinforced construction for demanding work</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-[#8fbe00] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <Zap size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#2d5016] mb-3">Full Electrical</h3>
                <p className="text-gray-600">Complete electrical installation available</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-[#8fbe00] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <Hammer size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#2d5016] mb-3">Custom Layout</h3>
                <p className="text-gray-600">Designed around your workflow</p>
              </CardContent>
            </Card>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1588395532936-179b5891b4c8?w=800"
                alt="Workshop exterior"
                className="w-full h-64 object-cover"
              />
            </Card>
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1707596830247-f4b161ffcff9?w=800"
                alt="Workshop interior"
                className="w-full h-64 object-cover"
              />
            </Card>
          </div>

          {/* Features */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-[#2d5016] mb-6">Workshop Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Any Size</h4>
                  <p className="text-gray-600">From small hobby workshops to large commercial spaces</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Insulation Options</h4>
                  <p className="text-gray-600">Work comfortably year-round with full insulation</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Multiple Access Points</h4>
                  <p className="text-gray-600">Wide doors and multiple entry points as needed</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Windows & Skylights</h4>
                  <p className="text-gray-600">Excellent natural lighting options</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Heavy Duty Flooring</h4>
                  <p className="text-gray-600">Reinforced floors for heavy equipment</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Combination Buildings</h4>
                  <p className="text-gray-600">Workshop-garage, workshop-office combinations available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Special Features */}
          <div className="bg-[#f0f7e6] border-l-4 border-[#8fbe00] p-6 mb-12 rounded">
            <h4 className="font-bold text-[#2d5016] text-lg mb-2">Unique Workshop Solutions</h4>
            <p className="text-gray-700 mb-2">
              We've built some truly unique workshops including non-magnetic workshops for specialized scientific work, and workshops with custom ventilation systems.
            </p>
            <p className="text-gray-700">
              Whatever your specific requirements, we can work with you to create the perfect solution.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-[#2d5016] rounded-lg p-8 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Build Your Professional Workshop</h3>
            <p className="text-xl mb-6">Get a custom workshop designed for your needs</p>
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

export default Workshops;
