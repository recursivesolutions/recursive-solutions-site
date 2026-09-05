import React from 'react';
import { PORTFOLIO_APPS } from '../data/portfolio';
import { Image as ImageIcon, CheckCircle2 } from 'lucide-react';

export const PortfolioShowcase: React.FC = () => {
  return (
    <section id="portfolio" className="snap-start scroll-mt-16 pt-10 pb-16 md:pt-14 md:pb-20 bg-neutral-950 border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Portfolio
          </h2>
          <p className="text-neutral-400 text-base leading-relaxed">
            A showcase of our recent mobile and web applications, demonstrating our focus on robust architecture, clean design, and seamless user experiences.
          </p>
        </div>

        {/* Apps List */}
        <div className="space-y-8">
          {PORTFOLIO_APPS.map((app) => (
            <div key={app.id} className="flex flex-col gap-8 bg-neutral-900/40 p-6 md:p-10 rounded-[2rem] border border-neutral-800 shadow-xl shadow-black/20">
              
              {/* App Meta */}
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">{app.title}</h3>
                <p className="text-xl text-cyan-400 font-medium">{app.tagline}</p>
                <p className="text-base text-neutral-300 leading-relaxed max-w-4xl">{app.description}</p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 pt-4">
                {app.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex flex-col gap-1.5">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <h4 className="font-semibold text-neutral-100 text-[15px]">{feature.title}</h4>
                    </div>
                    {feature.description && (
                      <p className="text-sm text-neutral-400 pl-7 leading-relaxed">
                        {feature.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Gallery Placeholders */}
              <div className="space-y-5 pt-8 border-t border-neutral-800/80 mt-4">
                <h4 className="font-semibold text-neutral-200 text-sm tracking-wide uppercase">Application Gallery</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {Array.from({ length: app.imageCount }).map((_, i) => (
                    <div 
                      key={i} 
                      className="aspect-[4/3] bg-neutral-950/80 rounded-2xl border border-neutral-800/80 flex flex-col items-center justify-center text-neutral-600 gap-3 shadow-inner hover:border-neutral-700 transition-colors"
                    >
                      <ImageIcon className="w-8 h-8 opacity-40" />
                      <span className="text-xs font-mono opacity-50 tracking-wider">Image {i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
