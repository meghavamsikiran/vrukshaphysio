import { useState } from 'react';
import { Bone, Brain, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

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
    <section id="conditions" className="py-20 md:py-28 bg-[#F4F9FC] border-t border-[#E2EDF3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#008BA3]/5 text-[#008BA3] rounded-full text-xs font-bold uppercase tracking-widest font-sans mb-4">
            Specialized Care
          </span>
          <h2 className="section-title teal-underline-center">Conditions We Treat</h2>
          <p className="section-subtitle mt-6">
            We offer expert home-visit physical therapy for a wide spectrum of orthopedic and neurological ailments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Ortho Card */}
          <div className="bg-white rounded-3xl p-8 border border-[#E2EDF3] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 border-b border-[#E2EDF3]/60 pb-6 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#C5A880]/10 flex items-center justify-center text-[#C5A880] shrink-0">
                  <Bone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-normal text-[#004F95] font-heading">
                    Orthopedic Conditions
                  </h3>
                  <p className="text-xs text-[#0FA3B1] font-medium font-sans">Joint, Bone, and Muscle disorders</p>
                </div>
              </div>

              {/* Items List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {visibleOrtho.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-[#004F95] text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                    <span className="leading-tight">{item}</span>
                  </div>
                ))}
              </div>

              {orthoConditions.length > 8 && (
                <button
                  onClick={() => setOrthoExpanded(!orthoExpanded)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008BA3] hover:text-[#C5A880] transition-colors mb-4 cursor-pointer"
                >
                  {orthoExpanded ? (
                    <>
                      Show Less <ChevronUp className="w-3.5 h-3.5" />
                    </>
                  ) : (
                    <>
                      Show More ({orthoConditions.length - 8} more){' '}
                      <ChevronDown className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Neuro Card */}
          <div className="bg-white rounded-3xl p-8 border border-[#E2EDF3] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 border-b border-[#E2EDF3]/60 pb-6 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#C5A880]/10 flex items-center justify-center text-[#C5A880] shrink-0">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-normal text-[#004F95] font-heading">
                    Neuro Conditions
                  </h3>
                  <p className="text-xs text-[#0FA3B1] font-medium font-sans">Brain, Spinal Cord, and Nerve disorders</p>
                </div>
              </div>

              {/* Items List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {neuroConditions.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-[#004F95] text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                    <span className="leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
