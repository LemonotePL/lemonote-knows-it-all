
import { HeroSection } from "@/components/HeroSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { VideoSection } from "@/components/VideoSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { QualificationSection } from "@/components/QualificationSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <SocialProofSection />
      <BenefitsSection />
      <VideoSection />
      <HowItWorksSection />
      <QualificationSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
