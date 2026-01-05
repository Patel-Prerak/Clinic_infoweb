import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { PricingCards } from '../components/PricingCards';
import { Zap, DollarSign, Shield, ArrowRight } from 'lucide-react';
import { FAQAccordion } from '../components/FAQAccordion';

export const PricingPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white via-primary-50/20 to-white py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary-100/30 blur-[120px] -z-10 rounded-full" />
          <div className="text-center max-w-4xl mx-auto animate-in fade-in slide-in-from-top-10 duration-1000">
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-none">
              Strategic <span className="bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent italic">Investments</span>
            </h1>
            <p className="text-2xl text-slate-600 font-medium leading-relaxed">
              Transparent scaling models designed for modern healthcare practices. No hidden overhead.
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition Grid */}
      <section className="relative z-10 -mt-20 mb-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { Icon: DollarSign, title: 'Zero Hidden Fees', desc: 'Complete transparency in every transaction. One-time or subscription models.', color: 'from-emerald-50 to-teal-50' },
              { Icon: Shield, title: 'Immutable Security', desc: 'Bank-grade encryption protecting your revenue and patient data 24/7.', color: 'from-indigo-50 to-blue-50' },
              { Icon: Zap, title: 'Instant Activation', desc: 'Deploy your entire clinic architecture in under 24 hours with expert assistance.', color: 'from-primary-50 to-purple-50' },
            ].map((prop, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${prop.color} rounded-[3rem] p-12 shadow-2xl shadow-slate-200/50 border-white hover:scale-105 transition-all duration-500 text-center group`}>
                <div className="w-20 h-20 rounded-3xl bg-white flex items-center justify-center text-primary-600 mx-auto mb-8 shadow-inner group-hover:bg-primary-600 group-hover:text-white transition-all duration-500">
                  <prop.Icon size={32} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{prop.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <PricingCards />

      {/* Plan Comparison Matrix */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight italic">Feature Matrix</h2>
            <p className="text-xl text-slate-500 font-medium">Detailed comparison of our core clinical solutions.</p>
          </div>

          <div className="max-w-5xl mx-auto overflow-hidden rounded-[3rem] border-2 border-slate-50 shadow-3xl bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="py-8 px-10 font-black uppercase tracking-widest text-sm">Feature Lifecycle</th>
                  <th className="py-8 px-10 font-black uppercase tracking-widest text-sm text-center">Permanent Desktop</th>
                  <th className="py-8 px-10 font-black uppercase tracking-widest text-sm text-center text-primary-400 italic">Web Responsive</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { feature: 'Patient Records', desktop: 'Unlimited', web: 'Unlimited' },
                  { feature: 'Consultation Pipeline', desktop: '✓', web: '✓' },
                  { feature: 'Pulse Analytics', desktop: '✓', web: '✓' },
                  { feature: 'Data Export Protocol', desktop: '✓', web: '✓' },
                  { feature: 'Financial Reporting', desktop: '✓', web: '✓' },
                  { feature: 'Redundant Storage', desktop: 'Local Immutable', web: 'Cloud Distributed' },
                  { feature: 'Access Matrix', desktop: 'Local Network', web: 'Global / Anywhere' },
                  { feature: 'Mobile Deployment', desktop: '✗', web: '✓ Responsive' },
                  { feature: 'Resilience / Offline', desktop: '✓ Native', web: '✗ Requires Sync' },
                  { feature: 'Protocol Support', desktop: 'Standard', web: '24/7 Priority' },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-primary-50/30 transition-colors group">
                    <td className="py-6 px-10 font-black text-slate-900">{row.feature}</td>
                    <td className="py-6 px-10 text-center font-bold text-slate-400 italic">{row.desktop}</td>
                    <td className="py-6 px-10 text-center">
                      <div className="flex items-center justify-center gap-3">
                        <span className="font-black text-primary-600 italic text-lg">{row.web}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Dynamic FAQ */}
      <FAQAccordion />

      {/* Bottom CTA */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-primary-600 to-indigo-800 rounded-[4rem] p-20 text-center text-white shadow-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white opacity-5 rounded-full blur-[100px] -mr-48 -mt-48 group-hover:opacity-10 transition-all duration-1000" />
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight italic underline underline-offset-8 decoration-primary-300">
                Scale Your Practice Now
              </h2>
              <p className="text-2xl text-primary-50 mb-12 font-medium opacity-80 leading-relaxed">
                Join hundreds of clinical leaders using <span className="font-black text-white">My Clinic</span> to define the future of care.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <Link
                  to="/contact"
                  className="px-16 py-6 bg-white text-slate-900 rounded-3xl font-black text-xl shadow-2xl hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
                >
                  Initiate Deployment <ArrowRight size={24} strokeWidth={3} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
