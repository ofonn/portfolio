export interface ProductItem {
  id: string;
  name: string;
  domain: string;
  url: string;
  status: "Live" | "Interactive Demo";
  category: string;
  concept: string;
  detail: string;
  previewable: boolean;
}

export interface ConceptItem {
  slug: string;
  brand: string;
  purpose: string;
  headline: string;
  group: string;
  url: string;
}

export interface OpenToolItem {
  id: string;
  name: string;
  url: string;
  repo?: string;
  previewable: boolean;
  concept: string;
}

export const OWNER = {
  name: "Ofonime Usuyak",
  handle: "ofonn",
  email: "ofonimeusuyak@gmail.com",
  github: "https://github.com/ofonn",
  timezone: "Africa/Lagos",
  location: "Nigeria",
} as const;

export const PRODUCTS: ProductItem[] = [
  {
    id: "evergreen-ops",
    name: "Evergreen Operations",
    domain: "evergreen-ops.vercel.app",
    url: "https://evergreen-ops.vercel.app",
    status: "Interactive Demo",
    category: "Financial Operations",
    concept: "Every sale matched to its bank evidence.",
    detail: "A financial operations workspace that matches depot sales and payment records against bank statements and surfaces unconfirmed entries. Runs live on a realistic fictional business dataset.",
    previewable: true,
  },
  {
    id: "favid",
    name: "FAVID",
    domain: "favid.vercel.app",
    url: "https://favid.vercel.app",
    status: "Live",
    category: "Civic & Non-Profit",
    concept: "Care, education, and vocational outreach in one public home.",
    detail: "Public platform for FAVID Orphanage Home and the Family Vocational Institute For Disabled in Ogun State, covering programmes, school initiatives, galleries, and donor support.",
    previewable: true,
  },
  {
    id: "origins",
    name: "origins",
    domain: "origins-ng.pages.dev",
    url: "https://origins-ng.pages.dev",
    status: "Live",
    category: "Culture & Editorial",
    concept: "Hidden Nigerian histories with a clear line between fact and legend.",
    detail: "A curated cultural archive documenting local histories, old legends, and folktales from every corner of Nigeria, each backed by cited sources.",
    previewable: true,
  },
  {
    id: "nccf-family",
    name: "NCCF Family House",
    domain: "nccf-family.vercel.app",
    url: "https://nccf-family.vercel.app",
    status: "Live",
    category: "Community Scheduling",
    concept: "One shared weekly board for house duties and schedules.",
    detail: "Official roster board coordinating weekly activities, service, cleaning, cooking, and roster history for NCCF Family House members.",
    previewable: true,
  },
  {
    id: "atmos",
    name: "Atmos",
    domain: "atmos-ofonime.vercel.app",
    url: "https://atmos-ofonime.vercel.app",
    status: "Live",
    category: "Weather & Assistant",
    concept: "Local weather forecasts paired with conversational trip briefings.",
    detail: "A weather companion that turns hyper-local forecast data into readable daily briefings, multi-day outlooks, and trip planning guidance.",
    previewable: true,
  },
  {
    id: "holdem-demo",
    name: "Hold’em Coach",
    domain: "holdem-demo.vercel.app",
    url: "https://holdem-demo.vercel.app",
    status: "Interactive Demo",
    category: "Interactive Learning",
    concept: "Learn Texas Hold’em by playing guided hands instead of reading rules.",
    detail: "An interactive table that walks players through position, pot odds, and betting streets against friendly bots before opening free play.",
    previewable: true,
  },
  {
    id: "life-os",
    name: "Life OS",
    domain: "life-os-handoff.vercel.app",
    url: "https://life-os-handoff.vercel.app",
    status: "Live",
    category: "Personal Finance",
    concept: "Monthly money planning that stays strictly on your own device.",
    detail: "A focused monthly obligation and cashflow planner designed to run offline with private on-device storage.",
    previewable: true,
  },
];

