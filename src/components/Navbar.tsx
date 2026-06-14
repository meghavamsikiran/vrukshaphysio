import { useState, useEffect } from 'react';
import { Leaf, Menu, X, Phone, MessageCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const WHATSAPP_URL = 'https://wa.me/919381682898';
const CALL_URL = 'tel:+919381682898';

const menuItems = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Conditions We Treat', href: '#conditions' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0E7490] to-[#14B8A6] flex items-center justify-center shadow-md shadow-[#0E7490]/10 group-hover:scale-105 transition-transform duration-300">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className={`text-xl font-bold font-[family-name:var(--font-outfit)] transition-colors duration-300 ${isScrolled ? 'text-[#0F172A]' : 'text-white'}`}>
                VRUKSHA
              </span>
              <span className="text-xl font-bold text-[#14B8A6] font-[family-name:var(--font-outfit)]">
                {' '}PHYSIO
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`font-medium text-sm transition-colors duration-300 ${
                  isScrolled
                    ? 'text-gray-600 hover:text-[#0E7490]'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={CALL_URL}
              className={`inline-flex items-center gap-2 px-5 py-2 border-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                isScrolled
                  ? 'border-[#0E7490] text-[#0E7490] hover:bg-[#0E7490] hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-[#0F172A]'
              }`}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white rounded-full text-sm font-semibold hover:bg-[#128C7E] transition-all duration-300 shadow-md shadow-green-500/10 hover:shadow-lg hover:shadow-green-500/20"
            >
              <MessageCircle className="w-4 h-4" />
              Book on WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-[#0E7490]' : 'text-white hover:text-[#14B8A6]'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed top-[64px] left-0 right-0 bg-white shadow-xl border-t border-gray-100 py-6 px-4 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="text-gray-800 hover:text-[#0E7490] font-semibold text-lg py-2 border-b border-gray-50 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
              <a
                href={CALL_URL}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 border-2 border-[#0E7490] text-[#0E7490] rounded-full font-semibold transition-colors hover:bg-[#0E7490] hover:text-white"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] text-white rounded-full font-semibold shadow-md transition-colors hover:bg-[#128C7E]"
              >
                <MessageCircle className="w-5 h-5" />
                Book on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
