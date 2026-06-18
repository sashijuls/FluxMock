import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/landing/Hero";
import ProductShowcase from "@/components/landing/ProductShowcase";
import FluxSnipeSection from "@/components/landing/FluxSnipeSection";
import FluxWalletSection from "@/components/landing/FluxWalletSection";
import FluxPremiumSection from "@/components/landing/FluxPremiumSection";
import HowItWorks from "@/components/landing/HowItWorks";
import SecuritySection from "@/components/landing/SecuritySection";
import StudentLifestyle from "@/components/landing/StudentLifestyle";
import CTASection from "@/components/landing/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "var(--navbar-height)" }}>
        <Hero />
        <ProductShowcase />
        <FluxSnipeSection />
        <FluxWalletSection />
        <FluxPremiumSection />
        <HowItWorks />
        <SecuritySection />
        <StudentLifestyle />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
