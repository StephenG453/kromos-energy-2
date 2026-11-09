import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { getContent, htmlLang, locales, type Content, type Locale } from "@/content";
import { ContactPanel, Footer, Nav, type PagePath } from "./chrome";
import { Motion } from "./motion";

/** Resolves the [locale] param or 404s, for every page. */
export async function pageLocale(params: Promise<{ locale: string }>): Promise<{ locale: Locale; content: Content }> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  return { locale: locale as Locale, content: getContent(locale as Locale) };
}

/** Title, description, canonical and hreflang alternates for an inner page (home keeps the layout's). */
export async function innerPageMetadata(
  params: Promise<{ locale: string }>,
  path: Exclude<PagePath, "">,
  pick: (content: Content) => { title: string; description: string },
): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const { title, description } = pick(getContent(locale as Locale));
  const full = `${title} | Kromos Energy`;
  return {
    title: full,
    description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: Object.fromEntries(locales.map((l) => [htmlLang[l], `/${l}${path}`])),
    },
    openGraph: { title: full, description, locale: htmlLang[locale as Locale], type: "website" },
  };
}

/** Header, footer, contact panel and the motion layer around a page's sections. */
export function PageShell({
  content,
  locale,
  path,
  children,
}: {
  content: Content;
  locale: Locale;
  path: PagePath;
  children: ReactNode;
}) {
  return (
    <>
      <a href="#conteudo" className="skip-link">
        {content.nav.skip}
      </a>
      <div id="page" className="relative bg-canvas">
        <Nav content={content} locale={locale} path={path} />
        <main id="conteudo" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer content={content} locale={locale} path={path} />
      </div>
      <ContactPanel content={content} />
      <Motion />
    </>
  );
}
