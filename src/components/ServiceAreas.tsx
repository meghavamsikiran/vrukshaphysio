import { MapPin, MessageCircle } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const WHATSAPP_URL = 'https://wa.me/919381682898';

const areas = {
  hyderabad: {
    title: 'Hyderabad & Secunderabad',
    isPrimary: true,
    tags: ['Gachibowli', 'Madhapur', 'Kondapur', 'Kukatpally', 'Miyapur', 'Secunderabad', 'HITEC City', 'Banjara Hills', 'Jubilee Hills', 'Begumpet'],
  },
  bangalore: {
    title: 'Bangalore',
    isPrimary: false,
    tags: ['Koramangala', 'Indiranagar', 'Whitefield', 'Electronic City', 'HSR Layout', 'Jayanagar', 'Marathahalli', 'Bellandur'],
  },
  andhraPradesh: {
    title: 'Andhra Pradesh',
    isPrimary: false,
    tags: ['Vijayawada', 'Visakhapatnam', 'Guntur', 'Tirupati', 'Nellore', 'Kurnool', 'Rajahmundry', 'Kakinada'],
  },
};

export default function ServiceAreas() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  };

  return (
    <section id="areas" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#0E7490]/10 text-[#0E7490] rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">
            Coverage
          </span>
          <h2 className="section-title teal-underline-center">Our Service Areas</h2>
          <p className="section-subtitle mt-6">
            We deliver top-tier home physiotherapy solutions across major hubs in South India.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Hyderabad Card */}
          <motion.div
            variants={cardVariants}
            className="bg-gradient-to-br from-white to-[#F8FAFC] rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
          >
            {areas.hyderabad.isPrimary && (
              <div className="absolute top-0 right-0 bg-[#0E7490] text-white text-xs font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider">
                Primary Hub
              </div>
            )}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#0E7490]/10 flex items-center justify-center text-[#0E7490] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] font-[family-name:var(--font-outfit)]">
                  {areas.hyderabad.title}
                </h3>
              </div>
              <p className="text-sm text-gray-500 mb-4">Complete coverage across Hyderabad suburbs:</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {areas.hyderabad.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#0E7490]/5 text-[#0E7490] text-xs font-semibold px-3 py-1 rounded-full border border-[#0E7490]/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 border-2 border-[#0E7490] text-[#0E7490] rounded-full text-sm font-semibold hover:bg-[#0E7490] hover:text-white transition-all duration-300"
            >
              Check Availability
            </a>
          </motion.div>

          {/* Bangalore Card */}
          <motion.div
            variants={cardVariants}
            className="bg-gradient-to-br from-white to-[#F8FAFC] rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#14B8A6]/10 flex items-center justify-center text-[#14B8A6] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] font-[family-name:var(--font-outfit)]">
                  {areas.bangalore.title}
                </h3>
              </div>
              <p className="text-sm text-gray-500 mb-4">Major localities covered across Bangalore:</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {areas.bangalore.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#14B8A6]/5 text-[#14B8A6] text-xs font-semibold px-3 py-1 rounded-full border border-[#14B8A6]/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 border-2 border-[#14B8A6] text-[#14B8A6] rounded-full text-sm font-semibold hover:bg-[#14B8A6] hover:text-white transition-all duration-300"
            >
              Check Availability
            </a>
          </motion.div>

          {/* AP Card */}
          <motion.div
            variants={cardVariants}
            className="bg-gradient-to-br from-white to-[#F8FAFC] rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#0891B2]/10 flex items-center justify-center text-[#0891B2] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] font-[family-name:var(--font-outfit)]">
                  {areas.andhraPradesh.title}
                </h3>
              </div>
              <p className="text-sm text-gray-500 mb-4">Physiotherapy visits available in key AP cities:</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {areas.andhraPradesh.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#0891B2]/5 text-[#0891B2] text-xs font-semibold px-3 py-1 rounded-full border border-[#0891B2]/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 border-2 border-[#0891B2] text-[#0891B2] rounded-full text-sm font-semibold hover:bg-[#0891B2] hover:text-white transition-all duration-300"
            >
              Check Availability
            </a>
          </motion.div>
        </motion.div>

        <div className="mt-16 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold text-lg hover:bg-[#128C7E] transition-all duration-300 shadow-lg shadow-green-500/20"
          >
            <MessageCircle className="w-5 h-5" />
            Check Area Availability on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
