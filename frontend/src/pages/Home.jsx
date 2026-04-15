import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Check, Star, Phone, Mail } from 'lucide-react';

const Home = () => {
  const products = [
    {
      title: 'Beach Huts',
      description: 'Beautiful custom beach huts perfect for seaside locations. Built to withstand coastal weather conditions.',
      image: 'https://images.unsplash.com/photo-1607137149873-cdcc8135930b?w=800',
      link: '/beach-huts'
    },
    {
      title: 'Stables',
      description: 'Heavy-duty horse stables designed for strength and durability. Custom sizes and configurations available.',
      image: 'https://images.unsplash.com/photo-1566781002872-239421bc0ec7?w=800',
      link: '/stables'
    },
    {
      title: 'Field Shelters',
      description: 'Robust field shelters for horses and livestock. Weather-resistant and built to last.',
      image: 'https://images.unsplash.com/photo-1603951743220-867ee4ae77d4?w=800',
      link: '/field-shelters'
    },
    {
      title: 'Garages',
      description: 'Custom timber garages from single to multi-car options. Insulation and electrics available.',
      image: 'https://images.unsplash.com/photo-1620564453957-6c6add1e9c19?w=800',
      link: '/garages'
    },
    {
      title: 'Garden Rooms',
      description: 'Bespoke garden offices and rooms. Perfect for home working or relaxation spaces.',
      image: 'https://images.unsplash.com/photo-1630096126752-47c50c5f905d?w=800',
      link: '/garden-rooms'
    },
    {
      title: 'Sheds',
      description: 'Quality garden sheds in various sizes. From simple storage to heavy-duty workshops.',
      image: 'https://images.unsplash.com/photo-1607136739095-ee0404e2c3fc?w=800',
      link: '/sheds'
    },
    {
      title: 'Summer Houses',
      description: 'Elegant summer houses for your garden. Create a perfect retreat in your outdoor space.',
      image: 'https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?w=800',
      link: '/summer-houses'
    },
    {
      title: 'Workshops',
      description: 'Professional timber workshops with customizable features. Built for serious craftspeople.',
      image: 'https://images.unsplash.com/photo-1588395532936-179b5891b4c8?w=800',
      link: '/workshops'
    }
  ];

  const features = [
    '100% Customizable - Size, Design, Materials',
    'Over 30 Years Experience',
    'Nationwide Delivery & Installation',
    'Price Match Guarantee',
    'Premium Quality Materials',
    'Expert Craftsmanship'
  ];

  const reviews = [
    {
      name: 'Will',
      rating: 5,
      text: 'Very pleased with my new garden room office. Great quality and finish, and definitely worth the wait. The timber is much better quality and the closer grain just makes it feel nicer than the cheap versions. Lovely and warm with the insulation as well on these cold days.'
    },
    {
      name: 'Allison',
      rating: 5,
      text: 'Just had my new beach hut delivered after my old one was damaged in the winter storms. It is beautiful, and in time for the summer with the grandchildren. They did a great job and so helpful, many thanks!'
    },
    {
      name: 'Mark',
      rating: 5,
      text: 'I ordered a workshop / store with the workshop insulated. They were very helpful working with me on the design and how best to achieve exactly what I wanted. The team from start to finish were superb and I can\'t thank them enough.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1768042299463-4a817fc7c4de?w=1600"
            alt="Custom Timber Buildings"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Custom Timber Buildings
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Manufacturers of high-quality timber structures with over 30 years of experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us">
              <Button className="bg-[#8fbe00] hover:bg-[#7aa500] text-white px-8 py-6 text-lg">
                Get Free Quote
              </Button>
            </Link>
            <a href="tel:01935891195">
              <Button className="bg-white text-[#2d5016] hover:bg-gray-100 px-8 py-6 text-lg">
                <Phone className="mr-2" size={20} />
                Call: 01935 891195
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-[#8fbe00] py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
            <div>
              <h3 className="text-2xl font-bold mb-2">100% Your Choice!</h3>
              <p>Cladding, colour, roofing, size, design - Only limitation is your imagination</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">We Cannot Be Beaten On Price!</h3>
              <p>Price check our products on a like-for-like basis</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">No Project Too Big or Small</h3>
              <p>Whether £99 or £1,000,000 - we can help</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2d5016] mb-4">Custom Timber Buildings</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Custom Timber Buildings are manufacturers of a wide range of traditional and bespoke buildings, in timber, metal, and composites. With over 30 years experience, we have the know-how and skills needed to produce high quality buildings tailored to meet your requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="flex-shrink-0 w-8 h-8 bg-[#8fbe00] rounded-full flex items-center justify-center">
                  <Check className="text-white" size={18} />
                </div>
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2d5016] mb-12">Our Buildings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Custom Made Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1769954608670-fa1c124da719?w=800"
                alt="Quality timber buildings"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#2d5016] mb-6">Why Custom Made Can Mean Great Value</h2>
              <p className="text-gray-700 mb-4">
                While a custom building can be a better quality and fit for your needs, many people assume it will also be far more expensive - but it doesn't have to be.
              </p>
              <p className="text-gray-700 mb-4">
                For the quality of our buildings, our prices are very reasonable, and for the price, the quality is excellent. This is because instead of cutting corners to lower prices, we maintain quality to lower prices.
              </p>
              <p className="text-gray-700 mb-6">
                A better quality building can also last longer, so even if the initial price is slightly higher, the cost-per-year can be less. When you're comparing prices, make sure to compare the quality too.
              </p>
              <Link to="/contact-us">
                <Button className="bg-[#8fbe00] hover:bg-[#7aa500] text-white px-8 py-4">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2d5016] mb-4">Customer Reviews</h2>
          <p className="text-center text-gray-600 mb-12">Some of our Happy Customer's Comments</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-[#8fbe00] transition-colors">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="fill-[#8fbe00] text-[#8fbe00]" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">&quot;{review.text}&quot;</p>
                  <p className="font-semibold text-[#2d5016]">- {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2d5016] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Dream Timber Structure?</h2>
          <p className="text-xl mb-8">
            Whether you're after a bespoke garden room, timber garage, or durable field shelter - we're here to make it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us">
              <Button className="bg-[#8fbe00] hover:bg-[#7aa500] text-white px-8 py-6 text-lg">
                Request a Free Quote
              </Button>
            </Link>
            <a href="tel:01935891195">
              <Button className="bg-white text-[#2d5016] hover:bg-gray-100 px-8 py-6 text-lg">
                Call Us: 01935 891195
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
