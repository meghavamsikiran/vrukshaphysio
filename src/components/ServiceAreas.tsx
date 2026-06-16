import { MapPin } from 'lucide-react';
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
    tags: ['Koramangala', 'Indiranagar', 'Whitefield', 'Electronic City', 'HSR Layout', 'Jayanagar', 'Marathahalli', 'Bellandur', 'Silk Board', 'BTM Layout'],
  },
  andhraPradesh: {
    title: 'Andhra Pradesh',
    isPrimary: false,
    tags: ['Vijayawada', 'Visakhapatnam', 'Guntur', 'Tirupati', 'Nellore', 'Kurnool', 'Rajahmundry', 'Kakinada', 'Kadapa', 'Proddatur', 'Ongole'],
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
    <section id="areas" className="py-20 md:py-28 bg-white border-t border-[#E2E8F0]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#0D9488]/5 text-[#0D9488] rounded-full text-xs font-bold uppercase tracking-widest font-sans mb-4">
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
            className="bg-[#F8FAFC]/50 rounded-3xl p-8 border border-[#E2E8F0] hover:border-[#C5A880] transition-all duration-300 relative overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md"
          >
            {areas.hyderabad.isPrimary && (
              <div className="absolute top-0 right-0 bg-[#0C2340] text-white text-[9px] font-bold px-4 py-1 rounded-bl-xl uppercase tracking-widest">
                Primary Hub
              </div>
            )}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#C5A880]/15 flex items-center justify-center text-[#C5A880] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-normal text-[#0C2340] font-heading">
                  {areas.hyderabad.title}
                </h3>
              </div>
              <p className="text-xs text-[#475569] font-medium mb-4">Complete coverage across Hyderabad suburbs:</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {areas.hyderabad.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white text-[#0D9488] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#E2E8F0] hover:border-[#C5A880] transition-colors duration-200"
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
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#0C2340] text-[#0C2340] rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#0C2340] hover:text-[#F8FAFC] transition-all duration-300"
            >
              Check Availability
            </a>
          </motion.div>

          {/* Bangalore Card */}
          <motion.div
            variants={cardVariants}
            className="bg-[#F8FAFC]/50 rounded-3xl p-8 border border-[#E2E8F0] hover:border-[#C5A880] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#C5A880]/15 flex items-center justify-center text-[#C5A880] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-normal text-[#0C2340] font-heading">
                  {areas.bangalore.title}
                </h3>
              </div>
              <p className="text-xs text-[#475569] font-medium mb-4">Major localities covered across Bangalore:</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {areas.bangalore.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white text-[#0D9488] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#E2E8F0] hover:border-[#C5A880] transition-colors duration-200"
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
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#0C2340] text-[#0C2340] rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#0C2340] hover:text-[#F8FAFC] transition-all duration-300"
            >
              Check Availability
            </a>
          </motion.div>

          {/* AP Card */}
          <motion.div
            variants={cardVariants}
            className="bg-[#F8FAFC]/50 rounded-3xl p-8 border border-[#E2E8F0] hover:border-[#C5A880] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#C5A880]/15 flex items-center justify-center text-[#C5A880] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-normal text-[#0C2340] font-heading">
                  {areas.andhraPradesh.title}
                </h3>
              </div>
              <p className="text-xs text-[#475569] font-medium mb-4">Physiotherapy visits available in key AP cities:</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {areas.andhraPradesh.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white text-[#0D9488] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#E2E8F0] hover:border-[#C5A880] transition-colors duration-200"
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
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#0C2340] text-[#0C2340] rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#0C2340] hover:text-[#F8FAFC] transition-all duration-300"
            >
              Check Availability
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
