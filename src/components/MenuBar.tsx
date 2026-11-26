import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { OWNER } from "../data/portfolio";

interface MenuBarProps {
  onOpenSpotlight: () => void;
}

export function MenuBar({ onOpenSpotlight }: MenuBarProps) {
  const [clock, setClock] = useState("--:--");

  useEffect(() => {
    const update = () => {
      try {
        const fmt = new Intl.DateTimeFormat("en-GB", {
          timeZone: OWNER.timezone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });
        setClock(fmt.format(new Date()) + " WAT");
      } catch {
        setClock("WAT");
      }
    };
    update();
    const timer = window.setInterval(update, 30000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-11 border-b border-white/[0.07] bg-black/70 backdrop-blur-2xl backdrop-saturate-150">
      <div className="mx-auto flex h-full max-w-[1160px] items-center justify-between px-6 text-[13px]">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-semibold tracking-[-0.015em] text-[#f5f5f7] transition-opacity hover:opacity-80"
        >
          <span className="h-2 w-2 rounded-full bg-[#30d158] shadow-[0_0_10px_rgba(48,209,88,0.85)]" />
          <span>{OWNER.name}</span>
        </a>

        <nav className="hidden items-center gap-7 text-[#a1a1a6] md:flex" aria-label="Primary">
          <a href="#products" className="transition-colors hover:text-white">
            Products
          </a>
          <a href="#concepts" className="transition-colors hover:text-white">
            Concepts
          </a>
          <a href="#open-source" className="transition-colors hover:text-white">
            Open Source
          </a>
          <a href="#contact" className="transition-colors hover:text-white">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <span className="tabular hidden font-mono text-[11.5px] text-[#8e8e93] sm:inline">
            {clock}
          </span>
          <button
            type="button"
            onClick={onOpenSpotlight}
            className="inline-flex items-center gap-1.5 text-[#a1a1a6] transition-colors hover:text-white"
            aria-label="Open Spotlight search"
          >
            <Search className="h-3.5 w-3.5" />
            <span className="font-mono text-[11px] tracking-wide">⌘K</span>
          </button>
        </div>
      </div>
    </header>
  );
}
