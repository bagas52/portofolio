import React from "react";
import { FigmaIcon } from "./FigmaIcon";
import { Edit3, Terminal, Sparkles, Check, Send } from "lucide-react";
import { motion } from "motion/react";

interface NavbarProps {
  isEditMode: boolean;
  setIsEditMode: (val: boolean) => void;
  onResetData: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isEditMode, setIsEditMode, onResetData }) => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-zinc-950/85 backdrop-blur-md border-b border-zinc-900/80 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <div 
          id="nav-logo" 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="relative">
            <FigmaIcon size={26} className="transform transition-transform group-hover:scale-110 group-hover:rotate-6 duration-300" />
            <span className="absolute -bottom-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          </div>
          <div>
            <span className="font-mono text-xs text-gray-400 tracking-widest block font-semibold leading-none">UX/UI DESIGNER</span>
            <span className="text-white font-sans font-bold tracking-tight text-lg">BAGAS.</span>
          </div>
        </div>

        {/* NAV LINKS (DESKTOP) */}
        <div id="nav-links-desktop" className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-[#A259FF] transition-colors focus:outline-none cursor-pointer"
          >
            Beranda
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="hover:text-[#18A2F2] transition-colors focus:outline-none cursor-pointer"
          >
            Skillset
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-[#FF7262] transition-colors focus:outline-none cursor-pointer"
          >
            Figma Projects
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="hover:text-[#0ACF83] transition-colors focus:outline-none cursor-pointer"
          >
            Pengalaman
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-[#F24E1E] transition-colors focus:outline-none cursor-pointer"
          >
            Kontak
          </button>
        </div>

        {/* QUICK CONTROL WITH LIVE FIGMA BADGE */}
        <div id="nav-actions" className="flex items-center gap-3">
          {/* Live Status indicator */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Hire Bagas on Figma
          </div>

          {/* Interactive Manual Edit Mode switcher */}
          <button
            id="toggle-edit-mode-btn"
            onClick={() => setIsEditMode(!isEditMode)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-300 pointer-events-auto ${
              isEditMode
                ? "bg-emerald-500 text-black border border-emerald-400 hover:bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                : "bg-zinc-900/60 text-gray-300 border border-zinc-800/60 hover:bg-zinc-800 hover:text-white"
            }`}
            title="Klik untuk mengedit template secara manual langsung dari browser!"
          >
            {isEditMode ? (
              <>
                <Check size={13} className="animate-pulse" />
                <span>Mode Edit Aktif</span>
              </>
            ) : (
              <>
                <Edit3 size={13} />
                <span>Ubah Portofolio</span>
              </>
            )}
          </button>

          {isEditMode && (
            <button
              onClick={onResetData}
              className="px-2 py-1.5 rounded-lg text-xs text-gray-400 hover:text-red-400 bg-gray-900 border border-gray-800 transition-colors"
              title="Reset data ke bawaan semula"
            >
              Reset
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
