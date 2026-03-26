/**
 * Section 3: Why Local Operator — Side-by-side comparison with toggle
 */
import { useState } from "react";

const dimensions = [
  {
    label: "Signal-Reading Speed",
    remote: "Delayed 12–24 hours; depends on translation layer",
    local: "Real-time; reads Bahamut/PTT/Dcard natively",
  },
  {
    label: "Platform Fluency",
    remote: "Bahamut and PTT are materially easier to monitor and engage through local access, local registration, and native-language participation",
    local: "Full native access — local IP, registered accounts, native-language participation",
  },
  {
    label: "Language / Cultural Nuance",
    remote: "Requires translation layer; likely to miss slang, memes, sentiment shifts",
    local: "Reads '信仰不足請自行充值' and knows it signals high purchase intent",
  },
  {
    label: "Community Engagement",
    remote: "Generic English content; no platform-native voice",
    local: "Platform-native content in Traditional Chinese",
  },
  {
    label: "Event / Partner Proximity",
    remote: "20+ hours travel; no established local relationships",
    local: "2 hours to Ducky, Lian Li, MSI, TeamGroup; next-cycle Taipei Game Show planning access",
  },
  {
    label: "Feedback Loop Speed",
    remote: "Weekly at best; filtered through reports",
    local: "Daily; direct observation plus automated monitoring",
  },
  {
    label: "Execution Risk",
    remote: "Higher — cultural missteps, timing delays, no local escalation path",
    local: "Lower — local context, real-time adjustment, on-ground presence",
  },
  {
    label: "Local Trust Signal",
    remote: "Limited — perceived as foreign brand with no local commitment",
    local: "Stronger — local operator signals market seriousness to community",
  },
];

export default function ComparisonToggle() {
  const [focus, setFocus] = useState<"both" | "remote" | "local">("both");

  return (
    <div>
      {/* Toggle */}
      <div className="flex items-center gap-1 mb-8 bg-forge-card border border-white/8 p-1 w-fit">
        {(["both", "remote", "local"] as const).map((mode) => (
          <button
            key={mode}
            onClick={() => setFocus(mode)}
            className={`px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all ${
              focus === mode
                ? "bg-forge-green text-black"
                : "text-white/40 hover:text-white/60"
            }`}
          >
            {mode === "both" ? "Compare" : mode === "remote" ? "US-Only Remote" : "Taiwan Operator"}
          </button>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left text-[10px] font-mono tracking-widest text-white/35 uppercase pb-4 pr-4 w-1/4">Dimension</th>
              <th
                className={`text-left text-[10px] font-mono tracking-widest uppercase pb-4 pr-4 w-[37.5%] transition-opacity ${
                  focus === "local" ? "text-white/10" : "text-red-400/60"
                }`}
              >
                US-Only Remote
              </th>
              <th
                className={`text-left text-[10px] font-mono tracking-widest uppercase pb-4 w-[37.5%] transition-opacity ${
                  focus === "remote" ? "text-white/10" : "text-forge-green/60"
                }`}
              >
                Taiwan-Based Operator
              </th>
            </tr>
          </thead>
          <tbody>
            {dimensions.map((dim, i) => (
              <tr key={i} className="border-t border-white/8">
                <td className="py-4 pr-4 align-top">
                  <span className="text-sm font-medium text-white/70">{dim.label}</span>
                </td>
                <td
                  className={`py-4 pr-4 align-top transition-opacity duration-200 ${
                    focus === "local" ? "opacity-20" : "opacity-100"
                  }`}
                >
                  <span className="text-sm text-white/45">{dim.remote}</span>
                </td>
                <td
                  className={`py-4 align-top transition-opacity duration-200 ${
                    focus === "remote" ? "opacity-20" : "opacity-100"
                  }`}
                >
                  <span className="text-sm text-white/70">{dim.local}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
