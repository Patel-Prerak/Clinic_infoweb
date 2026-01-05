import React from 'react';
import { Layout } from '../components/Layout';
import { Testimonials } from '../components/Testimonials';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CaseStudy {
  doctorName: string;
  clinicName: string;
  location: string;
  image: string;
  challenge: string;
  solution: string;
  results: string[];
  quote: string;
}

const caseStudies: CaseStudy[] = [
  {
    doctorName: 'Dr. Rajesh Kumar',
    clinicName: 'Kumar Clinic',
    location: 'Mumbai',
    image: '👨‍⚕️',
    challenge: 'Manual patient record keeping was consuming 10+ hours per week, leading to missed follow-ups and lost revenue tracking.',
    solution: 'Implemented My Clinic\'s complete patient management system with automated follow-up reminders and real-time revenue tracking.',
    results: [
      'Reduced administrative time by 80% (10 hours → 2 hours per week)',
      'Increased patient retention by 35%',
      'Revenue increased by 25% through better follow-up management',
      'Organized 5,000+ patient records with instant search',
    ],
    quote: 'My Clinic transformed how we manage our clinic. The time savings alone have paid for the system 10 times over!'
  },
  {
    doctorName: 'Dr. Priya Sharma',
    clinicName: 'Sharma Medical Center',
    location: 'Delhi',
    image: '👩‍⚕️',
    challenge: 'Multiple clinics needed centralized patient data and analytics, but manual tracking was inconsistent and unreliable.',
    solution: 'Deployed Web Cloud version to sync data across 3 clinic locations with real-time analytics and multi-user access.',
    results: [
      'Unified patient database across 3 locations',
      'Real-time dashboard showing clinic metrics',
      'Improved coordination between clinics',
      'Revenue tracking increased accuracy by 95%',
    ],
    quote: 'The Web Cloud solution gave us the visibility we needed across all our locations. Data is now consistent everywhere!'
  },
  {
    doctorName: 'Dr. Amit Singh',
    clinicName: 'Singh Dental Clinic',
    location: 'Bangalore',
    image: '👨‍⚕️',
    challenge: 'Dental clinic needed appointment scheduling and treatment tracking with detailed patient communication history.',
    solution: 'Used My Clinic\'s consultation tracking with detailed complaint logging and systematic treatment documentation.',
    results: [
      'Treatment success rate improved by 40%',
      'Patient satisfaction score jumped to 4.8/5',
      'Treatment plan documentation reduced consultation time by 30%',
      'Better patient recall through organized history',
    ],
    quote: 'Having complete treatment history for every patient has improved our clinical outcomes significantly.'
  },
];

