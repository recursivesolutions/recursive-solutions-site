import React from 'react';
import { Mail } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-800/80 bg-neutral-950/80 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group text-left cursor-pointer focus:outline-none">
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center p-0.5 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/30 transition-all duration-300">
            <div className="w-full h-full bg-neutral-950 rounded-[10px] flex items-center justify-center">
              <div className="relative w-5 h-5 flex items-center justify-center">
                <div className="absolute inset-0 border border-cyan-400/80 rounded-sm rotate-0 group-hover:rotate-45 transition-transform duration-500" />
                <div className="w-2.5 h-2.5 border border-blue-400/90 rounded-sm rotate-45 group-hover:rotate-90 transition-transform duration-500" />
                <div className="w-1 h-1 bg-cyan-300 rounded-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              Recursive Solutions
            </span>
            <span className="text-[10px] tracking-wider text-neutral-400 font-medium uppercase">
              App Development Studio
            </span>
          </div>
        </a>

        {/* Action Controls */}
        <div className="flex items-center">
          <a
            href="#contact-section"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white text-neutral-950 hover:bg-neutral-200 transition-all shadow-sm"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Us</span>
          </a>
        </div>
      </div>
    </header>
  );
};
