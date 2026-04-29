import type { Metadata } from "next";
import ScalePlaybook from "./ScalePlaybook";

export const metadata: Metadata = {
  title: "Scale Playbook : 4 hacks des stores à $10k/day | Moonbundles",
  description:
    "J'ai analysé 50 stores Shopify qui font +$10k/day. Voilà les 4 hacks qui reviennent dans 98% des cas — et le code liquid FOMO prêt à coller.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ScalePlaybook />;
}
