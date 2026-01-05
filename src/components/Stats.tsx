import React from 'react';
import { TrendingUp, Users, CheckCircle2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface StatItem {
  icon: React.ComponentType<{ size: number; className: string }>;
  value: string;
  label: string;
  description: string;
  color: string;
}

const stats: StatItem[] = [
  {
    icon: Users,
    value: '500+',
    label: 'Active Clinics',
    description: 'Healthcare professionals trusting our platform',
    color: 'from-primary-500 to-indigo-600',
  },
  {
    icon: TrendingUp,
    value: '50,000+',
    label: 'Patients Managed',
    description: 'Patient records safely stored and organized',
    color: 'from-indigo-500 to-purple-600',
  },
  {
    icon: CheckCircle2,
    value: '2,50,000+',
    label: 'Consultations Processed',
    description: 'Detailed consultation records maintained',
    color: 'from-primary-600 to-primary-700',
  },
  {
    icon: Zap,
    value: '40+',
    label: 'Hours Saved Weekly',
    description: 'Average time saved per clinic',
    color: 'from-indigo-600 to-indigo-700',
  },
];

export const Stats: React.FC = () => {
  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600 rounded-full blur-[120px] -ml-24 -mt-24" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600 rounded-full blur-[120px] -mr-24 -mb-24" />
      </div>

      <div className="container mx-auto px-4 relative z-10 transition-all duration-1000">
        {/* Section Header */}
        <div className="text-center mb-24 animate-in fade-in slide-in-from-top-6 duration-700">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white tracking-tight">
            Proven <span className="text-primary-400 italic">Excellence</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
            Real impact from real clinics using <span className="text-white font-bold">My Clinic</span>.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group p-10 rounded-[2.5rem] bg-slate-800/50 backdrop-blur-xl border border-slate-700 hover:border-primary-500/50 transition-all duration-500 hover:-translate-y-3 cursor-default animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500 shadow-2xl shadow-black/40`}
                >
                  <IconComponent size={32} className="text-white" />
                </div>

                {/* Value */}
                <div className="text-5xl font-black mb-4 text-white tracking-tighter group-hover:text-primary-400 transition-colors">
                  {stat.value}
                </div>

                {/* Label */}
                <h3 className="text-xl font-bold mb-4 text-slate-200 group-hover:text-white transition-colors">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed font-medium text-sm group-hover:text-slate-300 transition-colors">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <Link
            to="/contact"
            className="group px-12 py-5 bg-gradient-to-r from-primary-600 to-indigo-600 text-white rounded-2xl font-black shadow-2xl shadow-primary-900/40 hover:shadow-primary-600/50 transition-all duration-500 hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-3 mx-auto"
          >
            <span>Start Your Success Story</span>
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
