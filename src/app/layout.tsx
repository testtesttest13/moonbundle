import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import LanguageModal from "@/components/LanguageModal";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Moonbundles — Boostez votre AOV avec Bundles, Cart Upsell & Post-Achat",
  description:
    "L'app Shopify tout-en-un pour les Bundles Produit, Cart Drawer Upsell & Offres Post-Achat. Notée 5.0/5 par 250+ marchands. Installez gratuitement.",
  openGraph: {
    title: "Moonbundles — Boostez votre AOV à chaque étape",
    description:
      "L'app Shopify tout-en-un pour les Bundles, Cart Upsell & Post-Achat. Configurez en 5 minutes. Adorée par 250+ marchands.",
    type: "website",
    url: "https://apps.shopify.com/moonbundle",
    siteName: "Moonbundles",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moonbundles — Boostez votre AOV à chaque étape",
    description:
      "L'app Shopify tout-en-un pour les Bundles, Cart Upsell & Post-Achat.",
  },
  keywords: [
    "Shopify bundles",
    "cart upsell",
    "post-purchase upsell",
    "AOV",
    "Shopify app",
    "product bundles",
    "volume discounts",
    "cart drawer",
    "panier moyen",
    "app Shopify",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${plusJakartaSans.variable} antialiased`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen overflow-x-hidden grain">
        <LanguageProvider>
          <LanguageModal />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
