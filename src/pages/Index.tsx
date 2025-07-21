
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ScreenshotSection } from "@/components/VideoSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { QualificationSection } from "@/components/QualificationSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="social-proof">
        <SocialProofSection />
      </div>
      <div id="benefits">
        <BenefitsSection />
      </div>
      <div id="video">
        <ScreenshotSection />
      </div>
      <div id="how-it-works">
        <HowItWorksSection />
      </div>
      <div id="qualification">
        <QualificationSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <div id="final-cta">
        <FinalCTASection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
