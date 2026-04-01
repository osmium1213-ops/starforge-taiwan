/**
 * Section 9: Execution Timeline Slider — 5 stops with progressive content reveal
 */
import { useState } from "react";

const stops = [
  {
    id: 0,
    label: "Phase 1A",
    built: "Automated monitoring live. First weekly report delivered. Bahamut/Dcard accounts active. Ducky/Lian Li contact initiated.",
    learned: "Which IPs are trending in Taiwan right now. What competitors are doing this week. Supply chain readiness.",
    validated: "Whether automated monitoring can produce actionable intel.",
    decision: "Is the signal real enough to continue?",
  },
  {
    id: 1,
    label: "Phase 1B",
    built: "Cross-border e-commerce pilot live. Community engagement started. First platform-native content posted. Ducky coordination framework established.",
    learned: "How Taiwan communities respond to Starforge presence. Cross-border logistics costs validated. Pricing acceptance tested.",
    validated: "Whether cross-border sales generate demand at viable margins.",
    decision: "Should we invest in platform listing strategy?",
  },
  {
    id: 2,
    label: "Phase 1C",
    built: "Full AI intel system operational. First event proposal delivered. PChome/Momo/Shopee listing conversations initiated.",
    learned: "Market receptivity data. Retailer interest level. Event feasibility. BSMI compliance path mapped.",
    validated: "Whether Taiwan is a viable market for Starforge products.",
    decision: "Go/no-go on Phase 2 platform listing.",
  },
  {
    id: 3,
    label: "Phase 2",
    built: "PChome/Momo/Shopee official listings. Taipei Game Show 2027 activation (if approved). Local warranty framework. Quarterly Asia report.",
    learned: "Which platforms drive highest conversion. What pricing and positioning works. Local warranty cost structure.",
    validated: "Whether Starforge can build competitive presence alongside ROG/MSI in Taiwan.",
    decision: "Should we move to full localization?",
  },
  {
    id: 4,
    label: "Phase 3",
    built: "Local distribution partner. Taiwan-exclusive collab potential. Japan/SEA feasibility report. Full regional strategy.",
    learned: "Total addressable market validated. Competitive positioning confirmed. Regional expansion viability.",
    validated: "Whether Asia represents a meaningful growth opportunity for Starforge.",
    decision: "Should we build a regional team?",
  },
];

const columns = [
  { key: "built" as const, label: "What Gets Built" },
  { key: "learned" as const, label: "What Gets Learned" },
  { key: "validated" as const, label: "What Gets Validated" },
  { key: "decision" as const, label: "Decision Unlocked" },
];

export default function TimelineSlider() {
  const [activeStop, setActiveStop] = useState(0);
  const current = stops[activeStop];

  return (
    <div>
      {/* Slider Track */}
      <div className="relative mb-10">
        {/* Track line */}
        <div className="absolute top-4 left-0 right-0 h-[2px] bg-white/10" />
        <div
          className="absolute top-4 left-0 h-[2px] bg-forge-green transition-all duration-300"
          style={{ width: `${(activeStop / (stops.length - 1)) * 100}%` }}
        />

        {/* Stop buttons */}
        <div className="relative flex justify-between">
          {stops.map((stop, i) => (
            <button
              key={stop.id}
              onClick={() => setActiveStop(i)}
              className="flex flex-col items-center group"
            >
              <div
                className={`w-8 h-8 flex items-center justify-center border transition-all ${
                  i <= activeStop
                    ? "bg-forge-green border-forge-green text-black"
                    : "bg-forge-card border-white/10 text-white/30 group-hover:border-white/30"
                }`}
              >
                <span className="font-mono text-[10px] font-bold">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <span
                className={`mt-2 text-[10px] font-mono tracking-wider transition-colors ${
                  i === activeStop ? "text-forge-green" : "text-white/25"
                }`}
              >
                {stop.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Content Panel */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {columns.map((col) => (
          <div
            key={col.key}
            className="bg-forge-card border border-white/8 p-5"
            style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
          >
            <p className="text-[10px] font-mono tracking-widest text-forge-green/60 uppercase mb-3">{col.label}</p>
            <p className="text-sm text-white/60 leading-relaxed">{current[col.key]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
