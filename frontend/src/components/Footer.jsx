import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2d5016] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Custom Timber Buildings</h3>
            <p className="text-gray-300 mb-4">
              Manufacturers of quality timber buildings with over 30 years of experience.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#8fbe00] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-[#8fbe00] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-[#8fbe00] transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Popular Buildings */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Buildings</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/sheds" className="hover:text-[#8fbe00] transition-colors">
                  Sheds
                </Link>
              </li>
              <li>
                <Link to="/garages" className="hover:text-[#8fbe00] transition-colors">
                  Garages
                </Link>
              </li>
              <li>
                <Link to="/stables" className="hover:text-[#8fbe00] transition-colors">
                  Stables
                </Link>
              </li>
              <li>
                <Link to="/garden-rooms" className="hover:text-[#8fbe00] transition-colors">
                  Garden Rooms
                </Link>
              </li>
              <li>
                <Link to="/field-shelters" className="hover:text-[#8fbe00] transition-colors">
                  Field Shelters
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/" className="hover:text-[#8fbe00] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#8fbe00] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-[#8fbe00] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-[#8fbe00] transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <a href="tel:01935891195" className="hover:text-[#8fbe00] transition-colors">
                  01935 891195
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <a href="mailto:info@customtimberbuildings.co.uk" className="hover:text-[#8fbe00] transition-colors">
                  info@customtimberbuildings.co.uk
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Yeovil, Somerset, UK</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Custom Timber Buildings Ltd. All rights reserved.</p>
          <p className="mt-2 text-sm">Delivering throughout the UK, Channel Islands, and to Europe</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
