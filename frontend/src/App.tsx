import { Navbar } from "@/components/landing/Navbar";
import { HeroBadge } from "@/components/landing/HeroBadge";
import { HeroButtons } from "@/components/landing/HeroButtons";
import { HeroStats } from "@/components/landing/HeroStats";
import { DashboardPreview } from "@/components/landing/DashboardPreview";

function App() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center gap-8 px-6">
        <HeroBadge />

        <HeroButtons />

        <HeroStats />

        <DashboardPreview />
      </div>
    </>
  );
}

export default App;