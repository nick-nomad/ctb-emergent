import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Check, Home, Briefcase, Palette, Coffee } from 'lucide-react';

const GardenRooms = () => {
  const uses = [
    { icon: <Briefcase size={28} />, title: 'Home Office', description: 'Perfect workspace away from home distractions' },
    { icon: <Palette size={28} />, title: 'Art Studio', description: 'Inspiring space for creativity' },
    { icon: <Coffee size={28} />, title: 'Relaxation Room', description: 'Your personal retreat' },
    { icon: <Home size={28} />, title: 'Guest Room', description: 'Comfortable accommodation for visitors' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1630096126752-47c50c5f905d?w=1600"
            alt="Garden Room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Garden Rooms & Offices</h1>
          <p className="text-xl">Bespoke spaces tailored to your lifestyle</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#2d5016] mb-6">Timber Garden Rooms and Offices</h2>
            <p className="text-gray-700 text-lg mb-4">
              We can create bespoke garden rooms as unique as you are, for any purpose - garden office, bedroom, art studio, and more - you decide, we build. A garden room is a great way to create a private space to "get away from it all", and focus on your work or yourself.
            </p>
            <p className="text-gray-700 text-lg">
              It can add value to your home, and it can give a new look to a garden of any size. We offer all the standard options (insulation, double glazing, electrics, plumbing, etc.) that you would expect, but can also offer a range of other extras that you might not even have thought about.
            </p>
          </div>

          {/* Uses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {uses.map((use, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-[#8fbe00] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {use.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#2d5016] mb-2">{use.title}</h3>
                  <p className="text-gray-600 text-sm">{use.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1630096126752-47c50c5f905d?w=800"
                alt="Garden office exterior"
                className="w-full h-80 object-cover"
              />
            </Card>
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1707725669525-d925dc9e9010?w=800"
                alt="Garden room interior"
                className="w-full h-80 object-cover"
              />
            </Card>
          </div>

          {/* Features */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-[#2d5016] mb-6">Standard Features & Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Full Insulation</h4>
                  <p className="text-gray-600">Walls, floor, and roof for year-round use</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Double Glazing</h4>
                  <p className="text-gray-600">Energy efficient windows and doors</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Electrical Installation</h4>
                  <p className="text-gray-600">Complete electrical fit-out available</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Plumbing</h4>
                  <p className="text-gray-600">Water supply and drainage if required</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Multiple Rooms</h4>
                  <p className="text-gray-600">Can include multiple rooms and even stories</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Custom Design</h4>
                  <p className="text-gray-600">Completely tailored to your requirements</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-[#f0f7e6] border-l-4 border-[#8fbe00] p-6 mb-12 rounded">
            <h4 className="font-bold text-[#2d5016] text-lg mb-2">Important Note</h4>
            <p className="text-gray-700">
              A garden room doesn't have to be a single room - your garden room can have multiple rooms, and even multiple stories to it. Work with our experts to find the best design for your needs.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-[#2d5016] rounded-lg p-8 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Create Your Dream Garden Room</h3>
            <p className="text-xl mb-6">Transform your garden with a custom-built space</p>
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

export default GardenRooms;
