/**
 * Section 10: AI-Powered Taiwan Market Office
 * Operating system diagram + practical workflow example
 */
import { useState } from "react";

const AI_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663401173585/9uvxcsz6RqAUWNuzyeuoKh/ai-office_08302fc7.png";

const stages = [
  {
    id: "sources",
    label: "Sources",
    short: "01",
    detail: "Structured collection from Bahamut, PTT, Dcard, Threads, 4Gamers, Cool3c, and Taiwan tech media.",
  },
  {
    id: "classify",
    label: "Classification",
    short: "02",
    detail: "Keyword-based filtering: Starforge IPs, competitor brands, anime × hardware signals, community sentiment indicators.",
  },
  {
    id: "analysis",
    label: "AI Analysis",
    short: "03",
    detail: "Sentiment analysis, IP trend detection, competitor move summaries, demand signal identification.",
  },
  {
    id: "digest",
    label: "Executive Digest",
    short: "04",
    detail: "Weekly market brief auto-generated and delivered to Slack/email. Leadership receives it before US operating hours begin.",
  },
  {
    id: "recommend",
    label: "Recommendation",
    short: "05",
    detail: "Flagged opportunities, escalation alerts (e.g., competitor IP announcement detected), and suggested next actions.",
  },
  {
    id: "action",
    label: "Action Queue",
    short: "06",
    detail: "Drafted community responses, content suggestions, event opportunity flags — reviewed and executed by the operator.",
  },
];

export default function AiOffice() {
  const [hoveredStage, setHoveredStage] = useState<string | null>(null);

  return (
    <div>
      {/* Background accent */}
      <div
        className="relative mb-10 h-40 overflow-hidden opacity-25"
        style={{ clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))" }}
      >
        <img src={AI_BG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/50 to-transparent" />
      </div>

      {/* Pipeline Diagram */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
        {stages.map((stage, i) => (
          <div key={stage.id} className="relative">
            <button
              onMouseEnter={() => setHoveredStage(stage.id)}
              onMouseLeave={() => setHoveredStage(null)}
              onClick={() => setHoveredStage(hoveredStage === stage.id ? null : stage.id)}
              className={`w-full bg-forge-card border p-4 text-left transition-all ${
                hoveredStage === stage.id
                  ? "border-forge-green/40 bg-forge-green/5"
                  : "border-white/8 hover:border-white/12"
              }`}
              style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
            >
              <span className="text-[10px] font-mono text-forge-green/50 block mb-2">{stage.short}</span>
              <span className="text-xs font-medium text-white/70 block">{stage.label}</span>
            </button>

            {/* Arrow connector (not on last) */}
            {i < stages.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-2 w-3 text-white/15">
                <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                  <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
            )}

            {/* Expanded detail */}
            {hoveredStage === stage.id && (
              <div className="absolute top-full left-0 right-0 z-10 mt-2 bg-forge-card border border-forge-green/20 p-3"
                style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}
              >
                <p className="text-xs text-white/50 leading-relaxed">{stage.detail}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Practical Workflow Example */}
      <div
        className="bg-forge-card border border-forge-green/15 p-6 md:p-8"
        style={{ clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))" }}
      >
        <p className="text-[10px] font-mono tracking-widest text-forge-green/60 uppercase mb-4">Practical Workflow Example</p>
        <h4 className="font-display text-lg font-bold text-white mb-4">Weekly Taiwan Market Brief</h4>

        <div className="space-y-4 text-sm text-white/50 leading-relaxed">
          <div className="flex items-start gap-3">
            <span className="text-forge-green/40 font-mono text-[10px] mt-0.5 shrink-0">TRIGGER</span>
            <p>7:00 AM Taiwan time (6:00 PM Austin, previous day)</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-forge-green/40 font-mono text-[10px] mt-0.5 shrink-0">PROCESS</span>
            <p>System scans Bahamut trending discussions, PTT PC_Shopping, Dcard 3C board, and Threads gaming accounts. Filters for Starforge IPs, competitor collab keywords, and gaming PC purchase signals. AI summarizes into 3–5 actionable intelligence items.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-forge-green/40 font-mono text-[10px] mt-0.5 shrink-0">DELIVER</span>
            <p>Auto-delivered to Slack #asia-intel channel by 7:15 AM Taiwan time.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-forge-green/40 font-mono text-[10px] mt-0.5 shrink-0">RESULT</span>
            <p>Leadership receives a Monday Taiwan brief before US operating hours begin.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
