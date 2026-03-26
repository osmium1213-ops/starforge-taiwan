/**
 * Forge Interface — KPI proof card
 * Angular clip-path, green glow on hover, expandable detail
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface KpiCardProps {
  title: string;
  metric: string;
  context: string;
  source: string;
  detail?: string;
}

export default function KpiCard({ title, metric, context, source, detail }: KpiCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      onClick={() => detail && setExpanded(!expanded)}
      className={`relative bg-forge-card border border-white/8 p-5 transition-all duration-200 ${
        detail ? "cursor-pointer" : ""
      } hover:border-forge-green/30 group`}
      style={{
        clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
      }}
      whileHover={{ y: -2 }}
    >
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-3 h-3">
        <div className="absolute top-0 right-[12px] w-[1px] h-3 bg-forge-green/40 group-hover:bg-forge-green/80 transition-colors" />
        <div className="absolute top-[12px] right-0 h-[1px] w-3 bg-forge-green/40 group-hover:bg-forge-green/80 transition-colors" />
      </div>

      <p className="text-[10px] font-mono tracking-widest text-forge-green/60 uppercase mb-2">{title}</p>
      <p className="font-display text-2xl md:text-3xl font-bold text-white mb-2 leading-none">{metric}</p>
      <p className="text-sm text-white/55 leading-relaxed mb-3">{context}</p>
      <p className="text-[10px] font-mono text-white/30 tracking-wider">{source}</p>

      <AnimatePresence>
        {expanded && detail && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="mt-4 pt-4 border-t border-white/5">
              <p className="text-xs text-white/50 leading-relaxed">{detail}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {detail && (
        <div className="absolute bottom-2 right-4 text-[10px] text-white/20">
          {expanded ? "−" : "+"}
        </div>
      )}
    </motion.div>
  );
}
