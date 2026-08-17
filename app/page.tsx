import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import DigitalDeliverySection from "./components/DigitalDeliverySection";
import ChallengesSection from "./components/ChallengesSection";
import WhiteLabelSection from "./components/WhiteLabelSection";
import IndustriesSection from "./components/IndustriesSection";
import LifecycleSection from "./components/LifecycleSection";
import PortfolioSection from "./components/PortfolioSection";
import TestimonialsSection from "./components/TestimonialsSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <DigitalDeliverySection />
      <ChallengesSection />
      <WhiteLabelSection />
      <IndustriesSection />
      <LifecycleSection />
      <PortfolioSection />
      <TestimonialsSection />
      <WhyChooseUsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
