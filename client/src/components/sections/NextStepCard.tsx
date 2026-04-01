/**
 * Section 12: Next-Step Card — Decision CTA
 * Low-friction, practical next steps: Email, LinkedIn, Request Pilot Brief
 */

export default function NextStepCard() {
  return (
    <div className="max-w-2xl mx-auto text-center py-8">
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="w-2 h-2 bg-forge-green" />
        <span className="text-[11px] font-mono tracking-[0.25em] text-forge-green/70 uppercase">
          Section 12
        </span>
      </div>

      <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
        The Next Step Is a Conversation,{" "}
        <span className="text-forge-green">Not a Commitment.</span>
      </h2>

      <p className="text-base text-white/55 leading-relaxed mb-4 max-w-lg mx-auto">
        If this brief makes the case worth exploring, the next step is straightforward.
      </p>
      <p className="text-base text-white/55 leading-relaxed mb-10 max-w-lg mx-auto">
        Reach out to review the 90-day Taiwan pilot scope, discuss what success looks like, and decide whether to proceed.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a
          href="mailto:osmium1213@gmail.com?subject=Starforge%20Taiwan%20Pilot%20—%20Exploratory%20Conversation&body=Hi%20Jimmy%2C%0A%0AI%20reviewed%20the%20Taiwan%20market%20brief.%20Let's%20discuss%20the%20pilot%20scope.%0A%0ABest%2C"
          className="inline-block px-8 py-4 bg-forge-green text-black font-display font-semibold text-sm tracking-wider uppercase hover:brightness-110 transition-all"
          style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
        >
          Email Jimmy
        </a>
        <a
          href="https://www.linkedin.com/in/jimmy-wen-chun-tsai/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 border border-forge-green/40 text-forge-green font-display font-semibold text-sm tracking-wider uppercase hover:bg-forge-green/10 transition-all"
          style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
        >
          LinkedIn
        </a>
        <a
          href="https://t.me/JimmyTsai15"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 border border-forge-green/40 text-forge-green font-display font-semibold text-sm tracking-wider uppercase hover:bg-forge-green/10 transition-all"
          style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
        >
          Request 90-Day Pilot Brief
        </a>
      </div>

      <p className="mt-12 text-sm text-white/35 italic max-w-md mx-auto" style={{color: '#F5F5F0'}}>
        "This is not a pitch for a job. It is a structured case for a market opportunity — and an offer to help test it."
      </p>
    </div>
  );
}
