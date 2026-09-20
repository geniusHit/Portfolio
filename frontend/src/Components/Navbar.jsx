import React, { useState } from 'react';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <nav className="bg-[#050b14] border-b border-cyan-950/40 px-6 lg:px-12 text-white pt-2 pb-8 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
        
        {/* Left: Brand / Logo */}
        <a href="#home" className="flex items-center gap-3 group no-underline2">
          <span className="text-xl font-bold tracking-wide text-white no-underline">
            Rohit
          </span>
        </a>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 h-full">
          {navItems.map((item) => {
            const isActive = activeTab === item;
            return (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setActiveTab(item)}
                className={`no-underline2 relative flex items-center h-full text-sm font-medium transition-colors duration-200 ${
                  isActive 
                    ? 'text-cyan-400' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item}
                {/* Active Underline Indicator */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right: Resume Button */}
        <div className="hidden md:flex items-center">
          <a
            href="/resume.pdf"
            download
            className="no-underline2 inline-flex items-center gap-2 px-6 py-2 rounded-full border border-cyan-400 text-cyan-400 text-sm font-medium hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]"
          >
            <span>Resume</span>
            {/* Download Icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor" 
              className="w-4 h-4"
            >
              <path 
                fillRule="evenodd" 
                d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" 
                clipRule="evenodd" 
              />
              <path d="M3.5 17.25a.75.75 0 01.75-.75h11.5a.75.75 0 010 1.5H4.25a.75.75 0 01-.75-.75z" />
            </svg>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-300 hover:text-cyan-400 focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Drawer / Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden py-4 border-t border-cyan-950/40 flex flex-col space-y-3">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => {
                setActiveTab(item);
                setIsMobileMenuOpen(false);
              }}
              className={`px-3 py-2 rounded text-base font-medium ${
                activeTab === item
                  ? 'text-cyan-400 bg-cyan-950/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900/50'
              }`}
            >
              {item}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-full border border-cyan-400 text-cyan-400 font-medium hover:bg-cyan-400 hover:text-black transition-colors"
            >
              <span>Resume</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clipRule="evenodd" />
                <path d="M3.5 17.25a.75.75 0 01.75-.75h11.5a.75.75 0 010 1.5H4.25a.75.75 0 01-.75-.75z" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}