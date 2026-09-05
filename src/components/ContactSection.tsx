import React, { useState } from 'react';
import { Mail, Copy, Check, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const emailAddress = 'recursive.solutions@outlook.com';
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact-section" className="snap-start scroll-mt-16 min-h-[calc(100vh-4rem)] flex flex-col justify-center py-16 md:py-24 bg-neutral-950/60 border-b border-neutral-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact Recursive Solutions
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Ready to build your next mobile or web application? Get in touch directly with our engineering team.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 relative overflow-hidden shadow-xl">
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
              Official Business Email
            </span>

            <div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="overflow-hidden">
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-lg sm:text-xl font-mono font-bold text-white hover:text-cyan-300 transition-colors break-all"
                >
                  {emailAddress}
                </a>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleCopyEmail}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-sm font-semibold text-white transition-all cursor-pointer border border-neutral-700/60"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-cyan-400" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${emailAddress}?subject=Project%20Inquiry%20-%20Recursive%20Solutions`}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-sm font-semibold text-neutral-950 transition-all shadow-sm"
              >
                <Send className="w-4 h-4" />
                <span>Send an Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
