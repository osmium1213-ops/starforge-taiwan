/**
 * Section 11: Selected Cases — Expandable case cards
 * Challenge → Solution → Result → Starforge Relevance
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cases = [
  {
    id: "familymart",
    title: "Scale Proof",
    subtitle: "LINE Platform Game Infrastructure",
    metric: "8M+ Users",
    challenge: "Taiwan's largest convenience chain needed a gamified engagement campaign across its 8M+ LINE OA user base, with no tolerance for downtime during peak traffic.",
    solution: "Built scalable game infrastructure with integrated anti-fraud logic, serving 2,000+ requests per second at peak load.",
    result: "270,000+ game plays. Full uptime. Client renewed for second wave before first wave ended.",
    relevance: "Starforge limited edition drops are high-traffic, time-sensitive community events. This case demonstrates a comparable operational pattern: scale infrastructure, disciplined execution, community-driven engagement.",
  },
  {
    id: "meettaipei",
    title: "High-Stakes Proof",
    subtitle: "Meet Taipei 2024 AI Installation",
    metric: "VP-Level",
    challenge: "AI photo activation at Meet Taipei 2024. Taiwan's Vice President, Taipei Mayor, and Keelung Mayor all participated. 3-minute window per VIP. Live audience.",
    solution: "Designed and deployed an AI-generated photo experience that operated without failure under pressure. VP posted result to Instagram Stories.",
    result: "VP engagement. Multiple senior officials participated. No technical failures.",
    relevance: "Starforge's anime IP launches involve high-pressure moments — VIP early access, livestream builds, limited drops. This case demonstrates execution under comparable conditions.",
  },
  {
    id: "computex",
    title: "AI / Systems Proof",
    subtitle: "COMPUTEX 2025 Advantech AI Booth",
    metric: "Tier-1 Event",
    challenge: "Advantech needed an AI-powered activation at COMPUTEX 2025 that would capture leads, demonstrate edge computing capability, and drive social sharing.",
    solution: "Built an AI photo system with email capture, multi-platform social sharing loop, and cross-venue checkpoint system across two exhibition halls.",
    result: "Lead capture pipeline active. Social sharing loop operational. Brand activation across COMPUTEX's largest venue.",
    relevance: "Starforge is exploring AI-enhanced experiences (Platelight, custom designs). This case demonstrates AI-driven brand activation design and deployment at a tier-1 tech event.",
  },
  {
    id: "pharma",
    title: "Framework Proof",
    subtitle: "Pharma OMO Engagement",
    metric: "66.7% Completion",
    challenge: "Global pharma companies needed digital engagement programs for physicians that met strict compliance requirements while achieving high participation.",
    solution: "Built a reusable engagement framework that converted one-off programs into a scalable product. Each deployment became a template for the next.",
    result: "66.7% physician completion rate (~3× industry average). Invited to present at APAC Regional Summit. Framework reused across 20+ enterprise deployments.",
    relevance: "Asia market entry benefits from repeatable systems rather than one-off efforts. This case demonstrates the pattern of building frameworks that scale across deployments.",
  },
];

export default function CaseCards() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {cases.map((c) => (
        <div
          key={c.id}
          onClick={() => setExpandedId(expandedId === c.id ? null : c.id)}
          className="bg-forge-card border border-white/8 hover:border-forge-green/20 transition-all cursor-pointer overflow-hidden"
          style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
        >
          <div className="p-5 md:p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-[10px] font-mono tracking-widest text-forge-green/60 uppercase">{c.title}</p>
                <p className="text-sm text-white/45 mt-0.5">{c.subtitle}</p>
              </div>
              <span className="font-display text-lg font-bold text-white shrink-0 ml-4">{c.metric}</span>
            </div>

            <p className="text-sm text-white/55 leading-relaxed">{c.challenge}</p>

            <AnimatePresence>
              {expandedId === c.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 pt-4 border-t border-white/8 space-y-4">
                    <div>
                      <p className="text-[10px] font-mono tracking-widest text-white/30 uppercase mb-1">Solution</p>
                      <p className="text-sm text-white/55 leading-relaxed">{c.solution}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono tracking-widest text-white/30 uppercase mb-1">Result</p>
                      <p className="text-sm text-white/55 leading-relaxed">{c.result}</p>
                    </div>
                    <div className="bg-forge-green/5 border border-forge-green/15 p-4"
                      style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
                    >
                      <p className="text-[10px] font-mono tracking-widest text-forge-green/60 uppercase mb-1">Starforge Relevance</p>
                      <p className="text-sm text-white/60 leading-relaxed">{c.relevance}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-3 text-right">
              <span className="text-[10px] text-white/25 font-mono">
                {expandedId === c.id ? "COLLAPSE −" : "EXPAND +"}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
