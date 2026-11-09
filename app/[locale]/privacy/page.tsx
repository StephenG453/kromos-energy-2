import type { Metadata } from "next";
import { PageShell, innerPageMetadata, pageLocale } from "@/components/page-shell";
import { PageIntro, PrivacyPolicy } from "@/components/sections";

type Props = { params: Promise<{ locale: string }> };

// Kept out of search results while the text is a draft for legal review; drop `robots` once it's approved.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const meta = await innerPageMetadata(params, "/privacy", (c) => ({ title: c.pages.privacy.title, description: c.pages.privacy.summary }));
  return { ...meta, robots: { index: false, follow: true } };
}

/** Privacy policy: what the site collects, why, and the visitor's rights. Text in content/{lang}.ts, `privacy`. */
export default async function PrivacyPage({ params }: Props) {
  const { locale, content } = await pageLocale(params);
  return (
    <PageShell content={content} locale={locale} path="/privacy">
      <PageIntro intro={content.pages.privacy} />
      <PrivacyPolicy content={content} />
    </PageShell>
  );
}