export const BESPOKE_CONCEPTS: ConceptItem[] = [
  {
    "slug": "autospa-abuja-service-booking",
    "brand": "AutoSpa Abuja",
    "purpose": "Book a service",
    "headline": "Book it. Track it. Drive it.",
    "group": "Retail & Dining",
    "url": "https://ofonn.github.io/concepts/autospa-abuja-service-booking/"
  },
  {
    "slug": "baytuzzeenah-shop",
    "brand": "Baytuzzeenah",
    "purpose": "Shop online",
    "headline": "Modest living, delivered or ready to collect.",
    "group": "Retail & Dining",
    "url": "https://ofonn.github.io/concepts/baytuzzeenah-shop/"
  },
  {
    "slug": "beloxxi-biscuits",
    "brand": "Beloxxi",
    "purpose": "Nigeria's favourite biscuits",
    "headline": "Nigeria's favourite biscuits.",
    "group": "Food & Agro",
    "url": "https://ofonn.github.io/concepts/beloxxi-biscuits/"
  },
  {
    "slug": "beverlys-hall-booking",
    "brand": "Beverly's Event Centre",
    "purpose": "Hall booking",
    "headline": "Your day, our hall.",
    "group": "Hospitality",
    "url": "https://ofonn.github.io/concepts/beverlys-hall-booking/"
  },
  {
    "slug": "blanche-dental-booking",
    "brand": "Blanche Dental Clinic",
    "purpose": "Booking",
    "headline": "Pick a branch. Pick a time. Smile.",
    "group": "Healthcare",
    "url": "https://ofonn.github.io/concepts/blanche-dental-booking/"
  },
  {
    "slug": "crown-flour-mill",
    "brand": "Crown Flour Mill",
    "purpose": "Bulk flour ordering for bakers",
    "headline": "Order your flour straight from the mill.",
    "group": "Food & Agro",
    "url": "https://ofonn.github.io/concepts/crown-flour-mill/"
  },
  {
    "slug": "crunch-fitness-class-booking",
    "brand": "Crunch Fitness",
    "purpose": "Book a class",
    "headline": "Book a class",
    "group": "Fitness",
    "url": "https://ofonn.github.io/concepts/crunch-fitness-class-booking/"
  },
  {
    "slug": "doren-booking",
    "brand": "Doren",
    "purpose": "Trusted multi-specialist hospital in Lagos",
    "headline": "Trusted specialist care in Lagos.",
    "group": "Healthcare",
    "url": "https://ofonn.github.io/concepts/doren-booking/"
  },
  {
    "slug": "eatright-office-lunch",
    "brand": "EatRight Foods",
    "purpose": "Office lunch",
    "headline": "Feed the whole office. Every day.",
    "group": "Retail & Dining",
    "url": "https://ofonn.github.io/concepts/eatright-office-lunch/"
  },
  {
    "slug": "ecofitness-membership",
    "brand": "Ecofitness",
    "purpose": "Join online",
    "headline": "Join today. Train at any branch.",
    "group": "Fitness",
    "url": "https://ofonn.github.io/concepts/ecofitness-membership/"
  },
  {
    "slug": "eljjays-room-dining",
    "brand": "Eljjays Place",
    "purpose": "Room dining",
    "headline": "Dinner, from wherever you're relaxing.",
    "group": "Hospitality",
    "url": "https://ofonn.github.io/concepts/eljjays-room-dining/"
  },
  {
    "slug": "fresh-city-preorder",
    "brand": "Fresh City Bakery",
    "purpose": "Pre-order",
    "headline": "Order tonight. Collect it warm.",
    "group": "Retail & Dining",
    "url": "https://ofonn.github.io/concepts/fresh-city-preorder/"
  },
  {
    "slug": "geovita-where-to-buy",
    "brand": "Geovita",
    "purpose": "Staple foods for a longer, healthier life",
    "headline": "Staple foods for a longer, healthier life.",
    "group": "Food & Agro",
    "url": "https://ofonn.github.io/concepts/geovita-where-to-buy/"
  },
  {
    "slug": "grand-cereals",
    "brand": "Grand Cereals",
    "purpose": "Food, feed and pet nutrition",
    "headline": "Nourish every member of the family.",
    "group": "Food & Agro",
    "url": "https://ofonn.github.io/concepts/grand-cereals/"
  },
  {
    "slug": "greenpath-parent-portal",
    "brand": "Greenpath",
    "purpose": "Parent portal",
    "headline": "Stepping to greater heights.",
    "group": "Education",
    "url": "https://ofonn.github.io/concepts/greenpath-parent-portal/"
  },
  {
    "slug": "greenstone-parent-notices",
    "brand": "Greenstone Schools",
    "purpose": "Parent app",
    "headline": "Every notice. Every parent.",
    "group": "Education",
    "url": "https://ofonn.github.io/concepts/greenstone-parent-notices/"
  },
  {
    "slug": "gym-starllion-referrals",
    "brand": "Gym Starllion",
    "purpose": "Bring a friend",
    "headline": "Train together.",
    "group": "Fitness",
    "url": "https://ofonn.github.io/concepts/gym-starllion-referrals/"
  },
  {
    "slug": "hairven-walk-in-queue",
    "brand": "Hairven",
    "purpose": "Walk-in queue",
    "headline": "Skip the waiting room.",
    "group": "Retail & Dining",
    "url": "https://ofonn.github.io/concepts/hairven-walk-in-queue/"
  },
  {
    "slug": "ifgreen-outgrowers",
    "brand": "Ifgreen",
    "purpose": "Feeding communities, powering industries",
    "headline": "Feeding communities, powering industries.",
    "group": "Food & Agro",
    "url": "https://ofonn.github.io/concepts/ifgreen-outgrowers/"
  },
  {
    "slug": "life-flour-mill",
    "brand": "Life Flour",
    "purpose": "Nourishing Nigerian households",
    "headline": "Nourishing Nigerian households.",
    "group": "Food & Agro",
    "url": "https://ofonn.github.io/concepts/life-flour-mill/"
  },
  {
    "slug": "livestock-feeds",
    "brand": "Livestock Feeds",
    "purpose": "Quality feeds nationwide",
    "headline": "The finest animal feed for farmers nationwide.",
    "group": "Food & Agro",
    "url": "https://ofonn.github.io/concepts/livestock-feeds/"
  },
  {
    "slug": "luxor-abuja-gift-cards",
    "brand": "Luxor Salon & Spa",
    "purpose": "Gift cards",
    "headline": "Give them an hour of Luxor.",
    "group": "Retail & Dining",
    "url": "https://ofonn.github.io/concepts/luxor-abuja-gift-cards/"
  },
  {
    "slug": "may-baker-verify",
    "brand": "May & Baker",
    "purpose": "Decades of trust and reliability",
    "headline": "Decades of trust and reliability.",
    "group": "Healthcare",
    "url": "https://ofonn.github.io/concepts/may-baker-verify/"
  },
  {
    "slug": "multitrex-bean-suppliers",
    "brand": "Multi-Trex",
    "purpose": "Reborn, renewed and revitalised",
    "headline": "Reborn, renewed and revitalised.",
    "group": "Food & Agro",
    "url": "https://ofonn.github.io/concepts/multitrex-bean-suppliers/"
  },
  {
    "slug": "muse-enugu-book-direct",
    "brand": "MUSE Boutique Hotel",
    "purpose": "Book direct",
    "headline": "Stay at MUSE.",
    "group": "Hospitality",
    "url": "https://ofonn.github.io/concepts/muse-enugu-book-direct/"
  },
  {
    "slug": "neimeth-field-sales",
    "brand": "Neimeth",
    "purpose": "The trusted name in family medicines",
    "headline": "The trusted name in family medicines.",
    "group": "Healthcare",
    "url": "https://ofonn.github.io/concepts/neimeth-field-sales/"
  },
  {
    "slug": "okomu-oil-palm",
    "brand": "Okomu",
    "purpose": "Responsible tropical agriculture",
    "headline": "Responsible tropical agriculture.",
    "group": "Food & Agro",
    "url": "https://ofonn.github.io/concepts/okomu-oil-palm/"
  },
  {
    "slug": "olivet-heights-international-school",
    "brand": "Olivet Heights International School",
    "purpose": "GRA Phase 1, Port Harcourt",
    "headline": "Champions are made here",
    "group": "Education",
    "url": "https://ofonn.github.io/concepts/olivet-heights-international-school/"
  },
  {
    "slug": "patabah-booklist-pickup",
    "brand": "Patabah Books",
    "purpose": "Booklist pickup",
    "headline": "Send the list. We pack it.",
    "group": "Retail & Dining",
    "url": "https://ofonn.github.io/concepts/patabah-booklist-pickup/"
  },
  {
    "slug": "perfumes-for-less-scent-club",
    "brand": "Perfumes For Less NG",
    "purpose": "Scent Club",
    "headline": "Every bottle brings you closer.",
    "group": "Retail & Dining",
    "url": "https://ofonn.github.io/concepts/perfumes-for-less-scent-club/"
  },
  {
    "slug": "prime-rose-admissions",
    "brand": "Prime Rose School",
    "purpose": "Apply online",
    "headline": "Learning to learn , since 1986.",
    "group": "Education",
    "url": "https://ofonn.github.io/concepts/prime-rose-admissions/"
  },
  {
    "slug": "primus-pharmacy-refills",
    "brand": "Primus Pharmacy",
    "purpose": "Refills",
    "headline": "Never run out again.",
    "group": "Healthcare",
    "url": "https://ofonn.github.io/concepts/primus-pharmacy-refills/"
  },
  {
    "slug": "st-ives-patient-portal",
    "brand": "St. Ives",
    "purpose": "Patient portal",
    "headline": "Your care, one login away.",
    "group": "Healthcare",
    "url": "https://ofonn.github.io/concepts/st-ives-patient-portal/"
  },
  {
    "slug": "tiny-toes-admissions",
    "brand": "Tiny Toes Academy",
    "purpose": "Admissions",
    "headline": "Every stage. One school.",
    "group": "Education",
    "url": "https://ofonn.github.io/concepts/tiny-toes-admissions/"
  },
  {
    "slug": "tranquility-uyo-booking",
    "brand": "Tranquility Hotels, Uyo",
    "purpose": "Book direct",
    "headline": "Your country home in Uyo.",
    "group": "Hospitality",
    "url": "https://ofonn.github.io/concepts/tranquility-uyo-booking/"
  },
  {
    "slug": "turning-heads-booking",
    "brand": "Turning Heads",
    "purpose": "Book online",
    "headline": "Your chair is ready when you are.",
    "group": "Retail & Dining",
    "url": "https://ofonn.github.io/concepts/turning-heads-booking/"
  },
  {
    "slug": "ultra-taste-soup-orders",
    "brand": "Ultra Taste",
    "purpose": "Chat ordering",
    "headline": "Your soup order, in one chat.",
    "group": "Retail & Dining",
    "url": "https://ofonn.github.io/concepts/ultra-taste-soup-orders/"
  },
  {
    "slug": "wasche-point-pickup",
    "brand": "Wasche Point",
    "purpose": "Book a pickup",
    "headline": "Laundry, picked up.",
    "group": "Retail & Dining",
    "url": "https://ofonn.github.io/concepts/wasche-point-pickup/"
  },
  {
    "slug": "zichis-investor-centre",
    "brand": "Zichis Agro",
    "purpose": "Cultivating value. Sustaining life.",
    "headline": "Cultivating value. Sustaining life.",
    "group": "Food & Agro",
    "url": "https://ofonn.github.io/concepts/zichis-investor-centre/"
  }
];

export const OPEN_TOOLS: OpenToolItem[] = [
  {
    id: "nccf-computer-academy",
    name: "NCCF Digital Skills Companion",
    url: "https://github.com/ofonn/nccf-computer-academy",
    previewable: false,
    concept: "Offline-first classroom companion tracking learner profiles, attendance, typing drills, quizzes, and portfolio check-ins across a six-phase programme.",
  },
  {
    id: "twitter-remote-archive",
    name: "Universal X-to-MEGA Archiver",
    url: "https://github.com/ofonn/twitter-remote-archive",
    previewable: false,
    concept: "Cloud-to-cloud media archival workflow that transfers authorized streams straight to MEGA storage without using local bandwidth.",
  },
  {
    id: "linux-dualboot-guide",
    name: "Linux Mint Dual-Boot Guide",
    url: "https://ofonn.github.io/linux-dualboot-guide/",
    repo: "https://github.com/ofonn/linux-dualboot-guide",
    previewable: true,
    concept: "Illustrated step-by-step manual for dual-booting Linux Mint cleanly alongside Windows 11 with partitioning and recovery checklists.",
  },
];
