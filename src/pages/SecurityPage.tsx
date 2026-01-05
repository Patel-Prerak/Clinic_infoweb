import React from 'react';
import { Shield, Lock, Database, CheckCircle, Award, ArrowRight } from 'lucide-react';
import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';

export const SecurityPage: React.FC = () => {
  const securityFeatures = [
    {
      icon: <Lock size={40} strokeWidth={2.5} />,
      title: 'Military-Grade Encryption',
      description: 'Patient records are protected using AES-256 encryption at rest and TLS 1.3 for all data in transit. Your practice data remains immutable and secure.',
    },
    {
      icon: <Database size={40} strokeWidth={2.5} />,
      title: 'Automated Redundancy',
      description: 'Continuous real-time backups across multiple geographic zones ensure zero data loss. We maintain a 99.99% infrastructure uptime SLA.',
    },
    {
      icon: <Shield size={40} strokeWidth={2.5} />,
      title: 'Regulatory Compliance',
      description: 'Full alignment with HIPAA, GDPR, and local healthcare regulations. We handle the complexity of compliance so you can focus on care.',
    },
    {
      icon: <Award size={40} strokeWidth={2.5} />,
      title: 'Certified Infrastructure',
      description: 'Built on ISO 27001 certified data centers with annual penetration testing and vulnerability assessments by third-party experts.',
    },
  ];

  const complianceItems = [
    { title: 'Data Sovereignty', description: 'Complete ownership and control over your records.', icon: '🔐' },
    { title: 'Granular Access', description: 'Advanced role-based permissions with detailed logs.', icon: '🔑' },
    { title: 'Portability', description: 'Extract your data in standard formats at any time.', icon: '👤' },
    { title: 'Zero Trust', description: 'Least-privilege architecture for maximum security.', icon: '🔒' },
    { title: 'Resilience', description: 'Automated point-in-time recovery capabilities.', icon: '💾' },
    { title: 'Proactive Defense', description: 'AI-driven threat detection and real-time monitoring.', icon: '👁️' },
  ];

  const trustBadges = [
    { title: 'ISO 27001', subtitle: 'Global Standard', color: 'bg-indigo-50 border-indigo-100' },
    { title: 'HIPAA', subtitle: 'Health Data Trust', color: 'bg-green-50 border-green-100' },
    { title: 'GDPR', subtitle: 'Privacy Shield', color: 'bg-primary-50 border-primary-100' },
    { title: 'SOC 2', subtitle: 'Systems Integrity', color: 'bg-slate-50 border-slate-200' },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100/30 blur-[100px] rounded-full -mr-48 -mt-48" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-top-10 duration-1000">
              <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-none">
                Security by <span className="bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent italic">Design</span>
              </h1>
              <p className="text-2xl text-slate-600 font-medium leading-relaxed mb-12">
                Your practice data is fortified with the same infrastructure that protects the world's leading financial institutions. Powered by <span className="text-primary-600 font-black">Deploy-X</span>.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {trustBadges.map((badge, idx) => (
                  <div
                    key={idx}
                    className={`${badge.color} border-2 rounded-2xl px-8 py-4 text-center shadow-lg shadow-slate-200/50 hover:scale-105 transition-transform`}
                  >
                    <p className="font-black text-slate-900 text-lg uppercase tracking-tight">{badge.title}</p>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">{badge.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Security Features Grid */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-24">
                <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tight italic">Fortress Ecosystem</h2>
                <div className="h-1.5 w-24 bg-primary-600 mx-auto rounded-full" />
              </div>
              <div className="grid md:grid-cols-2 gap-10">
                {securityFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-[2.5rem] p-12 border-2 border-slate-50 shadow-2xl shadow-slate-200/40 hover:border-primary-100 hover:-translate-y-2 transition-all duration-500 group"
                  >
                    <div className="w-20 h-20 rounded-3xl bg-primary-50 flex items-center justify-center text-primary-600 mb-8 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 shadow-inner">
                      {feature.icon}
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">{feature.title}</h3>
                    <p className="text-slate-500 font-medium text-lg leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Standards Table */}
        <section className="py-32 bg-slate-900 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-black text-white mb-20 text-center tracking-tight">Compliance <span className="text-primary-400 italic">Benchmarks</span></h2>
              <div className="grid md:grid-cols-3 gap-8">
                {complianceItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white/5 backdrop-blur-xl rounded-[2rem] p-10 border border-white/10 hover:bg-white/10 transition-all duration-500 group"
                  >
                    <div className="text-6xl mb-8 drop-shadow-2xl group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                    <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{item.title}</h3>
                    <p className="text-slate-400 font-medium text-lg leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tactical Defense List */}
        <section className="py-32 bg-white container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">Systematic <span className="text-primary-600">Protection</span></h2>
              <p className="text-xl text-slate-500 font-medium">Six layers of security protocols active 24/7/365.</p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  title: 'Transport Layer Security',
                  description: 'All traffic is tunneled through TLS 1.3 with Perfect Forward Secrecy. Your data is invisible to observers from the moment you click.',
                  color: 'primary'
                },
                {
                  title: 'Encrypted Persistence',
                  description: 'Database volumes are encrypted using AWS KMS managed keys with AES-256 standard. Only secure application nodes have decryption capability.',
                  color: 'indigo'
                },
                {
                  title: 'Identity Orchestration',
                  description: 'Multi-factor authentication (MFA) is standard. We utilize zero-trust access tokens with automatic expiration and rotation.',
                  color: 'purple'
                },
                {
                  title: 'Vulnerability Intelligence',
                  description: 'Continuous scanning for CVEs and configuration drift. Regular manual penetration tests simulate real-world attacks to find gaps before they exist.',
                  color: 'blue'
                },
                {
                  title: 'Disaster Sovereignty',
                  description: 'Immutable backups are air-gapped from live systems. In extreme failure scenarios, full recovery is achievable within 60 minutes.',
                  color: 'green'
                },
                {
                  title: 'Real-time Telemetry',
                  description: 'Integrated Sentry and Datadog monitoring with immediate alerting for any security-relevant event or abnormal access pattern.',
                  color: 'slate'
                },
              ].map((item, idx) => (
                <div key={idx} className="group bg-white rounded-3xl p-8 border-2 border-slate-50 hover:border-primary-100 shadow-xl shadow-slate-200/30 transition-all duration-500 hover:-translate-x-2">
                  <div className="flex gap-8 items-center">
                    <div className="w-12 h-12 rounded-2xl bg-primary-100 flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 flex-shrink-0 shadow-inner">
                      <CheckCircle size={24} strokeWidth={3} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">{item.title}</h3>
                      <p className="text-slate-500 font-medium leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Stats */}
        <section className="py-32 bg-slate-50 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-black text-slate-900 mb-24 text-center tracking-tight italic italic">Integrity by the Numbers</h2>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { number: '99.99%', label: 'Uptime SLA' },
                  { number: '0', label: 'Breach Incidents' },
                  { number: '365', label: 'Day Data History' },
                  { number: '24/7', label: 'Active Defense' },
                ].map((metric, idx) => (
                  <div key={idx} className="bg-white rounded-[2.5rem] p-12 shadow-2xl shadow-slate-200/50 border-2 border-transparent hover:border-primary-500 transition-colors text-center group">
                    <p className="text-5xl font-black text-primary-600 mb-2 italic tracking-tighter group-hover:scale-110 transition-transform">{metric.number}</p>
                    <p className="text-slate-400 font-black uppercase tracking-widest text-xs">{metric.label}</p>
                  </div>
                ))}
              </div>
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
                  Secure Your Practice
                </h2>
                <p className="text-2xl text-primary-50 mb-12 font-medium opacity-80 leading-relaxed">
                  Join 500+ clinics that have entrusted their digital clinical records to <span className="font-black text-white">My Clinic</span>.
                </p>
                <div className="flex flex-col sm:flex-row gap-8 justify-center">
                  <Link
                    to="/contact"
                    className="px-16 py-6 bg-white text-slate-900 rounded-3xl font-black text-xl shadow-2xl hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
                  >
                    Deploy Secure Solution <ArrowRight size={24} strokeWidth={3} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};
