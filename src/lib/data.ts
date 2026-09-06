export const siteNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/clients", label: "Clients" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const contact = {
  address: "616, Suchita Business Park, Patel Chowk, Pant Nagar, Ghatkopar (E), Mumbai 400075",
  phone: "+91 98703 22854",
  phoneHref: "+919870322854",
  email: "vm@3rdwavemedia.in",
  mapQuery: "Suchita Business Park, Patel Chowk, Pant Nagar, Ghatkopar East, Mumbai 400075",
  social: [
    { label: "Facebook", href: "https://www.facebook.com/3rdWaveMediaCorp/" },
    { label: "Twitter", href: "https://twitter.com/3rdwavemedia3" },
    { label: "Instagram", href: "https://www.instagram.com/3rd_wavemedia/" },
    { label: "Pinterest", href: "https://in.pinterest.com/3rdwavemedia/" },
  ],
};

export type ServicePillar = {
  slug: string;
  icon: string;
  title: string;
  blurb: string;
  items: string[];
};

export const servicePillars: ServicePillar[] = [
  {
    slug: "brand-identity",
    icon: "ic-palette",
    title: "Brand & Identity",
    blurb: "Where the brand starts — a mark and a point of view worth being consistent about.",
    items: ["Branding & identity conceptualization", "Creative & art direction"],
  },
  {
    slug: "content-social",
    icon: "ic-mail",
    title: "Content & Social",
    blurb: "The calendar that keeps a brand's voice showing up, week after week.",
    items: ["Social media & content marketing", "Copywriting & content publishing"],
  },
  {
    slug: "digital-presence",
    icon: "ic-chart",
    title: "Digital Presence",
    blurb: "The channels that compound — findable today, still paying off next year.",
    items: ["Search engine optimization", "Lead generation & paid strategy"],
  },
  {
    slug: "campaigns",
    icon: "ic-megaphone",
    title: "Campaigns",
    blurb: "Time-boxed pushes built around a moment, a launch, or a festival calendar.",
    items: ["Email strategy & marketing", "Influencer partnerships"],
  },
  {
    slug: "offline-production",
    icon: "ic-camera",
    title: "Offline & Production",
    blurb: "In-house motion and print, so a campaign never waits on an outside vendor.",
    items: ["Audio-visual & digital video commercials", "Print design"],
  },
];

export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  tags: string[];
  summary: string;
  body: string[];
  stats: { label: string; value: string }[];
  window: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "precious-memory-seagate",
    client: "Seagate Technology",
    title: "Precious Memories",
    tags: ["Facebook Campaign", "Consumer Tech", "Brand Storytelling"],
    summary:
      "A five-day Facebook contest asking what people would actually save, for a brand that usually talks in spec sheets.",
    body: [
      "Seagate Technology is an American data storage company and the world leader in hard disks, drives and storage solutions — today it holds roughly 50% of the hard-drive market in India.",
      "The brief wasn't more capacity numbers. Precious Memories ran as a five-day Facebook contest, from 27th to 31st July, asking people what they'd actually save if a drive could only hold one thing — turning a storage spec into a personal, shareable moment.",
    ],
    stats: [
      { label: "India hard-drive market share", value: "~50%" },
      { label: "Campaign window", value: "5 days" },
    ],
    window: "27–31 July",
  },
  {
    slug: "backup-buddy-seagate",
    client: "Seagate Technology",
    title: "The Backup Buddy Contest",
    tags: ["Facebook Campaign", "Consumer Tech", "Friendship Day"],
    summary:
      "A 36-hour Friendship Day activation built around Seagate's Backup Plus line — the product as a metaphor for a friend who's always got your back.",
    body: [
      "Seagate organised a Friendship Day campaign called \"The Backup Buddy Contest,\" run on Facebook over 36 hours from 6th to 7th August.",
      "The name plays on Seagate's Backup Plus product line and the idea of a buddy always being there — building a mutual recall between the brand's core offering and the bond shared between friends.",
    ],
    stats: [
      { label: "Activation window", value: "36 hrs" },
      { label: "Platform", value: "Facebook" },
    ],
    window: "6–7 August",
  },
  {
    slug: "fathers-day-seagate",
    client: "Seagate Technology",
    title: "#SuperDadChallenge",
    tags: ["Contest", "Consumer Tech", "Cultural Moment"],
    summary:
      "An online contest and listicle built to give Father's Day — a date not widely marked in India — a genuine moment of its own.",
    body: [
      "Father's Day honours paternal bonds, but it isn't widely celebrated in India. The brief was to give it a real moment anyway.",
      "The #SuperDadChallenge ran online as a contest paired with a creative listicle, from 9th to 18th June, inviting people to publicly credit their fathers instead of letting the date pass unmarked.",
    ],
    stats: [
      { label: "Format", value: "Contest + listicle" },
      { label: "Campaign window", value: "10 days" },
    ],
    window: "9–18 June",
  },
  {
    slug: "rapoo-diwali-campaign",
    client: "Rapoo",
    title: "Rapoo Diwali Campaign",
    tags: ["Festival Campaign", "Gaming Contest", "Online + Offline"],
    summary:
      "A three-week Diwali push for a wireless-peripherals brand, blending gaming contests with festival sentiment across online and offline touchpoints.",
    body: [
      "\"Make your life wireless\" is Rapoo's founding line — established in 2002, the brand makes wireless peripheral products and was looking to bring that positioning into a major Indian festival.",
      "The campaign combined gaming contests with a \"Rapoo's Diwali ki Diwali\" contest thread, running from 30th October to 20th November across both online and offline platforms — using the festival to build a warmer, more personal connection to a product line that's usually sold on specs.",
    ],
    stats: [
      { label: "Campaign window", value: "3 weeks" },
      { label: "Channels", value: "Online + offline" },
    ],
    window: "30 Oct – 20 Nov",
  },
  {
    slug: "grand-lotus-banquets",
    client: "Grand Lotus Banquets",
    title: "Rebuilding a Banquet Hall's Reputation",
    tags: ["SEO", "SEM", "Local Business"],
    summary:
      "A newly-acquired banquet hall needed its digital footprint rebuilt from scratch after a change in ownership.",
    body: [
      "Grand Lotus had recently acquired the banquet hall previously known as Lotus Banquets, and needed to re-establish its reputation under the new name.",
      "The engagement centred on SEO, SEM, SMO and SMM — rebuilding search visibility and social presence so the venue's new identity, not its old one, is what people find first.",
    ],
    stats: [
      { label: "Core services", value: "SEO · SEM · SMO · SMM" },
      { label: "Category", value: "Hospitality" },
    ],
    window: "Ongoing",
  },
  {
    slug: "jughead-premier-league",
    client: "Jughead's the UNRESTAURANT",
    title: "Jughead Premier League",
    tags: ["Social Reactivation", "Sports Tie-in", "Online + Offline"],
    summary:
      "A cricket-season reactivation campaign for a 15-year-old restaurant brand, sponsored by two major beer companies.",
    body: [
      "Jughead's the UNRESTAURANT is an Italian restaurant, bar and grill with locations across the city and nearly fifteen years in business.",
      "The Jughead Premier League campaign was built to reactivate its audience on social media and lift engagement across both online and offline platforms, timed to India's T20 cricket season and powered by Kingfisher and Carlsberg.",
    ],
    stats: [
      { label: "Brand age", value: "~15 yrs" },
      { label: "Powered by", value: "Kingfisher · Carlsberg" },
    ],
    window: "T20 season",
  },
];

