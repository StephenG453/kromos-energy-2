import { PageShell, innerPageMetadata, pageLocale } from "@/components/page-shell";
import { Contact, Grid, InvestorModel, PageIntro, Pipeline } from "@/components/sections";
import { htmlLang } from "@/content";

type Props = { params: Promise<{ locale: string }> };

export const generateMetadata = ({ params }: Props) =>
  innerPageMetadata(params, "/investors", (c) => ({ title: c.pages.investors.label, description: c.pages.investors.summary }));

/** The investor case: returns first, then why the grid needs this, how the service works, and the licensed pipeline. */
export default async function InvestorsPage({ params }: Props) {
  const { locale, content } = await pageLocale(params);
  return (
    <PageShell content={content} locale={locale} path="/investors">
      <PageIntro intro={content.pages.investors} />
      <InvestorModel content={content} />
      <Grid content={content} />
      <Pipeline content={content} lang={htmlLang[locale]} />
      <Contact content={content} />
    </PageShell>
  );
}
