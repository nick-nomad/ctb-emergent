import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';

const Gallery = () => {
  const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1620564453957-6c6add1e9c19?w=600', title: 'Timber Garage', category: 'Garages' },
    { url: 'https://images.unsplash.com/photo-1566781002872-239421bc0ec7?w=600', title: 'Horse Stable', category: 'Stables' },
    { url: 'https://images.unsplash.com/photo-1603951743220-867ee4ae77d4?w=600', title: 'Field Shelter', category: 'Field Shelters' },
    { url: 'https://images.unsplash.com/photo-1630096126752-47c50c5f905d?w=600', title: 'Garden Room', category: 'Garden Rooms' },
    { url: 'https://images.unsplash.com/photo-1607137149873-cdcc8135930b?w=600', title: 'Beach Hut', category: 'Beach Huts' },
    { url: 'https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?w=600', title: 'Summer House', category: 'Summer Houses' },
    { url: 'https://images.unsplash.com/photo-1588395532936-179b5891b4c8?w=600', title: 'Workshop', category: 'Workshops' },
    { url: 'https://images.unsplash.com/photo-1607136739095-ee0404e2c3fc?w=600', title: 'Garden Shed', category: 'Sheds' },
    { url: 'https://images.unsplash.com/photo-1655103797557-524307e07485?w=600', title: 'Barn Interior', category: 'Commercial' },
    { url: 'https://images.unsplash.com/photo-1768042299463-4a817fc7c4de?w=600', title: 'Timber Frame', category: 'Construction' },
    { url: 'https://images.unsplash.com/photo-1769954608670-fa1c124da719?w=600', title: 'Timber Detail', category: 'Construction' },
    { url: 'https://images.unsplash.com/photo-1707596830247-f4b161ffcff9?w=600', title: 'Interior Construction', category: 'Construction' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#2d5016] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Project Gallery</h1>
          <p className="text-xl">Explore our portfolio of custom timber buildings</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                      <p className="text-gray-200 text-sm">{image.category}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#2d5016] mb-6">Every Building is Unique</h2>
          <p className="text-gray-700 text-lg mb-8">
            Each project in our gallery represents a custom solution tailored to our clients' specific needs. From traditional designs to unique contemporary structures, we bring your vision to life with expert craftsmanship and quality materials.
          </p>
          <p className="text-gray-700 text-lg">
            These are just a small sample of the thousands of buildings we've created over 30+ years. Contact us to discuss your project and see how we can help bring your ideas to reality.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
