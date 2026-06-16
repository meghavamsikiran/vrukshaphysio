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
    desc: 'Our pediatric physiotherapy services focus on helping infants, children, and adolescents achieve their optimal physical development and functional independence.',
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
          <span className="inline-block px-4 py-1.5 bg-[#0E7490]/10 text-[#0E7490] rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">
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
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white font-[family-name:var(--font-outfit)]">
                  {service.title}
                </h3>
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-1">
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Points */}
                <div className="space-y-3 mb-8 flex-1">
                  {service.points.map((pt) => (
                    <div key={pt} className="flex items-start gap-2 text-sm text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-[#14B8A6]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#14B8A6]" />
                      </div>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Action */}
                <a
                  href={service.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white rounded-full font-bold hover:bg-[#128C7E] transition-all duration-300 shadow-md shadow-green-500/10 hover:shadow-lg hover:shadow-green-500/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book Appointment on WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
