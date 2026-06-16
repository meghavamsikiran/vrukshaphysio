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
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-[#F4F9FC]">
      {/* Background elegant accents */}
      <div className="absolute top-0 right-0 w-[40%] h-[70%] bg-gradient-to-bl from-[#C5A880]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[30%] h-[50%] bg-gradient-to-tr from-[#008BA3]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Content Area (Left) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-8 text-left"
          >
            {/* Premium Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#008BA3]/5 border border-[#008BA3]/10 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse"></span>
              <span className="text-[#008BA3] text-xs font-bold uppercase tracking-widest font-sans">
                Premium Homecare Physiotherapy
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-normal text-[#004F95] leading-tight font-heading"
            >
              Physiotherapy Care <br />
              <span className="italic font-normal text-[#C5A880]">
                at Your Doorstep
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-[#0FA3B1] leading-relaxed max-w-xl font-sans"
            >
              Experience professional, evidence-based rehabilitation in the comfort of your home. Led by Bramha Reddy Gadikota (BPT) across Hyderabad, Bangalore, and Andhra Pradesh.
            </motion.p>

            {/* Highlights Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg pt-2"
            >
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-[#004F95]"
                >
                  <div className="w-5 h-5 rounded-full bg-[#C5A880]/15 flex items-center justify-center shrink-0">
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
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-[#004F95] text-[#004F95] rounded-full font-bold uppercase tracking-wider text-xs hover:bg-[#004F95] hover:text-[#F4F9FC] transition-all duration-300 hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </motion.div>
          </motion.div>

          {/* Portrait Collage Frame (Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Decorative Offset Gold Frame */}
            <div className="absolute inset-0 border border-[#C5A880]/40 rounded-3xl translate-x-4 translate-y-4 pointer-events-none z-0"></div>
            
            {/* Main Image Container */}
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] max-w-md rounded-3xl overflow-hidden shadow-2xl bg-white border border-[#E2EDF3] z-10">
              <img
                src="/images/hero.png"
                alt="Physiotherapist treating patient at home"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#004F95]/40 via-transparent to-transparent"></div>
              
              {/* Trust Tag overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#F4F9FC]/95 backdrop-blur-md border border-white/80 shadow-lg flex items-center gap-4 text-[#004F95]">
                <div className="w-10 h-10 rounded-xl bg-[#004F95] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#C5A880]" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-[#0FA3B1]">Trusted Care</p>
                  <p className="text-base font-bold font-sans">1000+ Happy Patients</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
