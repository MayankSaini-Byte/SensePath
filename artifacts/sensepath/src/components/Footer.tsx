import { MapPin, GraduationCap, Calendar } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-primary/5 blur-[100px] rounded-t-full pointer-events-none" />
      
      <div className="container px-6 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50">
              <div className="w-4 h-4 rounded-full bg-primary"></div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">SensePath</h3>
              <p className="text-sm text-muted-foreground">Vision through technology.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              <span>MANIT Bhopal</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap size={16} className="text-primary" />
              <span>Under Dr. Suresh Kumar Gawre</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-primary" />
              <span>2025-26</span>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} SensePath Team. Created for academic project submission.</p>
        </div>
      </div>
    </footer>
  );
}
