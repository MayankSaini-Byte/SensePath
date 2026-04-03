import { MapPin, Calendar } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="container px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-white" />
          </div>
          <span className="font-extrabold text-white">SensePath</span>
          <span className="text-slate-600 text-sm ml-1">— Prototype Concept</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-slate-400">
          <div className="flex items-center gap-1.5">
            <MapPin size={13} className="text-indigo-400" />
            MANIT Bhopal
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar size={13} className="text-indigo-400" />
            2025 – 26
          </div>
          <span>Guide: Dr. Suresh Kumar Gawre</span>
        </div>

        <p className="text-xs text-slate-600">Academic project — B.Tech 1st Year</p>
      </div>
    </footer>
  );
}
