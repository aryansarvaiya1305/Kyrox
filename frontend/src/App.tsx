import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { TrustedTechnologies } from "@/components/landing/TrustedTechnologies";
import { Features } from "@/components/landing/Features";
import { Architecture } from "@/components/landing/Architecture";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <main>
        <Hero />
        <TrustedTechnologies />
        <Features />
        <Architecture />
      </main>
    </div>
  );
}

export default App;