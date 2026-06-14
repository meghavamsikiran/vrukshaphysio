import { Leaf, Phone, MessageCircle, MapPin, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const WHATSAPP_URL = 'https://wa.me/919381682898';
const CALL_URL = 'tel:+919381682898';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Conditions', href: '#conditions' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  'Orthopedic Physiotherapy',
  'Neurological Physiotherapy',
  'Cardio Physiotherapy',
  'Sports Physiotherapy',
  'Home Visits',
  'Post-Surgery Rehab',
];

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F172A] text-white relative">
      {/* Wave separator */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none -translate-y-[1px]">
        <svg
          className="w-full h-12 md:h-16"
          viewBox="0 0 1440 54"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 22L48 19.3C96 16.7 192 11.3 288 11C384 10.7 480 15.3 576 19.8C672 24.3 768 28.7 864 27.5C960 26.3 1056 19.7 1152 16.5C1248 13.3 1344 13.7 1392 13.8L1440 14V54H1392C1344 54 1248 54 1152 54C1056 54 960 54 864 54C768 54 672 54 576 54C480 54 384 54 288 54C192 54 96 54 48 54H0V22Z"
            fill="#0F172A"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0E7490] to-[#14B8A6] flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white font-[family-name:var(--font-outfit)]">
                  VRUKSHA
                </span>
                <span className="text-xl font-bold text-[#14B8A6] font-[family-name:var(--font-outfit)]">
                  {' '}PHYSIO
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Expert Physiotherapy at Your Doorstep. Professional home physiotherapy services across
              Hyderabad, Bangalore & Andhra Pradesh.
            </p>
            <div className="flex gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#25D366]/10 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={CALL_URL}
                className="w-10 h-10 rounded-lg bg-[#0E7490]/10 flex items-center justify-center text-[#0E7490] hover:bg-[#0E7490] hover:text-white transition-all duration-300"
                aria-label="Call"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-[family-name:var(--font-outfit)] text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#14B8A6] transition-colors duration-300 text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0E7490]"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-[family-name:var(--font-outfit)] text-white">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-[#14B8A6] transition-colors duration-300 text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-[family-name:var(--font-outfit)] text-white">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#0E7490] mt-0.5 shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">Phone / WhatsApp</p>
                  <a href={CALL_URL} className="text-gray-400 text-sm hover:text-[#14B8A6] transition-colors">
                    +91 93816 82898
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0E7490] mt-0.5 shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">Service Areas</p>
                  <p className="text-gray-400 text-sm">
                    Hyderabad • Bangalore • Andhra Pradesh
                  </p>
                </div>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white rounded-full text-sm font-semibold hover:bg-[#128C7E] transition-all duration-300 mt-2"
              >
                <MessageCircle className="w-4 h-4" />
                Book on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2026 VRUKSHA PHYSIO Homecare Services. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>vrukshaphysio.com</span>
              <span className="text-[#0E7490]">•</span>
              <span>Expert Physiotherapy at Your Doorstep</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full bg-[#0E7490] text-white shadow-lg shadow-[#0E7490]/25 flex items-center justify-center hover:bg-[#0891B2] transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}
