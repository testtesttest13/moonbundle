import type { Metadata } from "next";
import NativeAdsPage from "@/components/native-ads/NativeAdsPage";

export const metadata: Metadata = {
  title: "Guide Native Ads pour E-commerce | Moonbundles",
  description:
    "Crée des native ads qui scalent pour ton e-commerce. Framework complet en 3 étapes avec Claude AI et Nanobanana.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <NativeAdsPage />;
}
