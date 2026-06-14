import { Phone, MessageCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const WHATSAPP_URL = 'https://wa.me/919381682898';
const CALL_URL = 'tel:+919381682898';

const highlights = [
  'Home Visits',
  'Expert Team',
  'Evidence-Based Treatment',
  'Personalized Care',
  'Fast Recovery Programs',
];

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#0F172A]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="Physiotherapist treating patient at home"
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16 md:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse"></span>
            <span className="text-white text-xs font-semibold uppercase tracking-wider">
              Expert Physiotherapy at Your Doorstep
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight font-[family-name:var(--font-outfit)]"
          >
            Physiotherapy Care <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] to-[#0891B2]">
              at Your Doorstep
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl"
          >
            Expert Physiotherapy Services Across Hyderabad, Bangalore & Andhra Pradesh. Personalized Home Visits by Qualified Physiotherapists.
          </motion.p>

          {/* Highlights */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-3"
          >
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white text-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-[#14B8A6]" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>

          {/* Actions */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold text-lg hover:bg-[#128C7E] transition-all duration-300 shadow-lg shadow-green-500/20 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Book Appointment on WhatsApp
            </a>
            <a
              href={CALL_URL}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-[#0F172A] transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Aesthetic floaters */}
      <div className="absolute bottom-10 right-10 z-10 hidden lg:block animate-float">
        <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl flex items-center gap-4 text-white">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0E7490] to-[#14B8A6] flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-xs text-gray-400">Trusted By</p>
            <p className="text-lg font-bold">1000+ Patients</p>
          </div>
        </div>
      </div>
    </section>
  );
}
