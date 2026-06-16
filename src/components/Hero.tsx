import { Phone, MessageCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const WHATSAPP_URL = 'https://wa.me/919381682898';
const CALL_URL = 'tel:+919381682898';

const highlights = [
  'Personalized Home Visits',
  'Evidence-Based Therapy',
  'Specialist Physiotherapists',
  'Tailored Recovery Programs',
];

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="home" className="relative min-h-screen flex items-center justify-start overflow-hidden py-20">
      {/* Background Image with Cover */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="Physiotherapy Care at Your Doorstep"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay: a gradient that is darker on the left/center (where text is) and fades out to the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C2340]/95 via-[#0C2340]/80 to-[#0C2340]/40 md:from-[#0C2340]/95 md:via-[#0C2340]/75 md:to-transparent"></div>
        {/* Bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340]/50 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl text-left space-y-8"
        >
          {/* Premium Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse"></span>
            <span className="text-white text-xs font-bold uppercase tracking-widest font-sans">
              Premium Homecare Physiotherapy
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-normal text-white leading-tight font-heading"
          >
            Physiotherapy Care <br />
            <span className="italic font-normal text-[#C5A880]">
              at Your Doorstep
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-200/90 leading-relaxed max-w-xl font-sans font-medium"
          >
            Experience professional, evidence-based rehabilitation in the comfort of your home. Led by a team of highly qualified and experienced physiotherapists across Hyderabad, Bangalore, and Andhra Pradesh.
          </motion.p>

          {/* Highlights Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg pt-2"
          >
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-white"
              >
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880]" />
                </div>
                <span className="text-sm font-semibold tracking-wide">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold uppercase tracking-wider text-xs hover:bg-[#128C7E] transition-all duration-300 shadow-md shadow-green-500/10 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              Book on WhatsApp
            </a>
            <a
              href={CALL_URL}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white text-white rounded-full font-bold uppercase tracking-wider text-xs hover:bg-white hover:text-[#0C2340] transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
