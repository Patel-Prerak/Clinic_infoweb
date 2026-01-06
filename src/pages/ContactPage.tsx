import React from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, ShieldCheck, Zap, Globe, MessageSquare } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';

export const ContactPage: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-white py-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white via-primary-50/20 to-white py-32 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary-100/30 blur-[60px] md:blur-[120px] -z-10 rounded-full" />
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-slate-900 mb-6 md:mb-8 tracking-tighter leading-none animate-in fade-in slide-in-from-top-10 duration-1000">
              Direct <span className="bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent italic">Consultation</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-10 duration-1000 px-4 md:px-0">
              Architecting the future of your clinic. Connect with the <span className="text-primary-600 font-black">Deploy-X</span> engineering team.
            </p>
          </div>
        </section>

        {/* Global Support Channels */}
        <section className="container mx-auto px-4 -mt-10 md:-mt-20 mb-16 md:mb-32 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { Icon: MessageSquare, title: 'Live Response', desc: 'Sync within 2 hours', color: 'bg-primary-50 text-primary-600' },
              { Icon: Phone, title: 'Voice Support', desc: 'Mon-Sat 10AM-8PM', color: 'bg-indigo-50 text-indigo-600' },
              { Icon: Globe, title: 'Global Email', desc: '24/7 Monitoring', color: 'bg-purple-50 text-purple-600' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border-2 border-white shadow-2xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-500">
                <div className="flex items-center gap-4">
                  <div className={`${stat.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
                    <stat.Icon size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900 tracking-tight">{stat.title}</h3>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">{stat.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Main Interface Group */}
        <section className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid lg:grid-cols-5 gap-20 max-w-7xl mx-auto">
            {/* Contact Form Node */}
            <div className="lg:col-span-3">
              <div className="bg-slate-50 rounded-3xl md:rounded-[3rem] p-6 md:p-12 border-2 border-slate-100 shadow-inner group">
                <div className="mb-12">
                  <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Send a Protocol</h2>
                  <p className="text-lg text-slate-500 font-medium">
                    Initiate a formal inquiry for clinical deployment or technical support.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>

            {/* Direct Channels Node */}
            <div className="lg:col-span-2 space-y-10">
              {/* Email Card */}
              {/* Email Card */}
              <div className="bg-white rounded-3xl p-6 border-2 border-slate-50 shadow-3xl hover:border-primary-100 transition-all duration-500 group">
                <div className="flex gap-6 items-start">
                  <div className="bg-primary-600 w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-xl group-hover:rotate-12 transition-transform">
                    <Mail size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900 mb-2 tracking-tight">Technical Direct</h3>
                    <a
                      href="mailto:support@deployx.in"
                      className="text-2xl font-black text-primary-600 hover:text-primary-700 transition-colors block mb-2"
                    >
                      support@deployx.in
                    </a>
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Managed Inbox • Priority Response</p>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              {/* Phone Card */}
              <div className="bg-white rounded-3xl p-6 border-2 border-slate-50 shadow-3xl hover:border-indigo-100 transition-all duration-500 group">
                <div className="flex gap-6 items-start">
                  <div className="bg-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-xl group-hover:rotate-12 transition-transform">
                    <Phone size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900 mb-2 tracking-tight">Engineering Line</h3>
                    <a
                      href="tel:6350462627"
                      className="text-2xl font-black text-indigo-600 hover:text-indigo-700 transition-colors block mb-2"
                    >
                      +91 63504 62627
                    </a>
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Voice & WhatsApp • Architecture Queries</p>
                  </div>
                </div>
              </div>

              {/* Address Card */}
              {/* Address Card */}
              <div className="bg-white rounded-3xl p-6 border-2 border-slate-50 shadow-3xl hover:border-purple-100 transition-all duration-500 group">
                <div className="flex gap-6 items-start">
                  <div className="bg-purple-600 w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-xl group-hover:rotate-12 transition-transform">
                    <MapPin size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900 mb-2 tracking-tight">Main Headquarters</h3>
                    <p className="text-lg text-slate-600 font-bold leading-relaxed">
                      India Remote
                    </p>
                  </div>
                </div>
              </div>

              {/* Help Center CTA */}
              <div className="bg-slate-900 rounded-[2.5rem] p-12 text-white shadow-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600 opacity-20 rounded-full blur-2xl -mr-16 -mt-16" />
                <h3 className="text-2xl font-black mb-4 italic tracking-tight underline underline-offset-8 decoration-primary-500">Help Center</h3>
                <p className="text-slate-400 font-medium mb-8">
                  Find answers to common questions about deployment, security, and clinic management.
                </p>
                <Link
                  to="/faq"
                  className="inline-flex items-center gap-3 text-primary-400 hover:text-primary-300 font-black uppercase tracking-widest text-sm transition-all hover:gap-6"
                >
                  View FAQ <ArrowRight size={20} strokeWidth={3} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Global Security Grid */}
        <section className="container mx-auto px-4 py-32">
          <div className="max-w-6xl mx-auto bg-slate-950 rounded-[4rem] p-20 shadow-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-900 opacity-20 rounded-full blur-[120px] -mr-64 -mt-64" />
            <div className="relative z-10">
              <h3 className="text-5xl font-black text-white mb-16 text-center italic tracking-tighter leading-none">
                Engineering <span className="bg-gradient-to-r from-primary-400 to-indigo-400 bg-clip-text text-transparent underline underline-offset-8 decoration-primary-800">Assurance</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-20">
                {[
                  { Icon: ShieldCheck, title: 'Immutable Guardian', desc: 'Every byte of patient telemetry is encrypted via AES-256 protocols and distributed across high-availability matrices.' },
                  { Icon: Zap, title: 'Latency Optimization', desc: 'Engineered for high-volume clinical nodes with 99.9% operational uptime and asynchronous data syncing.' },
                  { Icon: Globe, title: 'Scale Invariant', desc: 'From mobile practices to enterprise-level hospital groups, our architecture scales with Zero re-configuration.' },
                  { Icon: Clock, title: 'Continuous Audit', desc: 'Real-time monitoring and perpetual security patch propagation ensures your compliance is never at risk.' },
                ].map((item, idx) => (
                  <div key={idx} className="group/item">
                    <div className="flex items-center gap-4 mb-6 text-primary-400">
                      <item.Icon size={32} strokeWidth={2.5} />
                      <h4 className="font-black text-white text-xl tracking-tight uppercase">{item.title}</h4>
                    </div>
                    <p className="text-slate-400 font-medium leading-relaxed group-hover/item:text-slate-300 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};
