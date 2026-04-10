import type { Metadata } from "next";
import ChecklistPage from "@/components/checklist/ChecklistPage";

export const metadata: Metadata = {
  title: "6 Quick Wins CRO pour augmenter ton panier moyen | Moonbundles",
  description:
    "La checklist CRO qu'on utilise sur chaque store qu'on analyse. Applique ces 6 points et ton panier moyen augmente de 20 à 40%.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ChecklistPage />;
}
