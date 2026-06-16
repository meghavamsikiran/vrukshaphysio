import { MessageCircle, Check } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    image: '/images/elderly.png',
    title: 'Pain Management',
    desc: 'We provide effective pain relief using a combination of Electrotherapy and Manual Therapy techniques.',
    points: [
      'Low Back Pain & Neck Pain',
      'Sciatica & Frozen Shoulder',
      'Knee Pain & Hip Pain',
      'Arthritis & Tennis Elbow',
      'Plantar Fasciitis & Sports Injuries',
      'Muscle & Joint Pain Relief'
    ],
    whatsappUrl: 'https://wa.me/919381682898?text=Hello%20VRUKSHA%20PHYSIO%2C%20I%20would%20like%20to%20book%20a%20home%20visit%20appointment%20for%20Pain%20Management%20physiotherapy%20services.',
  },
  {
    image: '/images/orthopedic.png',
    title: 'Post Surgical Orthopedic Physiotherapy',
    desc: 'Expert post-surgical rehabilitation and physical therapy designed to restore function, strength, and mobility after orthopedic surgeries.',
    points: [
      'Total Knee Replacement (TKR) & Total Hip Replacement (THR)',
      'ACL Reconstruction & Meniscus Repair Surgery',
      'Shoulder Replacement Surgery & Rotator Cuff Repair',
      'Arthroscopic Knee and Shoulder Surgeries',
      'Fracture Fixation (Plates, Screws, Rods) & Trauma',
      'Spine Surgery Rehabilitation',
      'Ligament, Tendon & Muscle Reconstruction Recovery',
      'Sports Injury Surgical Rehabilitation'
    ],
    whatsappUrl: 'https://wa.me/919381682898?text=Hello%20VRUKSHA%20PHYSIO%2C%20I%20would%20like%20to%20book%20a%20home%20visit%20appointment%20for%20Post%20Surgical%20Orthopedic%20Physiotherapy%20services.',
  },
  {
    image: '/images/neuro.png',
    title: 'Neurological Physiotherapy',
    desc: 'Specialized rehabilitation to help patients recover mobility and functional independence after nerve injuries.',
    points: [
      'Stroke Rehabilitation',
      'Parkinson\'s Management',
      'Spinal Cord Injury Rehab',
      'Multiple Sclerosis Support',
      'Balance & Coordination training'
    ],
    whatsappUrl: 'https://wa.me/919381682898?text=Hello%20VRUKSHA%20PHYSIO%2C%20I%20would%20like%20to%20book%20a%20home%20visit%20appointment%20for%20Neurological%20Physiotherapy%20services.',
  },
  {
    image: '/images/cardio.png',
    title: 'Cardio Physiotherapy',
    desc: 'Tailored cardiac rehabilitation and breathing exercises to optimize cardiovascular fitness and pulmonary health.',
    points: [
      'Post Cardiac Surgery Rehab',
      'Breathing Exercises',
      'Cardiac Recovery Programs',
      'Pulmonary Strength Building',
      'Endurance Enhancement'
    ],
    whatsappUrl: 'https://wa.me/919381682898?text=Hello%20VRUKSHA%20PHYSIO%2C%20I%20would%20like%20to%20book%20a%20home%20visit%20appointment%20for%20Cardio%20Physiotherapy%20services.',
  },
  {
    image: '/images/sports.png',
    title: 'Sports Physiotherapy',
    desc: 'Targeted recovery and conditioning programs designed for athletes and active individuals to prevent injuries.',
    points: [
      'Athlete Recovery Plans',
      'Injury Prevention Guides',
      'Performance Enhancement',
      'Ligament & Muscle Rehab',
      'Dynamic Movement Screening'
    ],
    whatsappUrl: 'https://wa.me/919381682898?text=Hello%20VRUKSHA%20PHYSIO%2C%20I%20would%20like%20to%20book%20a%20home%20visit%20appointment%20for%20Sports%20Physiotherapy%20services.',
  },
  {
    image: '/images/pediatric.png',
    title: 'Pediatric Physiotherapy',
    desc: 'Our pediatric physiotherapy services focus on helping infants, children, and adolescents achieve their optimal physical development.',
    points: [
      'Developmental Delay & Milestones',
      'Cerebral Palsy & Down Syndrome',
      'Autism Spectrum Disorder (ASD)',
      'Muscular Dystrophy & Hypotonia',
      'Torticollis & Toe Walking',
      'Spina Bifida & Deformities',
      'Balance, Coordination & Sports Injuries',
      'Post-Surgical Pediatric Rehab'
    ],
    whatsappUrl: 'https://wa.me/919381682898?text=Hello%20VRUKSHA%20PHYSIO%2C%20I%20would%20like%20to%20book%20a%20home%20visit%20appointment%20for%20Pediatric%20Physiotherapy%20services.',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#0D9488]/5 text-[#0D9488] rounded-full text-xs font-bold uppercase tracking-widest font-sans mb-4">
            What We Do
          </span>
          <h2 className="section-title teal-underline-center">Our Specialized Services</h2>
          <p className="section-subtitle mt-6">
            Comprehensive physiotherapy treatments delivered by qualified professionals at your doorstep.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="bg-[#F8FAFC]/40 rounded-3xl overflow-hidden border border-[#E2E8F0] hover:border-[#C5A880] transition-all duration-300 flex flex-col group"
            >
              {/* Framed Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl m-4 bg-[#F8FAFC]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                />
              </div>

              {/* Content Area */}
              <div className="px-6 pb-6 pt-2 flex flex-col flex-1">
                <h3 className="text-xl font-normal text-[#0C2340] mb-3 font-heading leading-tight min-h-[56px] flex items-center">
                  {service.title}
                </h3>
                <p className="text-[#475569] text-sm leading-relaxed mb-6 font-sans">
                  {service.desc}
                </p>

                {/* Points */}
                <div className="space-y-3 mb-8 flex-1">
                  {service.points.map((pt) => (
                    <div key={pt} className="flex items-start gap-2.5 text-sm text-[#0C2340] font-medium">
                      <div className="w-4 h-4 rounded-full bg-[#C5A880]/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#C5A880]" />
                      </div>
                      <span className="leading-tight">{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Action */}
                <a
                  href={service.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white rounded-full font-bold uppercase tracking-wider text-xs hover:bg-[#128C7E] transition-all duration-300 shadow-md shadow-green-500/10"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book on WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
