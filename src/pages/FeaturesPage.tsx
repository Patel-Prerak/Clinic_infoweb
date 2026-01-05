import React from 'react';
import { Layout } from '../components/Layout';
import { FeaturesShowcase } from '../components/FeaturesShowcase';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, ShieldCheck, RefreshCw, BarChart3, Clock, Smartphone } from 'lucide-react';

export const FeaturesPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white via-primary-50/20 to-white py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/30 blur-[120px] -z-10 rounded-full" />
          <div className="text-center max-w-4xl mx-auto animate-in fade-in slide-in-from-top-10 duration-1000">
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-none">
              Elite <span className="bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent italic">Capabilities</span>
            </h1>
            <p className="text-2xl text-slate-600 font-medium leading-relaxed">
              Every tool in <span className="text-primary-600 font-black">My Clinic</span> is engineered to eliminate overhead and maximize clinical focus.
            </p>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <FeaturesShowcase />

      {/* Grid Features */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              Why visionaries choose <span className="text-primary-600">My Clinic</span>
            </h2>
            <div className="h-1.5 w-24 bg-primary-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { Icon: Zap, title: 'Zero-Friction UI', desc: 'Designed for high-volume environments where every second counts.' },
              { Icon: RefreshCw, title: 'Hyper-Sync', desc: 'Instant data propagation across all authorized practice nodes.' },
              { Icon: ShieldCheck, title: 'Fortress Security', desc: 'Enterprise-grade encryption protecting sensitive clinical records.' },
              { Icon: BarChart3, title: 'Pulse Analytics', desc: 'Real-time financial and clinical telemetry at your fingertips.' },
              { Icon: Smartphone, title: 'Mobile First', desc: 'Fluid experience across all mobile and tablet form factors.' },
              { Icon: Clock, title: 'One-Click Deployment', desc: 'Transition your entire practice in under 24 hours with expert assistance.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-[2.5rem] p-10 shadow-xl shadow-slate-200/50 border-2 border-transparent hover:border-primary-100 hover:-translate-y-2 transition-all duration-500 group">
                <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center text-primary-600 mb-8 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 shadow-inner">
                  <item.Icon size={32} strokeWidth={2.5} />
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

      {/* Performance Comparison */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight italic">Performance Archetype</h2>
            <p className="text-xl text-slate-500 font-medium">Measuring the impact of My Clinic against traditional practice management.</p>
          </div>

          <div className="max-w-5xl mx-auto overflow-hidden rounded-[3rem] border-2 border-slate-50 shadow-3xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="py-8 px-10 font-black uppercase tracking-widest text-sm">Operational Task</th>
                  <th className="py-8 px-10 font-black uppercase tracking-widest text-sm opacity-50">Manual Lifecycle</th>
                  <th className="py-8 px-10 font-black uppercase tracking-widest text-sm text-primary-400 italic">My Clinic Advantage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { task: 'Patient Record Retrieval', manual: '5-10 Minutes', clinic: '< 3 Seconds' },
                  { task: 'Consultation Finalization', manual: '15+ Minutes', clinic: '90 Seconds' },
                  { task: 'Financial Reconciliation', manual: '2-4 Hours', clinic: 'Automated' },
                  { task: 'Prescription Verification', manual: 'Manual Check', clinic: 'Instant Audit' },
                  { task: 'Data Integrity Audit', manual: 'Weekly/Monthly', clinic: 'Continuous' },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-primary-50/30 transition-colors group">
                    <td className="py-6 px-10 font-black text-slate-900">{row.task}</td>
                    <td className="py-6 px-10 font-bold text-slate-400">{row.manual}</td>
                    <td className="py-6 px-10">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                        <span className="font-black text-primary-600 italic text-lg">{row.clinic}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-primary-600 to-indigo-800 rounded-[4rem] p-20 text-center text-white shadow-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white opacity-5 rounded-full blur-[100px] -mr-48 -mt-48 group-hover:opacity-10 transition-all duration-1000" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight italic underline underline-offset-8 decoration-primary-300">
                Upgrade Your Workflow
              </h2>
              <p className="text-2xl text-primary-50 mb-12 font-medium opacity-80 leading-relaxed">
                Experience the surgical precision of <span className="font-black text-white">My Clinic</span> and reclaim your clinical excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <Link
                  to="/pricing"
                  className="px-16 py-6 bg-white text-slate-900 rounded-3xl font-black text-xl shadow-2xl hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
                >
                  Accelerate My Practice <ArrowRight size={24} strokeWidth={3} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
