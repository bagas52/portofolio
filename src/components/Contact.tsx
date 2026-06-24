import React from "react";
import { FigmaIcon } from "./FigmaIcon";
import { Mail, MapPin, ExternalLink, Instagram } from "lucide-react";
import { motion } from "motion/react";

interface ContactProps {
  personalInfo: {
    name: string;
    email: string;
    location: string;
    figmaUrl: string;
    socials?: Array<{ name: string; url: string; type: string }>;
  };
  isEditMode: boolean;
  onUpdateInfo: (updated: any) => void;
}

export const Contact: React.FC<ContactProps> = ({ personalInfo, isEditMode, onUpdateInfo }) => {
  const handleChangeEmail = (val: string) => {
    onUpdateInfo({
      ...personalInfo,
      email: val
    });
  };

  const handleChangeLocation = (val: string) => {
    onUpdateInfo({
      ...personalInfo,
      location: val
    });
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute -bottom-20 right-0 w-80 h-80 rounded-full bg-[#F24E1E]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Contact info column */}
        <div className="lg:col-span-5 bg-zinc-900/15 backdrop-blur-md border border-zinc-900 rounded-[2.5rem] p-8 lg:p-10 hover:border-zinc-800/80 hover:bg-zinc-900/25 transition-all duration-300 shadow-lg flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs text-[#FF7262] uppercase tracking-widest block mb-2">Let's Connect</span>
            <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-white tracking-tight mb-6">
              Mulai Project Baru
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 font-light">
              Apakah Anda sedang mencari desainer UI/UX untuk merancang prototipe, menyusun sistem desain komponen, atau meluncurkan ide produk digital baru? Mari berkolaborasi!
            </p>

            {/* Direct Information details */}
            <div className="space-y-6 mb-8 font-sans">
              <div className="flex gap-4 items-center">
                <div className="w-11 h-11 bg-[#FF7262]/10 border border-[#FF7262]/20 rounded-xl flex items-center justify-center text-[#FF7262]">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 block font-mono">LOKASI</span>
                  {isEditMode ? (
                    <input
                      type="text"
                      value={personalInfo.location}
                      onChange={(e) => handleChangeLocation(e.target.value)}
                      className="bg-[#12131a] border border-gray-750 text-white rounded p-1 text-sm focus:outline-none"
                    />
                  ) : (
                    <span className="text-white hover:text-[#0ACF83] transition-colors">{personalInfo.location}</span>
                  )}
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-11 h-11 bg-[#18A2F2]/10 border border-[#18A2F2]/20 rounded-xl flex items-center justify-center text-[#18A2F2]">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 block font-mono">SAY HELLO MELALUI EMAIL</span>
                  {isEditMode ? (
                    <input
                      type="text"
                      value={personalInfo.email}
                      onChange={(e) => handleChangeEmail(e.target.value)}
                      className="bg-[#12131a] border border-gray-750 text-white rounded p-1 text-sm focus:outline-none"
                    />
                  ) : (
                    <a href={`mailto:${personalInfo.email}`} className="text-white hover:text-white transition-colors underline break-all">
                      {personalInfo.email}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Social connections centering on Figma exclusively (No Github / LinkedIn) */}
          <div className="pt-8 border-t border-zinc-900">
            <h4 className="text-white font-mono text-[10px] uppercase tracking-wider mb-4">Workspace & Sosial Saya:</h4>
            <div className="flex flex-wrap gap-2.5">
              <a
                href={personalInfo.figmaUrl}
                target="_blank"
                rel="no-referrer"
                className="px-3 py-1.5 bg-zinc-950/40 border border-zinc-900 rounded-lg text-[11px] font-mono text-white hover:border-[#A259FF] transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <FigmaIcon size={12} />
                <span>Figma Profile</span>
                <ExternalLink size={9} className="text-gray-500" />
              </a>

              {personalInfo.socials?.find(s => s.type === "instagram") && (
                <a
                  href={personalInfo.socials.find(s => s.type === "instagram")?.url || "https://instagram.com"}
                  target="_blank"
                  rel="no-referrer"
                  className="px-3 py-1.5 bg-zinc-950/40 border border-zinc-900 rounded-lg text-[11px] font-mono text-white hover:border-rose-400 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Instagram size={12} className="text-rose-400" />
                  <span>Instagram</span>
                  <ExternalLink size={9} className="text-gray-500" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
