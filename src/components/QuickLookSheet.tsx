import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Lock, Monitor, Smartphone } from "lucide-react";

export interface PreviewTarget {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  domain: string;
}

interface QuickLookSheetProps {
  items: PreviewTarget[];
  activeId: string | null;
  onClose: () => void;
  onSelect: (id: string) => void;
}

export function QuickLookSheet({ items, activeId, onClose, onSelect }: QuickLookSheetProps) {
  const [viewport, setViewport] = useState<"desktop" | "mobile">("desktop");
  const idx = activeId ? items.findIndex((item) => item.id === activeId) : -1;
  const active = idx >= 0 ? items[idx] : null;

  useEffect(() => {
    if (!active) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") {
        onSelect(items[(idx + 1) % items.length].id);
      }
      if (e.key === "ArrowLeft") {
        onSelect(items[(idx - 1 + items.length) % items.length].id);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, idx, items, onClose, onSelect]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col bg-black/88 backdrop-blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* macOS Safari-style top bar */}
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-white/[0.08] bg-[#0b0c10]/90 px-4 py-3 sm:px-6">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close Quick Look"
                className="h-3 w-3 rounded-full bg-[#ff5f56] transition-transform hover:scale-110"
              />
              <button
                type="button"
                onClick={onClose}
                aria-label="Minimize"
                className="h-3 w-3 rounded-full bg-[#ffbd2e] transition-transform hover:scale-110"
              />
              <button
                type="button"
                onClick={() => setViewport((v) => (v === "desktop" ? "mobile" : "desktop"))}
                aria-label="Toggle Desktop or iPhone viewport"
                className="h-3 w-3 rounded-full bg-[#27c93f] transition-transform hover:scale-110"
              />
            </div>

            <div className="mx-auto flex max-w-md items-center gap-2 truncate text-[12px] text-[#a1a1a6]">
              <Lock className="h-3 w-3 shrink-0 text-[#6e6e73]" />
              <span className="truncate font-mono">{active.domain}</span>
            </div>

            <div className="flex items-center gap-3 text-[12px]">
              <div className="hidden items-center gap-1 rounded-full bg-white/[0.06] p-0.5 sm:flex">
                <button
                  type="button"
                  onClick={() => setViewport("desktop")}
                  className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-medium transition-colors ${
                    viewport === "desktop" ? "bg-white/15 text-white" : "text-[#8e8e93] hover:text-white"
                  }`}
                >
                  <Monitor className="h-3.5 w-3.5" />
                  Desktop
                </button>
                <button
                  type="button"
                  onClick={() => setViewport("mobile")}
                  className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-medium transition-colors ${
                    viewport === "mobile" ? "bg-white/15 text-white" : "text-[#8e8e93] hover:text-white"
                  }`}
                >
                  <Smartphone className="h-3.5 w-3.5" />
                  iPhone
                </button>
              </div>

              <a
                href={active.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-[#f5f5f7] transition-opacity hover:opacity-75"
              >
                Open
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Live Stage */}
          <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-[#050608]">
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
              className={
                viewport === "mobile"
                  ? "relative h-[min(82vh,812px)] w-[min(390px,92vw)] overflow-hidden rounded-[44px] border-[8px] border-[#1c1e26] bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.16),0_32px_90px_rgba(0,0,0,0.85)]"
                  : "relative h-full w-full bg-white"
              }
            >
              {viewport === "mobile" && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-2.5 left-1/2 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black"
                />
              )}
              <iframe
                key={active.url}
                src={active.url}
                title={active.title}
                className="h-full w-full border-0 bg-white"
              />
            </motion.div>
          </div>

          {/* Bottom strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] bg-[#0b0c10]/95 px-5 py-3 text-[13px]">
            <div className="flex items-baseline gap-3 truncate">
              <span className="font-semibold tracking-[-0.01em] text-white">{active.title}</span>
              <span className="truncate text-[#8e8e93]">{active.subtitle}</span>
            </div>

            <div className="flex items-center gap-4 text-[#a1a1a6]">
              <button
                type="button"
                onClick={() => onSelect(items[(idx - 1 + items.length) % items.length].id)}
                className="inline-flex items-center gap-1 transition-colors hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" />
                Prev
              </button>
              <span className="tabular font-mono text-[11px] text-[#6e6e73]">
                {idx + 1} / {items.length}
              </span>
              <button
                type="button"
                onClick={() => onSelect(items[(idx + 1) % items.length].id)}
                className="inline-flex items-center gap-1 transition-colors hover:text-white"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
