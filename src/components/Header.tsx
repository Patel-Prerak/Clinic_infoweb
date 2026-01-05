import React from 'react';
import { Menu as MenuIcon, X, ChevronDown, Rocket, Shield, HelpCircle, Users, Layout as LayoutIcon, Globe, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const location = useLocation();

  const isLinkActive = (path: string) => location.pathname === path;

  const secondaryLinks = [
    { name: 'How It Works', path: '/how-it-works', icon: Rocket },
    { name: 'Testimonials', path: '/testimonials', icon: Users },
    { name: 'Security', path: '/security', icon: Shield },
    { name: 'FAQ', path: '/faq', icon: HelpCircle },
    { name: 'Contact', path: '/contact', icon: Phone },
  ];

  React.useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        // Always show at top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
        setDropdownOpen(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <div className={`fixed left-0 right-0 z-50 px-4 md:px-6 transition-all duration-300 ${isVisible ? 'top-6' : '-top-32'}`}>
      <header className="container mx-auto max-w-7xl">
        <div className="bg-white/80 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(145,98,241,0.15)] rounded-[2.5rem] px-4 md:px-6 py-3 flex items-center gap-3 transition-all duration-500 hover:shadow-[0_8px_40px_0_rgba(145,98,241,0.25)] ring-1 ring-slate-900/5">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 md:space-x-3 hover:scale-105 transition-transform duration-300 group flex-shrink-0">
            <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-primary-600 via-primary-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-primary-500/30 border border-primary-400/30 group-hover:border-primary-300/50 transition-all">
              <span className="text-white font-black text-base md:text-lg tracking-tighter drop-shadow-md">MC</span>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-base md:text-lg tracking-tight text-slate-900 leading-none">
                My Clinic
              </span>
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] text-primary-600 mt-0.5">
                Deploy-X
              </span>
            </div>
          </Link>

          {/* Spacer to push menu to right */}
          <div className="flex-grow hidden lg:block"></div>

          {/* Core Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1 bg-slate-100/50 p-1 rounded-2xl">
            {[
              { name: 'Home', path: '/' },
              { name: 'Features', path: '/features' },
              { name: 'Pricing', path: '/pricing' },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-6 py-2 rounded-xl text-sm font-black transition-all duration-300 whitespace-nowrap ${isLinkActive(link.path)
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'
                  }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Dropdown Toggle */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onMouseEnter={() => setDropdownOpen(true)}
                className={`flex items-center gap-2 px-6 py-2 rounded-xl text-sm font-black transition-all duration-300 whitespace-nowrap ${dropdownOpen ? 'text-primary-600' : 'text-slate-500 hover:text-slate-900'
                  }`}
              >
                Explore <ChevronDown size={16} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Dropdown */}
              {dropdownOpen && (
                <div
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="absolute top-full right-0 mt-4 w-72 bg-white rounded-[2rem] shadow-3xl border border-slate-100 p-4 animate-in fade-in zoom-in-95 duration-200"
                >
                  <div className="grid gap-2">
                    {secondaryLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors group/item"
                      >
                        <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center group-hover/item:bg-primary-600 group-hover/item:text-white transition-all">
                          <link.icon size={20} />
                        </div>
                        <div>
                          <p className="text-sm font-black text-slate-900">{link.name}</p>
                          <p className="text-[10px] font-bold text-slate-400 group-hover/item:text-primary-600 transition-colors">Access Panel</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-2 md:space-x-3 flex-shrink-0">
            <a
              href="https://deployx.in"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 md:p-3 text-slate-400 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all"
              title="Visit Deploy-X"
            >
              <Globe size={18} className="md:w-5 md:h-5" />
            </a>
            <Link
              to="/pricing"
              className="px-4 md:px-6 py-2 md:py-2.5 bg-slate-900 border-2 border-slate-900 hover:bg-white hover:text-slate-900 text-white rounded-2xl font-black text-xs md:text-sm transition-all shadow-xl hover:shadow-slate-200 whitespace-nowrap"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-xl transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>

        {/* Mobile Island Expansion */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-[2.5rem] shadow-3xl border border-slate-100 p-6 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { name: 'Home', path: '/', icon: LayoutIcon },
                { name: 'Features', path: '/features', icon: Rocket },
                { name: 'Pricing', path: '/pricing', icon: Shield },
                ...secondaryLinks,
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex flex-col items-center justify-center p-4 rounded-[2rem] bg-slate-50 hover:bg-primary-50 hover:text-primary-600 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-2 shadow-sm group-hover:scale-110 transition-transform">
                    {link.icon ? <link.icon size={20} /> : <LayoutIcon size={20} />}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-center">{link.name}</span>
                </Link>
              ))}
            </div>
            <Link
              to="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 bg-primary-600 text-white rounded-2xl font-black text-center shadow-xl block"
            >
              Start Your Success Story
            </Link>
          </div>
        )}
      </header>
    </div>
  );
};
