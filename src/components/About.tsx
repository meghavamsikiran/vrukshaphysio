import { Award, Users, MapPin, MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/919381682898';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Images Section */}
          <div className="lg:col-span-6 space-y-6">
            {/* Main Founder Card */}
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#0E7490] to-[#14B8A6] opacity-10 blur-lg"></div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <img
                  src="/images/bramha-reddy.jpg"
                  alt="Bramha Reddy Gadikota - Founder & Lead Physiotherapist"
                  className="w-full h-[450px] md:h-[520px] object-cover object-top hover:scale-102 transition-transform duration-500"
                />

                {/* Glass Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20 text-white">
                  <h4 className="text-xl font-bold font-[family-name:var(--font-outfit)]">
                    Bramha Reddy Gadikota
                  </h4>
                  <p className="text-sm text-gray-200 font-medium">BPT | Founder & Lead Physiotherapist</p>
                </div>
              </div>
            </div>

            {/* Equipment Showcase */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-gray-100 h-36 bg-[#F8FAFC]">
                <img
                  src="/images/equipment-1.png"
                  alt="Electro Therapeutic Devices"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end p-3">
                  <span className="text-xs text-white font-semibold">Electro Therapeutic Devices</span>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-gray-100 h-36 bg-[#F8FAFC]">
                <img
                  src="/images/equipment-2.png"
                  alt="Electro Therapeutic Devices"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end p-3">
                  <span className="text-xs text-white font-semibold">Electro Therapeutic Devices</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-6">
            <span className="inline-block px-4 py-1.5 bg-[#0E7490]/10 text-[#0E7490] rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">
              Meet the Founder
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
        </div>
      </div>
    </section>
  );
}
