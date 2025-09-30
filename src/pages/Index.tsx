import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BenefitStrip from "@/components/BenefitStrip";
import HowItWorks from "@/components/HowItWorks";
import DemoSection from "@/components/DemoSection";
import MeasurementCards from "@/components/MeasurementCards";
import Integration from "@/components/Integration";
import Privacy from "@/components/Privacy";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <BenefitStrip />
        <HowItWorks />
        <DemoSection />
        <MeasurementCards />
        <Integration />
        <Privacy />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
