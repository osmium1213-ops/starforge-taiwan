/**
 * Section 7: 90-Day Pilot — Tabbed roadmap + Contractor/Regional toggle
 */
import { useState } from "react";

const tabs = [
  {
    id: "short",
    label: "Months 1–3",
    subtitle: "Intelligence & Presence",
    contractor: {
      objective: "Build the intelligence infrastructure and establish first Taiwan presence.",
      deliverables: [
        "Weekly Asia market brief (Bahamut, PTT, Dcard, Threads)",
        "IP demand tracker for Starforge's 6 anime IPs",
        "First social presence on Taiwanese platforms",
        "Automated monitoring workflow live by Month 2",
        "MSI × Frieren competitive tracking report",
      ],
      metrics: [
        "Leadership receives a weekly Taiwan market brief",
        "First platform-native interaction target established",
        "One platform account active",
        "Monitoring prototype demo delivered",
      ],
      whyLocal: "Bahamut and PTT are materially easier to monitor and engage through local access and native-language participation. Discussions happen in Traditional Chinese during Taiwan business hours — 13 hours before Austin wakes up.",
    },
    regional: {
      objective: "Establish full-time intelligence operation and begin community building.",
      deliverables: [
        "Daily Asia market intelligence digest",
        "Full IP demand tracking across all 6 IPs",
        "Multiple platform accounts active with content strategy",
        "Full automated monitoring system operational",
        "Competitive intelligence database established",
      ],
      metrics: [
        "Daily intelligence delivery to Austin team",
        "Active presence on 3+ Taiwan platforms",
        "Community engagement metrics tracked",
        "First media relationship initiated",
      ],
      whyLocal: "Full-time presence enables daily market coverage, real-time competitor response, and deeper community integration than part-time monitoring allows.",
    },
  },
  {
    id: "mid",
    label: "Months 4–9",
    subtitle: "Community & Event Strategy",
    contractor: {
      objective: "Build community relationships and develop event strategy.",
      deliverables: [
        "Taipei Game Show 2027 activation proposal (next-cycle planning)",
        "First anime IP community campaign (Bahamut/Dcard native)",
        "Competitor positioning analysis: ROG vs MSI vs Starforge",
        "AI monitoring prototype demo to Austin team",
        "Quarterly Asia report",
      ],
      metrics: [
        "Community presence established",
        "Event proposal submitted",
        "At least 1 local media pickup",
      ],
      whyLocal: "Next-cycle Taipei Game Show planning requires on-ground presence. Retailer conversations require in-person meetings. Local media relationships require Chinese-language communication.",
    },
    regional: {
      objective: "Execute community campaigns and establish media/event presence.",
      deliverables: [
        "Taipei Game Show 2027 activation planning or execution (if approved)",
        "Ongoing community campaigns across platforms",
        "Media relationship program active",
        "Full AI intelligence system with chat query capability",
        "Monthly Asia strategy reports to C-suite",
      ],
      metrics: [
        "Event executed successfully",
        "3+ media pickups achieved",
        "Community growth metrics positive",
        "Austin team actively using intelligence system",
      ],
      whyLocal: "Event execution, media interviews, and retailer negotiations all require physical presence and real-time cultural judgment.",
    },
  },
  {
    id: "long",
    label: "Months 10–18",
    subtitle: "Distribution & Scale",
    contractor: {
      objective: "Open distribution channels and build toward regional scale.",
      deliverables: [
        "Taiwan distribution partner shortlist (CoolPC, PChome, Momo, Shopee TW)",
        "First Asia sales channel proposal",
        "Japan market feasibility report",
        "Full AI-powered Asia intelligence system",
        "First Taiwan IP collab event proposal",
      ],
      metrics: [
        "Distribution conversation started",
        "Japan roadmap exists",
        "Quarterly Asia report to C-suite",
      ],
      whyLocal: "Distribution negotiations happen in Taiwan. Supplier relationships (Ducky, Lian Li) are in Taiwan. Legal, tax, and regulatory requirements need local handling.",
    },
    regional: {
      objective: "Launch distribution and begin regional expansion planning.",
      deliverables: [
        "Distribution channel live with first partner",
        "Japan market entry strategy",
        "Regional team expansion proposal",
        "Full Asia market intelligence operation",
        "Annual Asia strategy presentation",
      ],
      metrics: [
        "First Taiwan sales recorded",
        "Japan feasibility validated",
        "Regional expansion plan approved",
        "Asia contributing to global strategy",
      ],
      whyLocal: "Distribution launch, customs/logistics coordination, and regional expansion all require sustained local presence and relationship management.",
    },
  },
];

export default function PilotRoadmap() {
  const [activeTab, setActiveTab] = useState("short");
  const [mode, setMode] = useState<"contractor" | "regional">("contractor");

  const currentTab = tabs.find((t) => t.id === activeTab)!;
  const data = mode === "contractor" ? currentTab.contractor : currentTab.regional;

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-forge-card border border-white/8 p-1 w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2.5 text-xs font-mono tracking-wider transition-all ${
              activeTab === tab.id
                ? "bg-forge-green text-black"
                : "text-white/40 hover:text-white/60"
            }`}
          >
            <span className="block">{tab.label}</span>
            <span className={`block text-[9px] mt-0.5 ${activeTab === tab.id ? "text-black/60" : "text-white/20"}`}>{tab.subtitle}</span>
          </button>
        ))}
      </div>

      {/* Mode Toggle */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-[10px] font-mono tracking-wider text-white/30 uppercase">View as:</span>
        <div className="flex gap-1 bg-forge-card border border-white/8 p-0.5">
          <button
            onClick={() => setMode("contractor")}
            className={`px-3 py-1.5 text-[10px] font-mono tracking-wider transition-all ${
              mode === "contractor" ? "bg-forge-green/20 text-forge-green border border-forge-green/30" : "text-white/30 hover:text-white/50"
            }`}
          >
            Contractor Pilot
          </button>
          <button
            onClick={() => setMode("regional")}
            className={`px-3 py-1.5 text-[10px] font-mono tracking-wider transition-all ${
              mode === "regional" ? "bg-forge-green/20 text-forge-green border border-forge-green/30" : "text-white/30 hover:text-white/50"
            }`}
          >
            Regional Role
          </button>
        </div>
      </div>

      {/* Content Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Objective + Deliverables */}
        <div
          className="bg-forge-card border border-white/8 p-6"
          style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
        >
          <p className="text-[10px] font-mono tracking-widest text-forge-green/60 uppercase mb-3">Objective</p>
          <p className="text-sm text-white/70 mb-6 leading-relaxed">{data.objective}</p>

          <p className="text-[10px] font-mono tracking-widest text-forge-green/60 uppercase mb-3">Deliverables</p>
          <div className="space-y-2">
            {data.deliverables.map((d, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-forge-green/40 font-mono text-[10px] mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-white/50">{d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Success Metrics + Why Local */}
        <div className="space-y-4">
          <div
            className="bg-forge-card border border-white/8 p-6"
            style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
          >
            <p className="text-[10px] font-mono tracking-widest text-forge-green/60 uppercase mb-3">Success Metrics</p>
            <div className="space-y-2">
              {data.metrics.map((m, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-forge-green/40 mt-1.5 shrink-0" />
                  <p className="text-sm text-white/50">{m}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="bg-forge-green/5 border border-forge-green/15 p-6"
            style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
          >
            <p className="text-[10px] font-mono tracking-widest text-forge-green/60 uppercase mb-3">Why This Requires Local Presence</p>
            <p className="text-sm text-white/50 leading-relaxed">{data.whyLocal}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
