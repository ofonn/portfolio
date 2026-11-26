import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Check, Copy, Eye, Search } from "lucide-react";
import { BESPOKE_CONCEPTS, OPEN_TOOLS, OWNER, PRODUCTS } from "./data/portfolio";
import { MenuBar } from "./components/MenuBar";
import { QuickLookSheet, type PreviewTarget } from "./components/QuickLookSheet";
import { Spotlight, type SpotlightEntry } from "./components/Spotlight";

const CONCEPT_GROUPS = [
  "All",
  "Food & Agro",
  "Retail & Dining",
  "Healthcare",
  "Hospitality",
  "Education",
  "Fitness",
] as const;

export default function App() {
  const [activeGroup, setActiveGroup] = useState<string>("All");
  const [conceptQuery, setConceptQuery] = useState("");
  const [quickLookId, setQuickLookId] = useState<string | null>(null);
  const [spotlightOpen, setSpotlightOpen] = useState(false);
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

  const previewTargets = useMemo<PreviewTarget[]>(() => {
    const productTargets: PreviewTarget[] = PRODUCTS.filter((p) => p.previewable).map((p) => ({
      id: p.id,
      title: p.name,
      subtitle: p.concept,
      url: p.url,
      domain: p.domain,
    }));
    const conceptTargets: PreviewTarget[] = BESPOKE_CONCEPTS.map((c) => ({
      id: `concept:${c.slug}`,
      title: c.brand,
      subtitle: `${c.purpose} · ${c.headline}`,
      url: c.url,
      domain: `ofonn.github.io/concepts/${c.slug}`,
    }));
    const toolTargets: PreviewTarget[] = OPEN_TOOLS.filter((t) => t.previewable).map((t) => ({
      id: t.id,
      title: t.name,
      subtitle: t.concept,
      url: t.url,
      domain: t.url.replace(/^https?:\/\//, "").replace(/\/$/, ""),
    }));
    return [...productTargets, ...conceptTargets, ...toolTargets];
  }, []);

  const spotlightEntries = useMemo<SpotlightEntry[]>(() => {
    const prod: SpotlightEntry[] = PRODUCTS.map((p) => ({
      id: p.id,
      title: p.name,
      subtitle: p.concept,
      section: "Product",
      keywords: `${p.category} ${p.detail}`,
      previewable: p.previewable,
      onSelect: () => {
        setSpotlightOpen(false);
        setQuickLookId(p.id);
      },
    }));

    const conc: SpotlightEntry[] = BESPOKE_CONCEPTS.map((c) => ({
      id: `concept:${c.slug}`,
      title: c.brand,
      subtitle: `${c.purpose} — ${c.headline}`,
      section: "Concept",
      keywords: `${c.group} ${c.slug} ${c.purpose} ${c.headline}`,
      previewable: true,
      onSelect: () => {
        setSpotlightOpen(false);
        setQuickLookId(`concept:${c.slug}`);
      },
    }));

    const tools: SpotlightEntry[] = OPEN_TOOLS.map((t) => ({
      id: t.id,
      title: t.name,
      subtitle: t.concept,
      section: "Open Source",
      keywords: t.concept,
      previewable: t.previewable,
      onSelect: () => {
        setSpotlightOpen(false);
        if (t.previewable) setQuickLookId(t.id);
        else window.open(t.url, "_blank", "noopener,noreferrer");
      },
    }));

    return [
      ...prod,
      ...conc,
      ...tools,
      {
        id: "action:copy-email",
        title: "Copy email address",
        subtitle: OWNER.email,
        section: "Action",
        keywords: "email contact mail",
        previewable: false,
        onSelect: () => {
          setSpotlightOpen(false);
          copyEmail();
        },
      },
    ];
  }, []);

  const filteredConcepts = useMemo(() => {
    const q = conceptQuery.trim().toLowerCase();
    return BESPOKE_CONCEPTS.filter((c) => {
      if (activeGroup !== "All" && c.group !== activeGroup) return false;
      if (!q) return true;
      return (
        c.brand.toLowerCase().includes(q) ||
        c.purpose.toLowerCase().includes(q) ||
        c.headline.toLowerCase().includes(q) ||
        c.group.toLowerCase().includes(q)
      );
    });
  }, [activeGroup, conceptQuery]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSpotlightOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div id="top" className="ambient-aura min-h-screen text-[#f5f5f7]">
      <MenuBar onOpenSpotlight={() => setSpotlightOpen(true)} />

      <main className="mx-auto max-w-[1160px] px-6">
        {/* Open-Air Apple Keynote Hero — zero boxes */}
        <section className="pt-32 pb-24 md:pt-44 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-6 text-[13px] font-medium tracking-wide text-[#8e8e93]">
              {OWNER.name} · {OWNER.location}
            </p>
            <h1 className="apple-headline max-w-[14ch] text-[clamp(2.85rem,7vw,5.4rem)] leading-[1.01] font-semibold tracking-[-0.045em]">
              Products and concepts built to be used.
            </h1>
            <p className="mt-7 max-w-[54ch] text-[17px] leading-[1.6] text-[#a1a1a6] md:text-[19px]">
              Original web applications, one-off brand and service concepts, and open-source tools. Every entry below is live and built around a distinct purpose.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-7 text-[15px] font-medium">
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-full bg-[#f5f5f7] px-6 py-3 text-[#000000] transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Explore work
                <ArrowDown className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={() => setQuickLookId("evergreen-ops")}
                className="inline-flex items-center gap-2 text-[#f5f5f7] transition-opacity hover:opacity-75"
              >
                <Eye className="h-4 w-4 text-[#0a84ff]" />
                Quick Look flagship
              </button>

              <button
                type="button"
                onClick={() => setSpotlightOpen(true)}
                className="inline-flex items-center gap-2 text-[#8e8e93] transition-colors hover:text-white"
              >
                <Search className="h-4 w-4" />
                Spotlight <span className="font-mono text-[12px]">⌘K</span>
              </button>
            </div>
          </motion.div>
        </section>

        {/* Section 1: Shipped Products — borderless hairline editorial rows */}
        <section id="products" className="scroll-mt-16 py-20">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-[12px] font-medium tracking-[0.12em] text-[#0a84ff] uppercase">
                Shipped Products
              </p>
              <h2 className="text-[clamp(1.8rem,3.6vw,2.75rem)] leading-[1.08] font-semibold tracking-[-0.035em] text-white">
                Seven live products.
              </h2>
            </div>
            <p className="max-w-[38ch] text-[14px] text-[#8e8e93]">
              Open any product directly or inspect it inside Desktop and iPhone viewports with Quick Look.
            </p>
          </div>

          <div className="border-t border-white/[0.09]">
            {PRODUCTS.map((product, index) => (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.03 }}
                className="group grid grid-cols-1 gap-6 border-b border-white/[0.08] py-9 transition-colors hover:bg-white/[0.025] md:grid-cols-[56px_minmax(0,1fr)_auto] md:items-start md:px-4"
              >
                <span className="tabular font-mono text-[12px] text-[#6e6e73] md:pt-2">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="text-[22px] font-semibold tracking-[-0.025em] text-white transition-transform duration-300 group-hover:translate-x-1 md:text-[26px]">
                      {product.name}
                    </h3>
                    <span className="text-[12px] text-[#8e8e93]">{product.category}</span>
                    <span className="inline-flex items-center gap-1.5 text-[11.5px] font-medium text-[#a1a1a6]">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          product.status === "Live" ? "bg-[#30d158]" : "bg-[#ff9f0a]"
                        }`}
                      />
                      {product.status}
                    </span>
                  </div>

                  <p className="mt-2 text-[16px] font-medium text-[#e5e5ea]">{product.concept}</p>
                  <p className="mt-2 max-w-[64ch] text-[14.5px] leading-[1.6] text-[#8e8e93]">
                    {product.detail}
                  </p>
                </div>

                <div className="flex items-center gap-5 pt-1 text-[13.5px] font-medium md:justify-end">
                  <button
                    type="button"
                    onClick={() => setQuickLookId(product.id)}
                    className="inline-flex items-center gap-1.5 text-[#a1a1a6] transition-colors hover:text-white"
                  >
                    <Eye className="h-4 w-4" />
                    Quick Look
                  </button>
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#0a84ff] transition-opacity hover:opacity-80"
                  >
                    Visit
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Section 2: 39 Bespoke Concept Explorations — zero boxes, hairline typographic index */}
        <section id="concepts" className="scroll-mt-16 py-20">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-2 text-[12px] font-medium tracking-[0.12em] text-[#0a84ff] uppercase">
                Bespoke Concept Explorations
              </p>
              <h2 className="text-[clamp(1.8rem,3.6vw,2.75rem)] leading-[1.08] font-semibold tracking-[-0.035em] text-white">
                {BESPOKE_CONCEPTS.length} original brand &amp; service concepts.
              </h2>
              <p className="mt-3 max-w-[58ch] text-[14.5px] leading-[1.6] text-[#8e8e93]">
                Each concept below was designed individually with its own typography, flow, and job to do — from office lunch ordering and where-to-buy food locators to walk-in salon queues and school booklist pickup. Repeated template pages are excluded.
              </p>
            </div>

            <div className="flex w-full items-center gap-2 border-b border-white/[0.16] pb-2 sm:w-64">
              <Search className="h-3.5 w-3.5 text-[#6e6e73]" />
              <input
                type="search"
                value={conceptQuery}
                onChange={(e) => setConceptQuery(e.target.value)}
                placeholder="Filter concepts..."
                aria-label="Filter bespoke concepts"
                className="w-full bg-transparent text-[13.5px] text-white outline-none placeholder:text-[#6e6e73]"
              />
            </div>
          </div>

          {/* Borderless iOS underline category tabs */}
          <div
            className="mb-6 flex gap-6 overflow-x-auto border-b border-white/[0.08] pb-3 text-[13.5px]"
            role="tablist"
            aria-label="Filter bespoke concepts by sector"
          >
            {CONCEPT_GROUPS.map((group) => {
              const count =
                group === "All"
                  ? BESPOKE_CONCEPTS.length
                  : BESPOKE_CONCEPTS.filter((c) => c.group === group).length;
              const selected = activeGroup === group;
              return (
                <button
                  key={group}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveGroup(group)}
                  className={`relative shrink-0 pb-1 font-medium transition-colors ${
                    selected ? "text-white" : "text-[#8e8e93] hover:text-[#d1d1d6]"
                  }`}
                >
                  {group} <span className="tabular text-[11.5px] text-[#6e6e73]">{count}</span>
                  {selected && (
                    <motion.span
                      layoutId="conceptTabLine"
                      className="absolute inset-x-0 -bottom-[13px] h-[2px] bg-white"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Hairline editorial list */}
          <div>
            {filteredConcepts.length === 0 ? (
              <p className="py-12 text-[14px] text-[#6e6e73]">No matching concepts.</p>
            ) : (
              filteredConcepts.map((c) => (
                <div
                  key={c.slug}
                  className="group grid grid-cols-1 gap-2 border-b border-white/[0.07] py-4 transition-colors hover:bg-white/[0.025] md:grid-cols-[220px_minmax(0,1fr)_120px_auto] md:items-center md:gap-6 md:px-3"
                >
                  <div className="font-semibold tracking-[-0.015em] text-white transition-transform duration-200 group-hover:translate-x-1">
                    {c.brand}
                  </div>

                  <div className="min-w-0 text-[14px] text-[#a1a1a6]">
                    <span className="text-[#e5e5ea]">{c.purpose}</span>
                    {c.headline && c.headline.toLowerCase() !== c.purpose.toLowerCase() && (
                      <span className="text-[#6e6e73]"> · {c.headline}</span>
                    )}
                  </div>

                  <span className="text-[12px] text-[#6e6e73]">{c.group}</span>

                  <div className="flex items-center gap-4 pt-1 text-[13px] font-medium md:justify-end md:pt-0">
                    <button
                      type="button"
                      onClick={() => setQuickLookId(`concept:${c.slug}`)}
                      className="text-[#8e8e93] transition-colors hover:text-white"
                    >
                      Quick Look
                    </button>
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-0.5 text-[#0a84ff] transition-opacity hover:opacity-80"
                    >
                      Open
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Section 3: Open Source — clean 3-row hairline list */}
        <section id="open-source" className="scroll-mt-16 py-20">
          <div className="mb-10">
            <p className="mb-2 text-[12px] font-medium tracking-[0.12em] text-[#0a84ff] uppercase">
              Open Source &amp; Guides
            </p>
            <h2 className="text-[clamp(1.8rem,3.6vw,2.75rem)] leading-[1.08] font-semibold tracking-[-0.035em] text-white">
              Public repositories.
            </h2>
          </div>

          <div className="border-t border-white/[0.09]">
            {OPEN_TOOLS.map((tool) => (
              <div
                key={tool.id}
                className="group grid grid-cols-1 gap-4 border-b border-white/[0.08] py-7 transition-colors hover:bg-white/[0.025] md:grid-cols-[260px_minmax(0,1fr)_auto] md:items-center md:gap-8 md:px-3"
              >
                <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-white transition-transform duration-200 group-hover:translate-x-1">
                  {tool.name}
                </h3>
                <p className="text-[14.5px] leading-[1.6] text-[#8e8e93]">{tool.concept}</p>
                <div className="flex items-center gap-4 text-[13.5px] font-medium md:justify-end">
                  {tool.previewable && (
                    <button
                      type="button"
                      onClick={() => setQuickLookId(tool.id)}
                      className="text-[#8e8e93] transition-colors hover:text-white"
                    >
                      Quick Look
                    </button>
                  )}
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#0a84ff] transition-opacity hover:opacity-80"
                  >
                    {tool.previewable ? "Open" : "View"}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Open-Air Contact Footer */}
        <footer id="contact" className="scroll-mt-16 border-t border-white/[0.09] py-20">
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

      <QuickLookSheet
        items={previewTargets}
        activeId={quickLookId}
        onClose={() => setQuickLookId(null)}
        onSelect={setQuickLookId}
      />

      <Spotlight
        open={spotlightOpen}
        entries={spotlightEntries}
        onClose={() => setSpotlightOpen(false)}
      />

      {/* Floating iOS Toast */}
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
