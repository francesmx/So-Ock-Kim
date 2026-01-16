import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Biography } from "@/components/Biography";
import { Repertoire } from "@/components/Repertoire";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />
      <Hero />
      <Biography />
      <Repertoire />
      <Reviews />
      <Contact />
      
      <footer className="py-8 bg-primary/5 text-center text-xs text-muted-foreground uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} So-Ock Kim. All rights reserved.</p>
      </footer>
    </div>
  );
}
