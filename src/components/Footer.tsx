import React, { useState } from 'react';
import { Mail, Copy, Check } from 'lucide-react';
import { LogoIcon } from './LogoIcon';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'recursive.solutions@outlook.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 py-12 md:py-16 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 group">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center p-0.5">
                <div className="w-full h-full bg-neutral-950 rounded-[6px] overflow-hidden flex items-center justify-center">
                  <LogoIcon size={24} className="w-full h-full" />
                </div>
              </div>
              <span className="text-base font-bold tracking-tight text-white">
                Recursive Solutions
              </span>
            </div>

            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              Modern app development studio specializing in intelligent web and mobile applications. Delivering robust architectures and seamless user experiences.
            </p>

            <div className="inline-flex items-center gap-2 p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-mono text-xs">{emailAddress}</span>
              <button
                onClick={copyEmail}
                className="ml-1 p-1 hover:text-white transition-colors"
                title="Copy email"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-neutral-400" />
                )}
              </button>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Studio
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero-section" className="hover:text-white transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact-section" className="hover:text-white transition-colors text-cyan-400 font-medium">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-neutral-500 text-[11px]">
            © {new Date().getFullYear()} Recursive Solutions. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-[11px] text-neutral-500">
            <a
              href={`mailto:${emailAddress}`}
              className="text-neutral-400 hover:text-cyan-300 underline font-mono"
            >
              {emailAddress}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
