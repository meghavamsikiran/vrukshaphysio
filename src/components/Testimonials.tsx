import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    condition: 'Post-Surgery Recovery',
    location: 'Hyderabad',
    quote: 'After my knee replacement surgery, VRUKSHA PHYSIO made my recovery so much easier. The home visits saved me from painful travel, and Bramha Reddy sir\'s expertise helped me walk again in weeks.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    condition: 'Stroke Rehabilitation',
    location: 'Bangalore',
    quote: 'My father had a stroke and we were worried about his recovery. The neurological physiotherapy team was incredible. Their patience and skill brought remarkable improvement in just two months.',
    rating: 5,
  },
  {
    name: 'Venkat Reddy',
    condition: 'Chronic Back Pain',
    location: 'Hyderabad',
    quote: 'I suffered from chronic back pain for years. The evidence-based approach and personalized exercises prescribed by the team gave me relief I never thought possible. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Anitha Devi',
    condition: 'Sports Injury',
    location: 'Bangalore',
    quote: 'As an athlete, getting back to training quickly was crucial. The sports physiotherapy program was exactly what I needed. Professional, knowledgeable, and truly caring team.',
    rating: 5,
  },
  {
    name: 'Mohammad Hussain',
    condition: 'Shoulder Recovery',
    location: 'Secunderabad',
    quote: 'Frozen shoulder had limited my daily activities severely. The home physiotherapy sessions were convenient and effective. I regained full mobility within three months of treatment.',
    rating: 5,
  },
  {
    name: 'Lakshmi Narayana',
    condition: 'Cardiac Rehab',
    location: 'Vijayawada',
    quote: 'Post cardiac surgery, the breathing exercises and rehabilitation program helped me regain my strength. The team\'s compassionate approach made a huge difference in my recovery journey.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white border-t border-[#E2EDF3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <span className="inline-block px-4 py-1.5 bg-[#008BA3]/5 text-[#008BA3] rounded-full text-xs font-bold uppercase tracking-widest font-sans mb-4">
            Success Stories
          </span>
          <h2 className="section-title teal-underline-center">What Our Patients Say</h2>
          <p className="section-subtitle mt-6">
            Real reviews and feedback from patients who completed their physical recovery therapy journey with us.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-[#F4F9FC]/60 rounded-3xl p-8 md:p-12 border border-[#E2EDF3] min-h-[300px] flex flex-col justify-between overflow-hidden shadow-sm">
          {/* Quote Icon */}
          <div className="absolute top-6 left-6 text-[#C5A880]/10">
            <Quote className="w-20 h-20 rotate-180 opacity-60 shrink-0" />
          </div>

          <div className="relative z-10">
            {/* Rating Stars */}
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C5A880] text-[#C5A880]" />
              ))}
            </div>

            {/* Testimonial text */}
            <p className="text-[#004F95] text-lg md:text-xl italic leading-relaxed mb-8 font-heading">
              &ldquo;{current.quote}&rdquo;
            </p>

            {/* Profile detail */}
            <div>
              <h4 className="text-base font-bold text-[#004F95] font-sans uppercase tracking-wider">
                {current.name}
              </h4>
              <p className="text-xs text-[#C5A880] font-bold uppercase tracking-widest mt-1">
                {current.condition} &bull; {current.location}
              </p>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 relative z-10 border-t border-[#E2EDF3] pt-6">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full border border-[#E2EDF3] text-[#008BA3] hover:bg-[#004F95] hover:text-[#F4F9FC] hover:border-[#004F95] transition-colors"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Indicator dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? 'w-5 bg-[#004F95]' : 'bg-[#E2EDF3]'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2.5 rounded-full border border-[#E2EDF3] text-[#008BA3] hover:bg-[#004F95] hover:text-[#F4F9FC] hover:border-[#004F95] transition-colors"
              aria-label="Next story"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
