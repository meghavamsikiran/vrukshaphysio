import { useState } from 'react';
import { Bone, Brain, CheckCircle2, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/919381682898';

const orthoConditions = [
  'Degenerative Joint Diseases',
  'Osteoarthritis (Knee, Hip, Hands)',
  'Rheumatoid Arthritis',
  'Spondylosis (Cervical, Lumbar)',
  'Herniated Disc (PIVD)',
  'Sciatica',
  'Chronic Back Pain',
  'Chronic Neck Pain',
  'Ligament Sprains (ACL, MCL, etc.)',
  'Muscle Strains',
  'Tendinitis & Bursitis',
  'Rotator Cuff Injuries',
  'Fractures & Trauma Recovery',
  'Post-Fracture Rehabilitation',
  'Joint Replacement Rehabilitation',
  'ACL Reconstruction Recovery',
  'Meniscus Injuries',
  'Frozen Shoulder',
  'Tennis Elbow / Golfer\'s Elbow',
  'Carpal Tunnel Syndrome',
  'Clubfoot & Other Deformities',
];

const neuroConditions = [
  'Stroke Rehabilitation',
  'Traumatic Brain Injury',
  'Spinal Cord Injury (SCI)',
  'Parkinson\'s Disease',
  'Multiple Sclerosis (MS)',
  'Motor Neuron Disease (MND)',
  'Huntington\'s Disease',
  'Cerebral Palsy',
  'Developmental Delays',
  'Guillain-Barre Syndrome (GBS)',
  'Bell\'s Palsy',
  'Peripheral Nerve Injuries',
];

export default function Conditions() {
  const [orthoExpanded, setOrthoExpanded] = useState(false);

  const visibleOrtho = orthoExpanded ? orthoConditions : orthoConditions.slice(0, 8);

  return (
    <section id="conditions" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#0E7490]/10 text-[#0E7490] rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">
            Specialized Care
          </span>
          <h2 className="section-title teal-underline-center">Conditions We Treat</h2>
          <p className="section-subtitle mt-6">
            We offer expert home-visit physical therapy for a wide spectrum of orthopedic and neurological ailments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Ortho Card */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 border-b border-gray-100 pb-6 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0E7490] to-[#14B8A6] flex items-center justify-center text-white shrink-0">
                  <Bone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0F172A] font-[family-name:var(--font-outfit)]">
                    Orthopedic Conditions
                  </h3>
                  <p className="text-sm text-gray-500">Joint, Bone, and Muscle disorders</p>
                </div>
              </div>

              {/* Items List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {visibleOrtho.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-gray-700 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {orthoConditions.length > 8 && (
                <button
                  onClick={() => setOrthoExpanded(!orthoExpanded)}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0E7490] hover:text-[#0891B2] transition-colors mb-8 cursor-pointer"
                >
                  {orthoExpanded ? (
                    <>
                      Show Less <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Show More ({orthoConditions.length - 8} more){' '}
                      <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </div>

            <div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white rounded-full font-bold hover:bg-[#128C7E] transition-all duration-300 shadow-md shadow-green-500/10 hover:shadow-lg hover:shadow-green-500/20"
              >
                <MessageCircle className="w-5 h-5" />
                Consult Ortho Expert
              </a>
            </div>
          </div>

          {/* Neuro Card */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 border-b border-gray-100 pb-6 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#14B8A6] to-[#0891B2] flex items-center justify-center text-white shrink-0">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0F172A] font-[family-name:var(--font-outfit)]">
                    Neuro Conditions
                  </h3>
                  <p className="text-sm text-gray-500">Brain, Spinal Cord, and Nerve disorders</p>
                </div>
              </div>

              {/* Items List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {neuroConditions.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-gray-700 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#0891B2] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white rounded-full font-bold hover:bg-[#128C7E] transition-all duration-300 shadow-md shadow-green-500/10 hover:shadow-lg hover:shadow-green-500/20"
              >
                <MessageCircle className="w-5 h-5" />
                Consult Neuro Expert
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
