import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import CookieBanner from "@/components/compliance/CookieBanner";
import "./globals.css";
import JsonLd from "@/components/seo/JsonLd";

const lexendSans = Lexend({
  variable: "--font-lexend-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Qui Le Demande ?",
  description: "L’agence qui vous écoute",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${lexendSans.variable} h-full antialiased bg-brand-blue`}
    >
      <head>
        <Script id="google-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied'
            });
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        <JsonLd />
        {children}
        <CookieBanner />

        <GoogleTagManager gtmId="GTM-KVWD6R9T" />
      </body>
    </html>
  );
}
