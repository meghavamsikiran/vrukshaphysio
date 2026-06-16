import { Award, Users, MapPin, MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/919381682898';

const team = [
  {
    image: '/images/bramha-reddy.png',
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
            <span className="inline-block px-4 py-1.5 bg-[#0D9488]/5 text-[#0D9488] rounded-full text-xs font-bold uppercase tracking-widest font-sans mb-4">
              Who We Are
            </span>
            <h2 className="section-title text-[#0C2340] teal-underline">
              About VRUKSHA PHYSIO
            </h2>

            <div className="mt-8 space-y-6 text-[#475569] leading-relaxed text-sm font-medium">
              <p>
                VRUKSHA PHYSIO Homecare Services is led by{' '}
                <strong className="text-[#0C2340]">Bramha Reddy Gadikota (BPT)</strong> and a team
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
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-b border-[#E2E8F0] py-6">
              <div className="flex flex-col items-center text-center">
                <Users className="w-6 h-6 text-[#C5A880] mb-2" />
                <span className="text-xl font-bold text-[#0C2340] font-sans">
                  1000+
                </span>
                <span className="text-[10px] text-[#475569] font-bold uppercase tracking-wider">Patients Treated</span>
              </div>

              <div className="flex flex-col items-center text-center border-l border-r border-[#E2E8F0] px-2">
                <Award className="w-6 h-6 text-[#C5A880] mb-2" />
                <span className="text-xl font-bold text-[#0C2340] font-sans">
                  5+
                </span>
                <span className="text-[10px] text-[#475569] font-bold uppercase tracking-wider">Years Exp</span>
              </div>

              <div className="flex flex-col items-center text-center">
                <MapPin className="w-6 h-6 text-[#C5A880] mb-2" />
                <span className="text-xl font-bold text-[#0C2340] font-sans">
                  3
                </span>
                <span className="text-[10px] text-[#475569] font-bold uppercase tracking-wider">Regions Served</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold uppercase tracking-wider text-xs hover:bg-[#128C7E] transition-all duration-300 shadow-md shadow-green-500/10"
              >
                <MessageCircle className="w-4 h-4" />
                Book a Consultation
              </a>
            </div>
          </div>

          {/* Equipment Showcase Area */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#0D9488] to-[#C5A880] opacity-5 blur-lg"></div>
              <div className="relative bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-6 shadow-sm">
                <h3 className="text-base font-normal text-[#0C2340] mb-4 font-heading border-b border-[#E2E8F0]/60 pb-3 uppercase tracking-wider">
                  Electro Therapeutic Modalities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative rounded-2xl overflow-hidden shadow-sm h-36 bg-white border border-[#E2E8F0] group">
                    <img
                      src="/images/equipment-1.png"
                      alt="Electro Therapeutic Device - Multi-Stim"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/45 flex items-end p-3">
                      <span className="text-[10px] text-white font-bold uppercase tracking-wider">Electro Therapeutic Devices</span>
                    </div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden shadow-sm h-36 bg-white border border-[#E2E8F0] group">
                    <img
                      src="/images/equipment-2.png"
                      alt="Electro Therapeutic Device - Ultrasound"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/45 flex items-end p-3">
                      <span className="text-[10px] text-white font-bold uppercase tracking-wider">Electro Therapeutic Devices</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-[#475569] mt-4 leading-relaxed font-medium">
                  We use advanced electro-therapeutic modalities to target deep tissues, accelerate recovery, and provide immediate pain relief.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Sub-Section */}
        <div className="border-t border-[#E2E8F0] pt-16">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#C5A880]/10 text-[#C5A880] rounded-full text-xs font-bold uppercase tracking-widest font-sans mb-3">
              Our Clinical Leadership
            </span>
            <h3 className="text-2xl md:text-4xl font-normal font-heading text-[#0C2340]">
              Meet Our Expert Physiotherapists
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-[#F8FAFC]/50 border border-[#E2E8F0] rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full justify-between"
              >
                <div>
                  {/* Photo */}
                  <div className="relative h-[520px] overflow-hidden bg-white border-b border-[#E2E8F0]">
                    <img
                      src={member.image}
                      alt={`${member.name} (${member.degree})`}
                      className={`w-full h-full object-cover object-top transition-all duration-500 ${
                        member.name.includes('Bramha')
                          ? 'scale-[1.55] origin-top group-hover:scale-[1.6]'
                          : 'group-hover:scale-103'
                      }`}
                    />
                  </div>
                  
                  {/* Name and Role Section */}
                  <div className="p-6 bg-white">
                    <div className="flex items-center gap-2 mb-1.5">
                      <h4 className="text-lg font-normal font-heading text-[#0C2340]">
                        {member.name}
                      </h4>
                      <span className="bg-[#C5A880]/15 text-[#C5A880] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                        {member.degree}
                      </span>
                    </div>
                    <p className="text-xs text-[#475569] font-semibold">{member.role}</p>
                  </div>
                </div>
                
                {/* Meta details */}
                <div className="p-5 flex items-center gap-2 text-[#0C2340] font-semibold text-xs bg-[#F8FAFC]/60 border-t border-[#E2E8F0]">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-[#C5A880]" />
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
