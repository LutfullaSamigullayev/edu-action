import type { Metadata } from "next";
import "@/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Edu-Action",
  description: "Ta'lim Markari",
};

const sfpro = localFont({
  src: [
    {
      path: "fonts/sfpro400.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/sfpro500.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "fonts/sfpro700.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sfpro",
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as "uz" | "ru" | "en")) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${sfpro.variable}`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
