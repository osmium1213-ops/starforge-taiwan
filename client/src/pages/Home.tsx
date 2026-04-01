/**
 * Starforge Taiwan — Executive Decision Brief
 * Design: Forge Interface — dark canvas, angular cuts, green accents, Space Grotesk
 * 13-section single-page decision funnel
 */
import SideNav from "@/components/SideNav";
import SectionWrapper, { SectionLabel, SectionTitle, SectionCloser, TransitionLine } from "@/components/SectionWrapper";
import KpiCard from "@/components/KpiCard";
import HeroSection from "@/components/sections/HeroSection";
import ComparisonToggle from "@/components/sections/ComparisonToggle";
import ProofStack from "@/components/sections/ProofStack";
import CompetitorTimeline from "@/components/sections/CompetitorTimeline";
import PilotRoadmap from "@/components/sections/PilotRoadmap";
import ScenarioCards from "@/components/sections/ScenarioCards";
import TimelineSlider from "@/components/sections/TimelineSlider";
import AiOffice from "@/components/sections/AiOffice";
import CaseCards from "@/components/sections/CaseCards";
import NextStepCard from "@/components/sections/NextStepCard";
import ContactSection from "@/components/sections/ContactSection";

const TAIWAN_MARKET_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663401173585/9uvxcsz6RqAUWNuzyeuoKh/taiwan-market_e7bbb061.png";

