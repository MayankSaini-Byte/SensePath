import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "Problem", href: "#problem" },
  { name: "Our Plan", href: "#plan" },
  { name: "The Device", href: "#device" },
  { name: "Team", href: "#team" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3"
        : "bg-white/10 backdrop-blur-sm border-b border-white/10 py-4"
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center gap-2.5">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-500 ${isScrolled ? "bg-indigo-600" : "bg-white/20 border border-white/30"}`}>
            <div className="w-3 h-3 rounded-full bg-white animate-pulse" />
          </div>
          <span className={`text-lg font-extrabold tracking-tight transition-colors duration-500 ${isScrolled ? "text-slate-900" : "text-white"}`}>
            SensePath
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} onClick={e => go(e, link.href)}
              className={`text-sm font-semibold transition-colors duration-500 ${
                isScrolled ? "text-slate-500 hover:text-indigo-600" : "text-white/80 hover:text-white"
              }`}>
              {link.name}
            </a>
          ))}
        </nav>

        {/* Badge */}
        <div className={`hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold transition-all duration-500 ${
          isScrolled
            ? "bg-amber-100 border-amber-200 text-amber-700"
            : "bg-white/10 border-white/20 text-white/90"
        }`}>
          <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          Prototype Stage
        </div>

        {/* Mobile toggle */}
        <button className={`md:hidden transition-colors duration-300 ${isScrolled ? "text-slate-700" : "text-white"}`}
          onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden">
            <div className="flex flex-col px-6 py-3 gap-1">
              {navLinks.map(link => (
                <a key={link.name} href={link.href} onClick={e => go(e, link.href)}
                  className="text-base font-semibold text-slate-700 py-2.5 border-b border-slate-100 last:border-0 hover:text-indigo-600 transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
