import type { Metadata } from "next";
import QuizPage from "@/components/quiz-2026/QuizPage";

export const metadata: Metadata = {
  title: "Quiz 2026 : Ton store est prêt ? | Moonbundles",
  description:
    "20 questions pour savoir si ton store e-commerce est prêt pour 2026. Réponds, reçois ton score et ton AOV potentiel personnalisé.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <QuizPage />;
}
