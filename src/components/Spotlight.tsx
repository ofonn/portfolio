import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Eye, Search } from "lucide-react";

export interface SpotlightEntry {
  id: string;
  title: string;
  subtitle: string;
  section: string;
  keywords: string;
  previewable: boolean;
  onSelect: () => void;
}

interface SpotlightProps {
  open: boolean;
  entries: SpotlightEntry[];
  onClose: () => void;
}

export function Spotlight({ open, entries, onClose }: SpotlightProps) {
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return entries.slice(0, 14);
    return entries.filter(
      (e) =>
        e.title.toLowerCase().includes(q) ||
        e.subtitle.toLowerCase().includes(q) ||
        e.keywords.toLowerCase().includes(q)
    );
  }, [entries, query]);

  useEffect(() => {
    if (!open) return;
    setQuery("");
    setCursor(0);
    const id = window.setTimeout(() => inputRef.current?.focus(), 30);
    return () => window.clearTimeout(id);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown" && filtered.length) {
        e.preventDefault();
        setCursor((c) => (c + 1) % filtered.length);
      } else if (e.key === "ArrowUp" && filtered.length) {
        e.preventDefault();
        setCursor((c) => (c - 1 + filtered.length) % filtered.length);
      } else if (e.key === "Enter" && filtered[cursor]) {
        e.preventDefault();
        filtered[cursor].onSelect();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, filtered, cursor, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 px-4 pt-[12vh] backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-[580px] overflow-hidden rounded-2xl border border-white/[0.14] bg-[#14161d]/92 shadow-[0_36px_90px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 360, damping: 32 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-white/[0.08] px-4 py-3.5">
              <Search className="h-4 w-4 shrink-0 text-[#8e8e93]" />
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setCursor(0);
                }}
                placeholder="Search products, bespoke concepts, or tools..."
                className="w-full bg-transparent text-[15px] text-white outline-none placeholder:text-[#6e6e73]"
              />
              <span className="font-mono text-[11px] text-[#6e6e73]">ESC</span>
            </div>

            <div className="max-h-[380px] overflow-y-auto p-2">
              {filtered.length === 0 ? (
                <p className="py-8 text-center text-[13px] text-[#6e6e73]">No matching entries</p>
              ) : (
                filtered.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onMouseEnter={() => setCursor(idx)}
                    onClick={item.onSelect}
                    className={`flex w-full items-center justify-between gap-4 rounded-xl px-3 py-2.5 text-left transition-colors ${
                      idx === cursor ? "bg-[#0a84ff]/22 text-white" : "text-[#d1d1d6]"
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="truncate text-[13.5px] font-medium text-white">{item.title}</div>
                      <div className="truncate text-[12px] text-[#8e8e93]">{item.subtitle}</div>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1 font-mono text-[11px] text-[#8e8e93]">
                      {item.previewable ? <Eye className="h-3 w-3" /> : <ArrowUpRight className="h-3 w-3" />}
                      {item.section}
                    </span>
                  </button>
                ))
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
