import React from "react";
import { FigmaIcon } from "./FigmaIcon";
import { MapPin, Mail, Sparkles, ArrowRight, Instagram, Figma, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  personalInfo: {
    name: string;
    role: string;
    subTitle: string;
    bio: string;
    location: string;
    email: string;
    figmaUrl: string;
    socials?: Array<{ name: string; url: string; type: string }>;
  };
  isEditMode: boolean;
  onUpdateInfo: (updated: any) => void;
}

export const Hero: React.FC<HeroProps> = ({ personalInfo, isEditMode, onUpdateInfo }) => {
  const handleChange = (field: string, value: string) => {
    onUpdateInfo({
      ...personalInfo,
      [field]: value
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-[#07080a]"
    >
      {/* Background grids and abstract vector vectors representing layout design elements */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#A259FF] blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#0ACF83] blur-[150px]" />
        {/* Subtle Dots pattern representing canvas layout background */}
        <div 
          className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px]" 
          style={{ maskImage: "radial-gradient(ellipse at center, black, transparent 80%)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* LEFT COLUMN: HERO TEXT */}
        <div className="lg:col-span-7 bg-zinc-900/30 backdrop-blur-md border border-zinc-900/80 rounded-[2.5rem] p-8 lg:p-12 shadow-xl relative overflow-hidden flex flex-col justify-center hover:border-zinc-800/80 transition-all duration-300">
          {/* Subtle colored accent glow in the left card */}
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#A259FF]/5 blur-[80px] pointer-events-none" />

          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#A259FF]/10 border border-[#A259FF]/20 text-[#A259FF] text-[11px] font-mono mb-8 self-start">
            <Sparkles size={12} className="animate-pulse" />
            <span>Interactive UX/UI Designer Template</span>
          </div>

          {/* Interactive Editable Header Name & Role */}
          {isEditMode ? (
            <div className="space-y-4 mb-4">
              <label className="block text-xs font-mono text-gray-400">NAMA & GELAR</label>
              <input
                type="text"
                value={personalInfo.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="w-full text-4xl lg:text-5xl font-sans font-bold bg-[#0f111a] border border-[#A259FF]/50 rounded px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#A259FF]"
              />
              <input
                type="text"
                value={personalInfo.role}
                onChange={(e) => handleChange("role", e.target.value)}
                className="w-full text-xl font-mono bg-[#0f111a] border border-gray-700 rounded px-3 py-2 text-[#0ACF83] focus:outline-none focus:ring-1 focus:ring-[#0ACF83]"
              />
              <input
                type="text"
                value={personalInfo.subTitle}
                onChange={(e) => handleChange("subTitle", e.target.value)}
                className="w-full text-base bg-[#0f111a] border border-gray-700 rounded px-3 py-2 text-gray-300 focus:outline-none"
              />
            </div>
          ) : (
            <div className="mb-6">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl lg:text-7xl font-display font-extrabold tracking-tight text-white mb-3 leading-none"
              >
                {personalInfo.name}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block bg-[#0ACF83]/10 border border-[#0ACF83]/20 text-[#0ACF83] px-3 py-1 rounded-md text-xs font-mono font-medium mb-5"
              >
                {personalInfo.role}
              </motion.div>
              <p className="text-lg text-gray-300 font-sans tracking-tight leading-relaxed max-w-xl">
                {personalInfo.subTitle}
              </p>
            </div>
          )}

          {/* Interactive Editable Bio */}
          {isEditMode ? (
            <div className="space-y-2 mb-6">
              <label className="block text-xs font-mono text-gray-400">DESKRIPSI BIO SINGKAT</label>
              <textarea
                value={personalInfo.bio}
                rows={4}
                onChange={(e) => handleChange("bio", e.target.value)}
                className="w-full text-sm font-sans bg-[#0f111a] border border-gray-700 rounded px-3 py-2 text-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
            </div>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg mb-8 font-sans font-light"
            >
              {personalInfo.bio}
            </motion.p>
          )}

          {/* Location & Email Details in sub-bento grids */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3 bg-zinc-950/40 border border-zinc-900 p-4 rounded-2xl hover:border-zinc-800/50 transition-all">
              <div className="h-9 w-9 rounded-xl bg-[#FF7262]/10 flex items-center justify-center text-[#FF7262] shrink-0">
                <MapPin size={16} />
              </div>
              <div className="min-w-0">
                <span className="text-[9px] font-mono text-gray-500 block uppercase tracking-wider">Lokasi</span>
                <span className="text-sm font-sans font-medium text-gray-200 truncate block">{personalInfo.location}</span>
              </div>
            </div>

            <a 
              href={`mailto:${personalInfo.email}`} 
              className="flex items-center gap-3 bg-zinc-950/40 border border-zinc-900 p-4 rounded-2xl hover:border-zinc-800/80 transition-all group/link shrink-0 min-w-0"
            >
              <div className="h-9 w-9 rounded-xl bg-[#18A2F2]/10 flex items-center justify-center text-[#18A2F2] group-hover/link:bg-[#18A2F2]/20 transition-all">
                <Mail size={16} />
              </div>
              <div className="min-w-0">
                <span className="text-[9px] font-mono text-gray-500 block uppercase tracking-wider">Email</span>
                <span className="text-sm font-sans font-medium text-gray-200 group-hover/link:text-white transition-all truncate block">
                  {personalInfo.email}
                </span>
              </div>
            </a>
          </div>

          {/* Call to Actions & Social Links */}
          <div className="flex flex-wrap gap-4 items-center mt-2">
            <button
              onClick={() => {
                const element = document.getElementById("projects");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3.5 bg-gradient-to-r from-[#A259FF] via-[#FF7262] to-[#F24E1E] hover:opacity-95 text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-md shadow-[#A259FF]/10 flex items-center gap-2 group cursor-pointer"
            >
              <span>Lihat Project Figma</span>
              <ArrowRight size={15} className="transform transition-transform group-hover:translate-x-1 duration-300" />
            </button>

            {/* Premium Figma Direct Link */}
            {isEditMode ? (
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono text-gray-400">LINK PROFIL FIGMA</span>
                <input
                  type="text"
                  value={personalInfo.figmaUrl}
                  onChange={(e) => handleChange("figmaUrl", e.target.value)}
                  className="bg-[#0f111a] border border-gray-700 rounded px-2 py-1 text-xs text-white w-60"
                  placeholder="https://figma.com/@..."
                />
              </div>
            ) : (
              <a
                href={personalInfo.figmaUrl}
                target="_blank"
                rel="no-referrer"
                className="px-5 py-3.5 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:bg-zinc-950 hover:border-zinc-800 transition-all text-xs font-mono text-gray-200 flex items-center gap-2 cursor-pointer"
              >
                <FigmaIcon size={14} />
                <span>Profil Figma</span>
                <ExternalLink size={11} className="text-gray-500" />
              </a>
            )}

            {/* Social icons, GitHub and LinkedIn are fully removed as requested */}
            <div className="flex items-center gap-2">
              {personalInfo.socials?.find(s => s.type === "instagram") && (
                <a 
                  href={personalInfo.socials.find(s => s.type === "instagram")?.url || "https://instagram.com"} 
                  target="_blank" 
                  rel="no-referrer" 
                  className="p-3 bg-zinc-950/40 border border-zinc-900 rounded-xl hover:border-zinc-800 text-gray-400 hover:text-rose-400 transition-all hover:scale-105"
                  title="Instagram"
                >
                  <Instagram size={16} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: STYLISH MOCK FIGMA CANVAS (VISUAL ASSET FOR PORTFOLIO) */}
        <div className="lg:col-span-5 hidden lg:flex relative select-none bg-zinc-900/30 backdrop-blur-md border border-zinc-900/80 rounded-[2.5rem] p-5 shadow-xl hover:border-zinc-800/80 transition-all duration-300 flex-col justify-center">
          {/* Rounded Figma Panel Window */}
          <div className="w-full bg-[#1e1e1e] border border-gray-800 rounded-2xl shadow-2xl overflow-hidden aspect-[4/3] flex flex-col font-mono text-[10px] text-gray-400 relative">
            {/* Header / Top Toolbar */}
            <div className="bg-[#2c2c2c] border-b border-gray-950 px-4 py-2 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <FigmaIcon size={12} />
                <span className="text-gray-250 font-sans font-medium hover:text-white transition-colors">Bagas_Design_Workspace</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
              </div>
            </div>

            {/* Workspace Inner Panels */}
            <div className="flex flex-1 overflow-hidden">
              {/* Left Sidebar: Layers Panel */}
              <div className="w-1/4 bg-[#2c2c2c]/80 border-r border-gray-950 p-2.5 flex flex-col gap-3">
                <div>
                  <div className="text-gray-500 font-bold uppercase tracking-wider text-[8px] mb-1">Layers</div>
                  <div className="flex flex-col gap-1.5 text-[9px]">
                    <div className="flex items-center gap-1.5 text-[#18A2F2] font-semibold">
                      <span>◇</span>
                      <span>Artboard: Hero_Web</span>
                    </div>
                    <div className="pl-3 flex items-center gap-1.5 text-gray-300">
                      <span>■</span>
                      <span>Navbar_Component</span>
                    </div>
                    <div className="pl-3 flex items-center gap-1.5 text-gray-350 bg-[#1e1e1e] p-0.5 rounded border border-gray-800">
                      <span>T</span>
                      <span>Heading_Text</span>
                    </div>
                    <div className="pl-3 flex items-center gap-1.5 text-gray-400">
                      <span>⬡</span>
                      <span>Figma_Icon_Badge</span>
                    </div>
                    <div className="pl-3 flex items-center gap-1.5 text-gray-400">
                      <span>■</span>
                      <span>Visual_Sandbox</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="text-gray-500 font-bold uppercase tracking-wider text-[8px] mb-1">Assets</div>
                  <div className="text-[9px] text-gray-450 italic">3 reusable chips</div>
                </div>
              </div>

              {/* Main Canvas Area */}
              <div className="flex-1 bg-[#1e1e1e] relative flex items-center justify-center p-4 overflow-hidden">
                {/* Dot background for figma editing area */}
                <div className="absolute inset-0 bg-[#1e1e1e] bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Center visual: Interactive UI Screen Mock representing Bagas Eka Putra */}
                <div className="relative w-44 bg-[#0d0e14] border border-gray-800 rounded-xl p-3 shadow-lg z-10 flex flex-col justify-between aspect-[1/1.8]">
                  {/* Miniature Screen UI elements */}
                  <div>
                    {/* Top pill bar */}
                    <div className="flex items-center justify-between text-[6px] text-gray-550 mb-3">
                      <span>09:41 AM</span>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-1 rounded-sm bg-gray-550"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-550"></span>
                      </div>
                    </div>
                    {/* Tiny visual card in the miniature screen */}
                    <div className="w-full h-8 rounded-lg bg-gradient-to-br from-[#A259FF]/10 to-[#FF7262]/20 border border-[#FF7262]/25 mb-2.5 p-1.5 relative overflow-hidden flex flex-col justify-center">
                      <div className="w-12 h-1 bg-white/60 rounded mb-1"></div>
                      <div className="w-16 h-1 bg-white/40 rounded"></div>
                    </div>
                    {/* Simulated details block */}
                    <div className="space-y-1.5">
                      <div className="w-full h-2 bg-gray-800/80 rounded"></div>
                      <div className="w-5/6 h-2 bg-gray-800/80 rounded"></div>
                      <div className="w-4/6 h-2 bg-gray-800/80  rounded"></div>
                    </div>
                  </div>

                  {/* UI Action button */}
                  <div className="bg-[#0ACF83] text-black rounded px-1 py-1.5 text-center text-[7px] font-bold tracking-tight">
                    INTERACTION
                  </div>

                  {/* Vectors vector overlay representation inside Canvas */}
                  <div className="absolute top-1/2 left-3/4 -translate-y-12">
                    {/* Simulated Figma Mouse click vector indicator */}
                    <div className="relative">
                      <svg className="w-4 h-4 fill-current text-[#18A2F2] transform -rotate-12" viewBox="0 0 24 24">
                        <path d="M2 2l11 20 4-8 8-4z" />
                      </svg>
                      <span className="absolute left-3 top-3 bg-[#18A2F2] text-white text-[7px] font-sans font-medium px-1.5 py-0.5 rounded-full shadow-md whitespace-nowrap">
                        BAGAS (Editor)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Subtitle properties hovering panel */}
                <div className="absolute top-4 right-4 bg-[#2c2c2c] p-2 rounded-lg border border-gray-900 shadow-md flex items-center gap-1.5 text-[8px] z-20">
                  <span className="text-[#FF7262]">X: 1024</span>
                  <span className="text-gray-500">|</span>
                  <span className="text-[#0ACF83]">Y: 768</span>
                </div>
              </div>

              {/* Right Sidebar: Properties Panel */}
              <div className="w-1/4 bg-[#2c2c2c]/85 border-l border-gray-950 p-2 flex flex-col gap-3">
                <div>
                  <div className="text-gray-400 font-bold uppercase tracking-wider text-[8px] mb-1.5 border-b border-gray-800 pb-1">Align & Position</div>
                  <div className="grid grid-cols-3 gap-1 mb-2">
                    <div className="bg-[#1e1e1e] p-1 text-center rounded text-gray-500 hover:text-gray-300">|◁</div>
                    <div className="bg-[#1e1e1e] p-1 text-center rounded text-gray-300">⋺</div>
                    <div className="bg-[#1e1e1e] p-1 text-center rounded text-gray-500">▷|</div>
                  </div>
                </div>
                
                <div>
                  <div className="text-gray-400 font-bold uppercase tracking-wider text-[8px] mb-1 border-b border-gray-800 pb-1">Design Variables</div>
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between items-center bg-[#1e1e1e] px-1.5 py-1 rounded">
                      <span className="text-[7px]">--color-primary</span>
                      <span className="w-2 h-2 rounded bg-[#A259FF]"></span>
                    </div>
                    <div className="flex justify-between items-center bg-[#1e1e1e] px-1.5 py-1 rounded">
                      <span className="text-[7px]">--color-secondary</span>
                      <span className="w-2 h-2 rounded bg-[#0ACF83]"></span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="text-gray-400 font-bold uppercase tracking-wider text-[8px] mb-1 border-b border-gray-800 pb-1">Device Frame</div>
                  <span className="text-[8px] text-gray-500 italic block mt-0.5">Responsive Frame (Web / Portofolio)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
