/**
 * Section 6: Competitor Analysis — Timeline + White Space cards
 */

const COMPETITOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663401173585/9uvxcsz6RqAUWNuzyeuoKh/competitor-analysis_f62e2b18.png";

const timelineData = [
  { year: "2022", events: [
    { brand: "ASUS ROG", ip: "EVA-01", detail: "Laptop, GPU, peripherals. Sold out instantly in Taiwan.", color: "text-red-400" },
    { brand: "MSI", ip: "EVA e:PROJECT", detail: "GPU, case, AIO cooler. Evangelion collaboration line.", color: "text-blue-400" },
  ]},
  { year: "2023", events: [
    { brand: "ASUS ROG", ip: "EVA-02 Asuka", detail: "Second wave. Sold out again. Confirmed repeat demand.", color: "text-red-400" },
  ]},
  { year: "2025", events: [
    { brand: "ASUS ROG", ip: "Hatsune Miku", detail: "Full product line. NT$17K premium. '初音稅' coined on PTT.", color: "text-red-400" },
    { brand: "MSI", ip: "Toy Story 30th", detail: "500 units, Taiwan-exclusive. Sold out.", color: "text-blue-400" },
    { brand: "AOC", ip: "Dan Da Dan", detail: "Monitor collaboration. Anime × display market entry.", color: "text-purple-400" },
  ]},
  { year: "2026", events: [
    { brand: "Razer", ip: "EVA-02 Peripherals Launch", detail: "Keyboard, mouse, headset. Taiwan launch Jan 13. Cross-brand anime IP expansion continues.", color: "text-green-400" },
    { brand: "MSI", ip: "Frieren GPU — Sold Out", detail: "CoolPC single GPU page: 8,237 views. Sold out. Validates anime × hardware premium demand in Taiwan.", color: "text-blue-400" },
  ]},
];

const whiteSpaceCards = [
  {
    title: "What Competitors Validated",
    content: "Anime × hardware sells at premium in Taiwan. ROG × EVA sold out instantly. MSI × Frieren GPU sold out on CoolPC (8,237 page views). Consumers accept NT$17K+ premiums.",
  },
  {
    title: "Where Starforge Has White Space",
    content: "No US gaming PC brand has Taiwan presence. Starforge has 6+ active anime IP collabs — more than any competitor. Zero full-system anime builds available in Taiwan. Ducky already manufactures Starforge keyboards in Taipei.",
  },
  {
    title: "Supply Chain Is Already Here",
    content: "Ducky (Starforge keyboard partner) HQ in Nangang, Taipei. Lian Li (Starforge case supplier) is a Taiwan brand. Two key supply chain partners are already local — the missing layer is go-to-market execution.",
  },
];

export default function CompetitorTimeline() {
  return (
    <div>
      {/* Background image accent */}
      <div className="relative mb-10 h-48 overflow-hidden opacity-30"
        style={{ clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))" }}
      >
        <img src={COMPETITOR_IMG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/50 to-transparent" />
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[1px] bg-white/10" />

        <div className="space-y-8">
          {timelineData.map((year) => (
            <div key={year.year} className="relative pl-12 md:pl-20">
              {/* Year marker */}
              <div className="absolute left-0 md:left-4 top-0 flex items-center gap-3">
                <div className="w-8 h-8 bg-forge-card border border-forge-green/30 flex items-center justify-center z-10">
                  <span className="font-mono text-[10px] text-forge-green">{year.year}</span>
                </div>
              </div>

              <div className="space-y-3">
                {year.events.map((event, i) => (
                  <div
                    key={i}
                    className="bg-forge-card border border-white/8 p-4 hover:border-white/12 transition-colors"
                    style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
                  >
                    <div className="flex items-start gap-3">
                      <span className={`text-[10px] font-mono tracking-wider shrink-0 ${event.color}`}>{event.brand}</span>
                      <div>
                        <p className="text-sm font-medium text-white/80">{event.ip}</p>
                        <p className="text-xs text-white/40 mt-1">{event.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Starforge gap indicator */}
          <div className="relative pl-12 md:pl-20">
            <div className="absolute left-0 md:left-4 top-0 flex items-center gap-3">
              <div className="w-8 h-8 bg-forge-green/10 border border-forge-green flex items-center justify-center z-10">
                <span className="font-mono text-[10px] text-forge-green font-bold">SF</span>
              </div>
            </div>
            <div
              className="border border-forge-green/30 bg-forge-green/5 p-4"
              style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
            >
              <p className="text-sm text-forge-green/80 font-medium">Starforge Systems — 6+ Active Anime IP Collabs (CES 2026)</p>
              <p className="text-xs text-forge-green/40 mt-1">Frieren, Chainsaw Man, Apothecary Diaries, JJK, Solo Leveling, Kaiju No.8 — Ducky keyboards manufactured in Taipei, Lian Li cases from Taiwan. No Asia distribution layer.</p>
            </div>
          </div>
        </div>
      </div>

      {/* White Space Analysis Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
        {whiteSpaceCards.map((card) => (
          <div
            key={card.title}
            className="bg-forge-card border border-white/8 p-5 hover:border-forge-green/20 transition-colors"
            style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
          >
            <p className="text-[10px] font-mono tracking-widest text-forge-green/60 uppercase mb-3">{card.title}</p>
            <p className="text-sm text-white/60 leading-relaxed">{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
