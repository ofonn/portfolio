import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Check, Compass, Copy } from "lucide-react";
import {
  BACKGROUND,
  CREDENTIALS,
  DISCIPLINES,
  FEATURED_WORK,
  OWNER,
  RANKED_WORKS,
} from "./data/portfolio";
import { MenuBar } from "./components/MenuBar";
import { Spotlight } from "./components/Spotlight";

const SECTORS = [
  "All",
  "Live Platforms",
  "Food & Agro",
  "Retail & Dining",
  "Healthcare",
  "Hospitality",
  "Education",
  "Fitness",
  "Open Source",
] as const;

export default function App() {
  const [activeSector, setActiveSector] = useState<string>("All");
  const [showAllArchive, setShowAllArchive] = useState(false);
  const [navigatorOpen, setNavigatorOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 2200);
  };

  const copyEmail = () => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(OWNER.email).then(() => showToast(`Copied ${OWNER.email}`));
    } else {
      showToast(OWNER.email);
    }
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setNavigatorOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const primaryFeatured = FEATURED_WORK.filter((w) => w.tier === "primary");
  const secondaryFeatured = FEATURED_WORK.filter((w) => w.tier === "secondary");
  const topNine = RANKED_WORKS.filter((w) => w.highlight);

  const archiveWorks = useMemo(() => {
    const pool = activeSector === "All"
      ? RANKED_WORKS.filter((w) => !w.highlight)
      : RANKED_WORKS.filter((w) => w.sector === activeSector);
    return pool;
  }, [activeSector]);

  const visibleArchive = showAllArchive || activeSector !== "All"
    ? archiveWorks
    : archiveWorks.slice(0, 12);

  return (
    <div id="top" className="ambient-aura min-h-screen text-[#f5f5f7]">
      <MenuBar onOpenNavigator={() => setNavigatorOpen(true)} />

      <main className="mx-auto max-w-[1180px] px-6">
        {/* Open-Air Hero */}
        <section className="pt-32 pb-20 md:pt-44 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-6 text-[13px] font-medium tracking-wide text-[#8e8e93]">
              {OWNER.name} · Computer Engineer &amp; Product Builder · {OWNER.location}
            </p>
            <h1 className="apple-headline max-w-[15ch] text-[clamp(2.8rem,7vw,5.4rem)] leading-[1.01] font-semibold tracking-[-0.045em]">
              Systems, products, and bespoke web concepts.
            </h1>
            <p className="mt-7 max-w-[58ch] text-[17px] leading-[1.6] text-[#a1a1a6] md:text-[19px]">
              From financial reconciliation software and cultural archives to automated cloud pipelines, data extraction, and over 40 tailored web experiences.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-7 text-[15px] font-medium">
              <a
                href="#featured"
                className="inline-flex items-center gap-2 rounded-full bg-[#f5f5f7] px-6 py-3 text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                See featured work
                <ArrowDown className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={() => setNavigatorOpen(true)}
                className="inline-flex items-center gap-2 text-[#f5f5f7] transition-opacity hover:opacity-75"
              >
                <Compass className="h-4 w-4 text-[#0a84ff]" />
                Quick Jump <span className="font-mono text-[12px] text-[#8e8e93]">⌘K</span>
              </button>

              <a
                href={OWNER.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#8e8e93] transition-colors hover:text-white"
              >
                GitHub
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </section>

        {/* Featured Editorial Spreads — Evergreen & origins prominent, Atmos lighter */}
        <section id="featured" className="scroll-mt-16 py-12">
          <div className="space-y-0 border-t border-white/[0.09]">
            {primaryFeatured.map((work, i) => (
              <motion.article
                key={work.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55 }}
                style={{
                  background: `radial-gradient(640px 260px at ${i % 2 === 0 ? "85%" : "15%"} 50%, ${work.accentGlow}, transparent 70%)`,
                }}
                className="grid grid-cols-1 gap-8 border-b border-white/[0.09] py-16 md:grid-cols-12 md:items-end md:py-24"
              >
                <div className="md:col-span-7">
                  <p className="mb-3 text-[12px] font-medium tracking-[0.11em] text-[#8e8e93] uppercase">
                    {work.label}
                  </p>
                  <h2 className="apple-headline text-[clamp(2.2rem,5vw,3.9rem)] leading-[1.03] font-semibold tracking-[-0.04em]">
                    {work.name}
                  </h2>
                  <p className="mt-4 max-w-[34ch] text-[20px] leading-[1.35] font-medium tracking-[-0.02em] text-[#e5e5ea] md:text-[23px]">
                    {work.concept}
                  </p>
                </div>

                <div className="flex flex-col justify-between gap-6 md:col-span-5">
                  <p className="text-[15px] leading-[1.68] text-[#a1a1a6]">{work.narrative}</p>
                  <div className="flex items-center justify-between gap-4 border-t border-white/[0.08] pt-5">
                    <span className="font-mono text-[12px] text-[#6e6e73]">{work.domain}</span>
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-[#0a84ff] transition-opacity hover:opacity-80"
                    >
                      Visit {work.name}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}

            {/* Atmos: intentionally lighter secondary feature */}
            {secondaryFeatured.map((work) => (
              <motion.article
                key={work.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5 }}
                style={{
                  background: `radial-gradient(520px 200px at 80% 50%, ${work.accentGlow}, transparent 72%)`,
                }}
                className="grid grid-cols-1 gap-6 border-b border-white/[0.09] py-12 md:grid-cols-12 md:items-center"
              >
                <div className="md:col-span-5">
                  <p className="mb-2 text-[11.5px] font-medium tracking-[0.11em] text-[#8e8e93] uppercase">
                    {work.label}
                  </p>
                  <h3 className="text-[28px] leading-tight font-semibold tracking-[-0.03em] text-white md:text-[32px]">
                    {work.name}
                  </h3>
                </div>
                <div className="md:col-span-5">
                  <p className="text-[15.5px] font-medium text-[#e5e5ea]">{work.concept}</p>
                  <p className="mt-1.5 text-[14px] leading-[1.6] text-[#8e8e93]">{work.narrative}</p>
                </div>
                <div className="md:col-span-2 md:text-right">
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[14px] font-semibold text-[#0a84ff] transition-opacity hover:opacity-80"
                  >
                    Open
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Capabilities & Disciplines — CV integrated, no programming languages, no boxes */}
        <section id="capabilities" className="scroll-mt-16 py-24">
          <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="mb-2 text-[12px] font-medium tracking-[0.12em] text-[#0a84ff] uppercase">
                Capabilities
              </p>
              <h2 className="text-[clamp(1.85rem,3.8vw,2.9rem)] leading-[1.06] font-semibold tracking-[-0.035em] text-white">
                Engineering disciplines beyond syntax.
              </h2>
            </div>
            <p className="text-[14.5px] leading-[1.6] text-[#8e8e93] md:col-span-5">
              Focused on shipping reliable systems end-to-end: cloud automation, data extraction, reconciliation logic, hardware fabrication, and team execution.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {DISCIPLINES.map((d) => (
              <div key={d.title} className="border-t border-white/[0.11] pt-6">
                <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-white">{d.title}</h3>
                <p className="mt-2.5 text-[14px] leading-[1.62] text-[#a1a1a6]">{d.summary}</p>
                <p className="mt-4 text-[12.5px] leading-[1.6] text-[#6e6e73]">
                  {d.areas.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Ranked Selected Work — Top 9 Magazine Columns (not a list, not boxes) */}
        <section id="selected" className="scroll-mt-16 py-20">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-[12px] font-medium tracking-[0.12em] text-[#0a84ff] uppercase">
                Selected Work · Ranked by Craft
              </p>
              <h2 className="text-[clamp(1.85rem,3.8vw,2.9rem)] leading-[1.06] font-semibold tracking-[-0.035em] text-white">
                Standout platforms &amp; bespoke concepts.
              </h2>
            </div>
            <p className="max-w-[40ch] text-[14px] text-[#8e8e93]">
              Ordered by depth and originality rather than alphabetically. Every site opens live.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-3">
            {topNine.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-t border-white/[0.12] pt-6 transition-opacity hover:opacity-90"
              >
                <div className="flex items-center justify-between gap-3 text-[11.5px] text-[#6e6e73]">
                  <span>{item.sector}</span>
                  <ArrowUpRight className="h-4 w-4 text-[#8e8e93] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0a84ff]" />
                </div>
                <h3 className="mt-3 text-[21px] font-semibold tracking-[-0.025em] text-white">
                  {item.name}
                </h3>
                <p className="mt-1 text-[14px] font-medium text-[#d1d1d6]">{item.purpose}</p>
                <p className="mt-1.5 text-[13.5px] leading-[1.55] text-[#8e8e93]">{item.headline}</p>
              </a>
            ))}
          </div>

          {/* Full Ranked Archive Explorer — compact 2-column flowing index with sector tabs */}
          <div className="mt-24 border-t border-white/[0.1] pt-14">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="mb-1.5 text-[12px] font-medium tracking-[0.12em] text-[#8e8e93] uppercase">
                  More Ranked Work
                </p>
                <h3 className="text-[24px] font-semibold tracking-[-0.03em] text-white">
                  Browse by sector
                </h3>
              </div>
              <p className="text-[13px] text-[#6e6e73]">
                {RANKED_WORKS.length + FEATURED_WORK.length} total live builds &amp; unique concepts · templated clones excluded
              </p>
            </div>

            <div
              className="mb-8 flex gap-6 overflow-x-auto border-b border-white/[0.08] pb-3 text-[13.5px]"
              role="tablist"
              aria-label="Filter ranked work by sector"
            >
              {SECTORS.map((sector) => {
                const selected = activeSector === sector;
                return (
                  <button
                    key={sector}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => {
                      setActiveSector(sector);
                      setShowAllArchive(false);
                    }}
                    className={`relative shrink-0 pb-1 font-medium transition-colors ${
                      selected ? "text-white" : "text-[#8e8e93] hover:text-[#d1d1d6]"
                    }`}
                  >
                    {sector}
                    {selected && (
                      <motion.span
                        layoutId="sectorUnderline"
                        className="absolute inset-x-0 -bottom-[13px] h-[2px] bg-white"
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2">
              {visibleArchive.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between gap-4 border-b border-white/[0.07] py-4 transition-colors hover:bg-white/[0.025] md:px-2"
                >
                  <div className="min-w-0">
                    <span className="font-semibold tracking-[-0.015em] text-white group-hover:text-[#0a84ff]">
                      {item.name}
                    </span>
                    <span className="text-[13.5px] text-[#8e8e93]"> · {item.purpose}</span>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-[#6e6e73] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                </a>
              ))}
            </div>

            {activeSector === "All" && archiveWorks.length > 12 && (
              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => setShowAllArchive((s) => !s)}
                  className="text-[14px] font-medium text-[#0a84ff] transition-opacity hover:opacity-80"
                >
                  {showAllArchive
                    ? "Show fewer"
                    : `Show all ${archiveWorks.length} remaining ranked works`}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Background, Credentials & Hardware — integrated CV highlights, zero boxes */}
        <section id="background" className="scroll-mt-16 border-t border-white/[0.1] py-24">
          <div className="mb-14">
            <p className="mb-2 text-[12px] font-medium tracking-[0.12em] text-[#0a84ff] uppercase">
              Background
            </p>
            <h2 className="text-[clamp(1.85rem,3.8vw,2.9rem)] leading-[1.06] font-semibold tracking-[-0.035em] text-white">
              Track record &amp; credentials.
            </h2>
          </div>

          {/* 3-column open credentials strip (no boxes) */}
          <div className="mb-16 grid grid-cols-1 gap-10 border-b border-white/[0.08] pb-14 md:grid-cols-3">
            {CREDENTIALS.map((c) => (
              <div key={c.title}>
                <div className="apple-headline text-[34px] font-semibold tracking-[-0.035em]">
                  {c.metric}
                </div>
                <div className="mt-1 text-[15px] font-semibold text-white">{c.title}</div>
                <div className="mt-1 text-[13.5px] text-[#8e8e93]">{c.detail}</div>
              </div>
            ))}
          </div>

          {/* 2x2 open editorial experience grid (no vertical resume list, no boxes) */}
          <div className="grid grid-cols-1 gap-x-14 gap-y-12 md:grid-cols-2">
            {BACKGROUND.map((item) => (
              <div key={item.title + item.org} className="border-t border-white/[0.09] pt-5">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-white">
                    {item.title}
                  </h3>
                  <span className="tabular font-mono text-[11.5px] text-[#6e6e73]">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 text-[13.5px] font-medium text-[#0a84ff]">{item.org}</p>
                <p className="mt-2.5 text-[14px] leading-[1.6] text-[#8e8e93]">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Open-Air Contact Footer */}
        <footer id="contact" className="scroll-mt-16 border-t border-white/[0.1] py-20">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-[12px] font-medium tracking-[0.12em] text-[#8e8e93] uppercase">
                Contact
              </p>
              <a
                href={`mailto:${OWNER.email}`}
                className="apple-headline block text-[clamp(1.5rem,3.6vw,2.6rem)] font-semibold tracking-[-0.03em] transition-opacity hover:opacity-80"
              >
                {OWNER.email}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-[14px] font-medium text-[#a1a1a6]">
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <Copy className="h-3.5 w-3.5" />
                Copy email
              </button>
              <a
                href={OWNER.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 transition-colors hover:text-white"
              >
                github.com/{OWNER.handle}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </footer>
      </main>

      <Spotlight
        open={navigatorOpen}
        onClose={() => setNavigatorOpen(false)}
        onCopyEmail={copyEmail}
      />

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-14 left-1/2 z-50 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-[#1c1e26]/95 px-4 py-2 text-[13px] font-medium text-white shadow-2xl backdrop-blur-xl"
          >
            <Check className="h-3.5 w-3.5 text-[#30d158]" />
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
