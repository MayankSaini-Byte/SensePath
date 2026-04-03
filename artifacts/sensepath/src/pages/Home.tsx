import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Plan } from "@/components/Plan";
import { Device } from "@/components/Device";
import { Team } from "@/components/Team";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-indigo-200 selection:text-indigo-900">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Plan />
        <Device />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
