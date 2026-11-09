import type { Metadata } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { getContent, htmlLang, locales, type Locale } from "@/content";
import "../globals.css";

// RF Dewi (Russian Fonts). No Medium cut: the CSS asks for 500 and the browser falls back to Regular.
const sans = localFont({
  src: [
    { path: "../fonts/RFDewi-Regular.woff2", weight: "400" },
    { path: "../fonts/RFDewi-Semibold.woff2", weight: "600" },
    { path: "../fonts/RFDewi-Bold.woff2", weight: "700" },
  ],
  variable: "--font-sans",
  display: "swap",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

type Params = Promise<{ locale: string }>;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const { meta } = getContent(locale as Locale);
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://kromosenergy.com"),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(locales.map((l) => [htmlLang[l], `/${l}`])),
    },
    openGraph: { title: meta.title, description: meta.description, locale: htmlLang[locale as Locale], type: "website" },
  };
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Params }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  return (
    <html suppressHydrationWarning lang={htmlLang[locale as Locale]} className={sans.variable}>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              // Marks JS as on before first paint, so reveal styles can hide copy that motion.tsx will bring in.
              "document.documentElement.classList.add('js')",
          }}
        />
          {children}
      </body>
    </html>
  );
}
