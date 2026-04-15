import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Check, Sun, Waves, Palette } from 'lucide-react';

const BeachHuts = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1607137149873-cdcc8135930b?w=1600"
            alt="Beach Huts"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Beach Huts</h1>
          <p className="text-xl">Beautiful custom beach huts built to withstand coastal conditions</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#2d5016] mb-6">Custom Beach Huts</h2>
            <p className="text-gray-700 text-lg mb-4">
              Our beautiful custom beach huts are perfect for seaside locations. Built to withstand coastal weather conditions including salt air, wind, and moisture, our beach huts combine durability with traditional seaside charm.
            </p>
            <p className="text-gray-700 text-lg">
              Each beach hut is custom-made to your specifications and can be finished in your choice of colors. Whether you need a replacement for a storm-damaged hut or want to create your perfect beachside retreat, we can help.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-[#8fbe00] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <Waves size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#2d5016] mb-3">Coastal Resilient</h3>
                <p className="text-gray-600">Built to withstand salt air and coastal weather</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-[#8fbe00] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <Palette size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#2d5016] mb-3">Custom Colors</h3>
                <p className="text-gray-600">Any color scheme to match your style</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-[#8fbe00] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <Sun size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#2d5016] mb-3">Traditional Design</h3>
                <p className="text-gray-600">Classic British beach hut aesthetics</p>
              </CardContent>
            </Card>
          </div>

          {/* Image Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1607137149873-cdcc8135930b?w=800"
                alt="Colorful beach hut"
                className="w-full h-80 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#2d5016] mb-2">Traditional Beach Hut</h3>
                <p className="text-gray-600">Classic design with modern construction</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1630096126752-47c50c5f905d?w=800"
                alt="Modern beach hut"
                className="w-full h-80 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#2d5016] mb-2">Contemporary Style</h3>
                <p className="text-gray-600">Modern take on the classic beach hut</p>
              </CardContent>
            </Card>
          </div>

          {/* Features */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-[#2d5016] mb-6">Beach Hut Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Weather Resistant</h4>
                  <p className="text-gray-600">Specially treated timber for coastal environments</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Custom Sizes</h4>
                  <p className="text-gray-600">Built to fit your specific plot requirements</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Traditional or Modern</h4>
                  <p className="text-gray-600">Choose your preferred style</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Color Matching</h4>
                  <p className="text-gray-600">Match existing huts or create unique colors</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Durable Construction</h4>
                  <p className="text-gray-600">Built to last in harsh coastal conditions</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="text-[#8fbe00] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#2d5016] mb-1">Fast Replacement</h4>
                  <p className="text-gray-600">Quick turnaround for storm-damaged replacements</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <Card className="border-l-4 border-[#8fbe00] mb-12">
            <CardContent className="p-6">
              <p className="text-gray-700 italic mb-4">
                &quot;Just had my new beach hut delivered after my old one was damaged in the winter storms. It is beautiful, and in time for the summer with the grandchildren. They did a great job and so helpful, many thanks!&quot;
              </p>
              <p className="font-semibold text-[#2d5016]">- Allison, Happy Customer</p>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="bg-[#2d5016] rounded-lg p-8 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Get Your Perfect Beach Hut</h3>
            <p className="text-xl mb-6">Ready for summer with your family</p>
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

export default BeachHuts;
