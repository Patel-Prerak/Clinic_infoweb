import React, { useState } from 'react';
import { ArrowRight, Users, FileText, BarChart3, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Sign Up & Setup',
    description: 'Create your account and configure your clinic profile in minutes',
    icon: <Users size={48} className="text-primary-600" />,
    details: [
      'Enter your clinic details (name, location, contact)',
      'Choose your preferred plan (Desktop App or Web Based Solution)',
      'Set up your team members and roles',
      'Configure clinic hours and specializations',
    ],
  },
  {
    number: 2,
    title: 'Add Patients',
    description: 'Quickly build your patient database with comprehensive profiles',
    icon: <FileText size={48} className="text-indigo-600" />,
    details: [
      'Create patient profiles with medical history',
      'Add emergency contacts and insurance details',
      'Upload relevant medical documents',
      'Set appointment preferences and allergies',
    ],
  },
  {
    number: 3,
    title: 'Schedule & Consult',
    description: 'Manage appointments and conduct seamless consultations',
    icon: <CheckCircle size={48} className="text-purple-600" />,
    details: [
      'Create and manage appointments with automated reminders',
      'Record consultation notes and treatments',
      'Prescribe medications and follow-up plans',
      'Send digital reports to patients',
    ],
  },
  {
    number: 4,
    title: 'Analyze & Grow',
    description: 'Track performance and make data-driven decisions',
    icon: <BarChart3 size={48} className="text-indigo-600" />,
    details: [
      'View comprehensive clinic analytics and metrics',
      'Track revenue, patient satisfaction, and growth',
      'Generate monthly/yearly reports',
      'Identify trends and optimize operations',
    ],
  },
];

export default function HowItWorks() {
  const [expandedStep, setExpandedStep] = useState<number | null>(0);

  return (
    <section className="py-32 bg-gradient-to-b from-white via-primary-50/20 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-24 animate-in fade-in slide-in-from-top-6 duration-700">
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            How it <span className="bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent italic">Works</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium">
            Get your clinic up and running in 4 simple steps. Seamless onboarding, powered by <span className="text-primary-600 font-bold">Deploy-X</span>.
          </p>
        </div>

        {/* Desktop View - Horizontal Timeline */}
        <div className="hidden lg:block mb-32 relative">
          {/* Connection Line with Gradient */}
          <div className="absolute top-12 left-[12%] right-[12%] h-[6px] bg-slate-100 rounded-full overflow-hidden shadow-inner">
            <div className="h-full bg-gradient-to-r from-primary-600 via-indigo-600 to-primary-600 animate-pulse" style={{ width: '100%' }} />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div key={step.number} className="text-center group animate-in fade-in slide-in-from-bottom-6 duration-700" style={{ animationDelay: `${idx * 150}ms` }}>
                {/* Step Circle */}
                <div className="flex justify-center mb-8 relative">
                  <div className="w-24 h-24 bg-white border-[6px] border-white rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-primary-600/20 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 relative z-20">
                    <span className="text-4xl font-black bg-gradient-to-br from-primary-600 to-indigo-700 bg-clip-text text-transparent">{step.number}</span>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary-100 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity" />
                </div>

                {/* Step Content */}
                <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-primary-600/5 transition-all duration-500">
                  <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-primary-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 font-medium text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View - Accordion */}
        <div className="lg:hidden space-y-4 max-w-2xl mx-auto mb-16">
          {steps.map((step) => (
            <div
              key={step.number}
              className="border-2 border-slate-100 rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50"
            >
              <button
                onClick={() => setExpandedStep(expandedStep === step.number ? null : step.number)}
                className="w-full bg-white p-8 flex items-start gap-5 hover:bg-slate-50 transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-600 shadow-lg shadow-primary-600/20">
                    <span className="text-2xl font-black text-white">{step.number}</span>
                  </div>
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">{step.title}</h3>
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mt-1">{step.description}</p>
                </div>
                <div className={`mt-4 transition-transform duration-500 ${expandedStep === step.number ? 'rotate-90' : ''}`}>
                  <ArrowRight size={24} className="text-primary-600" />
                </div>
              </button>

              {expandedStep === step.number && (
                <div className="bg-slate-50 px-8 py-8 border-t border-slate-100 animate-in slide-in-from-top-4 duration-500">
                  <ul className="space-y-4">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex gap-4 text-slate-700 font-bold">
                        <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" strokeWidth={3} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Details Section - Desktop Only */}
        <div className="hidden lg:block mb-32">
          <div className="grid grid-cols-2 gap-10 max-w-6xl mx-auto">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group bg-white rounded-[2rem] p-10 border-2 border-slate-50 hover:border-primary-100 shadow-xl shadow-slate-200/40 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 shadow-inner">
                    {step.icon}
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight leading-none">{step.title}</h3>
                </div>
                <p className="text-slate-600 mb-8 font-medium italic text-lg opacity-80 border-l-4 border-primary-200 pl-4">"{step.description}"</p>
                <ul className="space-y-4">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex gap-4 text-slate-700 font-bold group/item">
                      <div className="w-6 h-6 rounded-lg bg-green-50 flex items-center justify-center text-green-600 group-hover/item:bg-green-600 group-hover/item:text-white transition-colors flex-shrink-0 mt-0.5 shadow-sm">
                        <CheckCircle size={14} strokeWidth={3} />
                      </div>
                      <span className="group-hover/item:text-slate-900 transition-colors">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-primary-600 to-indigo-800 rounded-[3rem] p-12 text-white text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden group">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-all duration-1000" />
          <div className="relative z-10">
            <h3 className="text-5xl font-black mb-6 tracking-tight italic">Ready to Begin?</h3>
            <p className="text-xl mb-10 text-primary-100 font-medium max-w-xl mx-auto">
              Join 500+ clinics managing over 50,000+ patients with <span className="text-white font-black underline decoration-primary-400">My Clinic</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 hover:bg-slate-50 font-black py-5 px-12 rounded-2xl transition-all shadow-xl hover:scale-105 active:scale-95"
              >
                Get Started Now <ArrowRight size={24} strokeWidth={3} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
