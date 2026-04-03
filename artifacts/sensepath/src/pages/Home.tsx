import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Device } from "@/components/Device";
import { HowItWorks } from "@/components/HowItWorks";
import { Story } from "@/components/Story";
import { ComponentsList } from "@/components/ComponentsList";
import { FutureScope } from "@/components/FutureScope";
import { Team } from "@/components/Team";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Story />
        <Device />
        <HowItWorks />
        <ComponentsList />
        <FutureScope />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
