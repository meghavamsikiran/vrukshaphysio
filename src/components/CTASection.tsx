import { Phone, MessageCircle } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const WHATSAPP_URL = 'https://wa.me/919381682898';
const CALL_URL = 'tel:+919381682898';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="cta" className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden border-t border-[#E2E8F0]" ref={ref}>
      <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-gradient-to-bl from-[#C5A880]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' as const }}
          className="bg-gradient-to-br from-[#0C2340] via-[#0D9488] to-[#0D9488] rounded-3xl p-8 md:p-16 shadow-xl relative overflow-hidden border border-[#C5A880]/20"
        >
          {/* Glass overlay */}
          <div className="absolute inset-0 bg-black/5 backdrop-blur-[2px] z-0"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-normal text-white leading-tight font-heading">
              Start Your Recovery Journey Today
            </h2>
            <p className="mt-6 text-white/90 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-sans font-medium">
              Expert physiotherapy care is just a WhatsApp message away. Book your home visit now and take the first step towards recovery.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold uppercase tracking-wider text-xs hover:bg-[#128C7E] transition-all duration-300 shadow-xl"
              >
                <MessageCircle className="w-4 h-4" />
                Book on WhatsApp
              </a>
              <a
                href={CALL_URL}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0C2340] rounded-full font-bold uppercase tracking-wider text-xs hover:bg-[#F8FAFC] transition-all duration-300 shadow-xl"
              >
                <Phone className="w-4 h-4" />
                Call Now: +91 93816 82898
              </a>
            </div>

            {/* Verification highlight */}
            <div className="mt-8 flex items-center justify-center gap-6 text-white/80 text-xs font-semibold uppercase tracking-wider font-sans">
              <span className="flex items-center gap-1.5">✓ Professional Assessment</span>
              <span className="hidden sm:inline text-white/40">•</span>
              <span className="flex items-center gap-1.5">✓ Custom Treatment Plans</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
