import type { Metadata } from "next";
import ValueOfferPage from "@/components/value-offer/ValueOfferPage";

export const metadata: Metadata = {
  title: "Guide : The Psychology Behind High-Converting Offers | Moonbundles",
  description:
    "Pourquoi certains stores font x2 sur leur panier moyen avec le même produit et le même trafic. La psychologie des offres qui convertissent.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ValueOfferPage />;
}
