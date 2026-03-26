/**
 * Section 13: Direct Contact — Email + LinkedIn
 * Compact footer-style section. Decision CTA, not a job-seeker footer.
 */
import { Mail, Linkedin } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="max-w-xl mx-auto text-center py-8">
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="w-2 h-2 bg-forge-green" />
        <span className="text-[11px] font-mono tracking-[0.25em] text-forge-green/70 uppercase">
          Direct Contact
        </span>
      </div>

      <p className="text-base text-white/55 mb-8">
        Interested in exploring a Taiwan pilot? Here is the fastest way to reach me.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        <a
          href="mailto:osmium1213@gmail.com"
          className="flex items-center gap-3 px-6 py-3 bg-forge-card border border-white/10 hover:border-forge-green/30 transition-colors group"
          style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
        >
          <Mail className="w-4 h-4 text-forge-green/60 group-hover:text-forge-green transition-colors" />
          <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors">osmium1213@gmail.com</span>
        </a>

        <a
          href="https://www.linkedin.com/in/jimmytsai1213/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 bg-forge-card border border-white/10 hover:border-forge-green/30 transition-colors group"
          style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
        >
          <Linkedin className="w-4 h-4 text-forge-green/60 group-hover:text-forge-green transition-colors" />
          <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors">LinkedIn Profile</span>
        </a>
      </div>

      {/* Footer */}
      <div className="pt-8 border-t border-white/5">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="font-mono text-[10px] text-forge-green/40 tracking-widest">SF:TAIWAN</span>
        </div>
        <p className="text-[10px] text-white/20 font-mono tracking-wider" style={{color: '#9FA89B'}}>
          Executive Decision Brief — Prepared by Jimmy Tsai — March 2026
        </p>
        <p className="text-[10px] text-white/12 font-mono tracking-wider mt-1" style={{color: '#9FA89B'}}>
          This document is confidential and intended for Starforge Systems leadership only.
        </p>
      </div>
    </div>
  );
}
