import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    category: 'Getting Started',
    question: 'How do I start using My Clinic?',
    answer: 'Getting started is simple! Contact us for a personalized setup. Our team will handle the deployment and configuration for you. The entire process is managed by Deploy-X experts to ensure a seamless transition.',
  },
  {
    category: 'Getting Started',
    question: 'Do I need technical knowledge?',
    answer: 'Not at all! My Clinic is designed for healthcare professionals, not IT experts. The interface is intuitive and user-friendly. We provide comprehensive training and 24/7 technical support.',
  },
  {
    category: 'Getting Started',
    question: 'Can I import my existing patient data?',
    answer: 'Yes! We support importing patient data from Excel, CSV, and other common formats. Our team handles the data migration for you at no additional cost to ensure accuracy.',
  },
  {
    category: 'Security & Data',
    question: 'How secure is my patient data?',
    answer: 'We use enterprise-grade SSL encryption and automated daily backups on secure infrastructure. Our system complies with international data protection standards, including GDPR.',
  },
  {
    category: 'Security & Data',
    question: 'Is my data backed up automatically?',
    answer: 'Yes, automatic daily backups are included in all our plans. Your data is redundant across multiple secure locations and can be restored instantly if needed.',
  },
  {
    category: 'Security & Data',
    question: 'Can I export my data at any time?',
    answer: 'Absolutely! You retain full ownership of your data. You can export all records in CSV or Excel format anytime with no restrictions or lock-in periods.',
  },
  {
    category: 'Features',
    question: 'Multi-user concurrent access?',
    answer: 'Yes! Both our Desktop and Web solutions support multiple concurrent users. You can define specific roles and access levels for your staff and associate doctors.',
  },
  {
    category: 'Features',
    question: 'How do I generate reports?',
    answer: 'Reports are generated instantly with a single click. Choose from daily statistics, monthly financial summaries, or detailed patient demographics. Export them in PDF, Excel, or CSV.',
  },
  {
    category: 'Features',
    question: 'Is it customizable for specialties?',
    answer: 'My Clinic works seamlessly across all medical specialties. Whether you are a general practitioner, dentist, or specialist, our flexible interface adapts to your workflow.',
  },
  {
    category: 'Support',
    question: 'What support options are available?',
    answer: 'We provide 24/7 priority support via WhatsApp, Phone, and Email. Our technical team is always available to assist with any queries or specialized setup requirements.',
  },
  {
    category: 'Billing',
    question: 'Is there a money-back guarantee?',
    answer: 'Yes! We offer a 30-day ironclad money-back guarantee. If you\'re not completely satisfied with the system, we\'ll refund your investment in full, no questions asked.',
  },
];

export const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = React.useState<string>('All');

  const categories = ['All', ...new Set(faqItems.map(item => item.category))];
  const filteredFAQs = selectedCategory === 'All'
    ? faqItems
    : faqItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24 animate-in fade-in slide-in-from-top-6 duration-700">
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Common <span className="bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent italic">Questions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Find answers to frequently asked questions about <span className="text-primary-600 font-bold">My Clinic</span>.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setOpenIndex(null);
              }}
              className={`px-8 py-3 rounded-2xl font-black transition-all duration-300 shadow-lg ${selectedCategory === category
                ? 'bg-primary-600 text-white shadow-primary-600/20 scale-105'
                : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {filteredFAQs.map((faq) => {
            const actualIndex = faqItems.indexOf(faq);
            const isOpen = openIndex === actualIndex;
            return (
              <div
                key={actualIndex}
                className={`group rounded-[2rem] border-2 transition-all duration-500 ${isOpen
                  ? 'border-primary-500 bg-primary-50/30 shadow-2xl shadow-primary-500/10'
                  : 'border-slate-100 bg-white hover:border-slate-200 shadow-xl shadow-slate-200/50'
                  }`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : actualIndex)
                  }
                  className="w-full p-8 flex items-center justify-between text-left"
                >
                  <div className="flex-grow pr-8">
                    <div className={`text-xs font-black uppercase tracking-widest mb-3 ${isOpen ? 'text-primary-600' : 'text-slate-400'}`}>
                      {faq.category}
                    </div>
                    <h3 className={`text-xl font-black tracking-tight transition-colors ${isOpen ? 'text-slate-900' : 'text-slate-800'}`}>
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-primary-600 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'
                    }`}>
                    <ChevronDown
                      size={24}
                      className={`transition-transform duration-500 stroke-[3px] ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-10 pb-10 animate-in slide-in-from-top-4 duration-500 mt-2">
                    <p className="text-slate-600 leading-relaxed font-medium text-lg border-l-4 border-primary-200 pl-6">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Need Help? */}
        <div className="mt-32 bg-slate-900 rounded-[3rem] p-16 text-center max-w-4xl mx-auto shadow-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600 opacity-10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:opacity-20 transition-all duration-1000" />
          <div className="relative z-10">
            <h3 className="text-4xl font-black text-white mb-6 tracking-tight italic">
              Still have questions?
            </h3>
            <p className="text-slate-400 font-medium mb-12 text-lg max-w-xl mx-auto">
              Our support team is here to help. Reach out to us and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="px-12 py-5 bg-primary-600 text-white rounded-2xl font-black shadow-xl hover:shadow-primary-600/40 hover:bg-primary-500 transition-all hover:scale-105 active:scale-95 inline-flex items-center justify-center"
              >
                Contact Support
              </Link>
              <a
                href="tel:6350462627"
                className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-black shadow-xl hover:shadow-white/10 hover:bg-slate-50 transition-all hover:scale-105 active:scale-95 inline-flex items-center justify-center"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
