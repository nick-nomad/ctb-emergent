import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationLinks = [
    { name: 'Beach Huts', path: '/beach-huts' },
    { name: 'Stables', path: '/stables' },
    { name: 'Field Shelters', path: '/field-shelters' },
    { name: 'Garages', path: '/garages' },
    { name: 'Garden Rooms', path: '/garden-rooms' },
    { name: 'Sheds', path: '/sheds' },
    { name: 'Summer Houses', path: '/summer-houses' },
    { name: 'Workshops', path: '/workshops' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#2d5016] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:01935891195" className="flex items-center gap-2 hover:text-[#8fbe00] transition-colors">
              <Phone size={16} />
              <span>01935 891195</span>
            </a>
          </div>
          <div className="hidden md:block">
            <span className="font-semibold">We Cannot Be Beaten On Price!</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-bold text-[#2d5016]">Custom Timber Buildings</h1>
              <p className="text-sm text-gray-600">Quality Timber Structures Since 1990</p>
            </div>
          </Link>

          {/* Desktop Contact Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact-us">
              <Button className="bg-[#8fbe00] hover:bg-[#7aa500] text-white px-6 py-6 text-base">
                Get Free Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-[#2d5016]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="hidden lg:block bg-[#f8f8f8] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center justify-center gap-8 py-3">
            {navigationLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-[#2d5016] hover:text-[#8fbe00] font-medium transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact-us"
                className="text-[#8fbe00] hover:text-[#7aa500] font-semibold transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="py-4">
            <ul className="flex flex-col">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="block px-4 py-3 text-[#2d5016] hover:bg-[#f8f8f8] hover:text-[#8fbe00] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact-us"
                  className="block px-4 py-3 text-[#8fbe00] hover:bg-[#f8f8f8] font-semibold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
