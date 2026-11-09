export type Locale = "pt" | "en" | "es";
export const locales: Locale[] = ["pt", "en", "es"];
export const defaultLocale: Locale = "pt";

export type Stat = { value: string; label: string };

/** Opening band of an inner page: small label, the page's h1, one line under it. */
export type PageIntro = { label: string; title: string; summary: string };

export type Content = {
  meta: { title: string; description: string };
  nav: {
    items: { href: string; label: string }[];
    cta: string;
    menu: string;
    skip: string;
    close: string;
  };
  hero: {
    /** Primary button under the tagline; opens the contact panel. */
    cta: string;
    image: string;
    /** Big, bottom left, one entry per line. */
    headline: string[];
    /** Small, centre right: first sentence full colour, second dimmed. */
    tagline: [string, string];
    /** Second fold: small label left, a one-line framing right, then the figures in framed panels. */
    figures: { label: string; intro: string };
    stats: Stat[];
  };
  works: {
    index: string;
    title: string;
    period: string;
    cta: string;
    items: { title: string; category: string; status: string; image: string; href: string }[];
  };
  vision: {
    index: string;
    label: string;
    /** Scroll-stepped slider: one word per step, each with its own short text. */
    items: { title: string; text: string }[];
    /** Same photo as the last portfolio item: it grows from that card into this background. */
    image: string;
  };
  ecosystem: {
    index: string;
    title: string;
    summary: string;
    companies: { name: string; role: string; figure: string; figureLabel: string }[];
  };
  /** The opportunity, right after the opening figures: the tension the rest of the page answers. No index, like the hero. */
  problem: {
    label: string;
    /** Dimmed lead-in of the statement. */
    lead: string;
    statement: string;
    stats: Stat[];
  };
  model: {
    /** Button closing the comparison; opens the contact panel. */
    cta: string;
    index: string;
    title: string;
    summary: string;
    body: string[];
    /** Small label over the title, after icomat.co.uk's "Business model". */
    label: string;
    claimsTitle: string;
    claims: string[];
    /** Lead-in over the stats list: "For our clients, this means:". */
    meansTitle: string;
    /** Two-column comparison; rows pair up by index. */
    compare: { othersTitle: string; kromosTitle: string; others: string[]; kromos: string[] };
    stats: Stat[];
    timelineTitle: string;
    timeline: { year: string; rule: string; text: string; figure: string; figureLabel: string }[];
  };
  integration: {
    index: string;
    title: string;
    summary: string;
    /** Opening statement, after icomat.co.uk: the lead stays dimmed, the rest brightens word by word. */
    lead: string;
    statement: string;
    /** Map caption on the left of the frame. */
    mapLabel: string;
    /** The agreement block: small label, large title, partners as intro, mou figures as the list. */
    agreementLabel: string;
    agreementTitle: string;
    mou: Stat[];
    /** chip: the short tag on the map that opens the pillar's dialog. */
    pillars: { title: string; value: string; text: string; chip: string }[];
    /** Home teaser's link to the full program page. */
    more: string;
    partners: string;
    nocChip: string;
    close: string;
    ledgerTitle: string;
    ledgerNote: string;
    columns: { state: string; mw: string; plants: string; cf: string; utilities: string };
    rows: { code: string; name: string; mw: number; plants: number; cf: string; utilities: string }[];
    total: { label: string; mw: string; plants: string; cf: string; utilities: string };
    nocTitle: string;
    nocText: string;
    targets: Stat[];
    roadmapTitle: string;
    roadmap: { phase: string; window: string; name: string; text: string }[];
  };
  pipeline: {
    index: string;
    /** Section label (eyebrow). */
    label: string;
    title: string;
    summary: string;
    totals: Stat[];
    columns: { state: string; mw: string; count: string };
    rows: { code: string; mw: number; count: number }[];
  };
  grid: {
    /** Button under the investor figures; opens the contact panel. */
    cta: string;
    index: string;
    title: string;
    summary: string;
    body: string[];
    stats: Stat[];
    serviceTitle: string;
    service: string[];
    investor: string;
    /** The investor model as framed figures; investor stays as their intro. */
    investorLabel: string;
    investorFigures: Stat[];
  };
  leadership: {
    index: string;
    title: string;
    summary: string;
    /** Tag over the title, after sanjaya.framer.ai's testimonials block. */
    label: string;
    /** Figures drawn from the bios, shown as a band under the cards. */
    figures: Stat[];
    prev: string;
    next: string;
    people: { name: string; role: string; bio: string; image: string }[];
  };
  contact: {
    index: string;
    title: string;
    summary: string;
    form: { name: string; email: string; org: string; message: string; submit: string; note: string; subject: string };
    offices: { country: string; company: string; address: string[]; phone: string }[];
    email: string;
    /** Opens the side panel. */
    cta: string;
    panel: { title: string; close: string; reach: string; message: string; maps: string };
  };
  /** About's "at a glance": a small heading, the company statement, a photo, and the key facts as label / value. */
  manifesto: {
    title: string;
    text: string;
    image: string;
    facts: { label: string; value: string }[];
  };
  /** Inner pages split off the home story; slugs are the same in every language. */
  pages: { integration: PageIntro; investors: PageIntro; about: PageIntro; privacy: PageIntro };
  /** Privacy policy page. draftNote shows as a banner until the text is approved; set it to "" to remove it. */
  privacy: { draftNote: string; updated: string; sections: { title: string; paragraphs: string[] }[] };
  footer: { tagline: string; rights: string; privacy: string; languages: string; legal: string; top: string };
};
