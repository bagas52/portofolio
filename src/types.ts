export interface Skill {
  name: string;
  category: "Design" | "Research" | "Tools" | "Process";
  level: number; // 0 to 100
  description?: string;
}

export interface FigmaProject {
  id: string;
  title: string;
  category: string;
  description: string;
  figmaUrl?: string; // Edit manually or paste Figma file URL
  embedUrl?: string; // Figma Live Embed URL
  coverImage?: string; // Image URL or abstract custom design svg
  certificateImage?: string; // Certificate/award image URL
  certificateTitle?: string; // Certificate title/description
  tags: string[];
  features: string[]; // Key features of the design
  process: {
    research?: string;
    wireframing?: string;
    testing?: string;
  };
  color: string; // Theme color for the project card (e.g. #F24E1E for figma orange)
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  tags?: string[];
}

