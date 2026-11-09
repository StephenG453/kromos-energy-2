import { Logo, Mark, Wordmark } from "./logo";
import Link from "next/link";
import { locales, type Content, type Locale } from "@/content";
import { ContactForm } from "./contact-form";

export const wrap = "mx-auto w-full max-w-[1600px] px-6 md:px-10";

/** Id of the side panel every "Contato" opens (motion.tsx, setupDialogs). */
export const CONTACT_PANEL = "contato-painel";

/** Page paths in content ("/investors") are locale-free; anchors ("#modelo") stay on the page.
    Plain <a>, not next/link: motion.tsx sets up GSAP and Lenis for a full page load. */
export const localHref = (locale: Locale, href: string) => (href.startsWith("/") ? `/${locale}${href}` : href);

/** Which page is open, for the language switch and aria-current: "" is home, else "/integration" etc. */
export type PagePath = "" | "/integration" | "/investors" | "/about" | "/privacy";

function LangSwitch({ current, path = "", className = "" }: { current: Locale; path?: PagePath; className?: string }) {
  return (
    <ul className={`list-o flex items-center label ${className}`}>
      {locales.map((l) => (
        <li key={l}>
          <Link
            href={`/${l}${path}`}
            hrefLang={l}
            aria-current={l === current ? "page" : undefined}
            className={`lang-link ${l === current ? "lang-on" : "text-mute"}`}
          >
            {l}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Nav({ content, locale, path = "" }: { content: Content; locale: Locale; path?: PagePath }) {
  const { nav } = content;
  const primary = nav.items.filter((i) => i.href !== "#contato");
  const contact = nav.items.find((i) => i.href === "#contato");
  return (
    <>
      {/* Progressive blur instead of a solid bar: 8 layers, each blurring twice the last, strongest at the top.
          It sits outside the header so the header can blend (difference) with the page itself. */}
      <div aria-hidden className="header-blur">
        {Array.from({ length: 8 }, (_, i) => (
          <div key={i} />
        ))}
      </div>
      <header className="header-blend fixed inset-x-0 top-0 z-50">
        <div className={`${wrap} flex h-16 items-center justify-between gap-6`}>
          {/* Brand and navigation together on the left ("where can I go"); the one action, Contact, on the right. */}
          <div className="flex items-center gap-14">
            <div className="brand-mask">
              <Link id="brand" href={`/${locale}`} className="flex items-center gap-3" aria-label="Kromos Energy">
                {/* Words only: the K is drawn by the unblended layer below, in the same place. */}
                <Logo mark="none" className="h-[calc(36*var(--u))] w-auto md:h-[calc(40*var(--u))]" />
              </Link>
            </div>

            <nav aria-label="Principal" className="hidden lg:block">
              {/* Spaced links, no commas: three page names read as separate destinations. */}
              <ul className="list-o flex items-center gap-10 text-base">
                {primary.map((item) => (
                  <li key={item.href} className="flex" data-hi>
                    <a href={localHref(locale, item.href)} aria-current={item.href === path ? "page" : undefined}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="hidden lg:flex items-center gap-8" data-hi>
            {contact && (
              // Outlined pill in the header's own colour (currentColor), so it follows the light / dark / blend modes.
              <button
                type="button"
                className="link-o cursor-pointer rounded-full border border-current px-5 py-1.5 text-base"
                data-dialog-open={CONTACT_PANEL}
                aria-haspopup="dialog"
              >
                {contact.label}
              </button>
            )}
          </div>

          <details className="lg:hidden relative" data-hi data-menu>
            <summary className="menu-toggle label cursor-pointer list-none select-none">
              <span>{nav.menu}</span>
              <span>{nav.close}</span>
            </summary>
            <nav aria-label={nav.menu} className="menu-panel absolute right-0 top-full mt-1 max-h-[calc(100svh-5rem)] w-[min(20rem,calc(100vw-3rem))] overflow-y-auto border border-rule bg-canvas text-ink px-6 py-4">
              <ul className="grid gap-1 text-lg">
                {nav.items.map((item) => (
                  <li key={item.href}>
                    {item === contact ? (
                      <button type="button" className="link cursor-pointer" data-dialog-open={CONTACT_PANEL}>
                        {item.label}
                      </button>
                    ) : (
                      <a href={localHref(locale, item.href)} className="link" aria-current={item.href === path ? "page" : undefined}>
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
              <LangSwitch current={locale} path={path} className="mt-4 pt-2 border-t border-rule" />
            </nav>
          </details>
        </div>
      </header>
      {/* The blue K, always in its brand colours. The header blends (difference) to stay legible over any ground,
          which would turn blue to orange on paper, so the K sits on its own layer: same box as the header's logo,
          outside the blend, clicks passing through to the logo link underneath. */}
      <div aria-hidden className="header-mark" data-header-mark>
        <div className={`${wrap} flex h-16 items-center`}>
          <div className="brand-mask">
            <span id="brand-mark" className="flex items-center">
              <Logo mark="gradient" words={false} gradientId="kromos-k-header" className="h-[calc(36*var(--u))] w-auto md:h-[calc(40*var(--u))]" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

/** Waving hairlines behind the footer, after icomat.co.uk; drawn and animated in motion.tsx (setupFooterLines). */
function FooterLines() {
  return <canvas className="site-footer-lines" aria-hidden data-footer-lines />;
}

/** Full-screen footer after icomat.co.uk: symbol and the large name on top, nav under the name, small print below. */
export function Footer({ content, locale, path = "" }: { content: Content; locale: Locale; path?: PagePath }) {
  const { footer, nav } = content;
  return (
    <footer className="site-footer dark bg-night text-canvas" data-tone="dark" data-footer>
      <div className="site-footer-inner" data-footer-inner>
        <FooterLines />
        <div className={`${wrap} site-footer-grid`}>
          <div className="site-footer-mark" data-footer-rise>
            {/* The symbol goes home, like the header logo. The link is the element the footer reveal lifts. */}
            <a href={`/${locale}`} className="site-footer-home" aria-label="Kromos Energy">
              <Mark gradient gradientId="kromos-k-footer" className="block h-full w-auto" />
            </a>
          </div>
          <div className="site-footer-side">
            <div className="overflow-clip" data-footer-rise>
              <Wordmark className="site-footer-word" />
            </div>
            <nav aria-label="Rodapé">
              <ul className="site-footer-nav list-o label">
                {nav.items.map((item) => (
                  <li key={item.href} data-footer-rise>
                    {item.href === "#contato" ? (
                      <button type="button" className="cursor-pointer" data-dialog-open={CONTACT_PANEL}>
                        {item.label}
                      </button>
                    ) : (
                      <a href={localHref(locale, item.href)}>{item.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="site-footer-sign">
            <p className="int-small max-w-[16em]" data-split>
              {footer.tagline}
            </p>
            <p className="label mt-[calc(24*var(--u))] text-mute-dark">{footer.rights}</p>
          </div>
          <div className="site-footer-small label">
            <div className="site-footer-meta">
              <div className="grid content-start gap-1">
                <p>{footer.legal}</p>
                <a href={localHref(locale, "/privacy")} className="tap link-o w-fit whitespace-nowrap text-mute-dark">
                  {footer.privacy}
                </a>
              </div>
              <div className="grid content-start gap-1">
                <p>{footer.languages}</p>
                <LangSwitch current={locale} path={path} />
              </div>
            </div>
            <a href="#page" className="tap link-o w-fit whitespace-nowrap">
              {footer.top} ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/** "Contato" opens this panel from the right, after icomat.co.uk: label and value rows, the form last. */
export function ContactPanel({ content }: { content: Content }) {
  const { contact: s } = content;
  const { panel } = s;
  return (
    <dialog id={CONTACT_PANEL} className="int-dialog contact-panel" aria-labelledby={`${CONTACT_PANEL}-title`} data-dialog="side">
      <div className="int-dialog-backdrop" data-dialog-close data-dialog-backdrop aria-hidden />
      <div className="contact-panel-card dark" data-dialog-card data-lenis-prevent tabIndex={-1}>
        <div className="flex items-start justify-between gap-6">
          <h2 id={`${CONTACT_PANEL}-title`} className="int-title" data-dialog-title>
            {panel.title.split(" ").map((w, i) => (
              <span key={i} className="word-mask">
                <span>{w}</span>
              </span>
            ))}
          </h2>
          <button type="button" className="int-dialog-close" data-dialog-close aria-label={panel.close}>
            <svg viewBox="0 0 10 10" aria-hidden>
              <path d="M2 2l6 6M8 2l-6 6" />
            </svg>
          </button>
        </div>

        <div className="contact-panel-body int-small" data-dialog-body>
          <div className="contact-panel-row">
            <p>{panel.reach}</p>
            <div className="grid content-start gap-3">
              <a href={`mailto:${s.email}`} className="tap contact-panel-link w-fit">
                {s.email}
              </a>
              {s.offices.map((o) => (
                <a key={o.phone} href={`tel:${o.phone.replace(/[^+\d]/g, "")}`} className="tap contact-panel-link w-fit">
                  {o.phone}
                </a>
              ))}
            </div>
          </div>
          {s.offices.map((o) => (
            <address key={o.country} className="contact-panel-row not-italic">
              <p>{o.country}</p>
              <div>
                <p>{o.company}</p>
                {o.address.map((line) => (
                  <p key={line} className="text-canvas/60">
                    {line}
                  </p>
                ))}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.address.join(", "))}`}
                  className="contact-panel-link mt-[calc(16*var(--u))] inline-block"
                  target="_blank"
                  rel="noreferrer"
                >
                  {panel.maps}
                </a>
              </div>
            </address>
          ))}
          <div className="contact-panel-row">
            <p>{panel.message}</p>
            <ContactForm form={s.form} email={s.email} mute="text-canvas/50" />
          </div>
        </div>

        <div className="contact-panel-foot label text-canvas/50">
          {s.offices.map((o) => (
            <p key={o.company}>{o.company}</p>
          ))}
        </div>
      </div>
    </dialog>
  );
}
