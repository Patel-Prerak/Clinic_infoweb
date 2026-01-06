import React from 'react';
import { Users, Stethoscope, BarChart3, Download, Calendar, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import analyticsDashboard from '../assets/analytics_dashboard.png';
import consultationEntry from '../assets/consultation_entry.png';

interface Feature {
  icon: React.ComponentType<{ size: number; className: string }>;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    icon: Users,
    title: 'Patient Management',
    description: 'Comprehensive patient records with automatic age updates, easy search, and categorization of new and regular patients.',
    color: 'bg-primary-600',
  },
  {
    icon: Stethoscope,
    title: 'Consultation Tracking',
    description: 'Record detailed consultations with complaints, treatments, advice, and charges. Maintain complete patient history.',
    color: 'bg-indigo-600',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reports',
    description: 'Real-time dashboard with patient statistics, consultation trends, revenue tracking, and gender-wise distribution.',
    color: 'bg-primary-600',
  },
  {
    icon: Download,
    title: 'Data Export',
    description: 'Export comprehensive reports as Excel, CSV, or PDF. Download consultation logbooks and detailed analytics.',
    color: 'bg-slate-800',
  },
  {
    icon: Calendar,
    title: 'Schedule Management',
    description: 'Manage consultations with date and time tracking. Organize your clinic workflow efficiently.',
    color: 'bg-indigo-800',
  },
  {
    icon: Lock,
    title: 'Secure Records',
    description: 'SSL encryption, secure backups, SQL injection prevention, and GDPR compliance for patient data protection.',
    color: 'bg-slate-900',
  },
];

export const FeaturesShowcase: React.FC = () => {
  return (
    <section className="py-16 md:py-32 bg-gradient-to-b from-white via-indigo-50/30 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 animate-in fade-in slide-in-from-top-6 duration-700">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 mb-4 md:mb-6 tracking-tight">
            Engineered for <span className="bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent italic">Excellence</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Everything you need to streamline your practice and provide world-class patient care.
          </p>
        </div>

        {/* Features Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: Features Grid */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-10 rounded-3xl bg-white border-2 border-slate-100 hover:border-primary-200 shadow-xl shadow-slate-200/50 hover:shadow-primary-600/10 transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`relative w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl mb-8`}
                  >
                    <IconComponent size={32} className="text-white" />
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-primary-600 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Visual Showcase Section */}
        <div className="mt-32 space-y-32">
          {/* Showcase 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left-6 duration-1000">
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Intuitive <span className="text-primary-600 underline decoration-primary-200 underline-offset-8">Clinical Insights</span>
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Get a birds-eye view of your entire clinic. From total patients to daily revenue, everything is beautifully visualized and updated in real-time on your dashboard.
              </p>
              <ul className="space-y-4">
                {['Real-time Analytics', 'Daily Statistics', 'Interactive Charts', 'Revenue Tracking'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 font-bold">
                    <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative group animate-in fade-in slide-in-from-right-6 duration-1000">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-600/10 to-indigo-600/10 rounded-[2.5rem] blur-2xl group-hover:opacity-100 transition duration-700"></div>
              <div className="relative bg-white p-3 rounded-[2.5rem] shadow-2xl border-2 border-slate-100 group-hover:scale-[1.02] transition-transform duration-500">
                <img src={analyticsDashboard} alt="Analytics Dashboard" className="rounded-[2rem] w-full" />
              </div>
            </div>
          </div>

          {/* Showcase 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group order-2 lg:order-1 animate-in fade-in slide-in-from-left-6 duration-1000">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600/10 to-primary-600/10 rounded-[2.5rem] blur-2xl group-hover:opacity-100 transition duration-700"></div>
              <div className="relative bg-white p-3 rounded-[2.5rem] shadow-2xl border-2 border-slate-100 group-hover:scale-[1.02] transition-transform duration-500">
                <img src={consultationEntry} alt="Consultation Entry" className="rounded-[2rem] w-full" />
              </div>
            </div>
            <div className="space-y-8 order-1 lg:order-2 animate-in fade-in slide-in-from-right-6 duration-1000 text-right">
              <div className="flex justify-start lg:justify-end">
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  Seamless <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">Data Entry</span>
                </h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Recording consultations has never been easier. Our specialized interface allows you to log symptoms, advice, provider details, and prescriptions in seconds.
              </p>
              <ul className="space-y-4">
                {['Smart Auto-fill', 'Medical History Lookup', 'Prescription Builder', 'Instant Receipts'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 font-bold justify-end">
                    {item}
                    <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 md:mt-32 text-center bg-slate-900 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 relative overflow-hidden group shadow-3xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl -mr-48 -mt-48 group-hover:bg-primary-600/20 transition-all duration-1000" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -ml-48 -mb-48 group-hover:bg-indigo-600/20 transition-all duration-1000" />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight">
              Ready to Upgrade <span className="text-primary-400 italic">Your Practice?</span>
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link to="/pricing" className="px-12 py-5 bg-primary-600 text-white rounded-2xl font-black shadow-xl hover:shadow-primary-600/40 hover:bg-primary-500 transition-all hover:scale-105 active:scale-95">
                Check Pricing
              </Link>
              <Link to="/contact" className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-black shadow-xl hover:shadow-white/10 hover:bg-slate-50 transition-all hover:scale-105 active:scale-95">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
