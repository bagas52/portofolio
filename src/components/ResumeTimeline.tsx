import React from "react";
import { Experience } from "../types";
import { Briefcase, Sliders, Trash2, Plus } from "lucide-react";
import { motion } from "motion/react";

interface ResumeTimelineProps {
  experiences: Experience[];
  isEditMode: boolean;
  onUpdateExperiences: (updated: Experience[]) => void;
}

export const ResumeTimeline: React.FC<ResumeTimelineProps> = ({ experiences, isEditMode, onUpdateExperiences }) => {

  const handleExpChange = (idx: number, field: keyof Experience, value: any) => {
    const updated = [...experiences];
    updated[idx] = {
      ...updated[idx],
      [field]: value
    };
    onUpdateExperiences(updated);
  };

  const handleDeleteExp = (idx: number) => {
    const updated = experiences.filter((_, i) => i !== idx);
    onUpdateExperiences(updated);
  };

  const handleCreateExp = () => {
    const newExp: Experience = {
      role: "Peran Desain (misal: UI Designer freelancer)",
      company: "Nama Brand/Klien",
      period: "2025 - Sekarang",
      description: "Tuliskan ringkasan tugas harian Anda, riset desain, atau aset layout figma yang Anda hasilkan untuk klien.",
      tags: ["Figma", "Design", "Interactions"]
    };
    onUpdateExperiences([...experiences, newExp]);
  };

  return (
    <section id="experience" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="font-mono text-xs text-[#0ACF83] uppercase tracking-widest block mb-2">My Journey</span>
            <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-white tracking-tight">
              Pengalaman Kerja & Studi
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-sm md:text-base font-sans mt-3 md:mt-0 leading-relaxed font-light">
            Riwayat koloborasi profesional dalam merancang dan menstandardisasi antarmuka aplikasi.
          </p>
        </div>

        {/* Live customizer button in editing mode */}
        {isEditMode && (
          <div className="mb-10 p-4 rounded-xl bg-zinc-900/20 border border-dashed border-zinc-800 flex items-center justify-between">
            <span className="text-xs font-mono text-[#0ACF83] flex items-center gap-2">
              <Briefcase size={14} />
              <span>Manajer Pengalaman Kerja Aktif: Sunting dan kelola riwayat professional Anda.</span>
            </span>
            <button
              onClick={handleCreateExp}
              className="flex items-center gap-1 px-3 py-1.5 bg-[#0ACF83] hover:bg-[#07b06d] text-black font-semibold rounded-lg text-xs transition-colors cursor-pointer"
            >
              <Plus size={14} />
              <span>Tambah Pengalaman</span>
            </button>
          </div>
        )}

        {/* Timeline Path */}
        <div className="relative border-l border-zinc-800 pl-6 md:pl-10 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, idx) => (
            <div id={`experience-timeline-node-${idx}`} key={idx} className="relative group">
              {/* Dot on the timeline */}
              <div className="absolute -left-10 md:-left-[46px] top-1 bg-zinc-950 p-1.5 border-2 border-zinc-800 rounded-full text-[#0ACF83] group-hover:border-[#0ACF83] group-hover:scale-110 transition-all z-10">
                <Briefcase size={14} />
              </div>

              {/* Card Container */}
              <div className="bg-zinc-900/25 backdrop-blur-md border border-zinc-900 p-6 md:p-10 rounded-[2.5rem] hover:border-zinc-800 hover:bg-zinc-900/40 transition-all duration-300 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    {/* Role Title */}
                    {isEditMode ? (
                      <input
                        type="text"
                        value={exp.role}
                        onChange={(e) => handleExpChange(idx, "role", e.target.value)}
                        className="w-full text-lg font-bold bg-[#1a1b24] text-white border border-gray-700 rounded px-2 py-1 mb-1 font-sans focus:outline-none"
                      />
                    ) : (
                      <h3 className="text-xl font-bold text-white tracking-tight font-sans">
                        {exp.role}
                      </h3>
                    )}

                    {/* Company */}
                    {isEditMode ? (
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => handleExpChange(idx, "company", e.target.value)}
                        className="w-full text-sm font-semibold bg-[#1a1b24] text-[#0ACF83] border border-gray-700 rounded px-2 py-1 font-sans focus:outline-none"
                      />
                    ) : (
                      <span className="text-sm font-semibold text-[#0ACF83] font-sans">
                        {exp.company}
                      </span>
                    )}
                  </div>

                  {/* Date Period */}
                  {isEditMode ? (
                    <input
                      type="text"
                      value={exp.period}
                      onChange={(e) => handleExpChange(idx, "period", e.target.value)}
                      className="bg-[#1a1b24] text-xs text-gray-400 border border-gray-700 rounded px-2 py-1 font-mono focus:outline-none"
                    />
                  ) : (
                    <span className="text-xs font-mono text-gray-500 bg-gray-900 border border-gray-850 px-3 py-1 rounded-full self-start">
                      {exp.period}
                    </span>
                  )}
                </div>

                {/* Description */}
                {isEditMode ? (
                  <textarea
                    value={exp.description}
                    onChange={(e) => handleExpChange(idx, "description", e.target.value)}
                    className="w-full text-xs bg-[#1a1b24] text-gray-300 border border-gray-700 rounded px-2 py-1 resize-none"
                    rows={3}
                  />
                ) : (
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-sans">
                    {exp.description}
                  </p>
                )}

                {/* Technical skills tags in this experience */}
                <div className="flex flex-wrap gap-2">
                  {isEditMode ? (
                    <div className="w-full space-y-1">
                      <label className="text-[10px] font-mono text-gray-550">TAGS (PISAH DENGAN KOMA):</label>
                      <input
                        type="text"
                        value={exp.tags?.join(", ") || ""}
                        onChange={(e) => handleExpChange(idx, "tags", e.target.value.split(",").map(t => t.trim()))}
                        className="w-full text-xs bg-[#1a1b24] text-gray-300 border border-gray-700 rounded px-2 py-1"
                      />
                    </div>
                  ) : (
                    exp.tags?.map(t => (
                      <span key={t} className="text-[10px] font-mono font-medium tracking-wide text-gray-500 uppercase bg-gray-950/80 border border-gray-850 px-2.5 py-0.5 rounded">
                        {t}
                      </span>
                    ))
                  )}
                </div>

                {/* Delete button (Edit Mode Only) */}
                {isEditMode && (
                  <button
                    onClick={() => handleDeleteExp(idx)}
                    className="mt-6 py-1.5 px-3 flex items-center justify-center gap-1 border border-red-950 text-red-400 bg-red-950/10 hover:bg-red-950/30 rounded-lg text-xs leading-none transition-colors"
                  >
                    <Trash2 size={13} />
                    <span>Hapus Pengalaman Ini</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
