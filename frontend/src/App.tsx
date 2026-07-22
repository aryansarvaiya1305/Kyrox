import { Navbar } from "@/components/landing/Navbar";
import { HeroBadge } from "@/components/landing/HeroBadge";
import { HeroButtons } from "@/components/landing/HeroButtons";

function App() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center gap-8">
        <HeroBadge />
        <HeroButtons />
      </div>
    </>
  );
}

export default App;