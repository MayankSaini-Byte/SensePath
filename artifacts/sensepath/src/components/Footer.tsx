import { MapPin, GraduationCap, Calendar, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 30% 50%, #4f46e5 0%, transparent 60%),
                          radial-gradient(circle at 70% 50%, #f97316 0%, transparent 60%)`
      }} />

      <div className="container px-6 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-900/50">
                <div className="w-4 h-4 rounded-full bg-white animate-pulse" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight">SensePath</span>
            </div>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              Real-Time Navigation Assistance for the Visually Impaired. Built with care, empathy, and open-source tech.
            </p>
          </div>

          {/* Info */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex items-center gap-2.5 text-sm">
              <div className="w-8 h-8 rounded-lg bg-indigo-600/20 flex items-center justify-center">
                <MapPin size={15} className="text-indigo-400" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Institute</div>
                <div className="text-slate-200 font-semibold">MANIT Bhopal</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-sm">
              <div className="w-8 h-8 rounded-lg bg-violet-600/20 flex items-center justify-center">
                <GraduationCap size={15} className="text-violet-400" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Project Guide</div>
                <div className="text-slate-200 font-semibold">Dr. Suresh Kumar Gawre</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-sm">
              <div className="w-8 h-8 rounded-lg bg-orange-600/20 flex items-center justify-center">
                <Calendar size={15} className="text-orange-400" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Academic Year</div>
                <div className="text-slate-200 font-semibold">2025 – 26</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} SensePath Team. Academic Project Submission — B.Tech 1st Year.
          </p>
          <p className="text-slate-600 text-sm flex items-center gap-1.5">
            Made with <Heart size={13} className="text-rose-500 fill-rose-500" /> at MANIT Bhopal
          </p>
        </div>
      </div>
    </footer>
  );
}
