import React from 'react';
import { Layout } from '../components/Layout';
import { FAQAccordion } from '../components/FAQAccordion';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Mail, ArrowRight } from 'lucide-react';

export const FAQPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white via-primary-50/20 to-white py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary-100/30 blur-[120px] -z-10 rounded-full" />
          <div className="text-center max-w-4xl mx-auto animate-in fade-in slide-in-from-top-10 duration-1000">
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-none">
              Help & <span className="bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent italic text-7xl">Support</span>
            </h1>
            <p className="text-2xl text-slate-600 font-medium leading-relaxed">
              Find the architecture for your success. Everything you need to master <span className="text-primary-600 font-black">My Clinic</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="relative z-10 -mt-20 mb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-[3rem] p-10 shadow-2xl shadow-slate-200/50 border-2 border-transparent hover:border-primary-100 transition-all duration-500 text-center group">
              <div className="w-20 h-20 rounded-3xl bg-primary-50 flex items-center justify-center text-primary-600 mx-auto mb-8 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 shadow-inner">
                <MessageCircle size={32} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Live Engineering</h3>
              <p className="text-slate-500 font-medium mb-8">Discuss deployment strategies with our clinical architects.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 font-black text-primary-600 hover:gap-4 transition-all uppercase tracking-widest text-sm">
                Start Session <ArrowRight size={18} strokeWidth={3} />
              </Link>
            </div>

            <div className="bg-white rounded-[3rem] p-10 shadow-2xl shadow-slate-200/50 border-2 border-transparent hover:border-indigo-100 transition-all duration-500 text-center group">
              <div className="w-20 h-20 rounded-3xl bg-indigo-50 flex items-center justify-center text-indigo-600 mx-auto mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-inner">
                <Mail size={32} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Direct Support</h3>
              <p className="text-slate-500 font-medium mb-8">24/7 specialized response for clinical operational queries.</p>
              <a href="mailto:support@deployx.in" className="inline-flex items-center gap-2 font-black text-indigo-600 hover:gap-4 transition-all uppercase tracking-widest text-sm font-black">
                support@deployx.in <ArrowRight size={18} strokeWidth={3} />
              </a>
            </div>

            <div className="bg-white rounded-[3rem] p-10 shadow-2xl shadow-slate-200/50 border-2 border-transparent hover:border-purple-100 transition-all duration-500 text-center group">
              <div className="w-20 h-20 rounded-3xl bg-purple-50 flex items-center justify-center text-purple-600 mx-auto mb-8 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500 shadow-inner">
                <Phone size={32} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Emergency Protocol</h3>
              <p className="text-slate-500 font-medium mb-8">Direct line to our technical leadership team.</p>
              <a href="tel:6350462627" className="inline-flex items-center gap-2 font-black text-purple-600 hover:gap-4 transition-all uppercase tracking-widest text-sm">
                +91 6350462627 <ArrowRight size={18} strokeWidth={3} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <FAQAccordion />

      {/* Platform Mastery (Visual Overviews) */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight italic text-primary-600">Platform Mastery</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">Visual intelligence for every corner of your clinical workflow.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {[
              { title: 'Clinical Analytics Dashboard', image: '/src/assets/Screenshot 2026-01-06 003804.png', desc: 'Real-time telemetry and revenue tracking visualization.' },
              { title: 'Intelligent Consultation Flow', image: '/src/assets/Screenshot 2026-01-06 003714.png', desc: 'Rapid data entry for symptoms and prescriptions.' },
              { title: 'Enterprise Patient Directory', image: '/src/assets/Screenshot 2026-01-06 003727.png', desc: 'Scale-ready management for large-volume clinics.' },
              { title: 'Prescription Architecture', image: '/src/assets/Screenshot 2026-01-06 003829.png', desc: 'Immutable receipts and medication records.' },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 border-2 border-transparent hover:border-primary-100 transition-all duration-500 group"
              >
                <div className="bg-slate-100 h-80 flex items-center justify-center relative overflow-hidden">
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-primary-900/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 font-medium">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Digital <span className="text-primary-600 italic">Library</span></h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">Atomic documentation for every function within the ecosystem.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {[
              { title: 'SOP & User Guide', articles: 15, icon: '📖' },
              { title: 'Governance & Admin', articles: 12, icon: '⚙️' },
              { title: 'Identity & Security', articles: 8, icon: '🔒' },
              { title: 'API & Integration', articles: 10, icon: '🔗' },
              { title: 'Tactical Troubleshooting', articles: 20, icon: '🔧' },
              { title: 'Efficiency Benchmarks', articles: 12, icon: '✨' },
            ].map((guide, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-[2.5rem] p-10 border-2 border-transparent transition-all duration-500 group"
              >
                <div className="flex items-start gap-8">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-500">{guide.icon}</div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">
                      {guide.title}
                    </h3>
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
                      {guide.articles} technical articles
                    </p>
                  </div>
                </div>
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
              <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight italic underline underline-offset-8 decoration-primary-300">
                Still have Questions?
              </h2>
              <p className="text-2xl text-primary-50 mb-12 font-medium opacity-80 leading-relaxed">
                Our support architects are ready to assist you in fine-tuning your <span className="font-black text-white">My Clinic</span> experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <Link
                  to="/contact"
                  className="px-16 py-6 bg-white text-slate-900 rounded-3xl font-black text-xl shadow-2xl hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
                >
                  Contact Support <ArrowRight size={24} strokeWidth={3} />
                </Link>
                <a
                  href="tel:6350462627"
                  className="px-16 py-6 border-2 border-white text-white rounded-3xl font-black text-xl shadow-2xl hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center gap-3"
                >
                  Call Now <Phone size={24} strokeWidth={3} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
