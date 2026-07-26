import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { TrustedTechnologies } from "@/components/landing/TrustedTechnologies";
import { Features } from "@/components/landing/Features";
import { Architecture } from "@/components/landing/Architecture";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { TechStack } from "@/components/landing/TechStack";
import { DashboardSection } from "@/components/landing/DashboardSection";
function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <main>
        <Hero />
        <TrustedTechnologies />
        <Features />
        <Architecture />
        <HowItWorks/>
        <TechStack/>
        <DashboardSection/>
      </main>
    </div>
  );
}

export default App; 