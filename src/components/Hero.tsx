import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section 
      id="hero-section" 
      className="relative min-h-[calc(100vh-4rem)] w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 border-b border-neutral-800/80 snap-start overflow-hidden select-none"
    >
      {/* Subtle Apple-style background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/25 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[140px]" />
      </div>

      {/* Main Headline - Apple Typography */}
      <div className="relative max-w-4xl mx-auto text-center my-auto py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
          Simple solutions for
          <span className="block text-cyan-400 mt-2">
            complex problems.
          </span>
        </h1>
      </div>

      {/* Subtle scroll cue pointing to the next section */}
      <a
        href="#portfolio"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-neutral-500 hover:text-cyan-400 transition-colors cursor-pointer group"
        aria-label="Scroll to portfolio"
      >
        <span className="text-[11px] font-mono tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce opacity-70 group-hover:opacity-100" />
      </a>
    </section>
  );
};

