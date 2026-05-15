import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TradeShow {
  name: string;
  zhName: string;
  start: string;
  end: string;
  fit: number;
  attendance: string;
  boothCost: string;
  deadline: string;
  phase: string | null;
  highlight?: boolean;
}

const TRADE_SHOWS: TradeShow[] = [
  { name: "COMPUTEX", zhName: "台北國際電腦展", start: "2026-06-02", end: "2026-06-05", fit: 4, attendance: "86,521", boothCost: "$2,270–$4,050", deadline: "Oct 2025 (waitlist)", phase: null },
  { name: "漫博 + G-EXPO", zhName: "漫畫博覽會", start: "2026-07-23", end: "2026-07-27", fit: 4, attendance: "635,000", boothCost: "$2,000–$8,000", deadline: "Mar–May 2026", phase: null },
  { name: "FF47", zhName: "開拓動漫祭", start: "2026-08-21", end: "2026-08-23", fit: 3, attendance: "~100,000", boothCost: "Negotiated", deadline: "5–6 months prior", phase: null },
  { name: "WirForce", zhName: "電競嘉年華", start: "2026-09-24", end: "2026-09-27", fit: 5, attendance: "200,000+", boothCost: "$3,000–$15,000", deadline: "Now (May–Jun)", phase: "Phase 1 Entry", highlight: true },
  { name: "TGS 2027", zhName: "台北國際電玩展", start: "2027-01-21", end: "2027-01-24", fit: 5, attendance: "400,000", boothCost: "$1,300–$2,200", deadline: "Jul–Nov 2026", phase: "Phase 2" },
  { name: "TICAF 2027", zhName: "台北國際動漫節", start: "2027-02-05", end: "2027-02-09", fit: 4, attendance: "500,000+", boothCost: "$2,000–$8,000", deadline: "Sep–Oct 2026", phase: null },
  { name: "A.C.F. 2027", zhName: "秋葉原動漫祭", start: "2027-04-03", end: "2027-04-05", fit: 5, attendance: "TBD (2nd edition)", boothCost: "TBD", deadline: "TBD", phase: "Phase 3" },
];

const TIMELINE_START = new Date("2026-05-01");
const TIMELINE_END = new Date("2027-05-01");
const TIMELINE_SPAN = TIMELINE_END.getTime() - TIMELINE_START.getTime();

const MONTHS = [
  "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  "Jan", "Feb", "Mar", "Apr",
];

function dateToPercent(dateStr: string) {
  const d = new Date(dateStr);
  return ((d.getTime() - TIMELINE_START.getTime()) / TIMELINE_SPAN) * 100;
}

function fitColor(fit: number, highlight?: boolean) {
  if (highlight) return "bg-forge-green";
  if (fit === 5) return "bg-forge-green";
  if (fit === 4) return "bg-forge-green/50";
  return "bg-white/20";
}

function fitStars(fit: number) {
  return "★".repeat(fit) + "☆".repeat(5 - fit);
}

const TODAY_PCT = dateToPercent(new Date().toISOString().slice(0, 10));

