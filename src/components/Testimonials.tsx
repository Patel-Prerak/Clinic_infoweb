import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  name: string;
  clinic: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Dr. Rajesh Kumar',
    clinic: 'Kumar Clinic, Mumbai',
    role: 'Senior Doctor',
    image: '👨‍⚕️',
    quote: 'My Clinic has been a game-changer for our clinic. We save 5+ hours every week on patient management. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Dr. Priya Sharma',
    clinic: 'Sharma Medical Center, Delhi',
    role: 'Clinic Manager',
    image: '👩‍⚕️',
    quote: 'The analytics dashboard gives us real-time insights into our clinic\'s performance. Our revenue tracking is now effortless.',
    rating: 5,
  },
  {
    name: 'Dr. Amit Singh',
    clinic: 'Singh Dental Clinic, Bangalore',
    role: 'Dentist',
    image: '👨‍⚕️',
    quote: 'Simple, intuitive, and exactly what we needed. Patient records are now organized and easily searchable.',
    rating: 5,
  },
  {
    name: 'Dr. Neha Gupta',
    clinic: 'Gupta Hospital, Pune',
    role: 'Hospital Administrator',
    image: '👩‍⚕️',
    quote: 'The data security features give us peace of mind. GDPR compliance is built-in, which is fantastic.',
    rating: 5,
  },
  {
    name: 'Dr. Vikram Patel',
    clinic: 'Patel Multi-Specialty, Ahmedabad',
    role: 'Doctor',
    image: '👨‍⚕️',
    quote: 'Customer support is exceptional. They helped us set up everything in minutes. Worth every penny!',
    rating: 5,
  },
  {
    name: 'Dr. Anjali Mishra',
    clinic: 'Mishra Medical Clinic, Hyderabad',
    role: 'Lead Doctor',
    image: '👩‍⚕️',
    quote: 'The consultation tracking features are comprehensive. We never miss any follow-ups now.',
    rating: 5,
  },
];

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Get 3 testimonials to display (current and neighbors)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(activeIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20 animate-in fade-in slide-in-from-top-6 duration-700">
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Loved by <span className="bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent italic">Professionals</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Join 500+ satisfied clinics using <span className="text-primary-600 font-bold">My Clinic</span> to streamline their practice.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative group">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-slate-200/50 border-2 border-slate-50 hover:border-primary-100 transition-all duration-500 hover:-translate-y-3 flex flex-col group/card"
              >
                {/* Rating */}
                <div className="flex gap-1.5 mb-8">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-primary-500 text-primary-500 drop-shadow-sm"
                      strokeWidth={0}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-700 font-bold text-lg mb-10 leading-relaxed italic grow">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="pt-8 border-t-2 border-slate-50">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-4xl shadow-inner group-hover/card:bg-primary-50 transition-colors">
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-lg tracking-tight">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm font-bold text-slate-400 mb-1">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-primary-600 font-black uppercase tracking-widest">
                        {testimonial.clinic}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-12 mt-12">
            <button
              onClick={handlePrev}
              className="group/btn w-16 h-16 rounded-3xl bg-slate-50 border-2 border-slate-100 flex items-center justify-center hover:bg-primary-600 hover:border-primary-600 transition-all duration-300 shadow-xl active:scale-90"
            >
              <ChevronLeft size={28} className="text-slate-600 group-hover/btn:text-white transition-colors" strokeWidth={3} />
            </button>

            {/* Dot Indicators */}
            <div className="flex gap-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-3 rounded-full transition-all duration-500 ${index === activeIndex ? 'bg-primary-600 w-12' : 'bg-slate-200 w-3 hover:bg-slate-300'
                    }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="group/btn w-16 h-16 rounded-3xl bg-slate-50 border-2 border-slate-100 flex items-center justify-center hover:bg-primary-600 hover:border-primary-600 transition-all duration-300 shadow-xl active:scale-90"
            >
              <ChevronRight size={28} className="text-slate-600 group-hover/btn:text-white transition-colors" strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