export const clients = [
  { name: "Seagate Technology", note: "Consumer tech · 3 campaigns" },
  { name: "Rapoo", note: "Wireless peripherals" },
  { name: "Grand Lotus Banquets", note: "Hospitality" },
  { name: "Jughead's the UNRESTAURANT", note: "Food & beverage" },
];

export type BlogPost = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  tag: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "what-phygital-actually-means",
    title: "\"Phygital\" isn't a buzzword — it's a scheduling problem",
    dek: "Why we plan physical and digital execution as one strategy instead of two briefs.",
    date: "2026-02-11",
    tag: "Strategy",
    body: [
      "Most agencies split a campaign in two the moment it needs both a physical presence and a digital one — one team plans the event, another plans the feed, and the two meet for the first time in a status call two weeks before launch.",
      "We plan them as one strategy from the first meeting, which is what we mean when we say \"phygital.\" A print piece, an in-store moment and a paid campaign are briefed together, so the offline moment is built with its digital afterlife in mind and the digital campaign already knows what it's pointing back to.",
      "It's less a philosophy than a scheduling discipline: nothing physical ships without someone already owning how it shows up online, and nothing digital ships without someone asking what it's driving people toward in the real world.",
    ],
  },
  {
    slug: "in-house-motion-department",
    title: "Why we kept motion graphics in-house",
    dek: "The case for owning production instead of briefing it out, campaign by campaign.",
    date: "2026-01-22",
    tag: "Studio",
    body: [
      "When 3rd Wave Media moved out of a rented one-bedroom flat and into a dedicated studio in 2014, the first real hire wasn't another strategist — it was someone who could edit.",
      "Outsourced production means a campaign's momentum depends on someone else's calendar. An idea that lands well in a Tuesday strategy meeting can sit for a week waiting on an external edit, by which point the moment it was built around has often passed.",
      "Keeping design, copy and motion in the same building doesn't just save time — it means a launch can react to what's actually happening (a trending match, a festival date moving) instead of shipping the plan that was approved three weeks earlier.",
    ],
  },
  {
    slug: "one-team-not-nine-vendors",
    title: "The real cost of nine vendors for one brand",
    dek: "What gets lost when brand, content, digital and offline are briefed to different agencies.",
    date: "2025-12-04",
    tag: "Process",
    body: [
      "A brand identity from one shop, social from a second, performance media from a third, and an event agency for anything offline — it's a common setup, and it usually works fine right up until two of those campaigns need to say the same thing in the same week.",
      "Every hand-off between vendors is a place a brand's voice can drift. Nobody is wrong on their own brief; the strategy just doesn't exist anywhere as a single document everyone is reading from.",
      "Running brand, content, digital and offline out of one team doesn't mean fewer specialists — it means the specialists are in one room, working from one plan, so a change in one channel is a five-minute conversation instead of a week of re-briefing.",
    ],
  },
];

export const faqs = [
  {
    q: "What does \"phygital\" mean at 3rd Wave Media?",
    a: "It's our word for planning physical and digital execution as one strategy — an event, a print piece and a paid campaign built to reinforce each other instead of running in separate silos.",
  },
  {
    q: "Do you handle production in-house, or outsource it?",
    a: "In-house. We run our own motion graphics, design and content teams so video, copy and strategy stay in the same building — no waiting on an outside vendor's calendar.",
  },
  {
    q: "What kinds of brands have you worked with?",
    a: "Consumer tech names like Seagate Technology and Rapoo, hospitality brands like Grand Lotus Banquets, and F&B properties like Jughead's the UNRESTAURANT — plus founder-led businesses at an earlier stage.",
  },
  {
    q: "Where are you based, and do you work outside Mumbai?",
    a: "We're headquartered in Ghatkopar East, Mumbai, and run both national and regional campaigns for clients based well outside the city.",
  },
];
