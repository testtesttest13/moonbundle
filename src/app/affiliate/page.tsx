import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarfieldBg from "@/components/affiliate/StarfieldBg";
import AffiliateHero from "@/components/affiliate/AffiliateHero";
import AskAi from "@/components/affiliate/AskAi";
import Repartition from "@/components/affiliate/Repartition";
import HowItWorks from "@/components/affiliate/HowItWorks";
import Targets from "@/components/affiliate/WhoFor";
import AffiliateFAQ from "@/components/affiliate/AffiliateFAQ";
import AffiliateCTA from "@/components/affiliate/AffiliateCTA";

export const metadata: Metadata = {
  title: "Programme Affilié Moonbundles — Gagne 40% à vie",
  description:
    "Recommande Moonbundles et gagne 40% de commission récurrente à vie sur chaque marchand. Pas de plafond, paiement automatique chaque mois.",
  openGraph: {
    title: "Programme Affilié Moonbundles — Gagne 40% à vie",
    description:
      "Recommande Moonbundles et gagne 40% de commission récurrente à vie. Pas de plafond, paiement automatique chaque mois.",
    type: "website",
    url: "https://moonbundles.io/affiliate",
    siteName: "Moonbundles",
  },
  twitter: {
    card: "summary_large_image",
    title: "Programme Affilié Moonbundles — Gagne 40% à vie",
    description:
      "Recommande Moonbundles et gagne 40% de commission récurrente à vie.",
  },
};

export default function AffiliatePage() {
  return (
    <>
      <StarfieldBg />
      <Navbar />
      <main className="relative z-10">
        <AffiliateHero />
        <AskAi />
        <Repartition />
        <HowItWorks />
        <Targets />
        <AffiliateFAQ />
        <AffiliateCTA />
      </main>
      <Footer />
    </>
  );
}
