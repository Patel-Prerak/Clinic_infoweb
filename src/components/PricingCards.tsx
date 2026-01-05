import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  period: string;
  cta: string;
  highlight: boolean;
  features: { name: string; included: boolean }[];
  storageLimit: string;
  supportLevel: string;
  color: string;
}

const plans: PricingPlan[] = [
  {
    name: 'Permanent Desktop App',
    description: 'Standalone application for your clinic workstation',
    price: '₹5,000',
    period: 'Setup + ₹5,000/Year',
    cta: 'Get Desktop App',
    highlight: true,
    storageLimit: 'Local Storage',
    supportLevel: 'Email & WhatsApp',
    color: 'from-primary-600 to-indigo-600',
    features: [
      { name: 'One-time ₹5,000 Setup Fee', included: true },
      { name: '₹5,000 Yearly Maintenance', included: true },
      { name: 'Travel Expenses (On-site setup)', included: true },
      { name: 'Unlimited Patient Records', included: true },
      { name: 'Consultation Tracking', included: true },
      { name: 'Works Without Internet', included: true },
      { name: 'Advanced Reports (PDF/Excel)', included: true },
      { name: 'Dashboard Analytics', included: true },
      { name: 'Clinic Branding', included: true },
      { name: 'Multi-user Access (Local)', included: true },
    ],
  },
  {
    name: 'Web Based Solution',
    description: 'Cloud-based access from anywhere',
    price: '₹2,000',
    period: 'Per Month',
    cta: 'Get Web Cloud',
    highlight: false,
    storageLimit: 'Unlimited Cloud',
    supportLevel: '24/7 Priority Support',
    color: 'from-purple-100 to-indigo-50',
    features: [
      { name: 'Mobile Responsive Interface', included: true },
      { name: 'Access from Any Device', included: true },
      { name: 'Automatic Cloud Backups', included: true },
      { name: 'Unlimited Patients', included: true },
      { name: 'Complete Patient Records', included: true },
      { name: 'Consultation Tracking & History', included: true },
      { name: 'Advanced Reports (All formats)', included: true },
      { name: 'Real-time Dashboard Analytics', included: true },
      { name: 'Professional Branding', included: true },
      { name: 'Unlimited Multi-user Access', included: true },
    ],
  },
];

export const PricingCards: React.FC = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-white via-primary-50/10 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24 animate-in fade-in slide-in-from-top-6 duration-700">
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Transparent <span className="text-primary-600 italic">Investment</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Choose the perfect solution for your clinic's needs. No hidden fees, just pure <span className="text-primary-600 font-bold">performance</span>.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-[2.5rem] overflow-hidden transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 group ${plan.highlight
                ? 'md:scale-105 shadow-[0_32px_64px_-16px_rgba(145,98,241,0.25)] ring-4 ring-primary-500/20'
                : 'shadow-2xl shadow-slate-200/50 hover:shadow-primary-600/10 border border-slate-100'
                }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card Background */}
              <div className={`p-10 h-full flex flex-col ${plan.highlight ? 'bg-slate-900' : 'bg-white'}`}>
                {/* Badge for Recommended */}
                {plan.highlight && (
                  <div className="absolute top-6 right-6 bg-primary-600 text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
                    Recommended
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-10 pt-4">
                  <h3 className={`text-3xl font-black mb-3 tracking-tight ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm font-medium leading-relaxed max-w-[240px] ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                    {plan.description}
                  </p>
                </div>

                {/* Pricing */}
                <div className="mb-10">
                  <div className={`flex items-baseline gap-2 mb-4 ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                    <span className="text-6xl font-black tracking-tighter italic">{plan.price}</span>
                    <span className={`text-sm font-bold uppercase tracking-wider ${plan.highlight ? 'text-primary-400' : 'text-primary-600'}`}>{plan.period}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className={`flex items-center gap-2 text-xs font-bold tracking-wide ${plan.highlight ? 'text-slate-500' : 'text-slate-400'}`}>
                      <span className="uppercase">Storage:</span>
                      <span className={plan.highlight ? 'text-slate-300' : 'text-slate-700'}>{plan.storageLimit}</span>
                    </div>
                    <div className={`flex items-center gap-2 text-xs font-bold tracking-wide ${plan.highlight ? 'text-slate-500' : 'text-slate-400'}`}>
                      <span className="uppercase">Support:</span>
                      <span className={plan.highlight ? 'text-slate-300' : 'text-slate-700'}>{plan.supportLevel}</span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  to="/contact"
                  className={`w-full py-5 rounded-2xl font-black transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:-translate-y-1 active:scale-95 mb-10 ${plan.highlight
                    ? 'bg-primary-600 text-white hover:bg-primary-500 shadow-primary-600/20'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                >
                  {plan.cta}
                  <ArrowRight size={20} strokeWidth={3} />
                </Link>

                {/* Features List */}
                <div className="space-y-4 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-4 group/item">
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${plan.highlight
                        ? 'bg-slate-800 text-primary-400 group-hover/item:bg-primary-600 group-hover/item:text-white'
                        : 'bg-primary-50 text-primary-600 group-hover/item:bg-primary-600 group-hover/item:text-white'
                        }`}>
                        <Check size={14} strokeWidth={4} />
                      </div>
                      <span
                        className={`text-sm font-bold transition-colors ${plan.highlight ? 'text-slate-400 group-hover/item:text-white' : 'text-slate-700 group-hover/item:text-slate-900'
                          }`}
                      >
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="bg-slate-900 rounded-[3rem] p-12 shadow-3xl text-center relative overflow-hidden group max-w-4xl mx-auto">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600 opacity-10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:opacity-20 transition-all duration-1000" />
          <div className="relative z-10">
            <div className="text-6xl mb-6 flex justify-center drop-shadow-2xl group-hover:scale-110 transition-transform duration-500">🛡️</div>
            <h3 className="text-3xl font-black text-white mb-4 tracking-tight">
              30-Day <span className="text-primary-400">Ironclad</span> Guarantee
            </h3>
            <p className="text-slate-400 font-medium text-lg max-w-2xl mx-auto leading-relaxed">
              Not satisfied with <span className="text-white font-bold tracking-tight">My Clinic</span>? Get 100% of your money back within 30 days. No questions asked. We're confident you'll find it indispensable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
