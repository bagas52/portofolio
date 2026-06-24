import React from "react";
import { FigmaProject } from "../types";
import { FigmaIcon } from "./FigmaIcon";
import {
  Plus, Trash2, Eye, ExternalLink, HelpCircle,
  Settings, Layers, BookOpen, Compass, RotateCcw
} from "lucide-react";
import { motion } from "motion/react";

interface FigmaProjectsProps {
  projects: FigmaProject[];
  isEditMode: boolean;
  onUpdateProjects: (updated: FigmaProject[]) => void;
}

export const FigmaProjects: React.FC<FigmaProjectsProps> = ({ projects, isEditMode, onUpdateProjects }) => {
  const [activeTabs, setActiveTabs] = React.useState<Record<string, "overview" | "process" | "features">>({});
  const [showFigmaHelp, setShowFigmaHelp] = React.useState(false);

  const getActiveTab = (projectId: string) => {
    return activeTabs[projectId] || "overview";
  };

  const setActiveTab = (projectId: string, tab: "overview" | "process" | "features") => {
    setActiveTabs({
      ...activeTabs,
      [projectId]: tab
    });
  };

  const handleProjectChange = (id: string, field: keyof FigmaProject | string, value: any) => {
    const updated = projects.map(p => {
      if (p.id === id) {
        if (field.startsWith("process.")) {
          const processField = field.split(".")[1];
          return {
            ...p,
            process: {
              ...p.process,
              [processField]: value
            }
          };
        }
        return { ...p, [field]: value };
      }
      return p;
    });
    onUpdateProjects(updated);
  };

  const handleCreateProject = () => {
    const newId = `project-${Date.now()}`;
    const newProject: FigmaProject = {
      id: newId,
      title: "Judul Case Study Baru",
      category: "Kategori Desain (misal: Mobile App)",
      description: "Tuliskan deskripsi singkat tantangan desain dan bagaimana solusi visual Anda dirancang.",
      figmaUrl: "https://www.figma.com/file/placeholder",
      embedUrl: "", // Kosong, siap diedit
      tags: ["UI/UX", "Workspace", "Figma Template"],
      features: [
        "Fitur Utama 1 yang inovatif.",
        "Fitur Utama 2 berbasis riset."
      ],
      process: {
        research: "Kami mensurvei calon pengguna dan menemukan poin hambatan utama.",
        wireframing: "Membuat wireframe lo-fi untuk merancang tata letak dan navigasi.",
        testing: "Melakukan pengujian langsung menggunakan prototype Figma interaktif."
      },
      color: "#A259FF" // Default ungu figma
    };
    onUpdateProjects([...projects, newProject]);
  };

  const handleDeleteProject = (id: string) => {
    const updated = projects.filter(p => p.id !== id);
    onUpdateProjects(updated);
  };

  return (
    <section id="projects" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#18A2F2] blur-[100px]" />
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-[#FF7262] blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="font-mono text-xs text-[#A259FF] uppercase tracking-widest block mb-2">My UI/UX Case Study</span>
            <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-white tracking-tight">
              Figma Case Study & Project
            </h2>
          </div>
          <div className="mt-4 md:mt-0 max-w-sm">
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Template studi kasus interaktif. Anda bisa mengedit isinya secara langsung atau menempelkan link embed prototipe Figma Anda.
            </p>
          </div>
        </div>

        {/* Edit mode toolbar */}
        <div className="mb-12 flex flex-wrap gap-4 items-center justify-between p-4 rounded-xl bg-gray-900/30 border border-gray-800/80">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-gray-800/60 text-[#A259FF]">
              <Settings size={18} />
            </span>
            <div>
              <h3 className="text-xs font-mono font-semibold text-white leading-none mb-1">PROTOTYPE MANAGER</h3>
              <p className="text-[11px] text-gray-500 font-mono">
                {isEditMode ? "Ubah isian di setiap kartu untuk menyunting data!" : "Aktifkan 'Mode Edit' untuk menulis studi kasus Anda sendiri!"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFigmaHelp(!showFigmaHelp)}
              className="px-3 py-1.5 rounded-lg text-xs font-mono text-gray-400 hover:text-white bg-gray-900 border border-gray-800 flex items-center gap-1 cursor-pointer"
            >
              <HelpCircle size={13} />
              <span>Cara Embed Figma</span>
            </button>

            {isEditMode && (
              <button
                onClick={handleCreateProject}
                className="px-4 py-1.5 rounded-lg text-xs font-mono text-black font-bold bg-[#A259FF] hover:bg-[#8f47ec] transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Plus size={14} />
                <span>Buat Template Baru</span>
              </button>
            )}
          </div>
        </div>

        {/* Figma Help Tutorial Modal Dialog style */}
        {showFigmaHelp && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 p-5 rounded-xl bg-[#12131a] border border-[#A259FF]/30 text-sm text-gray-300 font-sans relative"
          >
            <button
              onClick={() => setShowFigmaHelp(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white"
            >
              ✕
            </button>
            <h4 className="text-[#A259FF] font-bold mb-3 flex items-center gap-2">
              <FigmaIcon size={14} />
              <span>Cara Melakukan Live Embed Prototipe Figma Anda:</span>
            </h4>
            <ol className="list-decimal pl-5 space-y-2 text-xs leading-relaxed text-gray-400">
              <li>Buka file desain atau prototipe interaktif Anda di <strong>Figma Desktop / Browser</strong>.</li>
              <li>Klik tombol <strong>Share</strong> di kanan atas halaman Figma.</li>
              <li>Pilih opsi <strong>Get Embed Code</strong> (jika tidak terlihat, pastikan file memiliki akses 'Anyone with link can view').</li>
              <li>Figma akan memberikan kode HTML iframe. Anda hanya perlu menyalin tautan di dalam attribut <code className="text-gray-200">src="..."</code>-nya saja. Tautan tersebut memiliki format seperti: <br />
                <span className="p-1.5 bg-gray-950 rounded text-[#18A2F2] block overflow-x-auto mt-1 font-mono">
                  https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F...
                </span>
              </li>
              <li>Nyalakan <strong>Mode Edit</strong> di website ini, lalu tempelkan link ter-encode tersebut pada kotak isian "Figma Embed URL". Website kami akan otomatis menampilkan frame interaktif Figma Anda secara langsung!</li>
            </ol>
          </motion.div>
        )}

        {/* Projects Cards List */}
        <div className="space-y-16">
          {projects.map((project, index) => {
            const currentTab = getActiveTab(project.id);
            const cardThemeColor = project.color || "#A259FF";

            return (
              <React.Fragment key={project.id}>
                <div
                  id={`figma-project-section-${project.id}`}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-zinc-900/15 backdrop-blur-md rounded-[2.5rem] border border-zinc-900 p-6 lg:p-10 hover:border-zinc-800 hover:bg-zinc-900/25 transition-all duration-300 shadow-lg relative overflow-hidden"
                >
                  {/* Visual Preview / Cover Column (Figma Iframe Embed or Aesthetic Mockup Canvas) */}
                  <div className="lg:col-span-6 flex flex-col justify-between">
                    <div className="relative rounded-2xl overflow-hidden border border-gray-900 bg-gray-950/70 aspect-[4/3] flex flex-col items-center justify-center group/cover">
                      {/* Live Iframe Embed representation */}
                      {project.embedUrl ? (
                        <iframe
                          src={project.embedUrl}
                          className="w-full h-full border-0 absolute inset-0 rounded-2xl bg-[#1e1e1e]"
                          allowFullScreen
                          referrerPolicy="no-referrer"
                          title={project.title}
                        />
                      ) : (
                        // Gorgeous CSS Mockup Placeholder representing beautiful unfilled design
                        <div className="absolute inset-0 p-6 flex flex-col justify-between overflow-hidden">
                          {/* Decorative Grid backdrop */}
                          <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px]" />

                          {/* Graphic mock elements */}
                          <div className="flex justify-between items-center z-10 w-full">
                            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest bg-gray-900/80 px-2 py-1 rounded border border-gray-800">
                              Figma Canvas Template
                            </span>
                            <div className="flex gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
                              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
                            </div>
                          </div>

                          {/* Huge Abstract Layout Icon representation with project's color theme */}
                          <div className="relative my-auto flex flex-col items-center z-10 gap-3">
                            <div
                              className="w-16 h-16 rounded-2xl flex items-center justify-center transform group-hover/cover:scale-110 duration-500 shadow-lg border border-white/5"
                              style={{
                                backgroundColor: `${cardThemeColor}15`,
                                color: cardThemeColor,
                                boxShadow: `0 8px 30px ${cardThemeColor}10`
                              }}
                            >
                              <FigmaIcon size={32} />
                            </div>
                            <span className="text-xs text-center font-mono font-bold text-gray-300">
                              Frame Live Figma Kosong
                            </span>
                            <span className="text-[10px] text-center font-mono max-w-xs text-gray-550 leading-relaxed">
                              Aktifkan Mode Edit dan tempel URL embed Figma untuk menyematkan prototipe yang bisa diklik langsung!
                            </span>
                          </div>

                          {/* Miniature layout footer */}
                          <div className="flex items-center justify-between text-[8px] font-mono text-gray-600 z-10 mt-auto">
                            <span>W: 1920px | H: 1080px</span>
                            <span className="flex items-center gap-1 text-gray-400">
                              <Eye size={10} style={{ color: cardThemeColor }} />
                              <span>Preview Mode</span>
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Left overlay badge matching the project color */}
                      <div
                        className="absolute top-4 left-4 h-6 w-1 rounded-full z-20"
                        style={{ backgroundColor: cardThemeColor }}
                      />
                    </div>

                    {/* Customizable project primary color selection (Edit Mode Only) */}
                    {isEditMode && (
                      <div className="mt-4 p-3 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-between z-10">
                        <span className="text-xs font-mono text-gray-400">Pilih Tema Warna Kartu:</span>
                        <div className="flex gap-2">
                          {["#A259FF", "#0ACF83", "#FF7262", "#18A2F2", "#F24E1E", "#FFB020"].map(col => (
                            <button
                              key={col}
                              onClick={() => handleProjectChange(project.id, "color", col)}
                              className={`w-6 h-6 rounded-full border transition-transform ${project.color === col ? "scale-115 border-white" : "border-transparent hover:scale-105"
                                }`}
                              style={{ backgroundColor: col }}
                              title={col}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Case Study Details Column */}
                  <div className="lg:col-span-6 flex flex-col justify-between">
                    <div>
                      {/* Header: Category & Title */}
                      <div className="flex wrap gap-2 items-center mb-3">
                        {isEditMode ? (
                          <input
                            type="text"
                            value={project.category}
                            onChange={(e) => handleProjectChange(project.id, "category", e.target.value)}
                            className="bg-[#12131a] text-xs font-mono font-semibold tracking-wider text-gray-400 uppercase border border-gray-750 px-2 py-0.5 rounded w-full"
                          />
                        ) : (
                          <span
                            className="text-xs font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-gray-900 border border-gray-800/80"
                            style={{ color: cardThemeColor }}
                          >
                            {project.category}
                          </span>
                        )}
                      </div>

                      {isEditMode ? (
                        <input
                          type="text"
                          value={project.title}
                          onChange={(e) => handleProjectChange(project.id, "title", e.target.value)}
                          className="w-full text-2xl lg:text-3xl font-sans font-extrabold bg-[#12131a] text-white border border-[#A259FF]/50 rounded px-3 py-1.5 mb-3 focus:outline-none"
                        />
                      ) : (
                        <h3 className="text-2xl lg:text-3xl font-sans font-extrabold text-white mb-3 tracking-tight">
                          {project.title}
                        </h3>
                      )}

                      {/* Customizable Tags */}
                      {isEditMode ? (
                        <div className="space-y-1.5 mb-4">
                          <label className="block text-[10px] font-mono text-gray-550">TAGS (PISAH DENGAN KOMA):</label>
                          <input
                            type="text"
                            value={project.tags.join(", ")}
                            onChange={(e) => handleProjectChange(project.id, "tags", e.target.value.split(",").map(t => t.trim()))}
                            className="w-full text-xs font-mono bg-[#12131a] border border-gray-700 rounded px-2 py-1 text-gray-300"
                          />
                        </div>
                      ) : (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map(t => (
                            <span
                              key={t}
                              className="text-[10px] font-mono bg-[#12131a] px-2.5 py-1 rounded text-gray-400 border border-gray-900"
                            >
                              #{t}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Interactive Tab navigation for Case Study info */}
                      <div className="flex border-b border-gray-905 mb-5 text-sm font-mono font-medium">
                        <button
                          onClick={() => setActiveTab(project.id, "overview")}
                          className={`pb-2 px-3 border-b-2 transition-colors cursor-pointer ${currentTab === "overview"
                            ? "text-white"
                            : "text-gray-550 border-transparent hover:text-gray-300"
                            }`}
                          style={{ borderColor: currentTab === "overview" ? cardThemeColor : "transparent" }}
                        >
                          Penjelasan
                        </button>
                        <button
                          onClick={() => setActiveTab(project.id, "features")}
                          className={`pb-2 px-3 border-b-2 transition-colors cursor-pointer ${currentTab === "features"
                            ? "text-white"
                            : "text-gray-550 border-transparent hover:text-gray-300"
                            }`}
                          style={{ borderColor: currentTab === "features" ? cardThemeColor : "transparent" }}
                        >
                          Fitur Utama
                        </button>
                        <button
                          onClick={() => setActiveTab(project.id, "process")}
                          className={`pb-2 px-3 border-b-2 transition-colors cursor-pointer ${currentTab === "process"
                            ? "text-white"
                            : "text-gray-550 border-transparent hover:text-gray-300"
                            }`}
                          style={{ borderColor: currentTab === "process" ? cardThemeColor : "transparent" }}
                        >
                          Proses Desain
                        </button>
                      </div>

                      {/* Tab contents */}
                      <div className="min-h-[140px] text-sm text-gray-400 leading-relaxed font-sans font-light">
                        {currentTab === "overview" && (
                          <div className="space-y-3">
                            {isEditMode ? (
                              <textarea
                                value={project.description}
                                rows={4}
                                onChange={(e) => handleProjectChange(project.id, "description", e.target.value)}
                                className="w-full text-xs font-sans bg-[#12131a] border border-gray-700 rounded px-2 py-1 text-gray-300"
                                placeholder="Ketikkan ringkasan proyek..."
                              />
                            ) : (
                              <p>{project.description}</p>
                            )}
                          </div>
                        )}

                        {currentTab === "features" && (
                          <div className="space-y-2">
                            {isEditMode ? (
                              <div className="space-y-1.5 focus:outline-none">
                                <label className="block text-[10px] font-mono text-gray-550">FITUR UTAMA (SATU PER BARIS):</label>
                                <textarea
                                  value={project.features.join("\n")}
                                  rows={3}
                                  onChange={(e) => handleProjectChange(project.id, "features", e.target.value.split("\n"))}
                                  className="w-full text-xs font-sans bg-[#12131a] border border-gray-700 rounded px-2 py-1 text-gray-300"
                                />
                              </div>
                            ) : (
                              <ul className="space-y-2.5">
                                {project.features.map((feat, fIdx) => (
                                  <li key={`feature-${project.id}-${fIdx}`} className="flex gap-2 items-start">
                                    <span style={{ color: cardThemeColor }} className="font-bold font-mono">✓</span>
                                    <span>{feat}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        )}

                        {currentTab === "process" && (
                          <div className="space-y-4">
                            <div className="grid grid-cols-1 gap-3.5 text-xs">
                              {/* Research Phase */}
                              <div>
                                <span className="font-mono text-[10px] uppercase font-bold text-gray-500 block mb-0.5">1. User Research</span>
                                {isEditMode ? (
                                  <input
                                    type="text"
                                    value={project.process.research || ""}
                                    onChange={(e) => handleProjectChange(project.id, "process.research", e.target.value)}
                                    className="w-full text-xs bg-[#12131a] border border-gray-700 rounded p-1 text-gray-300"
                                  />
                                ) : (
                                  <p className="text-gray-400 font-light">{project.process.research || "Ditangguhkan untuk melengkapi wireframe."}</p>
                                )}
                              </div>

                              {/* Wireframe Phase */}
                              <div>
                                <span className="font-mono text-[10px] uppercase font-bold text-gray-500 block mb-0.5">2. Wireframing & Layout Structure</span>
                                {isEditMode ? (
                                  <input
                                    type="text"
                                    value={project.process.wireframing || ""}
                                    onChange={(e) => handleProjectChange(project.id, "process.wireframing", e.target.value)}
                                    className="w-full text-xs bg-[#12131a] border border-gray-700 rounded p-1 text-gray-300"
                                  />
                                ) : (
                                  <p className="text-gray-400 font-light">{project.process.wireframing || "Merancang wireframe lo-fi modular."}</p>
                                )}
                              </div>

                              {/* Testing Phase */}
                              <div>
                                <span className="font-mono text-[10px] uppercase font-bold text-gray-500 block mb-0.5">3. Usability Testing</span>
                                {isEditMode ? (
                                  <input
                                    type="text"
                                    value={project.process.testing || ""}
                                    onChange={(e) => handleProjectChange(project.id, "process.testing", e.target.value)}
                                    className="w-full text-xs bg-[#12131a] border border-gray-700 rounded p-1 text-gray-300"
                                  />
                                ) : (
                                  <p className="text-gray-400 font-light">{project.process.testing || "Melakukan feedback loop ke panel pengguna."}</p>
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Actions (Figma Link inputs and direct redirection Buttons) */}
                    <div className="mt-8 pt-4 border-t border-gray-905 flex flex-wrap gap-4 items-center">
                      {isEditMode ? (
                        <div className="w-full space-y-3">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[10px] font-mono text-gray-550 mb-1">FIGMA LINK (PROFIL/FILE):</label>
                              <input
                                type="text"
                                value={project.figmaUrl || ""}
                                onChange={(e) => handleProjectChange(project.id, "figmaUrl", e.target.value)}
                                className="w-full text-xs font-mono bg-[#12131a] border border-gray-700 rounded px-2.5 py-1.5 text-white"
                                placeholder="https://figma.com/file/..."
                              />
                            </div>
                            <div>
                              <label className="block text-[10px] font-mono text-gray-550 mb-1">FIGMA EMBED URL (IFRAME SRC):</label>
                              <input
                                type="text"
                                value={project.embedUrl || ""}
                                onChange={(e) => handleProjectChange(project.id, "embedUrl", e.target.value)}
                                className="w-full text-xs font-mono bg-[#12131a] border border-gray-700 rounded px-2.5 py-1.5 text-[#0ACF83]"
                                placeholder="https://embed.figma.com/proto/sevtbxGP1TLYHr4bzsRb4r/Allinol?node-id=685-5305&viewport=-197%2C728%2C0.11&scaling=scale-down&content-scaling=fixed&starting-point-node-id=685%3A5330&show-proto-sidebar=1&page-id=121%3A62&embed-host=share"
                              />
                            </div>
                          </div>

                          <button
                            onClick={() => handleDeleteProject(project.id)}
                            className="px-3 py-1.5 flex items-center justify-center gap-1 bg-red-950/10 text-red-500 border border-red-900 rounded-lg text-xs font-mono hover:bg-red-950/40 w-full md:w-auto"
                          >
                            <Trash2 size={13} />
                            <span>Hapus Template Proyek Ini</span>
                          </button>
                        </div>
                      ) : (
                        <>
                          <a
                            href={project.figmaUrl || "https://figma.com"}
                            target="_blank"
                            rel="no-referrer"
                            className="px-4 py-2.5 rounded-lg text-xs font-mono font-semibold text-black bg-white hover:bg-gray-100 transition-colors flex items-center gap-1.5 shadow"
                          >
                            <FigmaIcon size={12} />
                            <span>Buka File Figma</span>
                            <ExternalLink size={10} />
                          </a>

                          <div className="text-xs text-gray-500 font-mono">
                            Template ID: <span className="text-gray-400 font-bold">{project.id}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Certificate Section - Display below project */}
                <div className="w-full mt-8 pt-8 border-t border-zinc-900">
                  <div className="space-y-3">
                    {project.certificateTitle && (
                      <div className="flex items-center gap-2 mb-4">
                        <span
                          className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-gray-900 border border-gray-800"
                          style={{ color: cardThemeColor }}
                        >
                          🏆 Penghargaan
                        </span>
                        <p className="text-sm font-sans text-gray-300">{project.certificateTitle}</p>
                      </div>
                    )}
                    <div className="relative rounded-2xl overflow-hidden border border-gray-800 bg-gray-950/50 shadow-lg hover:border-gray-700 transition-all duration-300">
                      <img
                        src={project.certificateImage || "allinol-certificate.jpg"}
                        alt={project.certificateTitle || "Project Certificate"}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};