export const TestimonialsPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white via-primary-50/20 to-white py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary-100/30 blur-[120px] -z-10 rounded-full" />
          <div className="text-center max-w-4xl mx-auto animate-in fade-in slide-in-from-top-10 duration-1000">
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-none">
              Success <span className="bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent italic">Stories</span>
            </h1>
            <p className="text-2xl text-slate-600 font-medium leading-relaxed">
              Real clinics achieving exponential growth and operational excellence with <span className="text-primary-600 font-black">My Clinic</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="relative z-10 -mt-20 mb-20">
        <div className="container mx-auto px-4">
          <div className="bg-slate-900 rounded-[3rem] p-12 shadow-3xl overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600 opacity-10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:opacity-20 transition-all duration-1000" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
              <div className="space-y-2">
                <div className="text-5xl font-black text-white italic tracking-tighter">500+</div>
                <div className="text-primary-400 font-black uppercase tracking-widest text-xs">Happy Clinics</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-black text-white italic tracking-tighter">50K+</div>
                <div className="text-primary-400 font-black uppercase tracking-widest text-xs">Patients Managed</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-black text-white italic tracking-tighter">4.8/5</div>
                <div className="text-primary-400 font-black uppercase tracking-widest text-xs">Average Rating</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-black text-white italic tracking-tighter">40+</div>
                <div className="text-primary-400 font-black uppercase tracking-widest text-xs">Hours Saved Weekly</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <Testimonials />

      {/* Detailed Case Studies */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              In-Depth <span className="text-primary-600">Case Studies</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
              A detailed look at how healthcare providers transformed their practice workflows.
            </p>
          </div>

          <div className="space-y-32">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                style={{ direction: index % 2 === 1 ? 'rtl' : 'ltr' }}
              >
                {/* Left Side - Image/Profile Card */}
                <div style={{ direction: 'ltr' }} className="animate-in fade-in slide-in-from-left-10 duration-1000">
                  <div className="group relative">
                    <div className="absolute -inset-4 bg-gradient-to-br from-primary-500 to-indigo-600 rounded-[3.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
                    <div className="relative bg-white rounded-[3rem] p-12 border-2 border-slate-50 shadow-2xl overflow-hidden text-center aspect-square flex flex-col justify-center items-center">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-primary-50 rounded-full blur-3xl -mr-20 -mt-20 opacity-50" />
                      <div className="text-[10rem] mb-8 drop-shadow-2xl group-hover:scale-110 transition-transform duration-700">{study.image}</div>
                      <h3 className="text-3xl font-black text-slate-900 mb-2">
                        {study.doctorName}
                      </h3>
                      <p className="text-primary-600 font-black uppercase tracking-[0.2em] text-sm">
                        {study.clinicName}, {study.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div style={{ direction: 'ltr' }} className="animate-in fade-in slide-in-from-right-10 duration-1000">
                  {/* Challenge */}
                  <div className="mb-10 group/item">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-1 rounded-full bg-red-400 group-hover/item:w-16 transition-all duration-500" />
                      <h3 className="text-xl font-black text-slate-900 uppercase tracking-widest">
                        The Challenge
                      </h3>
                    </div>
                    <p className="text-lg text-slate-600 font-medium leading-relaxed italic border-l-4 border-slate-100 pl-6">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-10 group/item">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-1 rounded-full bg-primary-400 group-hover/item:w-16 transition-all duration-500" />
                      <h3 className="text-xl font-black text-slate-900 uppercase tracking-widest">
                        The Solution
                      </h3>
                    </div>
                    <p className="text-lg text-slate-600 font-medium leading-relaxed border-l-4 border-primary-100 pl-6">
                      {study.solution}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="mb-12 group/item">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-1 rounded-full bg-green-400 group-hover/item:w-16 transition-all duration-500" />
                      <h3 className="text-xl font-black text-slate-900 uppercase tracking-widest">
                        The Results
                      </h3>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex gap-4 items-center bg-slate-50 p-4 rounded-2xl group/result hover:bg-green-50 transition-colors">
                          <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600 group-hover/result:bg-green-600 group-hover/result:text-white transition-colors flex-shrink-0">
                            <span className="font-black">✓</span>
                          </div>
                          <span className="text-slate-700 font-bold text-sm leading-tight">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quote */}
                  <div className="bg-slate-900 rounded-[2.5rem] p-10 shadow-3xl text-white relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-600 opacity-20 rounded-full blur-2xl" />
                    <p className="text-xl font-bold italic mb-6 leading-relaxed relative z-10">
                      "{study.quote}"
                    </p>
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="w-8 h-px bg-primary-400" />
                      <p className="font-black uppercase tracking-widest text-primary-400 text-sm">
                        {study.doctorName}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Achievements */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              Clinical <span className="bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent italic text-7xl">Excellence</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
              Beyond software, we provide the infrastructure needed to scale your practice sustainably.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: '⏱️', title: 'Operational Speed', desc: 'Eliminate administrative bottlenecks and save 40+ hours weekly' },
              { icon: '📈', title: 'Revenue Optimization', desc: 'Clients report 25% average growth through automated collections' },
              { icon: '😊', title: 'Patient Bonding', desc: 'Personalized communication leads to industry-leading 4.8/5 ratings' },
              { icon: '🏥', title: 'Clinical Precision', desc: 'Secure, organized records lead to better diagnoses and outcomes' },
              { icon: '💼', title: 'Infinite Scaling', desc: 'Architecture designed to grow from single clinic to hospital chains' },
              { icon: '🔒', title: 'Steel Security', desc: 'Bank-grade encryption protecting over 50,000 sensitive records' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-[2.5rem] p-10 shadow-xl shadow-slate-200/50 border-2 border-transparent hover:border-primary-100 hover:-translate-y-2 transition-all duration-500 group">
                <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center text-4xl mb-8 group-hover:bg-primary-50 group-hover:scale-110 transition-all duration-500 shadow-inner">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-primary-600 to-indigo-800 rounded-[4rem] p-20 text-center text-white shadow-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white opacity-5 rounded-full blur-[100px] -mr-48 -mt-48 group-hover:opacity-10 transition-all duration-1000" />
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
                Ready to Author Your <span className="italic underline underline-offset-8 decoration-primary-300">Success</span>?
              </h2>
              <p className="text-2xl text-primary-50 mb-12 font-medium opacity-80">
                Join hundreds of visionary clinicians who have defined a new standard of care with <span className="font-black text-white">My Clinic</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <Link
                  to="/pricing"
                  className="px-16 py-6 bg-white text-slate-900 rounded-3xl font-black text-xl shadow-2xl hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
                >
                  View Premium Plans <ArrowRight size={24} strokeWidth={3} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout >
  );
};
