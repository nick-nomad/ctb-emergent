import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const ProductCard = ({ title, description, image, link }) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-[#8fbe00]">
      <div className="relative overflow-hidden h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white text-xl font-bold">{title}</h3>
        </div>
      </div>
      <CardContent className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <Link to={link}>
          <Button className="w-full bg-[#2d5016] hover:bg-[#8fbe00] text-white transition-colors group">
            Learn More
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
