import { PageShell, pageLocale } from "@/components/page-shell";
import { Contact, Hero, IntegrationTeaser, Model, Problem, Works } from "@/components/sections";

/**
 * Home: the pitch, about 14 screens. Promise and proof (Hero), the opportunity (Problem), the offer (Model),
 * what Kromos runs (Portfolio, whose cards link to the inner pages), the flagship in brief, then the ask.
 * The detail lives on /integration, /investors and /about.
 */
export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale, content } = await pageLocale(params);
  return (
    <PageShell content={content} locale={locale} path="">
      <Hero content={content} />
      <Problem content={content} />
      <Model content={content} />
      <Works content={content} locale={locale} />
      <IntegrationTeaser content={content} locale={locale} />
      <Contact content={content} />
    </PageShell>
  );
}
