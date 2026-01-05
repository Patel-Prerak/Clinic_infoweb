import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-800 via-slate-700 to-slate-800 text-white border-t border-slate-600">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="animate-in fade-in slide-in-from-left-6 duration-700">
            <Link to="/" className="flex items-center space-x-3 mb-6 hover:scale-105 transition-transform duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg border border-white/10 group-hover:shadow-primary-500/20">
                <span className="text-white font-black text-xl">MC</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white">My Clinic</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary-400">Powered by Deploy-X</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Premium clinic management solutions designed for modern healthcare professionals. Streamline your practice with state-of-the-art technology.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-all hover:scale-110"><Facebook size={16} /></a>
              <a href="https://twitter.com" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-all hover:scale-110"><Twitter size={16} /></a>
              <a href="https://linkedin.com" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-all hover:scale-110"><Linkedin size={16} /></a>
            </div>
          </div>

          {/* Product Links */}
          <div className="animate-in fade-in slide-in-from-left-6 duration-700" style={{ animationDelay: '100ms' }}>
            <h4 className="font-bold text-lg mb-6 text-white border-b-2 border-primary-500 w-fit pb-1">Solutions</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/features" className="text-slate-400 hover:text-white transition duration-300 flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary-500 group-hover:scale-150 transition-all" /> Features</Link></li>
              <li><Link to="/pricing" className="text-slate-400 hover:text-white transition duration-300 flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary-500 group-hover:scale-150 transition-all" /> Pricing</Link></li>
              <li><Link to="/security" className="text-slate-400 hover:text-white transition duration-300 flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary-500 group-hover:scale-150 transition-all" /> Security</Link></li>
              <li><Link to="/how-it-works" className="text-slate-400 hover:text-white transition duration-300 flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary-500 group-hover:scale-150 transition-all" /> How it Works</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="animate-in fade-in slide-in-from-left-6 duration-700" style={{ animationDelay: '200ms' }}>
            <h4 className="font-bold text-lg mb-6 text-white border-b-2 border-primary-500 w-fit pb-1">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/testimonials" className="text-slate-400 hover:text-white transition duration-300 flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary-500 group-hover:scale-150 transition-all" /> Success Stories</Link></li>
              <li><Link to="/faq" className="text-slate-400 hover:text-white transition duration-300 flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary-500 group-hover:scale-150 transition-all" /> Help Center</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition duration-300 flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary-500 group-hover:scale-150 transition-all" /> Contact Us</Link></li>
              <li><a href="https://deployx.in" className="text-slate-400 hover:text-white transition duration-300 flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary-500 group-hover:scale-150 transition-all" /> Visit Deploy-X</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-in fade-in slide-in-from-left-6 duration-700" style={{ animationDelay: '300ms' }}>
            <h4 className="font-bold text-lg mb-6 text-white border-b-2 border-primary-500 w-fit pb-1">Get in Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3 group">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                  <Mail size={14} className="text-primary-400 group-hover:text-white" />
                </div>
                <a href="mailto:support@deployx.in" className="text-slate-400 hover:text-white transition duration-300">
                  support@deployx.in
                </a>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                  <Phone size={14} className="text-primary-400 group-hover:text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-xs uppercase tracking-tighter">Contact Person</span>
                  <a href="tel:6350462627" className="text-slate-400 hover:text-white transition duration-300">
                    DeployX - 6350462627
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3 group">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-primary-600 transition-colors mt-1">
                  <MapPin size={14} className="text-primary-400 group-hover:text-white" />
                </div>
                <span className="text-slate-400 leading-relaxed">
                  123 Medical Plaza, Sector 5<br />
                  New Delhi, India 110001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/50 pt-8 mt-4">
          <div className="flex flex-col items-center justify-center space-y-4 text-sm text-center">
            <p className="text-slate-500 font-medium">
              © {currentYear} <span className="text-slate-300">My Clinic</span>. All rights reserved. <span className="mx-2 hidden md:inline">|</span> <br className="md:hidden" /> Designed & Developed by <a href="https://deployx.in" className="text-primary-400 hover:underline">Deploy-X</a>
            </p>
            <div className="flex space-x-6 text-slate-500 font-medium">
              <Link to="/security" className="hover:text-white transition duration-300">Privacy</Link>
              <Link to="/faq" className="hover:text-white transition duration-300">Terms</Link>
              <Link to="/contact" className="hover:text-white transition duration-300">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
