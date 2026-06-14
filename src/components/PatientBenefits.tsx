import { MapPin, Home, UserCheck, Clock, Zap, HeartHandshake } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const benefits = [
  {
    icon: MapPin,
    title: 'No Travel Required',
    desc: 'Skip the stress and discomfort of travel. We bring premium clinical care directly to your doorstep.',
  },
  {
    icon: Home,
    title: 'Comfort of Home',
    desc: 'Recover in a familiar, comfortable setting, which boosts mental health and accelerates physical progress.',
  },
  {
    icon: UserCheck,
    title: 'One-to-One Attention',
    desc: 'Receive dedicated focus and custom corrections from your personal physiotherapist for full sessions.',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    desc: 'Schedule appointment slots that sync with your daily routine and work timings seamlessly.',
  },
  {
    icon: Zap,
    title: 'Faster Recovery',
    desc: 'Evidence shows home-visit care ensures high adherence to exercise programs for swifter healing.',
  },
  {
    icon: HeartHandshake,
    title: 'Personalized Care',
    desc: 'Customized protocols tuned precisely to your living space, setup, and recovery milestones.',
  },
];

export default function PatientBenefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
  };

  return (
    <section id="benefits" className="py-20 md:py-28 bg-gradient-to-b from-[#F8FAFC] to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#0E7490]/10 text-[#0E7490] rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">
            Patient Advantages
          </span>
          <h2 className="section-title teal-underline-center">Benefits of Home Physiotherapy</h2>
          <p className="section-subtitle mt-6">
            Discover why home visit physical therapy is the preferred choice for patients recovering from major surgeries and chronic conditions.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((b) => {
            const IconComponent = b.icon;
            return (
              <motion.div
                key={b.title}
                variants={itemVariants}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-start hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0E7490] to-[#14B8A6] flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3 font-[family-name:var(--font-outfit)]">
                  {b.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {b.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
