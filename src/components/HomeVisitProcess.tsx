import { MessageCircle, ClipboardCheck, FileText, TrendingUp, CalendarDays } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const WHATSAPP_URL = 'https://wa.me/919381682898';

const steps = [
  {
    number: '01',
    icon: CalendarDays,
    title: 'Book via WhatsApp',
    desc: 'Send a quick message on WhatsApp or place a direct call to request a home assessment session.',
  },
  {
    number: '02',
    icon: ClipboardCheck,
    title: 'Assessment at Home',
    desc: 'Our expert therapist visits your home to diagnose and evaluate physical limits, pain, and posture.',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Customized Treatment Plan',
    desc: 'We formulate a personalized therapy routine and schedule tailored exclusively to your speed of healing.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Recovery & Follow-Up',
    desc: 'Regular therapist-led recovery exercises are performed right inside your living room, with periodic milestones.',
  },
];

export default function HomeVisitProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  };

  return (
    <section id="process" className="py-20 md:py-28 bg-[#0B2C24] text-white relative overflow-hidden" ref={ref}>
      {/* Decorative gradient blur */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#124C40]/25 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-[#C5A880] mb-4">
            Our Methodology
          </span>
          <h2 className="section-title text-white teal-underline-center">
            How It Works
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mt-6 text-sm leading-relaxed font-sans font-medium">
            Your structured road to recovery mapped out across four transparent steps.
          </p>
        </div>

        {/* Timeline Desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10"
        >
          {steps.map((step, i) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300 flex flex-col items-center text-center group"
              >
                {/* Connector line for desktop (hidden on mobile and last card) */}
                {i < 3 && (
                  <div className="hidden md:block absolute top-12 left-[calc(100%_-_16px)] w-[calc(100%_-_32px)] h-0.5 bg-gradient-to-r from-[#C5A880] to-white/10 z-0"></div>
                )}

                {/* Number Badge */}
                <div className="w-8 h-8 rounded-full bg-[#C5A880] flex items-center justify-center text-[#0B2C24] text-xs font-bold mb-6 relative z-10">
                  {step.number}
                </div>

                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-5 h-5 text-[#C5A880]" />
                </div>

                <h3 className="text-lg font-normal text-white mb-3 font-heading">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed font-sans">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-16 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold uppercase tracking-wider text-xs hover:bg-[#128C7E] transition-all duration-300 shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            Start Your Recovery Today
          </a>
        </div>
      </div>
    </section>
  );
}
