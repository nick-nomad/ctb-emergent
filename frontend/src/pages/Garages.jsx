import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Check, Car, Lock, Zap } from 'lucide-react';

const Garages = () => {
  const garageTypes = [
    {
      title: 'Single Garage',
      description: 'Perfect for one vehicle with additional storage space',
      image: 'https://images.unsplash.com/photo-1620564453957-6c6add1e9c19?w=800'
    },
    {
      title: 'Double Garage',
      description: 'Spacious accommodation for two vehicles',
      image: 'https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?w=800'
    },
    {
      title: 'Multi-Car Garage',
      description: 'Large garages for multiple vehicles or combined uses',
      image: 'https://images.unsplash.com/photo-1603951743220-867ee4ae77d4?w=800'
    }
  ];

  const features = [
    {
      icon: <Car size={32} />,
      title: 'Custom Sizes',
      description: 'Any size from single to multi-car garages'
    },
    {
      icon: <Lock size={32} />,
      title: 'Security Features',
      description: 'Enhanced security options available'
    },
    {
      icon: <Zap size={32} />,
      title: 'Electrics & Insulation',
      description: 'Full electrical fit-out and insulation packages'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1620564453957-6c6add1e9c19?w=1600"
            alt="Timber Garages"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Timber Garages</h1>
          <p className="text-xl">Custom-built garages for your vehicles and storage needs</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#2d5016] mb-6">Custom Timber Garages</h2>
            <p className="text-gray-700 text-lg mb-4">
              We manufacture high-quality timber garages from single to multi-car options, with full customization available. Whether you need a simple single garage for one vehicle, or a large multi-car garage complete with insulation, electrics, and extra security features, we can help.
            </p>
            <p className="text-gray-700 text-lg">
              Our garages are built to the same high standards as all our timber buildings, using premium quality materials and expert craftsmanship. Each garage is custom-made to your exact specifications.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-[#8fbe00] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#2d5016] mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Garage Types */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#2d5016] mb-8 text-center">Garage Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {garageTypes.map((garage, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={garage.image}
                      alt={garage.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-[#2d5016] mb-2">{garage.title}</h4>
                    <p className="text-gray-600">{garage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Customization Options */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-[#2d5016] mb-6">Customization Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Size & Layout</h4>
                  <p className="text-gray-600">Any dimensions to suit your property and needs</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Doors & Windows</h4>
                  <p className="text-gray-600">Choice of door types, sizes, and window positions</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Insulation</h4>
                  <p className="text-gray-600">Full or partial insulation for year-round comfort</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Electrical Installation</h4>
                  <p className="text-gray-600">Lighting, power sockets, and more</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Roofing Options</h4>
                  <p className="text-gray-600">Various roofing materials and styles available</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Colors & Finishes</h4>
                  <p className="text-gray-600">Wide range of exterior colors and treatments</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-[#2d5016] rounded-lg p-8 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Design Your Perfect Garage</h3>
            <p className="text-xl mb-6">Get a free quote for your custom timber garage</p>
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

export default Garages;
