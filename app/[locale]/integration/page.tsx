import { PageShell, innerPageMetadata, pageLocale } from "@/components/page-shell";
import { Contact, Integration, PageIntro } from "@/components/sections";

type Props = { params: Promise<{ locale: string }> };

export const generateMetadata = ({ params }: Props) =>
  innerPageMetadata(params, "/integration", (c) => ({ title: c.pages.integration.label, description: c.pages.integration.summary }));

/** National Integration in full: map and pillars, the agreement, the four phases, the portfolio by state. */
export default async function IntegrationPage({ params }: Props) {
  const { locale, content } = await pageLocale(params);
  return (
    <PageShell content={content} locale={locale} path="/integration">
      <PageIntro intro={content.pages.integration} />
      <Integration content={content} />
      <Contact content={content} />
    </PageShell>
  );
}
