import LandingCta from "@/components/landing/landing-cta";
import LandingFeatures from "@/components/landing/landing-features";
import LandingFooter from "@/components/landing/landing-footer";
import LandingHeader from "@/components/landing/landing-header";
import LandingHero from "@/components/landing/landing-hero";
import LandingHowItWorks from "@/components/landing/landing-how-it-works";
import LandingPageAnimations from "@/components/landing/landing-page-animations";
import LandingShowcase from "@/components/landing/landing-showcase";

export default function Home() {
  return (
    <main
      id="top"
      className="relative min-h-screen overflow-hidden bg-background"
    >
      <LandingPageAnimations />
      <LandingHeader />
      <LandingHero />
      <LandingShowcase />
      <LandingFeatures />
      <LandingHowItWorks />
      <LandingCta />
      <LandingFooter />
    </main>
  );
}
