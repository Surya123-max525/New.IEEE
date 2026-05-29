import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ImpactSection from "@/components/ImpactSection";
import BenefitsSection from "@/components/BenefitsSection";
import LatestHighlightsSection from "@/components/LatestHighlightsSection";
import CollegeAboutSection from "@/components/CollegeAboutSection";
import AboutSection from "@/components/AboutSection";
import SocietiesSection from "@/components/SocietiesSection";
import TestimonialsMarqueeSection from "@/components/TestimonialsMarqueeSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingRobotAgent from "@/components/FloatingRobotAgent";


import TechStackCarousel from "@/components/TechStackCarousel";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Subtle Parallax Block for moving objects effect requested
const MovingParallaxBackdrop = () => {
  const { scrollYProgress } = useScroll();
  const yOffset = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#fafafa]">
      <motion.div 
        style={{ y: yOffset }} 
        className="absolute inset-0 opacity-[0.02]"
      >
        {/* Abstract large typography acting as moving background objects */}
        <div className="absolute top-[20%] -left-[10%] text-[20vw] font-serif font-black whitespace-nowrap leading-none text-slate-900 tracking-tighter mix-blend-multiply">
          INNOVATION
        </div>
        <div className="absolute top-[60%] -right-[5%] text-[15vw] font-serif font-black whitespace-nowrap leading-none text-slate-900 tracking-tighter mix-blend-multiply">
          EXCELLENCE
        </div>
      </motion.div>
    </div>
  );
};

const FadeInSection = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

const Index = () => {
  return (
    <div className="min-h-screen relative selection:bg-slate-900 selection:text-white font-sans text-slate-800 bg-[#fafafa]">
      <MovingParallaxBackdrop />
      <Navbar />

      <main className="w-full relative pb-0 z-0">
        
        {/* Full Bleed Hero */}
        <HeroSection />

        {/* Content Wrapper */}
        <div className="relative z-10 w-full bg-white border-t border-slate-200">
          
          <div className="max-w-[1400px] mx-auto px-6 py-2 md:py-3">
            <FadeInSection>
              <div className="border-b border-slate-100">
                <StatsSection />
              </div>
            </FadeInSection>
          </div>

          {/* Symmetrical Split Section */}
          <div className="border-t border-slate-200 bg-[#fafafa] py-2 md:py-4">
            <div className="max-w-[1400px] mx-auto px-6 flex flex-col gap-6 md:gap-8">
              <FadeInSection>
                <ImpactSection />
              </FadeInSection>

              <FadeInSection delay={0.2}>
                <BenefitsSection />
              </FadeInSection>
            </div>
          </div>

          <div className="border-t border-slate-200 bg-white">
            <div className="max-w-[1400px] mx-auto px-6 py-2 md:py-3">
              <FadeInSection>
                <LatestHighlightsSection />
              </FadeInSection>
            </div>
          </div>

          <div className="border-t border-slate-200 bg-[#fafafa]">
            <div className="max-w-[1400px] mx-auto px-6 py-4 md:py-6">
              <FadeInSection>
                <div className="flex flex-col gap-6 items-stretch">
                  <CollegeAboutSection />
                  <AboutSection showStats={false} />
                </div>
              </FadeInSection>
            </div>
          </div>

          <div className="border-t border-slate-200 bg-white">
            <div className="py-2 md:py-3">
              <FadeInSection>
                <SocietiesSection />
              </FadeInSection>
            </div>
          </div>

          <div className="border-t border-slate-200 bg-[#fafafa]">
            <FadeInSection>
              <TechStackCarousel />
            </FadeInSection>
          </div>

          <div className="border-t border-slate-200 bg-[#fafafa]">
            <div className="py-2 md:py-3">
              <FadeInSection>
                <TestimonialsMarqueeSection />
              </FadeInSection>
            </div>
          </div>

          <div className="border-t border-slate-200 bg-white">
            <div className="max-w-[1400px] mx-auto px-6 py-2 md:py-3">
              <FadeInSection>
                <FAQSection />
              </FadeInSection>
            </div>
          </div>
          
        </div>
      </main>

      <div className="relative z-40 bg-slate-900 text-white border-t border-slate-800">
        <Footer />
      </div>

      <FloatingRobotAgent />
    </div>
  );
};

export default Index;
