import Image from "next/image";
import type { ReactNode } from "react";
import type { Content, Locale, PageIntro as PageIntroCopy, Stat } from "@/content";
import { CONTACT_PANEL, localHref, wrap } from "./chrome";
import { ContactForm } from "./contact-form";
import { BRAZIL_HEIGHT, BRAZIL_STATES, BRAZIL_VIEWBOX } from "./brazil-map";

/* Sections */

/** Call to action: opens the contact side panel, so a reader can act wherever they are convinced. */
function Cta({ label, className = "" }: { label: string; className?: string }) {
  return (
    <button type="button" className={`btn btn-solid w-fit ${className}`} data-dialog-open={CONTACT_PANEL} aria-haspopup="dialog">
      <span className="dot" aria-hidden />
      {label}
    </button>
  );
}

/** Hero words: big headline bottom left, a short two-tone phrase centre right (the second sentence dimmed). */
function HeroCopy({ hero, light }: { hero: Content["hero"]; light?: boolean }) {
  const reveal = light ? { "data-lines": "" } : {};
  const lines = (items: string[]) =>
    items.map((line) => (
      <span className="line" key={line}>
        <span>{line}</span>
      </span>
    ));
  return (
    <>
      {/* Phones stack the phrase under the headline; from md the wrapper dissolves and each sits on its own. */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-5 pb-8 md:contents">
        <h1
          className="text-[calc(48*var(--u))] font-bold leading-[0.95] tracking-[-0.04em] [&_.line]:-mb-[0.25em] [&_.line]:pb-[0.25em] md:absolute md:bottom-0 md:left-0 md:pb-8 md:text-[calc(60*var(--u))] lg:text-[calc(72*var(--u))]"
          aria-hidden={!light}
          {...reveal}
        >
          {lines(hero.headline)}
        </h1>
        <p
          className="max-w-[calc(440*var(--u))] text-base font-semibold leading-[1.35] tracking-normal md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2"
          aria-hidden={!light}
          {...reveal}
          data-delay="0.2"
        >
          <span className="line">
            <span>{hero.tagline[0]}</span>
          </span>
          <span className="line opacity-75">
            <span>{hero.tagline[1]}</span>
          </span>
          {light && (
            <span className="dark mt-6 block" data-fade>
              <Cta label={hero.cta} />
            </span>
          )}
        </p>
      </div>
    </>
  );
}

export function Hero({ content }: { content: Content }) {
  const { hero } = content;
  return (
    <>
      {/* 90% of the screen, not 100%: the top of "Kromos in numbers" shows below, which says "there's more" better
          than any scroll hint. */}
      <section id="hero" className="relative z-[41] h-[90svh] min-h-[560px] overflow-hidden bg-canvas text-ink">
        <div className="hero-media absolute inset-0 overflow-hidden bg-night text-canvas" data-tone="dark">
          <div className="hero-inner absolute inset-0">
            <div data-parallax="120" className="absolute inset-[-8%]">
              {/* Stock aerials from Pexels (7044793, 7042814, 13198260, 7038597, 9321091, 7040278), cut to 30s. */}
              <video
                className="absolute inset-0 h-full w-full object-cover"
                poster="/images/hero-video-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src="/videos/hero-720.mp4" type="video/mp4" media="(max-width: 900px)" />
                <source src="/videos/hero-1080.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-night/40 to-night/45" aria-hidden />
            {/* Scrim behind the tagline and button at the right, so they hold contrast over bright frames. */}
            <div className="absolute inset-0 hidden bg-gradient-to-l from-night/55 via-night/10 to-transparent md:block" aria-hidden />
          </div>
          <div className={`hero-light ${wrap} absolute inset-0`}>
            <div className="relative h-full">
              <HeroCopy hero={hero} light />
            </div>
          </div>
        </div>
      </section>
      <Figures figures={hero.figures} items={hero.stats} />
    </>
  );
}

/**
 * Section label ("eyebrow"), one pattern site-wide: small uppercase, muted, after the brand's blue dot.
 * Names the section quietly; the heading or statement under it carries the weight. Colours follow .dark grounds.
 */
function Eyebrow({ children, as: Tag = "p", id, className = "" }: { children: ReactNode; as?: "p" | "h2"; id?: string; className?: string }) {
  return (
    <Tag id={id} className={`eyebrow ${className}`} data-fade>
      <span className="eyebrow-dot" aria-hidden />
      {children}
    </Tag>
  );
}

/**
 * Privacy policy body: an optional draft banner, then numbered sections in a readable single column.
 */
export function PrivacyPolicy({ content }: { content: Content }) {
  const { privacy: s } = content;
  return (
    <section aria-label={content.pages.privacy.title} className={`${wrap} py-[calc(96*var(--u))]`}>
      <div className="privacy">
        {s.draftNote && (
          <p className="privacy-draft" role="note">
            {s.draftNote}
          </p>
        )}
        <p className="eyebrow">{s.updated}</p>
        {s.sections.map((sec, i) => (
          <section key={sec.title} className="privacy-section" aria-labelledby={`privacy-${i}`}>
            <h2 id={`privacy-${i}`} className="privacy-title">
              <span className="text-mute">{String(i + 1).padStart(2, "0")}</span> {sec.title}
            </h2>
            {sec.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </section>
        ))}
      </div>
    </section>
  );
}

/** Opening band of an inner page: label, the page's h1 and one line, on dark ground under the header. */
export function PageIntro({ intro }: { intro: PageIntroCopy }) {
  return (
    <section aria-labelledby="page-title" className="dark bg-night text-canvas" data-tone="dark">
      <div className={`${wrap} pb-[calc(120*var(--u))] pt-[calc(200*var(--u))]`}>
        <Eyebrow>{intro.label}</Eyebrow>
        <h1 id="page-title" className="int-title mt-[calc(24*var(--u))] max-w-[16em]" data-split>
          {intro.title}
        </h1>
        <p className="lead mt-[calc(24*var(--u))] text-canvas/70" data-split>
          {intro.summary}
        </p>
      </div>
    </section>
  );
}

/** Previous / next for a [data-slider] track; setupSliders wires them and greys each out at its end. */
function SliderArrows({ prev, next }: { prev: string; next: string }) {
  const arrow = (d: string) => (
    <svg viewBox="0 0 16 16" aria-hidden>
      <path d={d} />
    </svg>
  );
  return (
    <div className="flex gap-[calc(10*var(--u))]">
      <button type="button" className="team-arrow" aria-label={prev} data-slider-prev>
        {arrow("M10 3 5 8l5 5")}
      </button>
      <button type="button" className="team-arrow" aria-label={next} data-slider-next>
        {arrow("m6 3 5 5-5 5")}
      </button>
    </div>
  );
}

/** Second fold, after icomat.co.uk: label and framing line, then tall framed panels on the page's grid lines. */
function Figures({ figures, items }: { figures: Content["hero"]["figures"]; items: Stat[] }) {
  return (
    <section aria-labelledby="figures-title" className="figures mx-auto max-w-[1600px] pb-16 lg:pb-24">
      <div className="figures-head pb-10 pt-12 lg:pb-12 lg:pt-12">
        <Eyebrow as="h2" id="figures-title">
          {figures.label}
        </Eyebrow>
        <p className="text-lg lg:max-w-xl" data-fade>
          {figures.intro}
        </p>
      </div>
      <FigureGrid items={items} />
    </section>
  );
}

/** A figure that counts up: "> 2 GW" -> prefix, counting number, smaller unit. Years stay put. */
function Figure({ value, unitClass = "figures-unit" }: { value: string; unitClass?: string }) {
  // Inline figures keep the value's own spacing ("20+ anos", "> 2 GW"); framed ones space by the flex gap.
  const m = value.match(/^(.*?)(\d[\d.,]*)(.*)$/);
  const [prefix, num, suffix] = m ? [m[1], m[2], m[3]] : ["", value, ""];
  const tidy = (t: string) => (unitClass ? t.trim() : t);
  const count = /^(19|20)\d\d$/.test(num) ? {} : { "data-count": num };
  return (
    <>
      {prefix.trim() && <span className={unitClass || undefined}>{tidy(prefix)}</span>}
      <span {...count}>{num}</span>
      {suffix.trim() && <span className={unitClass || undefined}>{tidy(suffix)}</span>}
    </>
  );
}

/** Framed figure panels on the page's grid lines (second fold, pipeline, investor model). */
function FigureGrid({ items, dark = false }: { items: Stat[]; dark?: boolean }) {
  const mute = dark ? "text-mute-dark" : "text-mute";
  return (
    <div className={dark ? "figures-dark" : undefined}>
      <ul className="figures-grid">
        {items.map((s, i) => (
          <li key={s.label} className="figures-cell" data-fade>
            <span className={`label ${mute}`}>{String(i + 1).padStart(2, "0")}</span>
            <p>
              <span className="figures-value">
                <Figure value={s.value} />
              </span>
              <span className={`mt-3 block text-sm ${mute}`}>{s.label}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * The opportunity: the tension the page answers, straight after the opening figures. Dark between two light folds,
 * a statement that brightens word by word (dimmed lead-in first), then the market in framed figures.
 */
export function Problem({ content }: { content: Content }) {
  const { problem: s } = content;
  return (
    <section id="oportunidade" aria-labelledby="oportunidade-title" className="dark scroll-mt-16 bg-night text-canvas" data-tone="dark">
      <div className={`${wrap} pt-[calc(160*var(--u))]`}>
        <Eyebrow>{s.label}</Eyebrow>
        <h2 id="oportunidade-title" className="int-statement mt-[calc(24*var(--u))]" data-words>
          <span className="int-lead">{s.lead}</span> {s.statement}
        </h2>
      </div>
      <div className="figures mx-auto mt-[calc(80*var(--u))] max-w-[1600px] pb-[calc(160*var(--u))]">
        <FigureGrid items={s.stats} dark />
      </div>
    </section>
  );
}

/**
 * About, "at a glance": the company statement with its photo on the left, the key facts as a label / value list on
 * the right. Static: nothing holds or lights up with the scroll.
 */
export function Manifesto({ content }: { content: Content }) {
  const { manifesto: m } = content;
  return (
    <section aria-labelledby="glance-title" className={`${wrap} glance py-[calc(120*var(--u))]`}>
      <div>
        <Eyebrow as="h2" id="glance-title">
          {m.title}
        </Eyebrow>
        <p className="glance-statement mt-[calc(20*var(--u))]" data-split>
          {m.text}
        </p>
        <div className="glance-photo mt-[calc(40*var(--u))]" data-reveal>
          <Image src={m.image} alt="" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
        </div>
      </div>
      <dl className="glance-facts">
        {m.facts.map((f) => (
          <div key={f.label} className="glance-fact" data-row>
            <dt className="label text-mute">{f.label}</dt>
            <dd className="glance-value">{f.value}</dd>
            <span className="rule" aria-hidden />
          </div>
        ))}
      </dl>
    </section>
  );
}

/**
 * Portfolio as a card grid: every line of business visible at once, each with its headline figure and a link.
 * From lg the flagship is a large card on the left and the other four sit in a 2x2 beside it; md is two columns
 * with the flagship across both; phones stack. The photo zooms only on hover, when the reader asks for it.
 */
export function Works({ content, locale }: { content: Content; locale: Locale }) {
  const { works } = content;
  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="scroll-mt-16 py-[calc(120*var(--u))]">
      <div className={`${wrap} flex items-baseline justify-between border-t border-rule pt-5`}>
        <Eyebrow as="h2" id="portfolio-title">
          {works.title}
        </Eyebrow>
        <p className="eyebrow" data-fade>
          {works.period}
        </p>
      </div>
      <ul className={`${wrap} works-grid`}>
        {works.items.map((w, i) => (
          <li key={w.title} className={`works-card${i === 0 ? " works-card-feature" : ""}`} data-reveal>
            <a href={localHref(locale, w.href)} className="works-link">
              <div className="works-photo">
                <div className="works-photo-zoom">
                  <Image
                    src={w.image}
                    alt=""
                    fill
                    sizes={i === 0 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="works-body">
                <p className="label text-mute">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="works-title">{w.title}</h3>
                <p className="text-sm text-mute">{w.category}</p>
                <p className="works-status">{w.status}</p>
                <span className="works-cta">
                  {works.cta} <span aria-hidden>→</span>
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

/**
 * The ecosystem as a grid, for /about: the six links of the chain, all readable at once over the dimmed photo.
 */
export function Ecosystem({ content }: { content: Content }) {
  const { vision } = content;
  return (
    <section aria-labelledby="ecosystem-title" className="dark relative overflow-hidden bg-night text-canvas" data-tone="dark">
      <div className="absolute inset-0" aria-hidden>
        <Image src={vision.image} alt="" fill sizes="100vw" className="object-cover opacity-25" />
      </div>
      <div className={`${wrap} relative py-[calc(160*var(--u))]`}>
        <Eyebrow as="h2" id="ecosystem-title">
          {vision.label}
        </Eyebrow>
        <ol className="mt-[calc(80*var(--u))] grid gap-x-[calc(40*var(--u))] gap-y-[calc(64*var(--u))] md:grid-cols-2 lg:grid-cols-3">
          {vision.items.map((item, i) => (
            <li key={item.title}>
              <p className="label text-mute-dark">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="h3 mt-[calc(12*var(--u))]" data-split>
                {item.title}
              </h3>
              <p className="prose mt-[calc(16*var(--u))] text-canvas/80" data-split>
                {item.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/**
 * Leasing model, after icomat.co.uk's "Business model": label and title, copy in the middle third,
 * what it means for clients in the last third, the two models side by side (lines rise, rules draw),
 * then why Kromos and the three rules as numbered columns.
 */
export function Model({ content }: { content: Content }) {
  const { model: s } = content;
  return (
    <section id="modelo" aria-labelledby="modelo-title" className="model dark scroll-mt-16 bg-night text-canvas" data-tone="dark">
      <div className={`${wrap} model-inner`}>
        <Eyebrow>{s.label}</Eyebrow>
        <h2 id="modelo-title" className="int-title model-title mt-[calc(16*var(--u))]" data-split>
          {s.title}.
        </h2>

        <div className="model-grid">
          <div className="int-small grid content-start gap-[calc(16*var(--u))]">
            {[s.summary, ...s.body].map((p) => (
              <p key={p} data-split>
                {p}
              </p>
            ))}
          </div>
          <div className="int-small">
            <p data-split>{s.meansTitle}</p>
            <dl className="mt-[calc(8*var(--u))]">
              {s.stats.map((m) => (
                <div key={m.label} className="row" data-row>
                  <dt className="mline row-figure">
                    <span>
                      <Figure value={m.value} unitClass="" />
                    </span>
                  </dt>
                  <dd className="mline text-canvas/50">
                    <span>{m.label}</span>
                  </dd>
                  <span className="rule" aria-hidden />
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="model-compare">
          {[
            { title: s.compare.othersTitle, rows: s.compare.others, ours: false },
            { title: s.compare.kromosTitle, rows: s.compare.kromos, ours: true },
          ].map((col) => (
            <div key={col.title} className={col.ours ? "is-ours" : undefined}>
              <p className="model-compare-head">{col.title}</p>
              <ul>
                {col.rows.map((r) => (
                  <li key={r} className="model-compare-row" data-row>
                    <span className="mline">
                      <span>{r}</span>
                    </span>
                    <span className="rule" aria-hidden />
                  </li>
                ))}
              </ul>
              {col.ours && <Cta label={s.cta} className="mt-[calc(32*var(--u))]" />}
            </div>
          ))}
        </div>

        {/* Why Kromos: three numbered claims across the page, in the same form as the three rules below. */}
        <div className="model-claims">
          <p className="int-small text-canvas/50" data-split>
            {s.claimsTitle}
          </p>
          <ol className="model-rules-list mt-[calc(32*var(--u))]">
            {s.claims.map((c, i) => (
              <li key={c}>
                <p className="int-card-index" data-split>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <span className="int-card-rule" aria-hidden data-draw />
                <p className="int-small" data-split>
                  {c}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="model-rules">
          <h3 className="int-title max-w-[14em]" data-split>
            {s.timelineTitle}
          </h3>
          <ol className="model-rules-list">
            {s.timeline.map((t) => (
              <li key={t.year}>
                <p className="int-card-index" data-split>
                  {t.year}
                </p>
                <span className="int-card-rule" aria-hidden data-draw />
                <p className="label" data-split>
                  {t.rule}
                </p>
                <p className="int-small mt-[calc(12*var(--u))] text-canvas/50" data-split>
                  {t.text}
                </p>
                <p className="model-rules-figure">
                  <Figure value={t.figure} unitClass="" />
                </p>
                <p className="int-small text-canvas/50" data-split>
                  {t.figureLabel}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/** The chip's mark: a dotted crosshair in a ring, after icomat.co.uk. */
function ChipIcon() {
  return (
    <span className="chip-icon" aria-hidden>
      <svg viewBox="0 0 10 10">
        {[
          [5, 1],
          [5, 3],
          [5, 5],
          [5, 7],
          [5, 9],
          [1, 5],
          [3, 5],
          [7, 5],
          [9, 5],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={0.66} />
        ))}
      </svg>
    </span>
  );
}

function Chip({ label, dialog, style }: { label: string; dialog: string; style?: React.CSSProperties }) {
  return (
    <button type="button" className="chip" data-dialog-open={dialog} aria-haspopup="dialog" style={style} data-int-chip>
      <span className="chip-white" aria-hidden />
      <span className="chip-label">
        <span>{label}</span>
      </span>
      <ChipIcon />
    </button>
  );
}

function IntDialog({
  id,
  eyebrow,
  title,
  lead,
  more,
  close,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  more?: string;
  close: string;
  children?: ReactNode;
}) {
  return (
    <dialog id={id} className="int-dialog" aria-labelledby={`${id}-title`} data-dialog>
      <div className="int-dialog-backdrop" data-dialog-close data-dialog-backdrop aria-hidden />
      {/* Focus lands on the card itself, so opening doesn't ring the close button. */}
      <div className="int-dialog-card" data-dialog-card data-lenis-prevent tabIndex={-1}>
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="label text-mute">{eyebrow}</p>
            <h3 id={`${id}-title`} className="int-dialog-title mt-3" data-dialog-title>
              {title.split(" ").map((w, i) => (
                <span key={i} className="word-mask">
                  <span>{w}</span>
                </span>
              ))}
            </h3>
          </div>
          <button type="button" className="int-dialog-close" data-dialog-close aria-label={close}>
            <svg viewBox="0 0 10 10" aria-hidden>
              <path d="M2 2l6 6M8 2l-6 6" />
            </svg>
          </button>
        </div>
        <div className="mt-10 grid gap-5" data-dialog-body>
          <p className="font-normal text-ink">{lead}</p>
          {more && <p className="text-mute">{more}</p>}
          {children}
        </div>
      </div>
    </dialog>
  );
}

/**
 * National integration, staged after icomat.co.uk's home page from its "At scale" block on:
 * a framed map with tags that open dialogs, a statement that lights up word by word over two photos,
 * the agreement in a label/title/list split, the four phases as a pinned horizontal track,
 * and the states as a pinned accordion.
 */
export function Integration({ content }: { content: Content }) {
  const { integration: s } = content;
  const max = Math.max(...s.rows.map((r) => r.mw));
  const onStates = new Map(s.rows.flatMap((r) => r.code.split("/").map((code) => [code, r] as const)));
  const at = (code: string) => {
    const st = BRAZIL_STATES.find((x) => x.code === code)!;
    return { left: `${st.cx / 10}%`, top: `${(st.cy / BRAZIL_HEIGHT) * 100}%` };
  };
  const [titleHead, ...titleTail] = s.roadmapTitle.split(" ");
  const phaseImages = ["/images/stock-crew-site.jpg", "/images/stock-engineers-test.jpg", "/images/stock-modules-rows.jpg", "/images/stock-panels-hills.jpg"];

  return (
    <section id="integracao" aria-labelledby="integracao-title" className="integration dark scroll-mt-16 bg-night text-canvas" data-tone="dark">
      {/* Map frame: 4 x 2 cells with corner ticks; the map is the object, the pillars are its tags. */}
      <div className="int-map" data-int-map>
        <div className="int-frame" aria-hidden data-int-frame>
          {Array.from({ length: 8 }, (_, i) => (
            <span key={i} />
          ))}
        </div>
        <Eyebrow className="int-map-label">{s.mapLabel}</Eyebrow>
        <div className="int-map-figure" data-int-figure>
          <svg viewBox={BRAZIL_VIEWBOX} className="int-map-svg" role="img" aria-label={s.mapLabel}>
            {BRAZIL_STATES.map((st) => (
              <path key={st.code} d={st.d} pathLength={1} className={onStates.has(st.code) ? "is-on" : undefined} data-int-state />
            ))}
            {[...onStates.entries()].map(([code, r]) => {
              const st = BRAZIL_STATES.find((x) => x.code === code)!;
              return (
                <circle
                  key={code}
                  cx={st.cx}
                  cy={st.cy}
                  r={4 + 10 * Math.sqrt(r.mw / max / (r.code.includes("/") ? 2 : 1))}
                  className="int-dot"
                  data-int-dot
                />
              );
            })}
          </svg>
          <Chip label={s.pillars[0].chip} dialog="int-pillar-1" style={{ ...at("MG"), translate: "-110% -170%" }} />
          <Chip label={s.pillars[1].chip} dialog="int-pillar-2" style={{ ...at("PR"), translate: "-118% -50%" }} />
          <Chip label={s.nocChip} dialog="int-noc" style={{ ...at("RS"), translate: "35% -10%" }} />
        </div>
      </div>

      <IntDialog id="int-pillar-1" eyebrow={s.pillars[0].title} title={s.pillars[0].value} lead={s.pillars[0].text} more={s.mou[0].value + ", " + s.mou[0].label} close={s.close}>
        <div className="relative mt-5 aspect-[3/2] overflow-hidden rounded-[10px]">
          <Image src="/images/stock-topdown-green.jpg" alt="" fill sizes="28rem" className="object-cover" />
        </div>
      </IntDialog>
      <IntDialog id="int-pillar-2" eyebrow={s.pillars[1].title} title={s.pillars[1].value} lead={s.pillars[1].text} more={s.mou[1].value + ", " + s.mou[1].label} close={s.close}>
        <div className="relative mt-5 aspect-[3/2] overflow-hidden rounded-[10px]">
          <Image src="/images/stock-tower-sky.jpg" alt="" fill sizes="28rem" className="object-cover" />
        </div>
      </IntDialog>
      <IntDialog id="int-noc" eyebrow={s.nocChip} title={s.nocTitle} lead={s.nocText} close={s.close}>
        <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-rule pt-5">
          {s.targets.map((t) => (
            <div key={t.label}>
              <dd className="font-display text-2xl tabular-nums text-ink">{t.value}</dd>
              <dt className="mt-1 text-sm text-mute">{t.label}</dt>
            </div>
          ))}
        </dl>
      </IntDialog>

      {/* Statement over two photos. */}
      <div className={`${wrap} pt-[calc(120*var(--u))]`}>
        <h2 id="integracao-title" className="int-statement" data-words>
          <span className="int-lead">{s.lead}</span> {s.statement}
        </h2>
        <div className="mt-[calc(40*var(--u))] grid gap-[calc(20*var(--u))] md:grid-cols-2">
          {["/images/stock-aerial-landscape.jpg", "/images/stock-control-room.jpg"].map((src) => (
            <div key={src} className="int-photo" data-int-photo>
              <Image src={src} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* The agreement: label and title on the left, partners and the four figures on the right. */}
      <div className={`${wrap} int-agreement`}>
        <div>
          <Eyebrow>{s.agreementLabel}</Eyebrow>
          <h3 className="int-title mt-[calc(16*var(--u))]" data-split>
            {s.agreementTitle}
          </h3>
        </div>
        <div className="int-small grid content-start gap-[calc(40*var(--u))]">
          <p data-split>{s.partners}</p>
          <dl>
            {s.mou.map((m) => (
              <div key={m.label} className="row" data-row>
                <dt className="mline row-figure">
                  <span>
                    <Figure value={m.value} unitClass="" />
                  </span>
                </dt>
                <dd className="mline text-canvas/50">
                  <span>{m.label}</span>
                </dd>
                <span className="rule" aria-hidden />
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Four phases: the track pins and runs sideways; each photo drifts inside its frame. */}
      {/* A free sideways track: the page scrolls past it; arrows, swipe or a sideways trackpad gesture walk the cards
          (motion.tsx, setupSliders). */}
      <div className="int-timeline" data-int-timeline data-slider>
        <div className="int-timeline-inner" data-int-timeline-inner>
          <h3 className="int-timeline-title" data-words>
            <span>{titleHead}</span> {titleTail.join(" ")}
          </h3>
          <div className="int-track-arrows">
            <SliderArrows prev={content.leadership.prev} next={content.leadership.next} />
          </div>
          <ol className="int-track" data-int-track data-slider-track>
            {s.roadmap.map((r, i) => (
              <li key={r.phase} className="int-card" data-int-card data-slider-card>
                <p className="int-card-index">{String(i + 1).padStart(2, "0")}</p>
                <span className="int-card-rule" aria-hidden />
                <div className="int-card-photo">
                  <Image src={phaseImages[i]} alt="" fill sizes="(min-width: 1024px) 32vw, 80vw" className="object-cover" data-int-card-image />
                </div>
                <p className="int-card-caption label">
                  {r.name} · {r.window}
                </p>
                <p className="mt-2 text-sm text-mute-dark">{r.text}</p>
              </li>
            ))}
          </ol>
          <span className="int-progress" aria-hidden>
            <span data-int-progress data-slider-progress />
          </span>
        </div>
      </div>

      {/* States: an accordion, the first open, a click opens another (motion.tsx, setupLedgerAccordion). */}
      <div className="int-ledger" data-int-ledger>
        <div className={`${wrap} int-ledger-inner`} data-int-ledger-inner>
          <div>
            <h3 className="int-title">{s.ledgerTitle}</h3>
            <p className="int-small mt-[calc(16*var(--u))] max-w-[22em] text-canvas/50">{s.ledgerNote}</p>
          </div>
          <div>
            <p className="int-small mb-[calc(16*var(--u))]">
              {s.total.mw} {s.columns.mw} · {s.total.plants} {s.columns.plants.toLowerCase()}
            </p>
            <ol className="grid gap-[calc(6*var(--u))]" data-int-states>
              {s.rows.map((r, i) => (
                <li key={r.code} className="int-state" data-int-row={i}>
                  <button
                    type="button"
                    className="int-state-head int-small"
                    aria-controls={`int-state-${i}`}
                    data-int-row-button={i}
                  >
                    <span className="int-state-code">{r.code}</span>
                    <span className="int-state-name min-w-0">{r.name}</span>
                    <span className="ml-auto shrink-0 whitespace-nowrap tabular-nums">
                      {r.mw}
                      <span className="int-state-unit"> {s.columns.mw}</span>
                    </span>
                    <span className="int-state-icon" aria-hidden />
                  </button>
                  <div className="int-state-body" id={`int-state-${i}`}>
                    <div>
                      <dl className="int-small grid grid-cols-2 gap-4 pt-[calc(14*var(--u))]">
                        <div>
                          <dt className="opacity-50">{s.columns.plants}</dt>
                          <dd className="int-state-figure">{r.plants}</dd>
                        </div>
                        <div>
                          <dt className="opacity-50">{s.columns.cf}</dt>
                          <dd className="int-state-figure">{r.cf}</dd>
                        </div>
                      </dl>
                      <span className="mt-4 block h-[3px] bg-current/15">
                        <span className="block h-full bg-current" style={{ width: `${(r.mw / max) * 100}%` }} />
                      </span>
                      <p className="int-state-utilities int-small mt-4">
                        <span className="int-state-label">{s.columns.utilities}: </span>
                        <span>{r.utilities}</span>
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Own pipeline, in the same language as the blocks above: a statement that brightens word by word,
 * framed figures that count up, then one row per state whose bar draws with the scroll.
 */
export function Pipeline({ content, lang }: { content: Content; lang: string }) {
  const { pipeline: s } = content;
  const max = Math.max(...s.rows.map((r) => r.mw));
  return (
    <section id="pipeline" aria-labelledby="pipeline-title" className="pipeline scroll-mt-16">
      <div className={`${wrap} pt-[calc(160*var(--u))]`}>
        <Eyebrow>{s.label}</Eyebrow>
        <h2 id="pipeline-title" className="int-statement mt-[calc(16*var(--u))]" data-words>
          <span className="int-lead">{s.title}.</span> {s.summary}
        </h2>
      </div>

      <div className="figures mx-auto mt-[calc(80*var(--u))] max-w-[1600px]">
        <FigureGrid items={s.totals} />
      </div>

      <div className={`${wrap} pipeline-rows`}>
        <div className="pipeline-row int-small text-mute" aria-hidden>
          <span>{s.columns.state}</span>
          <span />
          <span className="text-right">{s.columns.mw}</span>
          <span className="text-right">{s.columns.count}</span>
        </div>
        <ol>
          {s.rows.map((r) => (
            <li key={r.code} className="row pipeline-row int-small" data-row>
              <span className="mline">
                <span>{r.code}</span>
              </span>
              <span className="pipeline-bar" aria-hidden>
                <span data-bar style={{ width: `${(r.mw / max) * 100}%` }} />
              </span>
              <span className="mline text-right tabular-nums">
                <span>{r.mw.toLocaleString(lang, { minimumFractionDigits: 2 })}</span>
              </span>
              <span className="mline text-right tabular-nums">
                <span>{r.count}</span>
              </span>
              <span className="rule" aria-hidden />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/**
 * The grid as a service, after icomat.co.uk's industries slideshow: a full-screen stage that opens out of a
 * 20% inset as it arrives, photos that wipe in top to bottom on a timer, tabs with progress bars, a counter,
 * and each slide's figure as its caption. The service copy follows in the label/title/list split.
 */
/**
 * The investor case up front on /investors: the reference model's figures and the ask, before any explanation.
 */
export function InvestorModel({ content }: { content: Content }) {
  const { grid: s } = content;
  return (
    <section aria-labelledby="investor-model-title" className="py-[calc(120*var(--u))]">
      <div className="figures mx-auto max-w-[1600px]">
        <div className="figures-head pb-[calc(48*var(--u))]">
          <Eyebrow as="h2" id="investor-model-title">
            {s.investorLabel}
          </Eyebrow>
          <p className="int-small text-mute lg:max-w-xl" data-split>
            {s.investor}
          </p>
        </div>
        <FigureGrid items={s.investorFigures} />
        <div className="figures-head pt-[calc(48*var(--u))]">
          <Cta label={s.cta} />
        </div>
      </div>
    </section>
  );
}

/**
 * The grid as a service: a photo band with the title over a deep shade, the market in framed figures (all four at
 * once, nothing on a timer), then the service statement and its three promises.
 */
export function Grid({ content }: { content: Content }) {
  const { grid: s } = content;
  return (
    <section id="rede" aria-labelledby="rede-title" className="dark scroll-mt-16 bg-night text-canvas" data-tone="dark">
      <div className="grid-band">
        {/* Transmission towers: what Kromos builds and leases. Framed on the crossarms, since the band is wide and short. */}
        <Image src="/images/stock-towers-blue.jpg" alt="" fill sizes="100vw" className="object-cover" style={{ objectPosition: "center 35%" }} />
        <span className="grid-band-shade" aria-hidden />
        <div className={`${wrap} grid-band-copy`}>
          <h2 id="rede-title" className="int-title max-w-[11em]" data-split>
            {s.title}.
          </h2>
          <p className="int-small mt-[calc(16*var(--u))] max-w-[30em] text-canvas/85" data-split>
            {s.summary}
          </p>
        </div>
      </div>

      <div className="figures mx-auto max-w-[1600px] pt-[calc(48*var(--u))]">
        <FigureGrid items={s.stats} dark />
      </div>

      {/* The service: a statement, the market context beside the three promises. */}
      <div className={`${wrap} pt-[calc(120*var(--u))]`}>
        <h3 className="int-statement" data-words>
          <span className="int-lead">{s.serviceTitle}.</span> {s.body[1]}
        </h3>
      </div>
      <div className={`${wrap} int-agreement pb-[calc(120*var(--u))]`}>
        <p className="int-small max-w-[26em] text-canvas/50" data-split>
          {s.body[0]}
        </p>
        <ul className="int-small">
          {s.service.map((item) => (
            <li key={item} className="row" data-row>
              <span className="mline">
                <span>{item}</span>
              </span>
              <span className="rule" aria-hidden />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/**
 * Leadership, after sanjaya.framer.ai's testimonials: tag, title and arrows, then wide cards (bio, name and role
 * on the left, portrait on the right) on a sideways track that snaps card by card, and framed figures below.
 */
export function Leadership({ content }: { content: Content }) {
  const { leadership: s } = content;
  return (
    <section id="lideranca" aria-labelledby="lideranca-title" className="team dark scroll-mt-16 bg-night text-canvas" data-tone="dark" data-slider>
      {/* The page scrolls past the cards; arrows, swipe or a sideways trackpad gesture walk them (motion.tsx, setupSliders). */}
      <div className="team-stage" data-slider-stage>
      <div className={`${wrap} pt-[calc(160*var(--u))]`}>
        <Eyebrow>{s.label}</Eyebrow>
        {/* Phones stack the arrows under the summary (right-aligned, as on the Integration phases): without them the
            sideways track gives no hint that there are more cards. */}
        <div className="mt-[calc(20*var(--u))] flex flex-col gap-[calc(32*var(--u))] md:flex-row md:items-end md:justify-between md:gap-8">
          <div>
            <h2 id="lideranca-title" className="int-title max-w-[16em]" data-split>
              {s.title}.
            </h2>
            <p className="int-small mt-[calc(16*var(--u))] max-w-[30em] text-canvas/50" data-split>
              {s.summary}
            </p>
          </div>
          <div className="flex shrink-0 justify-end">
            <SliderArrows prev={s.prev} next={s.next} />
          </div>
        </div>
      </div>

      <ul className="team-track" data-slider-track>
        {s.people.map((p, i) => (
          <li key={p.name} className="team-card" data-slider-card data-reveal>
            <div className="team-card-copy">
              <span className="label text-mute-dark">{String(i + 1).padStart(2, "0")}</span>
              <p className="team-bio" data-split>
                {p.bio}
              </p>
              <div>
                <h3 className="int-small" data-split>
                  {p.name}
                </h3>
                <p className="label mt-[calc(6*var(--u))] text-mute-dark" data-split>
                  {p.role}
                </p>
              </div>
            </div>
            <div className="team-photo">
              <Image src={p.image} alt={p.name} fill sizes="(min-width: 768px) 22vw, 88vw" className="object-cover" />
            </div>
          </li>
        ))}
      </ul>
      </div>

      {/* The same framed figure panels as the second fold, pipeline and investor model. */}
      <div className="figures mx-auto mt-[calc(48*var(--u))] max-w-[1600px] pb-[calc(160*var(--u))]">
        <FigureGrid items={s.figures} dark />
      </div>
    </section>
  );
}

export function Contact({ content }: { content: Content }) {
  const { contact: s } = content;
  const rows = [
    { label: "E-mail", value: s.email, href: `mailto:${s.email}` },
    ...s.offices.map((o) => ({ label: o.country, value: o.phone, href: `tel:${o.phone.replace(/[^+\d]/g, "")}` })),
  ];
  return (
    <section id="contato" aria-labelledby="contato-title" className="contact scroll-mt-16">
      <div className={`${wrap} contact-inner`}>
        <Eyebrow>{s.index}</Eyebrow>
        {/* Two columns: the statement and the direct lines on the left, the form on the right. */}
        <div className="contact-grid">
          <div>
            <h2 id="contato-title" className="int-statement" data-words>
              <span className="int-lead">{s.title}.</span> {s.summary}
            </h2>
            <dl className="contact-lines int-small">
              {rows.map((r) => (
                <div key={r.label} className="row contact-row" data-row>
                  <dt className="mline text-mute">
                    <span>{r.label}</span>
                  </dt>
                  <dd className="mline">
                    <span>
                      <a href={r.href} className="link-o">
                        {r.value}
                      </a>
                    </span>
                  </dd>
                  <span className="rule" aria-hidden />
                </div>
              ))}
            </dl>
          </div>
          <div className="contact-form" data-reveal>
            <ContactForm form={s.form} email={s.email} />
          </div>
        </div>
      </div>
    </section>
  );
}
