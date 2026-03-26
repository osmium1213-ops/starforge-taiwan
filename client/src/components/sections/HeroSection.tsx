/**
 * Section 1: Hero / Decision Thesis
 * Full-viewport hero with headline, subheadline, and 4 CTA buttons
 * Background: generated hero image with dark overlay
 */
import { motion } from "framer-motion";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663401173585/9uvxcsz6RqAUWNuzyeuoKh/hero-bg_c5e8d608.png";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Dark overlay — slightly reduced for better image visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/85 to-[#080808]/50" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Classification tag */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 bg-forge-green animate-pulse" />
            <span className="text-[11px] font-mono tracking-[0.25em] text-forge-green/70 uppercase">
              Executive Decision Brief
            </span>
          </div>

          {/* Headline — exact wording per brief */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] max-w-4xl mb-6">
            <span className="text-white">Starforge Has the IP. Taiwan Has the Demand.</span>
            <br />
            <span className="text-forge-green">The Missing Layer Is Local Execution.</span>
          </h1>

          {/* Subheadline — measured, executive-friendly */}
          <p className="text-base sm:text-lg text-white/55 max-w-2xl leading-relaxed mb-10">
            Taiwan already shows concentrated fandom demand, strong community attention, and organic visibility for anime-adjacent hardware narratives. What is currently missing is a local operating layer that can turn signal into repeatable execution.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo("why-now")}
              className="px-6 py-3 bg-forge-green text-black font-display font-semibold text-sm tracking-wider uppercase hover:brightness-110 transition-all"
              style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
            >
              View Market Signal
            </button>
            <button
              onClick={() => scrollTo("pilot")}
              className="px-6 py-3 bg-forge-green text-black font-display font-semibold text-sm tracking-wider uppercase hover:brightness-110 transition-all"
              style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
            >
              View 90-Day Pilot
            </button>
            <button
              onClick={() => scrollTo("why-jimmy")}
              className="px-6 py-3 border border-forge-green/40 text-forge-green font-display font-semibold text-sm tracking-wider uppercase hover:bg-forge-green/10 transition-all"
              style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
            >
              Operator Profile
            </button>
            <button
              onClick={() => scrollTo("ai-office")}
              className="px-6 py-3 border border-forge-green/40 text-forge-green font-display font-semibold text-sm tracking-wider uppercase hover:bg-forge-green/10 transition-all"
              style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
            >
              AI Office Model
            </button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-[1px] h-8 bg-gradient-to-b from-forge-green/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
