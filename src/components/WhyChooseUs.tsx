import { Shield, Target, Brain, Heart } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const cards = [
  {
    icon: Shield,
    title: 'Expert Care',
    desc: 'Experienced & Skilled Physiotherapists delivering evidence-based treatments.',
  },
  {
    icon: Target,
    title: 'Personalized Treatment',
    desc: 'Tailored Recovery Plans designed specifically for your unique condition.',
  },
  {
    icon: Brain,
    title: 'Evidence-Based Approach',
    desc: 'Modern Physiotherapy Techniques backed by the latest scientific research.',
  },
  {
    icon: Heart,
    title: 'Compassionate Care',
    desc: 'Patient-Centered Recovery focusing on empathy, dedication, and support.',
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-[#F8FAFC] border-t border-[#E2E8F0]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#0D9488]/5 text-[#0D9488] rounded-full text-xs font-bold uppercase tracking-widest font-sans mb-4">
            Our Core Strengths
          </span>
          <h2 className="section-title teal-underline-center">Why Choose VRUKSHA PHYSIO</h2>
          <p className="section-subtitle mt-6">
            We deliver professional clinical care in the comfort of your home, ensuring faster recovery through premium standards.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {cards.map((card) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={cardVariants}
                className="bg-white rounded-2xl p-8 border border-[#E2E8F0] shadow-sm hover:border-[#C5A880] hover:shadow-md transition-all duration-300 flex flex-col items-start text-left group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#C5A880]/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  <IconComponent className="w-5 h-5 text-[#C5A880]" />
                </div>
                <h3 className="text-lg font-bold text-[#0C2340] mb-3 font-sans">
                  {card.title}
                </h3>
                <p className="text-[#475569] text-sm leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
