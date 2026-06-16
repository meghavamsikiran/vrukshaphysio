import { Award, Users, MapPin, MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/919381682898';

const team = [
  {
    image: '/images/bramha-reddy.jpg',
    name: 'Bramha Reddy Gadikota',
    role: 'Founder & Lead Physiotherapist',
    degree: 'BPT',
    location: 'Hyderabad & Andhra Pradesh',
  },
  {
    image: '/images/chinna-nayak.png',
    name: 'Chinna Nayak',
    role: 'Lead Physiotherapist (Bangalore)',
    degree: 'BPT',
    location: 'Bangalore Hub',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Split Area: Content and Equipment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Content Area */}
          <div className="lg:col-span-7">
            <span className="inline-block px-4 py-1.5 bg-[#0E7490]/10 text-[#0E7490] rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">
              Who We Are
            </span>
            <h2 className="section-title text-[#0F172A] teal-underline">
              About VRUKSHA PHYSIO
            </h2>

            <div className="mt-8 space-y-6 text-gray-600 leading-relaxed text-base">
              <p>
                VRUKSHA PHYSIO Homecare Services is led by{' '}
                <strong className="text-[#0E7490]">Bramha Reddy Gadikota (BPT)</strong> and a team
                of dedicated physiotherapy professionals committed to delivering expert physiotherapy care directly at patients&apos; homes.
              </p>
              <p>
                Our mission is to provide high-quality rehabilitation and recovery services with personalized treatment plans, evidence-based techniques, and compassionate patient care.
              </p>
              <p>
                Whether recovering from surgery, injury, neurological conditions, or chronic pain, we bring professional physiotherapy support to your doorstep.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-b border-gray-100 py-6">
              <div className="flex flex-col items-center text-center">
                <Users className="w-6 h-6 text-[#0E7490] mb-2" />
                <span className="text-xl font-bold text-[#0F172A] font-[family-name:var(--font-outfit)]">
                  1000+
                </span>
                <span className="text-xs text-gray-500 font-medium">Patients Treated</span>
              </div>

              <div className="flex flex-col items-center text-center border-l border-r border-gray-100 px-2">
                <Award className="w-6 h-6 text-[#0E7490] mb-2" />
                <span className="text-xl font-bold text-[#0F172A] font-[family-name:var(--font-outfit)]">
                  5+
                </span>
                <span className="text-xs text-gray-500 font-medium">Years Exp</span>
              </div>

              <div className="flex flex-col items-center text-center">
                <MapPin className="w-6 h-6 text-[#0E7490] mb-2" />
                <span className="text-xl font-bold text-[#0F172A] font-[family-name:var(--font-outfit)]">
                  3
                </span>
                <span className="text-xs text-gray-500 font-medium">Regions Served</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold text-lg hover:bg-[#128C7E] transition-all duration-300 shadow-md shadow-green-500/10 hover:shadow-lg hover:shadow-green-500/20"
              >
                <MessageCircle className="w-5 h-5" />
                Book a Consultation
              </a>
            </div>
          </div>

          {/* Equipment Showcase Area */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#0E7490] to-[#14B8A6] opacity-5 blur-lg"></div>
              <div className="relative bg-[#F8FAFC] border border-gray-100 rounded-3xl p-6 shadow-xl">
                <h3 className="text-lg font-bold text-[#0F172A] mb-4 font-[family-name:var(--font-outfit)] border-b border-gray-200/60 pb-3">
                  Electro Therapeutic Modalities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative rounded-2xl overflow-hidden shadow-md h-36 bg-white border border-gray-100 group">
                    <img
                      src="/images/equipment-1.png"
                      alt="Electro Therapeutic Device - Multi-Stim"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-end p-3">
                      <span className="text-xs text-white font-semibold">Electro Therapeutic Devices</span>
                    </div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden shadow-md h-36 bg-white border border-gray-100 group">
                    <img
                      src="/images/equipment-2.png"
                      alt="Electro Therapeutic Device - Ultrasound"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-end p-3">
                      <span className="text-xs text-white font-semibold">Electro Therapeutic Devices</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                  We use advanced electro-therapeutic modalities to target deep tissues, accelerate recovery, and provide immediate pain relief.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Sub-Section */}
        <div className="border-t border-gray-100 pt-16">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#14B8A6]/10 text-[#14B8A6] rounded-full text-sm font-semibold mb-3 tracking-wide uppercase">
              Our Clinical Leadership
            </span>
            <h3 className="text-2xl md:text-4xl font-bold font-[family-name:var(--font-outfit)] text-[#0F172A]">
              Meet Our Expert Physiotherapists
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-[#F8FAFC] border border-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                {/* Photo */}
                <div className="relative h-[380px] overflow-hidden bg-gray-50">
                  <img
                    src={member.image}
                    alt={`${member.name} (${member.degree})`}
                    className="w-full h-full object-cover object-top group-hover:scale-103 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  {/* Name overlay */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="bg-[#0E7490] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {member.degree}
                    </span>
                    <h4 className="text-xl font-bold font-[family-name:var(--font-outfit)] mt-2">
                      {member.name}
                    </h4>
                    <p className="text-xs text-gray-200 mt-1">{member.role}</p>
                  </div>
                </div>
                
                {/* Meta details */}
                <div className="p-5 flex items-center gap-2 text-[#0E7490] font-semibold text-sm bg-white border-t border-gray-100">
                  <MapPin className="w-4 h-4 shrink-0 text-[#14B8A6]" />
                  <span>Coverage: {member.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
