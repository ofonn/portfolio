export interface FeaturedWork {
  id: string;
  name: string;
  url: string;
  domain: string;
  tier: "primary" | "secondary";
  label: string;
  concept: string;
  narrative: string;
  accentGlow: string;
}

export interface RankedWork {
  id: string;
  name: string;
  purpose: string;
  headline: string;
  sector: string;
  url: string;
  rank: number;
  highlight?: boolean;
}

export interface DisciplineItem {
  title: string;
  summary: string;
  areas: string[];
}

export interface BackgroundItem {
  period: string;
  title: string;
  org: string;
  note: string;
}

export const OWNER = {
  name: "Ofonime Okon Usuyak",
  shortName: "Ofonime Usuyak",
  handle: "ofonn",
  email: "ofonimeusuyak@gmail.com",
  github: "https://github.com/ofonn",
  timezone: "Africa/Lagos",
  location: "Nigeria",
} as const;

export const FEATURED_WORK: FeaturedWork[] = [
  {
    id: "evergreen-ops",
    name: "Evergreen Operations",
    url: "https://evergreen-ops.vercel.app",
    domain: "evergreen-ops.vercel.app",
    tier: "primary",
    label: "Financial Operations · Interactive Demo",
    concept: "Every sale matched against its bank evidence.",
    narrative:
      "A reconciliation cockpit built for high-volume distribution and retail operations. Matches depot invoices and payment records directly against bank statements and surfaces unconfirmed narrations automatically, running live on a full fictional business dataset.",
    accentGlow: "rgba(48, 209, 88, 0.14)",
  },
  {
    id: "origins",
    name: "origins",
    url: "https://origins-ng.pages.dev",
    domain: "origins-ng.pages.dev",
    tier: "primary",
    label: "Editorial Archive · Live",
    concept: "Hidden Nigerian histories with a clear line between fact and legend.",
    narrative:
      "A source-backed cultural publication documenting local histories, old legends, and place-name origins from across Nigeria. Built for fast mobile reading and deliberate typographic pacing.",
    accentGlow: "rgba(255, 159, 10, 0.14)",
  },
  {
    id: "atmos",
    name: "Atmos",
    url: "https://atmos-ofonime.vercel.app",
    domain: "atmos-ofonime.vercel.app",
    tier: "secondary",
    label: "Weather & Trip Assistant · Live",
    concept: "Hyper-local weather forecasts turned into readable daily and trip briefings.",
    narrative:
      "Pairs live forecast streams with conversational briefings, multi-day outlooks, and trip planning guidance.",
    accentGlow: "rgba(10, 132, 255, 0.13)",
  },
];

export const DISCIPLINES: DisciplineItem[] = [
  {
    title: "CI/CD & DevOps",
    summary:
      "Automated build, test, and deployment pipelines on cloud runners, containerized environments, and Linux server administration.",
    areas: ["Automated Pipelines", "Cloud Runners", "Container Orchestration", "Linux Systems", "Edge Deployment"],
  },
  {
    title: "Web Scraping & Automation",
    summary:
      "Unattended data extraction, remote media archival workflows, and server-to-server pipelines that run without local bottlenecks.",
    areas: ["Automated Extraction", "Remote Media Archival", "Scheduled Workflows", "Bot Orchestration"],
  },
  {
    title: "Data Analysis & Reconciliation",
    summary:
      "Turning messy operational records into verified numbers: sales-to-bank matching, exception flagging, relational modeling, and reporting.",
    areas: ["Statement Reconciliation", "Exception Detection", "Relational Modeling", "Operational Reporting"],
  },
  {
    title: "Product & Brand Systems",
    summary:
      "End-to-end web products, offline-first classroom and community tools, and bespoke service concepts tailored to how real businesses operate.",
    areas: ["Product Architecture", "Offline-First Systems", "Bespoke Service Flows", "Responsive Interfaces"],
  },
  {
    title: "Embedded Systems & Hardware",
    summary:
      "From circuit schematics and custom PCB layout to soldered microcontroller hardware and bench validation.",
    areas: ["PCB Design & Fabrication", "Microcontroller Control", "Motor Systems", "Hardware Validation"],
  },
  {
    title: "Digital Growth & Operations",
    summary:
      "Scaling web traffic, managing ad-network monetization partnerships, and leading a 20-person operations team.",
    areas: ["Traffic Acquisition", "Monetization Systems", "Team Leadership", "Client Delivery"],
  },
];

