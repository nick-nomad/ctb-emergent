import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Check } from 'lucide-react';

const Sheds = () => {
  const shedTypes = [
    {
      title: 'Garden Sheds',
      description: 'Perfect for general garden storage, tools, and equipment',
      features: ['Multiple sizes', 'Weather resistant', 'Easy assembly', 'Custom colors'],
      image: 'https://images.unsplash.com/photo-1607136739095-ee0404e2c3fc?w=800'
    },
    {
      title: 'Heavy Duty Sheds',
      description: 'Extra strong construction for demanding storage needs',
      features: ['Reinforced frame', 'Thicker cladding', 'Enhanced security', 'Long lasting'],
      image: 'https://images.unsplash.com/photo-1588395532936-179b5891b4c8?w=800'
    },
    {
      title: 'Workshop Sheds',
      description: 'Spacious sheds designed for serious craftwork',
      features: ['Extra headroom', 'Wide doors', 'Electrical options', 'Insulation available'],
      image: 'https://images.unsplash.com/photo-1630096126752-47c50c5f905d?w=800'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1607137149873-cdcc8135930b?w=1600"
            alt="Garden Sheds"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Garden Sheds</h1>
          <p className="text-xl">Quality timber sheds built to your specifications</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#2d5016] mb-6">Custom Garden Sheds</h2>
            <p className="text-gray-700 text-lg mb-4">
              We offer a wide range of storage solutions, from small simple garden sheds to large custom-built structures. Whether you simply need something that can stand up to the weather to keep your garden tools dry, or a heavy-duty workshop, we can help.
            </p>
            <p className="text-gray-700 text-lg">
              All our sheds are custom-made to your requirements. Choose your size, cladding type, roofing material, door and window positions, and even add extra features like shelving, workbenches, or electrical installations.
            </p>
          </div>

          {/* Shed Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {shedTypes.map((shed, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={shed.image}
                    alt={shed.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-[#2d5016] mb-3">{shed.title}</h3>
                  <p className="text-gray-600 mb-4">{shed.description}</p>
                  <ul className="space-y-2">
                    {shed.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="text-[#8fbe00] flex-shrink-0" size={18} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Features Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-[#2d5016] mb-6">Why Choose Our Sheds?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#8fbe00] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="text-white" size={16} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Premium Quality Materials</h4>
                  <p className="text-gray-600">First-grade Bulgarian spruce timber as standard</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#8fbe00] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="text-white" size={16} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Fully Customizable</h4>
                  <p className="text-gray-600">Size, design, doors, windows - you decide</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#8fbe00] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="text-white" size={16} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Heavy Duty Construction</h4>
                  <p className="text-gray-600">Stronger framework than standard sheds</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#8fbe00] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="text-white" size={16} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Professional Installation</h4>
                  <p className="text-gray-600">Optional installation service available nationwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-[#2d5016] rounded-lg p-8 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Your Custom Shed?</h3>
            <p className="text-xl mb-6">Contact us today for a free, no-obligation quote</p>
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

export default Sheds;
