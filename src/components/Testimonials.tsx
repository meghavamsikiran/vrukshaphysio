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
    <section id="testimonials" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <span className="inline-block px-4 py-1.5 bg-[#0E7490]/10 text-[#0E7490] rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">
            Success Stories
          </span>
          <h2 className="section-title teal-underline-center">What Our Patients Say</h2>
          <p className="section-subtitle mt-6">
            Real reviews and feedback from patients who completed their physical recovery therapy journey with us.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 min-h-[300px] flex flex-col justify-between overflow-hidden">
          {/* Quote Icon */}
          <div className="absolute top-6 left-6 text-gray-100">
            <Quote className="w-20 h-20 rotate-180 opacity-50 shrink-0" />
          </div>

          <div className="relative z-10">
            {/* Rating Stars */}
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Testimonial text */}
            <p className="text-gray-700 text-lg md:text-xl italic leading-relaxed mb-8">
              &ldquo;{current.quote}&rdquo;
            </p>

            {/* Profile detail */}
            <div>
              <h4 className="text-lg font-bold text-[#0F172A] font-[family-name:var(--font-outfit)]">
                {current.name}
              </h4>
              <p className="text-sm text-[#0E7490] font-semibold">
                {current.condition} &bull; {current.location}
              </p>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 relative z-10 border-t border-gray-50 pt-6">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full border border-gray-200 text-gray-600 hover:bg-[#0E7490] hover:text-white hover:border-[#0E7490] transition-colors"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Indicator dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === index ? 'w-6 bg-[#0E7490]' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2.5 rounded-full border border-gray-200 text-gray-600 hover:bg-[#0E7490] hover:text-white hover:border-[#0E7490] transition-colors"
              aria-label="Next story"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