export const CREDENTIALS = [
  {
    metric: "1st Place",
    title: "GDG Eket Hackathon",
    detail: "Google Developer Group, 2026",
  },
  {
    metric: "20 Staff",
    title: "Founder, iLINK",
    detail: "Built and led peak operations team",
  },
  {
    metric: "74% Lower Cost",
    title: "B.Eng Computer Engineering",
    detail: "University of Uyo · ₦311.8k custom PCB trainer vs ~₦1.2M equivalents",
  },
] as const;

export const BACKGROUND: BackgroundItem[] = [
  {
    period: "2026",
    title: "Software Developer & Community Mentor",
    org: "Africinnovate Technologies",
    note: "Led community sessions on internet infrastructure, IoT, and cybersecurity while mentoring developers on real builds.",
  },
  {
    period: "2024 – 2025",
    title: "Software Developer",
    org: "Manful Technologies, Uyo",
    note: "Delivered client web builds from scoping to launch and built automated cloud-backed web platforms.",
  },
  {
    period: "2024",
    title: "Founder",
    org: "iLINK, Nigeria",
    note: "Founded and scaled a digital traffic and monetization operation to 20 staff at peak, managing network partnerships.",
  },
  {
    period: "2018 – 2023",
    title: "Arduino Embedded System Trainer",
    org: "University of Uyo · B.Eng Computer Engineering",
    note: "Fabricated and soldered a custom PCB trainer integrating servo, DC, and stepper motor control across 10 lab experiments.",
  },
];

