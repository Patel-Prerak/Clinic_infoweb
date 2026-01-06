import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroInterface from '../assets/hero_interface.png';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-indigo-50 to-white pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Animated background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 opacity-15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 opacity-15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-violet-400 opacity-10 rounded-full blur-3xl animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-10 animate-in fade-in slide-in-from-left-6 duration-700">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-extrabold shadow-sm animate-bounce">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-600"></span>
                </span>
                ✨ Trusted by 500+ Clinics
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
                Modernize <br />
                <span className="bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent italic">Your Clinic</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-xl">
                The ultimate management system for healthcare professionals. Powered by Deploy-X, built for excellence.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto">
              <Link
                to="/pricing"
                className="px-8 sm:px-10 py-4 sm:py-5 bg-primary-600 hover:bg-primary-700 text-white rounded-2xl font-black shadow-2xl shadow-primary-600/30 transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                <span>Check Pricing</span>
                <ArrowRight size={22} strokeWidth={3} />
              </Link>
              <a
                href="https://deployx.in"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 sm:px-10 py-4 sm:py-5 bg-white text-slate-900 border-2 border-slate-200 rounded-2xl font-black shadow-xl hover:shadow-2xl hover:border-primary-300 transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                <span>Visit Deploy-X</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-12 pt-6">
              <div className="flex flex-col">
                <div className="text-4xl font-black text-slate-900">500+</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Clinics</div>
              </div>
              <div className="w-px h-12 bg-slate-200" />
              <div className="flex flex-col">
                <div className="text-4xl font-black text-slate-900">50K+</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Patients</div>
              </div>
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="hidden md:block animate-in fade-in slide-in-from-right-6 duration-1000">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-indigo-500/20 rounded-[2.5rem] blur-3xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-white p-4 rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-[1.03] border-4 border-white">
                <img
                  src={heroInterface}
                  alt="My Clinic Interface"
                  className="w-full h-auto rounded-[1.5rem] shadow-inner"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
