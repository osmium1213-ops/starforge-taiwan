/**
 * Forge Interface — Section wrapper with scroll-reveal animation
 * Provides consistent padding, max-width, and fade-in on viewport entry
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean; // alternating bg
  noPadding?: boolean;
}

export default function SectionWrapper({ id, children, className = "", dark = false, noPadding = false }: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id={id}
      ref={ref}
      className={`relative ${dark ? "bg-[#0d0d0d]" : "bg-[#080808]"} ${noPadding ? "" : "py-20 md:py-28"} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={noPadding ? "" : "max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8"}
      >
        {children}
      </motion.div>
    </section>
  );
}

export function SectionLabel({ number, text }: { number: string; text: string }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="font-mono text-[11px] text-forge-green/60 tracking-widest">{number}</span>
      <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/40">{text}</span>
      <div className="flex-1 h-[1px] bg-white/8" />
    </div>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
      {children}
    </h2>
  );
}

export function SectionCloser({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-12 text-sm text-white/45 italic border-l-2 border-forge-green/30 pl-4 max-w-2xl" style={{color: '#F5F5F0'}} style={{color: '#F5F5F0'}} style={{color: '#F5F5F0'}} style={{color: '#F5F5F0'}} style={{color: '#F5F5F0'}} style={{color: '#F5F5F0'}} style={{color: '#F5F5F0'}} style={{color: '#F5F5F0'}} style={{color: '#F5F5F0'}} style={{color: '#F5F5F0'}}>
      {children}
    </p>
  );
}

export function TransitionLine({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-6 text-center">
      <p className="text-xs tracking-[0.15em] uppercase text-white/30 font-medium" style={{color: '#9FA89B'}} style={{color: '#9FA89B'}} style={{color: '#9FA89B'}} style={{color: '#9FA89B'}} style={{color: '#9FA89B'}} style={{color: '#9FA89B'}} style={{color: '#9FA89B'}} style={{color: '#9FA89B'}} style={{color: '#9FA89B'}} style={{color: '#9FA89B'}} style={{color: '#9FA89B'}}>{children}</p>
    </div>
  );
}