// Ranked by visual craft, conceptual clarity, and completeness — never alphabetical.
export const RANKED_WORKS: RankedWork[] = [
  // Top 9 curated showcase works
  {
    id: "favid",
    name: "FAVID",
    purpose: "Charity & vocational institute platform",
    headline: "Care, education, and donor outreach in Ogun State.",
    sector: "Live Platforms",
    url: "https://favid.vercel.app",
    rank: 1,
    highlight: true,
  },
  {
    id: "nccf-family",
    name: "NCCF Family House",
    purpose: "Weekly roster & duties board",
    headline: "Shared live schedules for activities, service, cleaning, and cooking.",
    sector: "Live Platforms",
    url: "https://nccf-family.vercel.app",
    rank: 2,
    highlight: true,
  },
  {
    id: "holdem-demo",
    name: "Hold’em Coach",
    purpose: "Interactive poker trainer",
    headline: "Learn Texas Hold’em by playing guided hands against bots.",
    sector: "Live Platforms",
    url: "https://holdem-demo.vercel.app",
    rank: 3,
    highlight: true,
  },
  {
    id: "geovita-where-to-buy",
    name: "Geovita",
    purpose: "Where-to-buy & staple foods guide",
    headline: "Staple foods for a longer, healthier life.",
    sector: "Food & Agro",
    url: "https://ofonn.github.io/concepts/geovita-where-to-buy/",
    rank: 4,
    highlight: true,
  },
  {
    id: "eatright-office-lunch",
    name: "EatRight Foods",
    purpose: "Office lunch ordering",
    headline: "Feed the whole office. Every day.",
    sector: "Retail & Dining",
    url: "https://ofonn.github.io/concepts/eatright-office-lunch/",
    rank: 5,
    highlight: true,
  },
  {
    id: "primus-pharmacy-refills",
    name: "Primus Pharmacy",
    purpose: "Prescription refills",
    headline: "Never run out again.",
    sector: "Healthcare",
    url: "https://ofonn.github.io/concepts/primus-pharmacy-refills/",
    rank: 6,
    highlight: true,
  },
  {
    id: "fresh-city-preorder",
    name: "Fresh City Bakery",
    purpose: "Warm bakery pre-orders",
    headline: "Order tonight. Collect it warm.",
    sector: "Retail & Dining",
    url: "https://ofonn.github.io/concepts/fresh-city-preorder/",
    rank: 7,
    highlight: true,
  },
  {
    id: "tranquility-uyo-booking",
    name: "Tranquility Hotels, Uyo",
    purpose: "Direct hotel booking",
    headline: "Your country home in Uyo.",
    sector: "Hospitality",
    url: "https://ofonn.github.io/concepts/tranquility-uyo-booking/",
    rank: 8,
    highlight: true,
  },
  {
    id: "nccf-computer-academy",
    name: "NCCF Digital Skills Companion",
    purpose: "Offline-first classroom suite",
    headline: "Zero-internet learner profiles, typing drills, quizzes, and attendance.",
    sector: "Open Source",
    url: "https://github.com/ofonn/nccf-computer-academy",
    rank: 9,
    highlight: true,
  },

  // Remaining ranked works (ordered by depth and concept distinctiveness)
  {
    id: "prime-rose-admissions",
    name: "Prime Rose School",
    purpose: "Online admissions",
    headline: "Learning to learn, since 1986.",
    sector: "Education",
    url: "https://ofonn.github.io/concepts/prime-rose-admissions/",
    rank: 10,
  },
  {
    id: "grand-cereals",
    name: "Grand Cereals",
    purpose: "Food, feed & pet nutrition",
    headline: "Nourish every member of the family.",
    sector: "Food & Agro",
    url: "https://ofonn.github.io/concepts/grand-cereals/",
    rank: 11,
  },
  {
    id: "crown-flour-mill",
    name: "Crown Flour Mill",
    purpose: "Bulk flour ordering for bakers",
    headline: "Order your flour straight from the mill.",
    sector: "Food & Agro",
    url: "https://ofonn.github.io/concepts/crown-flour-mill/",
    rank: 12,
  },
  {
    id: "patabah-booklist-pickup",
    name: "Patabah Books",
    purpose: "School booklist pickup",
    headline: "Send the list. We pack it.",
    sector: "Retail & Dining",
    url: "https://ofonn.github.io/concepts/patabah-booklist-pickup/",
    rank: 13,
  },
  {
    id: "twitter-remote-archive",
    name: "Universal X-to-MEGA Archiver",
    purpose: "Cloud-to-cloud media archival",
    headline: "Automated remote archival straight to MEGA storage.",
    sector: "Open Source",
    url: "https://github.com/ofonn/twitter-remote-archive",
    rank: 14,
  },
  {
    id: "linux-dualboot-guide",
    name: "Linux Mint Dual-Boot Guide",
    purpose: "Illustrated system setup manual",
    headline: "Windows 11 + Linux Mint partitioning and UEFI recovery walkthrough.",
    sector: "Open Source",
    url: "https://ofonn.github.io/linux-dualboot-guide/",
    rank: 15,
  },
  {
    id: "autospa-abuja-service-booking",
    name: "AutoSpa Abuja",
    purpose: "Vehicle service booking",
    headline: "Book it. Track it. Drive it.",
    sector: "Retail & Dining",
    url: "https://ofonn.github.io/concepts/autospa-abuja-service-booking/",
    rank: 16,
  },
  {
    id: "hairven-walk-in-queue",
    name: "Hairven",
    purpose: "Live walk-in salon queue",
    headline: "Skip the waiting room.",
    sector: "Retail & Dining",
    url: "https://ofonn.github.io/concepts/hairven-walk-in-queue/",
    rank: 17,
  },
  {
    id: "eljjays-room-dining",
    name: "Eljjays Place",
    purpose: "In-room hotel dining",
    headline: "Dinner, from wherever you’re relaxing.",
    sector: "Hospitality",
    url: "https://ofonn.github.io/concepts/eljjays-room-dining/",
    rank: 18,
  },
  {
    id: "muse-enugu-book-direct",
    name: "MUSE Boutique Hotel",
    purpose: "Direct boutique stays",
    headline: "Stay at MUSE.",
    sector: "Hospitality",
    url: "https://ofonn.github.io/concepts/muse-enugu-book-direct/",
    rank: 19,
  },
  {
    id: "blanche-dental-booking",
    name: "Blanche Dental Clinic",
    purpose: "Multi-branch dental booking",
    headline: "Pick a branch. Pick a time. Smile.",
    sector: "Healthcare",
    url: "https://ofonn.github.io/concepts/blanche-dental-booking/",
    rank: 20,
  },
  {
    id: "beverlys-hall-booking",
    name: "Beverly’s Event Centre",
    purpose: "Event hall reservations",
    headline: "Your day, our hall.",
    sector: "Hospitality",
    url: "https://ofonn.github.io/concepts/beverlys-hall-booking/",
    rank: 21,
  },
  {
    id: "ultra-taste-soup-orders",
    name: "Ultra Taste",
    purpose: "Chat-based soup ordering",
    headline: "Your soup, cooked to order.",
    sector: "Retail & Dining",
    url: "https://ofonn.github.io/concepts/ultra-taste-soup-orders/",
    rank: 22,
  },
  {
    id: "baytuzzeenah-shop",
    name: "Baytuzzeenah",
    purpose: "Modest living storefront",
    headline: "Modest living, delivered or ready to collect.",
    sector: "Retail & Dining",
    url: "https://ofonn.github.io/concepts/baytuzzeenah-shop/",
    rank: 23,
  },
  {
    id: "luxor-abuja-gift-cards",
    name: "Luxor Salon & Spa",
    purpose: "Digital spa gift cards",
    headline: "Give them an hour of Luxor.",
    sector: "Retail & Dining",
    url: "https://ofonn.github.io/concepts/luxor-abuja-gift-cards/",
    rank: 24,
  },
  {
    id: "wasche-point-pickup",
    name: "Wasche Point",
    purpose: "Laundry pickup scheduling",
    headline: "Book a pickup without calling.",
    sector: "Retail & Dining",
    url: "https://ofonn.github.io/concepts/wasche-point-pickup/",
    rank: 25,
  },
  {
    id: "perfumes-for-less-scent-club",
    name: "Perfumes For Less NG",
    purpose: "Loyalty Scent Club",
    headline: "Every bottle brings you closer.",
    sector: "Retail & Dining",
    url: "https://ofonn.github.io/concepts/perfumes-for-less-scent-club/",
    rank: 26,
  },
  {
    id: "crunch-fitness-class-booking",
    name: "Crunch Fitness",
    purpose: "Class slot booking",
    headline: "Reserve studio sessions in two taps.",
    sector: "Fitness",
    url: "https://ofonn.github.io/concepts/crunch-fitness-class-booking/",
    rank: 27,
  },
  {
    id: "st-ives-patient-portal",
    name: "St. Ives",
    purpose: "Patient portal",
    headline: "Your care, one login away.",
    sector: "Healthcare",
    url: "https://ofonn.github.io/concepts/st-ives-patient-portal/",
    rank: 28,
  },
  {
    id: "turning-heads-booking",
    name: "Turning Heads",
    purpose: "Online chair booking",
    headline: "Your chair is ready when you are.",
    sector: "Retail & Dining",
    url: "https://ofonn.github.io/concepts/turning-heads-booking/",
    rank: 29,
  },
  {
    id: "greenpath-parent-portal",
    name: "Greenpath",
    purpose: "Parent portal",
    headline: "Stepping to greater heights.",
    sector: "Education",
    url: "https://ofonn.github.io/concepts/greenpath-parent-portal/",
    rank: 30,
  },
  {
    id: "greenstone-parent-notices",
    name: "Greenstone Schools",
    purpose: "Parent noticeboard app",
    headline: "Every notice. Every parent.",
    sector: "Education",
    url: "https://ofonn.github.io/concepts/greenstone-parent-notices/",
    rank: 31,
  },
  {
    id: "tiny-toes-admissions",
    name: "Tiny Toes Academy",
    purpose: "Early-years admissions",
    headline: "Every stage. One school.",
    sector: "Education",
    url: "https://ofonn.github.io/concepts/tiny-toes-admissions/",
    rank: 32,
  },
  {
    id: "olivet-heights-international-school",
    name: "Olivet Heights International School",
    purpose: "School showcase & admissions",
    headline: "Champions are made here.",
    sector: "Education",
    url: "https://ofonn.github.io/concepts/olivet-heights-international-school/",
    rank: 33,
  },
  {
    id: "beloxxi-biscuits",
    name: "Beloxxi",
    purpose: "Consumer brand showcase",
    headline: "Nigeria’s favourite biscuits.",
    sector: "Food & Agro",
    url: "https://ofonn.github.io/concepts/beloxxi-biscuits/",
    rank: 34,
  },
  {
    id: "life-flour-mill",
    name: "Life Flour",
    purpose: "Household product catalog",
    headline: "Nourishing Nigerian households.",
    sector: "Food & Agro",
    url: "https://ofonn.github.io/concepts/life-flour-mill/",
    rank: 35,
  },
  {
    id: "livestock-feeds",
    name: "Livestock Feeds",
    purpose: "Nationwide farmer feed catalog",
    headline: "The finest animal feed for farmers nationwide.",
    sector: "Food & Agro",
    url: "https://ofonn.github.io/concepts/livestock-feeds/",
    rank: 36,
  },
  {
    id: "may-baker-verify",
    name: "May & Baker",
    purpose: "Medicine authenticity verification",
    headline: "Decades of trust and reliability.",
    sector: "Healthcare",
    url: "https://ofonn.github.io/concepts/may-baker-verify/",
    rank: 37,
  },
  {
    id: "neimeth-field-sales",
    name: "Neimeth",
    purpose: "Family medicines & field sales",
    headline: "The trusted name in family medicines.",
    sector: "Healthcare",
    url: "https://ofonn.github.io/concepts/neimeth-field-sales/",
    rank: 38,
  },
  {
    id: "okomu-oil-palm",
    name: "Okomu",
    purpose: "Agro-industrial presence",
    headline: "Responsible tropical agriculture.",
    sector: "Food & Agro",
    url: "https://ofonn.github.io/concepts/okomu-oil-palm/",
    rank: 39,
  },
  {
    id: "ifgreen-outgrowers",
    name: "Ifgreen",
    purpose: "Outgrower programme portal",
    headline: "Feeding communities, powering industries.",
    sector: "Food & Agro",
    url: "https://ofonn.github.io/concepts/ifgreen-outgrowers/",
    rank: 40,
  },
  {
    id: "multitrex-bean-suppliers",
    name: "Multi-Trex",
    purpose: "Cocoa supplier portal",
    headline: "Reborn, renewed and revitalised.",
    sector: "Food & Agro",
    url: "https://ofonn.github.io/concepts/multitrex-bean-suppliers/",
    rank: 41,
  },
  {
    id: "zichis-investor-centre",
    name: "Zichis Agro",
    purpose: "Investor centre",
    headline: "Cultivating value. Sustaining life.",
    sector: "Food & Agro",
    url: "https://ofonn.github.io/concepts/zichis-investor-centre/",
    rank: 42,
  },
  {
    id: "doren-booking",
    name: "Doren Specialist Hospital",
    purpose: "Specialist appointment booking",
    headline: "Trusted specialist care in Lagos.",
    sector: "Healthcare",
    url: "https://ofonn.github.io/concepts/doren-booking/",
    rank: 43,
  },
  {
    id: "ecofitness-membership",
    name: "Ecofitness",
    purpose: "Multi-branch online signup",
    headline: "Join today. Train at any branch.",
    sector: "Fitness",
    url: "https://ofonn.github.io/concepts/ecofitness-membership/",
    rank: 44,
  },
  {
    id: "gym-starllion-referrals",
    name: "Gym Starllion",
    purpose: "Member referral flow",
    headline: "Train together.",
    sector: "Fitness",
    url: "https://ofonn.github.io/concepts/gym-starllion-referrals/",
    rank: 45,
  },
];
