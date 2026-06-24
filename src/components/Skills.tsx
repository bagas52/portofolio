import React from "react";
import { Skill } from "../types";
import { Sparkles, Trash2, Plus, Sliders, Layout, Search, Command, CheckSquare } from "lucide-react";
import { motion } from "motion/react";

interface SkillsProps {
  skills: Skill[];
  isEditMode: boolean;
  onUpdateSkills: (updated: Skill[]) => void;
}

export const Skills: React.FC<SkillsProps> = ({ skills, isEditMode, onUpdateSkills }) => {
  const handleSkillChange = (idx: number, field: keyof Skill, value: any) => {
    const updated = [...skills];
    updated[idx] = {
      ...updated[idx],
      [field]: value
    };
    onUpdateSkills(updated);
  };

  const handleDeleteSkill = (idx: number) => {
    const updated = skills.filter((_, i) => i !== idx);
    onUpdateSkills(updated);
  };

  const handleCreateSkill = () => {
    const newSkill: Skill = {
      name: "Skills Desain Baru",
      category: "Design",
      level: 80,
      description: "Tuliskan deskripsi kompetensi UI/UX Anda di sini."
    };
    onUpdateSkills([...skills, newSkill]);
  };

  // Icon selector based on category
  const renderCategoryIcon = (category: string) => {
    switch (category) {
      case "Design":
        return <Layout className="text-[#A259FF]" size={18} />;
      case "Research":
        return <Search className="text-[#18A2F2]" size={18} />;
      case "Tools":
        return <Command className="text-[#FF7262]" size={18} />;
      default:
        return <CheckSquare className="text-[#0ACF83]" size={18} />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="font-mono text-xs text-[#0ACF83] uppercase tracking-widest block mb-2">My Competencies</span>
            <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-white tracking-tight">
              Skillset & Keahlian UI/UX
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm md:text-base font-sans mt-3 md:mt-0 leading-relaxed font-light">
            Menyelaraskan nilai estetika visual pixel-perfect dengan fungsionalitas produk yang mengutamakan kenyamanan pengguna (User Centered).
          </p>
        </div>

        {/* Live customizer button in editing mode */}
        {isEditMode && (
          <div className="mb-8 p-4 rounded-2xl bg-zinc-900/20 border border-dashed border-zinc-800 flex items-center justify-between">
            <span className="text-xs font-mono text-[#0ACF83] flex items-center gap-2">
              <Sliders size={14} />
              <span>Manajer Skillset Aktif: Anda bisa menambah, menghapus, atau memutar slider persentase keahlian.</span>
            </span>
            <button
              onClick={handleCreateSkill}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0ACF83] hover:bg-[#07b06d] text-black font-semibold rounded-lg text-xs leading-none transition-colors"
            >
              <Plus size={14} />
              <span>Tambah Keahlian</span>
            </button>
          </div>
        )}

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <div
              id={`skill-card-${idx}`}
              key={idx}
              className="group relative bg-zinc-900/25 backdrop-blur-md rounded-[2rem] p-7 lg:p-8 border border-zinc-900 hover:border-zinc-800/80 hover:bg-zinc-900/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card top */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {renderCategoryIcon(skill.category)}
                    {isEditMode ? (
                      <select
                        value={skill.category}
                        onChange={(e) => handleSkillChange(idx, "category", e.target.value)}
                        className="bg-[#1a1b24] text-xs text-white border border-gray-700 rounded px-2 py-1 focus:outline-none"
                      >
                        <option value="Design">Visual Design</option>
                        <option value="Research">Research/Strategy</option>
                        <option value="Tools">Tools</option>
                        <option value="Process">Process/Method</option>
                      </select>
                    ) : (
                      <span className="text-xs font-mono font-semibold text-gray-500 uppercase tracking-widest bg-zinc-950/40 px-2 py-0.5 rounded border border-zinc-900">
                        {skill.category}
                      </span>
                    )}
                  </div>

                  {/* Level text */}
                  <span className="text-sm font-mono font-bold text-white relative">
                    {skill.level}%
                  </span>
                </div>

                {/* Skill Name */}
                {isEditMode ? (
                  <input
                    type="text"
                    value={skill.name}
                    onChange={(e) => handleSkillChange(idx, "name", e.target.value)}
                    className="w-full text-base font-bold bg-[#1a1b24] text-white border border-gray-700 rounded px-2 py-1 mb-2 focus:outline-none focus:ring-1 focus:ring-gray-600"
                  />
                ) : (
                  <h3 className="text-base lg:text-lg font-bold text-white mb-2 leading-tight group-hover:text-[#18A2F2] transition-colors">
                    {skill.name}
                  </h3>
                )}

                {/* Skill Description */}
                {isEditMode ? (
                  <textarea
                    value={skill.description || ""}
                    onChange={(e) => handleSkillChange(idx, "description", e.target.value)}
                    className="w-full text-xs bg-[#1a1b24] text-gray-300 border border-gray-700 rounded px-2 py-1 mb-3 resize-none"
                    rows={2}
                    placeholder="Deskripsi kemampuan..."
                  />
                ) : (
                  <p className="text-gray-400 text-xs leading-relaxed mb-6 font-light min-h-[36px]">
                    {skill.description || "Kompetensi utama di bidang interaksi visual maupun kognitif antarmuka situs."}
                  </p>
                )}
              </div>

              {/* Card bottom: Level Meter or Level range editor */}
              <div className="mt-auto">
                {isEditMode ? (
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono text-gray-550">
                      <span>Rentang Kompetensi:</span>
                      <span>{skill.level}/100</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={skill.level}
                      onChange={(e) => handleSkillChange(idx, "level", parseInt(e.target.value))}
                      className="w-full h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#0ACF83]"
                    />
                  </div>
                ) : (
                  <div className="w-full h-1.5 bg-zinc-950 border border-zinc-900 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-full rounded-full ${
                        skill.category === "Design" 
                          ? "bg-gradient-to-r from-[#A259FF] to-[#FF7262]" 
                          : skill.category === "Research" 
                          ? "bg-gradient-to-r from-[#18A2F2] to-[#FF7262]"
                          : skill.category === "Tools"
                          ? "bg-gradient-to-r from-[#FF7262] to-[#F24E1E]"
                          : "bg-gradient-to-r from-[#0ACF83] to-[#18A2F2]"
                      }`}
                    />
                  </div>
                )}

                {/* Delete button (Edit Mode Only) */}
                {isEditMode && (
                  <button
                    onClick={() => handleDeleteSkill(idx)}
                    className="w-full mt-4 py-1.5 flex items-center justify-center gap-1.5 border border-red-950 text-red-400 bg-red-950/10 hover:bg-red-950/30 rounded-lg text-xs leading-none transition-colors"
                  >
                    <Trash2 size={13} />
                    <span>Hapus Skill</span>
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
