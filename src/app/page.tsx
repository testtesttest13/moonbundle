import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Comparison from "@/components/Comparison";
import Affiliate from "@/components/Affiliate";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingBubbles from "@/components/FloatingBubbles";

export default function Home() {
  return (
    <>
      <FloatingBubbles />
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <Testimonials />
        <Comparison />
        <Affiliate />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
