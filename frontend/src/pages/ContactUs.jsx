import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const ContactUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you shortly.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#2d5016] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">Get in touch for a free, no-obligation quote</p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-8">
            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#8fbe00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#2d5016] mb-2">Phone</h3>
                <a href="tel:01935891195" className="text-gray-700 hover:text-[#8fbe00] text-lg">
                  01935 891195
                </a>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#8fbe00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#2d5016] mb-2">Email</h3>
                <a href="mailto:info@customtimberbuildings.co.uk" className="text-gray-700 hover:text-[#8fbe00] break-all">
                  info@customtimberbuildings.co.uk
                </a>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#8fbe00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#2d5016] mb-2">Location</h3>
                <p className="text-gray-700">
                  Yeovil, Somerset<br />United Kingdom
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#2d5016]">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        rows={6}
                        className="w-full"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-[#8fbe00] hover:bg-[#7aa500] text-white py-6 text-lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Info Section */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#2d5016]">Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#8fbe00] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2d5016]">100% Customizable</h4>
                      <p className="text-gray-600 text-sm">Every aspect tailored to your needs</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#8fbe00] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2d5016]">30+ Years Experience</h4>
                      <p className="text-gray-600 text-sm">Expert craftsmanship you can trust</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#8fbe00] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2d5016]">Nationwide Delivery</h4>
                      <p className="text-gray-600 text-sm">UK, Channel Islands & Europe</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#8fbe00] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2d5016]">Competitive Pricing</h4>
                      <p className="text-gray-600 text-sm">We cannot be beaten on price</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#2d5016] flex items-center gap-2">
                    <Clock size={24} />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-semibold">9:00 AM - 5:30 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-semibold">9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-semibold">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
