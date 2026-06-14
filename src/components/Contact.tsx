import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Shield } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/919381682898';
const CALL_URL = 'tel:+919381682898';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-[#0E7490]/10 text-[#0E7490] rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">
            Get in Touch
          </span>
          <h2 className="section-title teal-underline-center">Contact Us</h2>
          <p className="section-subtitle mt-6">
            Ready to start your recovery? Reach out to us directly via WhatsApp or phone call.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Phone Card */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-white to-[#F8FAFC] rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 text-center group"
          >
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0E7490] to-[#14B8A6] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-2 font-[family-name:var(--font-outfit)]">
              Call Us
            </h3>
            <a
              href={CALL_URL}
              className="text-2xl font-bold text-[#0E7490] hover:text-[#0891B2] transition-colors"
            >
              +91 93816 82898
            </a>
            <p className="text-gray-500 mt-3 text-sm">
              Available Mon–Sat, 7:00 AM – 9:00 PM
            </p>
            <a
              href={CALL_URL}
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[#0E7490] text-white rounded-full font-semibold hover:bg-[#0891B2] transition-all duration-300 hover:shadow-lg hover:shadow-[#0E7490]/25"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </motion.div>

          {/* WhatsApp Card */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-lg p-8 border border-green-100 hover:shadow-xl transition-all duration-300 text-center group relative overflow-hidden lg:scale-105"
          >
            <div className="absolute top-0 right-0 bg-[#25D366] text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
              PREFERRED
            </div>
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-2 font-[family-name:var(--font-outfit)]">
              WhatsApp Us
            </h3>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-bold text-[#25D366] hover:text-[#128C7E] transition-colors"
            >
              +91 93816 82898
            </a>
            <p className="text-gray-500 mt-3 text-sm">
              Quick responses • Easy booking
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full font-semibold hover:bg-[#128C7E] transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/25"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Locations Card */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-white to-[#F8FAFC] rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 text-center group"
          >
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0E7490] to-[#14B8A6] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-2 font-[family-name:var(--font-outfit)]">
              Service Locations
            </h3>
            <div className="space-y-3 mt-4">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#0E7490]"></div>
                <span className="text-gray-700 font-medium">Hyderabad & Secunderabad</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#14B8A6]"></div>
                <span className="text-gray-700 font-medium">Bangalore</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#0891B2]"></div>
                <span className="text-gray-700 font-medium">Andhra Pradesh</span>
              </div>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[#0E7490] text-white rounded-full font-semibold hover:bg-[#0891B2] transition-all duration-300 hover:shadow-lg hover:shadow-[#0E7490]/25"
            >
              <MapPin className="w-4 h-4" />
              Check Availability
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom info */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Clock className="w-5 h-5 text-[#0E7490]" />
            <span className="text-gray-600 text-sm">Mon – Sat: 7:00 AM – 9:00 PM</span>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <Shield className="w-5 h-5 text-[#0E7490]" />
            <span className="text-gray-600 text-sm">Licensed & Certified Professionals</span>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-end">
            <MessageCircle className="w-5 h-5 text-[#25D366]" />
            <span className="text-gray-600 text-sm">Quick WhatsApp Response</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
