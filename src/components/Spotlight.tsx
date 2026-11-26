import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Copy, Compass, Layers, Mail, Sparkles, X } from "lucide-react";
import { FEATURED_WORK, OWNER } from "../data/portfolio";

interface NavigatorProps {
  open: boolean;
  onClose: () => void;
  onCopyEmail: () => void;
}

const SECTIONS = [
  { label: "Featured Work", desc: "Evergreen Operations, origins, and Atmos", href: "#featured" },
  { label: "Capabilities & Disciplines", desc: "CI/CD, DevOps, Web Scraping, Data Analysis, Hardware", href: "#capabilities" },
  { label: "Curated Archive", desc: "45 ranked live apps, bespoke concepts, and open-source work", href: "#selected" },
  { label: "Experience & Credentials", desc: "GDG Eket 1st place, iLINK, Manful Technologies, B.Eng", href: "#background" },
] as const;

export function Spotlight({ open, onClose, onCopyEmail }: NavigatorProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const jumpTo = (href: string) => {
    onClose();
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/75 px-4 pt-[10vh] backdrop-blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-[600px] overflow-hidden rounded-2xl border border-white/[0.12] bg-[#111319]/95 shadow-[0_36px_90px_rgba(0,0,0,0.85)] backdrop-blur-2xl"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 360, damping: 32 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-3.5">
              <div className="flex items-center gap-2 text-[13px] font-medium text-[#d1d1d6]">
                <Compass className="h-4 w-4 text-[#0a84ff]" />
                <span>Quick Jump</span>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="inline-flex items-center gap-1.5 text-[12px] text-[#8e8e93] transition-colors hover:text-white"
              >
                <span className="font-mono text-[10.5px]">ESC</span>
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="divide-y divide-white/[0.07]">
              {/* Direct opens for top featured work */}
              <div className="p-3">
                <p className="mb-1.5 flex items-center gap-1.5 px-2.5 text-[11px] font-medium tracking-wider text-[#6e6e73] uppercase">
                  <Sparkles className="h-3 w-3" />
                  Start here
                </p>
                {FEATURED_WORK.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="flex items-center justify-between gap-4 rounded-xl px-2.5 py-2.5 transition-colors hover:bg-white/[0.07]"
                  >
                    <div className="min-w-0">
                      <div className="text-[14px] font-medium text-white">{item.name}</div>
                      <div className="truncate text-[12px] text-[#8e8e93]">{item.concept}</div>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1 text-[12px] text-[#0a84ff]">
                      Open
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </a>
                ))}
              </div>

              {/* Guided section jumps */}
              <div className="p-3">
                <p className="mb-1.5 flex items-center gap-1.5 px-2.5 text-[11px] font-medium tracking-wider text-[#6e6e73] uppercase">
                  <Layers className="h-3 w-3" />
                  Jump to section
                </p>
                {SECTIONS.map((s) => (
                  <button
                    key={s.href}
                    type="button"
                    onClick={() => jumpTo(s.href)}
                    className="flex w-full items-center justify-between gap-4 rounded-xl px-2.5 py-2 text-left transition-colors hover:bg-white/[0.07]"
                  >
                    <div className="min-w-0">
                      <div className="text-[13.5px] font-medium text-[#f5f5f7]">{s.label}</div>
                      <div className="truncate text-[12px] text-[#8e8e93]">{s.desc}</div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Direct contact actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 text-[12.5px]">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onCopyEmail();
                  }}
                  className="inline-flex items-center gap-1.5 font-medium text-[#d1d1d6] transition-colors hover:text-white"
                >
                  <Copy className="h-3.5 w-3.5 text-[#0a84ff]" />
                  Copy {OWNER.email}
                </button>
                <div className="flex items-center gap-4 text-[#a1a1a6]">
                  <a
                    href={`mailto:${OWNER.email}`}
                    onClick={onClose}
                    className="inline-flex items-center gap-1 transition-colors hover:text-white"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    Email
                  </a>
                  <a
                    href={OWNER.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="inline-flex items-center gap-1 transition-colors hover:text-white"
                  >
                    GitHub
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
