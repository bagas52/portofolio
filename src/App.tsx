import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { FigmaProjects } from "./components/FigmaProjects";
import { Contact } from "./components/Contact";
import { FigmaIcon } from "./components/FigmaIcon";

import {
  PERSONAL_INFO,
  INITIAL_SKILLS,
  INITIAL_PROJECTS
} from "./data";
import { Skill, FigmaProject } from "./types";
import { Heart, Sparkles, Sliders, Copy, Check, RefreshCw } from "lucide-react";

export default function App() {
  // Setup state from localStorage or fallback to defaults
  const [personalInfo, setPersonalInfo] = useState(() => {
    const saved = localStorage.getItem("bagas_portfolio_info");
    return saved ? JSON.parse(saved) : PERSONAL_INFO;
  });

  const [skills, setSkills] = useState<Skill[]>(() => {
    const saved = localStorage.getItem("bagas_portfolio_skills");
    return saved ? JSON.parse(saved) : INITIAL_SKILLS;
  });

  const [projects, setProjects] = useState<FigmaProject[]>(() => {
    const saved = localStorage.getItem("bagas_portfolio_projects");
    return saved ? JSON.parse(saved) : INITIAL_PROJECTS;
  });

  // Edit Mode state
  const [isEditMode, setIsEditMode] = useState(false);
  const [copiedData, setCopiedData] = useState(false);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem("bagas_portfolio_info", JSON.stringify(personalInfo));
  }, [personalInfo]);

  useEffect(() => {
    localStorage.setItem("bagas_portfolio_skills", JSON.stringify(skills));
  }, [skills]);

  useEffect(() => {
    localStorage.setItem("bagas_portfolio_projects", JSON.stringify(projects));
  }, [projects]);

  // Reset to original code template data
  const handleResetData = () => {
    if (window.confirm("Apakah Anda yakin ingin mengembalikan isi situs portfolio ini ke data bawaan semula? Semua suntingan lokal Anda akan dihapus.")) {
      setPersonalInfo(PERSONAL_INFO);
      setSkills(INITIAL_SKILLS);
      setProjects(INITIAL_PROJECTS);
      localStorage.removeItem("bagas_portfolio_info");
      localStorage.removeItem("bagas_portfolio_skills");
      localStorage.removeItem("bagas_portfolio_projects");
      setIsEditMode(false);
    }
  };

  // Copy raw JSON data capability to paste into code manually!
  const handleCopyJSON = () => {
    const aggregated = {
      personalInfo,
      skills,
      projects
    };
    navigator.clipboard.writeText(JSON.stringify(aggregated, null, 2));
    setCopiedData(true);
    setTimeout(() => setCopiedData(false), 2500);
  };

  return (
    <div id="portfolio-app-root" className="min-h-screen bg-zinc-950 text-gray-200 font-sans selection:bg-[#A259FF] selection:text-white">

      {/* Visual notification bar when in manual edit mode */}
      {isEditMode && (
        <div className="bg-[#A259FF] text-black text-xs font-mono font-bold py-2.5 px-4 fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between shadow-lg backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
            <span>Anda sedang berada di [MODE EDIT MANUAL]! Semua isian ganti di browser akan disimpan otomatis ke memory browser (localStorage).</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyJSON}
              className="px-3 py-1 bg-black text-white hover:bg-gray-900 rounded font-bold transition-all flex items-center gap-1 cursor-pointer"
              title="Salin semua data yang sudah Anda edit kedalam clipboard format JSON untuk Anda simpan manual ke data.ts"
            >
              {copiedData ? (
                <>
                  <Check size={11} className="text-emerald-400" />
                  <span>Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy size={11} />
                  <span>Salin Data JSON Kode</span>
                </>
              )}
            </button>
            <button
              onClick={() => setIsEditMode(false)}
              className="px-3 py-1 bg-white hover:bg-gray-100 text-black rounded font-bold cursor-pointer"
            >
              Selesai & Keluar
            </button>
          </div>
        </div>
      )}

      {/* Embedded top margin gap for active notification bar */}
      <div className={isEditMode ? "pb-0" : ""} />

      {/* Primary Navigation System */}
      <Navbar
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
        onResetData={handleResetData}
      />

      {/* Main Structural Layout sections */}
      <Hero
        personalInfo={personalInfo}
        isEditMode={isEditMode}
        onUpdateInfo={setPersonalInfo}
      />

      <Skills
        skills={skills}
        isEditMode={isEditMode}
        onUpdateSkills={setSkills}
      />

      <FigmaProjects
        projects={projects}
        isEditMode={isEditMode}
        onUpdateProjects={setProjects}
      />

      <Contact
        personalInfo={personalInfo}
        isEditMode={isEditMode}
        onUpdateInfo={setPersonalInfo}
      />

      {/* Elegant minimalist structural Footer */}
      <footer id="portfolio-footer" className="bg-zinc-950 border-t border-zinc-900 py-12 text-center text-xs font-mono text-gray-500 relative z-30 pb-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <FigmaIcon size={16} />
            <span className="text-gray-400 font-bold tracking-wider">BAGAS EKA PUTRA | PORTFOLIO</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <span>Dibuat dengan</span>
            <Heart size={10} className="text-red-500 fill-red-500 animate-pulse mx-0.5" />
            <span>untuk UI/UX Desainer, Berbasis Figma Workspace.</span>
          </div>
          <div className="text-gray-600 uppercase text-[10px] tracking-widest">
            © 2026 BAGAS. ALL RIGHTS RESERVED
          </div>
        </div>
      </footer>
    </div>
  );
}
