import { Phone, MessageCircle } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const WHATSAPP_URL = 'https://wa.me/919381682898';
const CALL_URL = 'tel:+919381682898';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="cta" className="py-20 md:py-28 bg-[#0F172A] relative overflow-hidden" ref={ref}>
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial-gradient from-[#0E7490]/40 via-transparent to-transparent opacity-80 pointer-events-none"></div>

      {/* Decorative animated blobs */}
      <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-[#14B8A6]/10 blur-2xl animate-float"></div>
      <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-[#0E7490]/10 blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' as const }}
          className="bg-gradient-to-br from-[#0E7490] via-[#0891B2] to-[#14B8A6] rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden border border-white/10"
        >
          {/* Glass overlay */}
          <div className="absolute inset-0 bg-black/5 backdrop-blur-[2px] z-0"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight font-[family-name:var(--font-outfit)]">
              Start Your Recovery Journey Today
            </h2>
            <p className="mt-6 text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Expert physiotherapy care is just a WhatsApp message away. Book your home visit now and take the first step towards recovery.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold text-lg hover:bg-[#128C7E] transition-all duration-300 shadow-xl shadow-green-500/25 hover:scale-105"
              >
                <MessageCircle className="w-6 h-6" />
                Book Appointment on WhatsApp
              </a>
              <a
                href={CALL_URL}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0F172A] rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Call Now: +91 93816 82898
              </a>
            </div>

            {/* Verification highlight */}
            <div className="mt-8 flex items-center justify-center gap-6 text-white/80 text-sm">
              <span className="flex items-center gap-1.5">✓ Professional Assessment</span>
              <span className="hidden sm:inline text-white/40">•</span>
              <span className="flex items-center gap-1.5">✓ Personalized Treatment Plans</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
