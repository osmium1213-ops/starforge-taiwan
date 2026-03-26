/**
 * Section 5: Proof Stack — 4-layer interactive accordion
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const layers = [
  {
    id: "market",
    label: "MARKET PROOF",
    claim: "Taiwan shows documented demand signals for anime × gaming hardware.",
    metrics: ["50.5M visits/mo", "5.0/5.0 Frieren rating", "NT$17K premium observed"],
    evidence: [
      "Bahamut (gamer.com.tw) receives 50.5M desktop visits/month with 85.4% Taiwan traffic concentration — the #6 website in the country.",
      "Frieren holds a perfect 5.0/5.0 rating on Bahamut's ACG database and ranked #1 in seasonal anime rankings across multiple seasons.",
      "PTT users coined '初音稅' (Hatsune Miku tax) to describe the observed premium on anime-branded hardware. ROG × EVA sold out within hours.",
      "No grey market import activity detected across PTT, Dcard, and Mobile01 — suggesting the market currently has no local access path.",
      "Frieren exhibition running Jan 3 – Apr 6, 2026 at National Taiwan Science Education Museum with 5 immersive zones.",
    ],
  },
  {
    id: "execution",
    label: "EXECUTION PROOF",
    claim: "Documented delivery at scale under pressure with measurable outcomes.",
    metrics: ["8M users / 2,000+ RPS", "Full uptime", "VP-level deployment"],
    evidence: [
      "LINE platform game: 270,000+ game plays across 8M+ user base. Peak 2,000+ requests/second. Full uptime. Client renewed before first wave ended.",
      "Meet Taipei 2024: AI installation with Taiwan's Vice President, Taipei Mayor, and Keelung Mayor. 3-minute window per VIP. No technical failures. VP posted to Instagram Stories.",
      "Government project: Delivered at NTD$50K vs NTD$700K specification — 93% budget saving. Received ministerial commendation.",
      "All deployments executed under real-time pressure with live audiences and narrow margin for error.",
    ],
  },
  {
    id: "ai-systems",
    label: "AI / SYSTEMS PROOF",
    claim: "Reusable AI-enabled systems built across multiple deployments, not one-off projects.",
    metrics: ["20+ enterprise deployments", "COMPUTEX 2025", "Reusable framework"],
    evidence: [
      "COMPUTEX 2025: Built AI photo system for Advantech with email capture, multi-platform social sharing loop, and cross-venue checkpoint system across two exhibition halls.",
      "Pharma OMO framework: Converted one-off programs into a scalable product. Each deployment became a template for the next. Reused across 20+ enterprise deployments.",
      "AI MSL experience: Designed interactive AI-powered activation for global pharma — demonstrating AI workflow design capability.",
      "Currently building automated market intelligence pipeline using workflow automation tools — the same system architecture proposed for Starforge's Taiwan operation.",
    ],
  },
  {
    id: "leadership",
    label: "OPERATOR FIT",
    claim: "Disciplined execution and cross-functional delivery under pressure.",
    metrics: ["APAC Summit invite", "Ministerial commendation", "CPL training"],
    evidence: [
      "Invited to present at APAC Regional Summit based on 66.7% completion rate — approximately 3× industry average.",
      "Received ministerial commendation for government digital project that delivered 93% under budget.",
      "Commercial Pilot License (CPL) training: Demonstrates disciplined execution mindset, checklist-driven operations, and performance under pressure.",
      "Bilingual (Mandarin/English) with native cultural fluency in Taiwan's digital ecosystem — reads platform dynamics that translation cannot capture.",
    ],
  },
];

export default function ProofStack() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-2">
      {layers.map((layer) => (
        <div
          key={layer.id}
          className="border border-white/8 bg-forge-card overflow-hidden transition-colors hover:border-white/12"
          style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
        >
          <button
            onClick={() => setOpenId(openId === layer.id ? null : layer.id)}
            className="w-full text-left p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4"
          >
            <div className="flex-1">
              <p className="text-[10px] font-mono tracking-widest text-forge-green/60 mb-2">{layer.label}</p>
              <p className="text-sm md:text-base text-white/80 font-medium">{layer.claim}</p>
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
              {layer.metrics.map((m) => (
                <span key={m} className="text-[10px] font-mono px-2 py-1 bg-forge-green/5 border border-forge-green/15 text-forge-green/60 whitespace-nowrap">
                  {m}
                </span>
              ))}
            </div>
            <span className="text-white/20 text-lg shrink-0 hidden md:block">
              {openId === layer.id ? "−" : "+"}
            </span>
          </button>

          <AnimatePresence>
            {openId === layer.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="px-5 md:px-6 pb-6 border-t border-white/8 pt-4">
                  <div className="space-y-3">
                    {layer.evidence.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="text-forge-green/40 font-mono text-[10px] mt-1 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                        <p className="text-sm text-white/55 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
