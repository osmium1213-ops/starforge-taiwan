/**
 * Design: Forge Interface — Gaming hardware aesthetic
 * Sticky left sidebar navigation with section indicators and scroll progress
 * Angular, sharp, green accent on active state
 */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", label: "BRIEF", short: "01" },
  { id: "why-now", label: "WHY NOW", short: "02" },
  { id: "why-local", label: "LOCAL OPS", short: "03" },
  { id: "why-jimmy", label: "OPERATOR", short: "04" },
  { id: "proof-stack", label: "EVIDENCE", short: "05" },
  { id: "competitors", label: "COMPETITORS", short: "06" },
  { id: "pilot", label: "90-DAY PILOT", short: "07" },
  { id: "scenarios", label: "SCENARIOS", short: "08" },
  { id: "timeline", label: "TIMELINE", short: "09" },
  { id: "ai-office", label: "AI OFFICE", short: "10" },
  { id: "cases", label: "CASES", short: "11" },
  { id: "next-step", label: "NEXT STEP", short: "12" },
  { id: "contact", label: "CONTACT", short: "13" },
];

export default function SideNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

      // Find active section
      const sectionElements = sections.map((s) => ({
        id: s.id,
        el: document.getElementById(s.id),
      }));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i].el;
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sectionElements[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-transparent">
        <motion.div
          className="h-full"
          style={{
            width: `${scrollProgress}%`,
            background: "linear-gradient(90deg, oklch(0.82 0.24 145), oklch(0.65 0.20 145))",
          }}
        />
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden w-10 h-10 flex items-center justify-center bg-forge-dark/90 backdrop-blur border border-white/10"
        style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}
      >
        <div className="flex flex-col gap-1.5">
          <span className={`block w-5 h-[1.5px] bg-forge-green transition-transform ${isOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-forge-green transition-opacity ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-forge-green transition-transform ${isOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
        </div>
      </button>

      {/* Desktop side nav */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-screen w-16 xl:w-48 z-40 flex-col items-center xl:items-start bg-[#080808]/90 backdrop-blur-sm border-r border-white/5">
        <div className="mt-8 mb-6 px-4 xl:px-5">
          <span className="text-forge-green font-mono text-xs tracking-widest">SF</span>
          <span className="hidden xl:inline text-forge-green font-mono text-xs tracking-widest">:TAIWAN</span>
        </div>

        <div className="flex-1 flex flex-col gap-0.5 w-full overflow-y-auto py-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className={`group w-full flex items-center gap-3 px-4 xl:px-5 py-2 text-left transition-all duration-150 relative ${
                activeSection === section.id
                  ? "text-forge-green"
                  : "text-white/30 hover:text-white/60"
              }`}
            >
              {activeSection === section.id && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute left-0 top-0 bottom-0 w-[2px] bg-forge-green"
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
              <span className="font-mono text-[10px] w-5 text-right shrink-0">{section.short}</span>
              <span className="hidden xl:block text-[11px] font-medium tracking-wider uppercase truncate">{section.label}</span>
            </button>
          ))}
        </div>

        <div className="mb-6 px-4 xl:px-5">
          <div className="w-[2px] xl:w-full h-16 xl:h-[2px] bg-white/5 relative overflow-hidden">
            <div
              className="absolute left-0 top-0 w-full bg-forge-green transition-all duration-300"
              style={{
                height: `${scrollProgress}%`,
              }}
            />
          </div>
        </div>
      </nav>

      {/* Mobile slide-out nav */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/80" onClick={() => setIsOpen(false)} />
          <nav className="absolute left-0 top-0 h-full w-64 bg-[#080808] border-r border-white/5 flex flex-col pt-16 px-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className={`flex items-center gap-3 py-2.5 text-left transition-colors ${
                  activeSection === section.id
                    ? "text-forge-green"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                <span className="font-mono text-[10px] w-5 text-right">{section.short}</span>
                <span className="text-xs font-medium tracking-wider uppercase">{section.label}</span>
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
