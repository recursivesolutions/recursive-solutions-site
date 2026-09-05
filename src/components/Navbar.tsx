import React from 'react';
import { Mail } from 'lucide-react';
import { LogoIcon } from './LogoIcon';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-800/80 bg-neutral-950/80 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none">
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center p-0.5 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/30 transition-all duration-300">
            <div className="w-full h-full bg-neutral-950 rounded-[10px] overflow-hidden flex items-center justify-center">
              <LogoIcon size={32} className="w-full h-full" />
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