export default function TradeShowGantt() {
  const [activeShow, setActiveShow] = useState<number | null>(null);

  return (
    <div>
      {/* Gantt Chart */}
      <div className="relative overflow-x-auto pb-4">
        <div className="min-w-[700px]">
          {/* Month axis */}
          <div className="flex border-b border-white/10 mb-6">
            {MONTHS.map((m, i) => (
              <div key={m + i} className="flex-1 text-center">
                <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase">
                  {m}
                </span>
                {i < 7 && (
                  <span className="text-[8px] font-mono text-white/15 ml-0.5">'26</span>
                )}
                {i >= 7 && (
                  <span className="text-[8px] font-mono text-white/15 ml-0.5">'27</span>
                )}
              </div>
            ))}
          </div>

          {/* Event rows */}
          <div className="space-y-3 relative">
            {/* Today marker */}
            <div
              className="absolute top-0 bottom-0 w-px border-l border-dashed border-forge-green/40 z-10"
              style={{ left: `${TODAY_PCT}%` }}
            >
              <span className="absolute -top-5 left-1 text-[8px] font-mono text-forge-green/60 whitespace-nowrap uppercase tracking-widest">
                You are here
              </span>
            </div>

            {TRADE_SHOWS.map((show, i) => {
              const leftPct = dateToPercent(show.start);
              const rightPct = dateToPercent(show.end);
              const widthPct = Math.max(rightPct - leftPct, 1.5);
              const isActive = activeShow === i;

              return (
                <div key={show.name} className="relative h-10 group">
                  {/* Event bar */}
                  <button
                    onClick={() => setActiveShow(isActive ? null : i)}
                    className="absolute top-0 h-full flex items-center cursor-pointer"
                    style={{ left: `${leftPct}%`, width: `${widthPct}%`, minWidth: "120px" }}
                  >
                    <div className={`relative h-8 w-full rounded-sm ${fitColor(show.fit, show.highlight)} ${show.highlight ? "shadow-[0_0_12px_oklch(0.82_0.24_145/0.3)]" : ""} transition-all duration-200 hover:brightness-110 flex items-center px-2 gap-2`}>
                      {/* Pulse animation for WirForce */}
                      {show.highlight && (
                        <motion.div
                          className="absolute inset-0 rounded-sm bg-forge-green/30"
                          animate={{ opacity: [0.3, 0.6, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                      )}
                      <span className="relative text-[11px] font-bold text-black truncate leading-none">
                        {show.name}
                      </span>
                      {show.phase && (
                        <span className="relative text-[8px] font-mono tracking-wider bg-black/30 text-white px-1.5 py-0.5 rounded-sm whitespace-nowrap leading-none">
                          {show.phase}
                        </span>
                      )}
                    </div>
                  </button>

                  {/* Fit stars — right of bar */}
                  <span
                    className="absolute top-1/2 -translate-y-1/2 text-[10px] text-forge-green/50 font-mono whitespace-nowrap pointer-events-none"
                    style={{ left: `${leftPct + widthPct + 0.5}%` }}
                  >
                    {fitStars(show.fit)}
                  </span>

                  {/* Detail card on click */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-11 z-20 bg-forge-surface border border-white/10 p-4 w-72"
                        style={{
                          left: `${leftPct}%`,
                          clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                        }}
                      >
                        <p className="font-display text-sm font-bold text-white mb-0.5">{show.name}</p>
                        <p className="text-[10px] text-white/40 font-mono mb-3">{show.zhName}</p>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                          <div>
                            <span className="text-white/30 font-mono text-[10px] uppercase tracking-wider">Date</span>
                            <p className="text-white/70">{show.start.slice(5)} → {show.end.slice(5)}</p>
                          </div>
                          <div>
                            <span className="text-white/30 font-mono text-[10px] uppercase tracking-wider">Attendance</span>
                            <p className="text-white/70">{show.attendance}</p>
                          </div>
                          <div>
                            <span className="text-white/30 font-mono text-[10px] uppercase tracking-wider">Booth Cost</span>
                            <p className="text-white/70">{show.boothCost}</p>
                          </div>
                          <div>
                            <span className="text-white/30 font-mono text-[10px] uppercase tracking-wider">Deadline</span>
                            <p className="text-white/70">{show.deadline}</p>
                          </div>
                          <div className="col-span-2">
                            <span className="text-white/30 font-mono text-[10px] uppercase tracking-wider">Starforge Fit</span>
                            <p className="text-forge-green/80">{fitStars(show.fit)}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom 3-card summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
        {[
          {
            label: "PHASE 1 ENTRY",
            title: "WirForce — Sep 24",
            desc: "200K+ attendees. Sponsor outreach window closing May–Jun. The pilot's strongest deliverable.",
            urgent: true,
          },
          {
            label: "PHASE 2",
            title: "TGS 2027 — Jan 21",
            desc: "400K attendees. Application opens Jul 2026. Phase 1 data informs the booth strategy.",
            urgent: false,
          },
          {
            label: "PHASE 3",
            title: "A.C.F. 2027 — Apr",
            desc: "2nd edition. Define the category before anyone else arrives.",
            urgent: false,
          },
        ].map((card) => (
          <div
            key={card.label}
            className={`bg-forge-card border p-5 ${card.urgent ? "border-forge-green/30" : "border-white/8"} transition-colors`}
            style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
          >
            <p className={`text-[10px] font-mono tracking-widest mb-2 ${card.urgent ? "text-forge-green" : "text-white/30"}`}>
              {card.urgent ? "★ " : ""}{card.label}
            </p>
            <p className="font-display text-lg font-bold text-white mb-1">{card.title}</p>
            <p className="text-xs text-white/45 leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
