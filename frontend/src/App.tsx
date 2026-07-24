import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { TrustedTechnologies } from "@/components/landing/TrustedTechnologies";
import { Features } from "@/components/landing/Features";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedTechnologies />
      <Features/>
    </>
  );
}

export default App;