const kpiData = [
  {
    title: "Taiwan Gaming Desktop Market",
    metric: "$2.3B",
    context: "43% of $5.3B total gaming PC market. Growing 12.24% CAGR. One of the fastest-growing segments in APAC.",
    source: "Deep Market Insights / LnData, 2024",
    detail: "Taiwan's gaming desktop market is valued at USD $2.3 billion (2024), representing 43% of the total $5.3B gaming PC market. CAGR of 12.24% projected through 2030. DIY assembly accounts for over 50% of desktop market.",
  },
  {
    title: "Import Duty on Gaming PCs",
    metric: "0%",
    context: "HS 8471 (computers): zero tariff. Total tax burden is only ~5% VAT. One of the lowest entry barriers in APAC.",
    source: "Taiwan Customs Administration",
    detail: "Taiwan applies 0% import duty on computers (HS 8471). The only tax is 5% VAT — making total landed cost approximately 5% above US MSRP. Compare: EU ~20% VAT, Australia 10% GST + handling.",
  },
  {
    title: "Anime Collab Full-System Builds",
    metric: "Zero",
    context: "No competitor offers full-system anime-branded gaming PCs in Taiwan. Components only (GPU, peripherals).",
    source: "Market Research, Apr 2026",
    detail: "While MSI, ASUS ROG, and Razer offer anime-branded components (GPUs, peripherals), no brand offers complete anime-themed gaming PC systems in Taiwan. Starforge's full-system anime builds would be the first in market.",
  },
  {
    title: "Bahamut Monthly Traffic",
    metric: "50.5M",
    context: "Desktop visits/month. #6 website in Taiwan. 85.4% Taiwan traffic concentration.",
    source: "SimilarWeb, Feb 2026",
    detail: "Bahamut (gamer.com.tw) is Taiwan's dominant anime/gaming community — combining streaming, forums, and ACG database. Global rank #266. Average 7.5 pages/visit, 8:42 min session duration.",
  },
  {
    title: "MSI × Frieren GPU — Sold Out",
    metric: "8,237 Views",
    context: "Single GPU page on CoolPC. Sold out. Validates anime × hardware premium demand at full price.",
    source: "CoolPC Product Page, 2026",
    detail: "MSI's Frieren-branded GPU generated 8,237 page views on a single CoolPC product listing and sold out. This confirms Taiwanese consumers will pay full premium for anime IP hardware — and that Starforge's Frieren IP has direct market demand here.",
  },
  {
    title: "Frieren IP Demand Index",
    metric: "30.3×",
    context: "Parrot Analytics demand index. #1 in Taiwan. Starforge's strongest IP signal in this market.",
    source: "Parrot Analytics, 2026",
    detail: "Frieren: Beyond Journey's End shows a demand index of 30.3× in Taiwan according to Parrot Analytics — ranking #1 in the country. This IP also holds a perfect 5.0/5.0 on Bahamut's ACG database.",
  },
  {
    title: "Ducky × Starforge",
    metric: "HQ in Taipei",
    context: "Ducky is Starforge's keyboard partner — a Taiwan brand headquartered in Nangang, Taipei. 2 hours from operator.",
    source: "CES 2026 Announcement",
    detail: "At CES 2026, Starforge confirmed Ducky as the keyboard partner for their anime IP collabs (Frieren, Chainsaw Man, Apothecary Diaries). Ducky is a Taiwan-based brand with headquarters in Nangang, Taipei. Lian Li (Starforge's case supplier) is also a Taiwan brand.",
  },
  {
    title: "Starforge Already Discussed",
    metric: "Active Thread",
    context: "\"Taiwan is not in the shipping range.\" Forum thread since Aug 2024, active 8+ months.",
    source: "Bahamut PC_Shopping Forum",
    detail: "Users in the Bahamut PC hardware forum have been discussing Starforge PCs since August 2024. The thread confirms organic interest and frustration with shipping unavailability.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <SideNav />

      {/* Main content area — offset for side nav on desktop */}
      <main className="lg:ml-16 xl:ml-48">
        {/* Section 1: Hero */}
        <HeroSection />

        <TransitionLine>Here is what the current data shows.</TransitionLine>

        {/* Section 2: Why Now */}
        <SectionWrapper id="why-now" dark>
          <SectionLabel number="02" text="Why Now" />
          <SectionTitle>The Market Signal Is Already Visible</SectionTitle>

          {/* Taiwan market image accent — brighter overlay */}
          <div
            className="relative mb-8 h-36 md:h-48 overflow-hidden opacity-30"
            style={{ clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))" }}
          >
            <img src={TAIWAN_MARKET_IMG} alt="" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/40 to-transparent" />
          </div>

          <p className="text-white/55 text-base max-w-2xl mb-10">
            Taiwan shows documented demand signals for anime × gaming hardware — from community discussion to IP ratings to competitor activity. These are observed signals from live platforms, not projections.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {kpiData.map((kpi) => (
              <KpiCard key={kpi.title} {...kpi} />
            ))}
          </div>
          <SectionCloser>
            The signal is documented. The question is whether to build a local operating layer to capture it.
          </SectionCloser>
        </SectionWrapper>

        <TransitionLine>The signal is visible. The question is who can act on it — and from where.</TransitionLine>

        {/* Section 3: Why Local Operator */}
        <SectionWrapper id="why-local">
          <SectionLabel number="03" text="Why a Local Operator" />
          <SectionTitle>Taiwan Market Entry Is a Local Execution Problem</SectionTitle>
          <p className="text-white/55 text-base max-w-2xl mb-6">
            Remote market monitoring struggles with speed, cultural fluency, and platform access. Here is the side-by-side comparison.
          </p>

          {/* Social-first thesis callout */}
          <div
            className="bg-forge-green/5 border border-forge-green/15 p-5 mb-10 max-w-2xl"
            style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
          >
            <p className="text-[10px] font-mono tracking-widest text-forge-green/60 uppercase mb-2">Market Structure Signal</p>
            <p className="text-sm text-white/60 leading-relaxed">
              Taiwan's consumer purchase journey is social-first. Product discovery, validation, and purchase intent form on community platforms (Bahamut, PTT, Dcard, Threads) before any transaction. Market entry here is not only a channel problem — it is a social-speed, platform-fluency, and local-execution problem.
            </p>
          </div>

          {/* Purchase Decision Funnel */}
          <div className="mb-12">
            <h4 className="text-xs font-mono tracking-widest text-forge-green/50 mb-6 uppercase">How Taiwanese Gamers Decide on Hardware</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  stage: "01",
                  title: "Discovery",
                  platforms: "YouTube / Threads / Instagram",
                  desc: "Gamers first see distinctive builds through creators, highlight clips, memes, and short-form content.",
                },
                {
                  stage: "02",
                  title: "Research",
                  platforms: "Bahamut / Dcard 3C",
                  desc: "Real gameplay performance, compatibility checks, unboxings, and avoid/recommend posts from core communities.",
                },
                {
                  stage: "03",
                  title: "Technical Validation",
                  platforms: "PTT PC_Shopping / Mobile01",
                  desc: "Technical users validate build quality, component choices, pricing, and vendor reliability.",
                },
                {
                  stage: "04",
                  title: "Purchase & Post-Purchase",
                  platforms: "PChome / Momo / Shopee",
                  desc: "Final purchase via e-commerce. Buyers return to Bahamut, PTT, Dcard to post unboxings — feeding the next cycle.",
                },
              ].map((item) => (
                <div
                  key={item.stage}
                  className="bg-forge-card border border-white/8 p-5 hover:border-forge-green/20 transition-colors relative"
                  style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
                >
                  <p className="text-[10px] font-mono tracking-widest text-forge-green/50 mb-1">STAGE {item.stage}</p>
                  <p className="font-display text-lg font-bold text-white mb-1">{item.title}</p>
                  <p className="text-xs font-mono text-forge-green/70 mb-3">{item.platforms}</p>
                  <p className="text-xs text-white/45 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-white/35 mt-4 font-mono tracking-wide text-center">
              "I saw a cool build from a creator" → "I checked Bahamut/Dcard for stories" → "I validated on PTT/Mobile01" → "I swiped my card."
            </p>
          </div>

          <ComparisonToggle />
          <SectionCloser>
            Strategy can be designed remotely. Execution in Taiwan requires someone operating on the ground.
          </SectionCloser>
        </SectionWrapper>

        <TransitionLine>A local operator changes the equation. Here is the one proposing to do it.</TransitionLine>

        {/* Section 4: Why Jimmy — repositioned as operator/systems builder */}
        <SectionWrapper id="why-jimmy" dark>
          <SectionLabel number="04" text="Operator Profile" />
          <SectionTitle>A Taiwan-Based Operator Who Turns Signal Into Repeatable Systems</SectionTitle>

          {/* Operator Profile Card */}
          <div
            className="bg-forge-surface border border-white/8 p-6 md:p-8 mb-8 max-w-3xl"
            style={{ clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))" }}
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-forge-green/10 border border-forge-green/30 flex items-center justify-center shrink-0" style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}>
                <span className="font-display text-xl font-bold text-forge-green">JT</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white">Jimmy Tsai</h3>
                <p className="text-sm text-white/55 mt-1 leading-relaxed max-w-xl">
                  Taiwan-based operator who combines market insight, execution discipline, and AI-enabled workflow design into a practical market-entry system. 5+ years delivering cross-functional programs — from high-concurrency infrastructure to AI-enabled workflows — across enterprise, government, and consumer sectors in Taiwan.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Systems Builder", "AI-Enabled Workflows", "Cross-Functional Delivery", "Execution Discipline", "Bilingual / Taiwan-Local"].map((tag) => (
                    <span key={tag} className="text-[10px] font-mono tracking-wider px-3 py-1 border border-forge-green/20 text-forge-green/70 bg-forge-green/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: "SCALE", metric: "8M+ Users", sub: "2,000+ RPS", detail: "LINE platform infrastructure. Full uptime under peak load. Client renewed." },
              { label: "FRAMEWORKS", metric: "66.7%", sub: "Completion Rate", detail: "Reusable engagement framework. ~3× industry avg. APAC Summit invite." },
              { label: "EFFICIENCY", metric: "93%", sub: "Budget Saving", detail: "Gov project. NTD$50K vs NTD$700K spec. Ministerial commendation." },
              { label: "HIGH-STAKES", metric: "VP-Level", sub: "Deployment", detail: "Meet Taipei 2024 AI installation. Senior leadership participated. No errors." },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-forge-card border border-white/8 p-5 hover:border-forge-green/20 transition-colors"
                style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
              >
                <p className="text-[10px] font-mono tracking-widest text-forge-green/50 mb-2">{item.label}</p>
                <p className="font-display text-2xl font-bold text-white">{item.metric}</p>
                <p className="text-sm text-white/45 mb-2">{item.sub}</p>
                <p className="text-xs text-white/35 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* What Gets Built */}
          <div className="max-w-2xl">
            <h4 className="text-xs font-mono tracking-widest text-forge-green/50 mb-4 uppercase">What Gets Built During a Taiwan Pilot</h4>
            <div className="space-y-3">
              {[
                "Automated daily market intelligence digest from Bahamut, PTT, Dcard, Threads",
                "Weekly competitor tracking report (MSI, ASUS ROG anime IP moves)",
                "IP demand monitoring for upcoming anime seasons in Taiwan",
                "Community presence strategy and initial platform engagement",
                "Event feasibility assessment for Taipei Game Show 2027 activation planning (if approved)",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-forge-green font-mono text-xs mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-sm text-white/60">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <SectionCloser>
            A Taiwan-based operator who combines market insight, execution discipline, and AI-enabled workflow design into a practical market-entry system.
          </SectionCloser>
        </SectionWrapper>

        <TransitionLine>Claims require evidence. Here is the evidence.</TransitionLine>

        {/* Section 5: Proof Stack */}
        <SectionWrapper id="proof-stack">
          <SectionLabel number="05" text="Proof Stack" />
          <SectionTitle>Four Layers of Evidence</SectionTitle>
          <p className="text-white/55 text-base max-w-2xl mb-10">
            One consistent pattern: disciplined execution under pressure, at scale, with measurable outcomes.
          </p>
          <ProofStack />
          <SectionCloser>
            Four layers of evidence. One consistent pattern: disciplined execution under pressure, with measurable outcomes.
          </SectionCloser>
        </SectionWrapper>

        <TransitionLine>The market is moving. Here is who is already active.</TransitionLine>

        {/* Section 6: Competitor Analysis */}
        <SectionWrapper id="competitors" dark>
          <SectionLabel number="06" text="Competitor Analysis" />
          <SectionTitle>Competitors Have Validated the Model</SectionTitle>
          <p className="text-white/55 text-base max-w-2xl mb-10">
            ASUS ROG, MSI, and Razer have shown evidence that anime × hardware sells at premium in Taiwan. Starforge has the IP portfolio — but no current local operating layer.
          </p>
          <CompetitorTimeline />
          <SectionCloser>
            Competitors have validated the model. Starforge has the IP portfolio. The gap is a local execution layer.
          </SectionCloser>
        </SectionWrapper>

        <TransitionLine>Competitors have validated the model. Here is how Starforge can test it.</TransitionLine>

        {/* Section 7: 90-Day Pilot */}
        <SectionWrapper id="pilot">
          <SectionLabel number="07" text="90-Day Pilot" />
          <SectionTitle>Low Risk. Defined Scope. Real Data.</SectionTitle>
          <p className="text-white/55 text-base max-w-2xl mb-10">
            The pilot is designed to answer one question: is Taiwan a viable market for Starforge?
          </p>
          <PilotRoadmap />
          <SectionCloser>
            Low risk. Defined scope. Real data. The pilot is designed to produce a go/no-go decision with evidence.
          </SectionCloser>
        </SectionWrapper>

        <TransitionLine>Three paths. One produces data. The others produce delay.</TransitionLine>

        {/* Section 8: Scenario Cards */}
        <SectionWrapper id="scenarios" dark>
          <SectionLabel number="08" text="Decision Scenarios" />
          <SectionTitle>Three Paths Forward</SectionTitle>
          <p className="text-white/55 text-base max-w-2xl mb-10">
            Every strategic decision has alternatives. Here is what each path looks like.
          </p>
          <ScenarioCards />
          <SectionCloser>
            A pilot costs a fraction of a US hire. The alternative is continued competitor lead time.
          </SectionCloser>
        </SectionWrapper>

        <TransitionLine>If the pilot starts, here is what accumulates over time.</TransitionLine>

        {/* Section 9: Timeline Slider — 3-Phase GTM */}
        <SectionWrapper id="timeline">
          <SectionLabel number="09" text="3-Phase GTM" />
          <SectionTitle>Cross-Border → Platform Listing → Localization</SectionTitle>
          <p className="text-white/55 text-base max-w-2xl mb-10">
            Each phase builds on the previous one. Every step produces data, validates assumptions, and unlocks the next decision point.
          </p>
          <TimelineSlider />
          <SectionCloser>
            Every 30 days, the intelligence gets sharper, the community presence grows, and the decision gets clearer.
          </SectionCloser>
        </SectionWrapper>

        <TransitionLine>One operator plus the right system can cover a market.</TransitionLine>

        {/* Section 10: AI Office */}
        <SectionWrapper id="ai-office" dark>
          <SectionLabel number="10" text="AI-Powered Market Office" />
          <SectionTitle>One Operator Plus Automation Equals a Market Intelligence Operation</SectionTitle>
          <p className="text-white/55 text-base max-w-2xl mb-10">
            A structured intelligence pipeline designed to monitor Taiwan's gaming and anime communities, with operator judgment applied to outputs.
          </p>
          <AiOffice />
          <SectionCloser>
            One operator plus automation can form a market intelligence operation — structured, repeatable, and designed to scale.
          </SectionCloser>
        </SectionWrapper>

        <TransitionLine>The system is the plan. The cases show the pattern.</TransitionLine>

        {/* Section 11: Selected Cases */}
        <SectionWrapper id="cases">
          <SectionLabel number="11" text="Selected Cases" />
          <SectionTitle>Different Industries. Same Operating Pattern.</SectionTitle>
          <p className="text-white/55 text-base max-w-2xl mb-10">
            Disciplined execution, measurable results, reusable systems.
          </p>
          <CaseCards />
          <SectionCloser>
            Different industries. Same pattern: disciplined execution, measurable results, reusable systems.
          </SectionCloser>
        </SectionWrapper>

        <TransitionLine>The evidence is here. The next step is a conversation.</TransitionLine>

        {/* Section 12: Next Step */}
        <SectionWrapper id="next-step" dark>
          <NextStepCard />
        </SectionWrapper>

        {/* Section 13: Contact */}
        <section id="contact" className="bg-[#080808] py-12 md:py-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <ContactSection />
          </div>
        </section>
      </main>
    </div>
  );
}
