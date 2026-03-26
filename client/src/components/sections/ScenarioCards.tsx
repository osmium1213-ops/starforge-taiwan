/**
 * Section 8: Scenario Cards — 3 decision paths
 * Card 2 (Start Pilot) highlighted with green accent
 */

const scenarios = [
  {
    id: "nothing",
    title: "Do Nothing",
    subtitle: "Starforge takes no action in Taiwan for 12 months",
    outcome: "MSI and ROG continue building anime × hardware presence. Starforge IP advantage may erode. Taiwan community attention likely shifts elsewhere.",
    speed: "None",
    risk: "Opportunity cost compounds monthly as competitors build presence",
    learning: "None — no local data collected",
    cost: "Competitors continue to build first-mover advantage while Starforge has no local signal.",
    highlighted: false,
  },
  {
    id: "pilot",
    title: "Start Pilot",
    subtitle: "One Taiwan-based pilot operator for 90 days",
    outcome: "Validated market intelligence. Community presence initiated. Distribution conversations started. Go/no-go data for Year 2.",
    speed: "Target: operator live within 2–4 weeks",
    risk: "Low — 90-day pilot with defined scope and exit clause",
    learning: "High — real market data from real platform engagement",
    cost: "Minimal — pilot cost is a fraction of a US hire",
    highlighted: true,
  },
  {
    id: "wait",
    title: "Wait for APAC Structure",
    subtitle: "Wait for a broader APAC expansion structure",
    outcome: "More structured start, but slower. Competitors may have 12+ months of head start. Organizational complexity before market validation.",
    speed: "Slow — 6–12 months to hire, structure, launch",
    risk: "Medium — investment before validation",
    learning: "Low — planning without ground-level data",
    cost: "Higher — competitors build presence while Starforge plans",
    highlighted: false,
  },
];

export default function ScenarioCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {scenarios.map((s) => (
        <div
          key={s.id}
          className={`relative p-6 border transition-all ${
            s.highlighted
              ? "bg-forge-green/5 border-forge-green/30"
              : "bg-forge-card border-white/8 hover:border-white/12"
          }`}
          style={{ clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))" }}
        >
          {s.highlighted && (
            <div className="absolute top-3 right-5 text-[9px] font-mono tracking-widest text-forge-green/60 uppercase">
              Proposed
            </div>
          )}

          <h3 className={`font-display text-lg font-bold mb-1 ${s.highlighted ? "text-forge-green" : "text-white/80"}`}>
            {s.title}
          </h3>
          <p className="text-xs text-white/35 mb-5">{s.subtitle}</p>

          <div className="space-y-4">
            <div>
              <p className="text-[10px] font-mono tracking-widest text-white/30 uppercase mb-1">Likely Outcome</p>
              <p className="text-sm text-white/55 leading-relaxed">{s.outcome}</p>
            </div>
            <div>
              <p className="text-[10px] font-mono tracking-widest text-white/30 uppercase mb-1">Speed</p>
              <p className="text-sm text-white/55">{s.speed}</p>
            </div>
            <div>
              <p className="text-[10px] font-mono tracking-widest text-white/30 uppercase mb-1">Risk</p>
              <p className="text-sm text-white/55">{s.risk}</p>
            </div>
            <div>
              <p className="text-[10px] font-mono tracking-widest text-white/30 uppercase mb-1">Learning Value</p>
              <p className="text-sm text-white/55">{s.learning}</p>
            </div>
            <div>
              <p className="text-[10px] font-mono tracking-widest text-white/30 uppercase mb-1">Opportunity Cost</p>
              <p className="text-sm text-white/55">{s.cost}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
