import { PageShell, innerPageMetadata, pageLocale } from "@/components/page-shell";
import { Contact, Ecosystem, Leadership, Manifesto, PageIntro } from "@/components/sections";

type Props = { params: Promise<{ locale: string }> };

export const generateMetadata = ({ params }: Props) =>
  innerPageMetadata(params, "/about", (c) => ({ title: c.pages.about.label, description: c.pages.about.summary }));

/** The company: who we are, the ecosystem of companies, and the people. */
export default async function AboutPage({ params }: Props) {
  const { locale, content } = await pageLocale(params);
  return (
    <PageShell content={content} locale={locale} path="/about">
      <PageIntro intro={content.pages.about} />
      <Manifesto content={content} />
      <Ecosystem content={content} />
      <Leadership content={content} />
      <Contact content={content} />
    </PageShell>
  );
}
